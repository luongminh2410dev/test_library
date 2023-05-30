import React, { useRef, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import HtmlContent from '../../components/html-content';
import styles from './styles';


const OptionItem = (props) => {
    const { item, index, textColor, updateAnswers, correct_options } = props;
    const [isActive, setActive] = useState(() => {
        if (correct_options) {
            return correct_options.find(it => {
                return it.id == item.id
            })?.answer;
        }
        return false;
    });

    const _renderContent = (it, idx) => {
        switch (it.type) {
            case 'html':
                return <HtmlContent key={idx} content={it.content} color={textColor} />
            case 'image':
                return (
                    <Image
                        key={idx}
                        resizeMode='contain'
                        style={{ width: parseInt(it.width), height: parseInt(it.height) }}
                        source={{ uri: it.url }} />
                )
        }
    }

    const toggleCheckbox = () => {
        setActive(!isActive)
        updateAnswers(item.id, !isActive);
    }

    return (
        <TouchableOpacity
            onPress={toggleCheckbox}
            style={styles.option_item}>
            <View style={[styles.checkbox, isActive && styles.checkbox_active]}>
                <Entypo name='check' size={20} color='#6dae41' style={{ opacity: isActive ? 1 : 0 }} />
            </View>
            {item.option_content.map(_renderContent)}
        </TouchableOpacity>
    )
}

const Options = (props) => {
    const { question, customStyles, onAnswer } = props;
    const { textColor = '#000000' } = customStyles;
    const { options } = question;
    const refAnswers = useRef({});

    const _renderOptionItem = (item, index) => (
        <OptionItem
            key={index}
            item={item}
            index={index}
            textColor={textColor}
            updateAnswers={updateAnswers} />
    )

    const updateAnswers = (id, answer) => {
        answer ?
            refAnswers.current[id] = answer
            :
            delete refAnswers.current[id];
        onAnswer(refAnswers.current, Object.keys(refAnswers.current).length > 0)
    }

    return options.map(_renderOptionItem)
}

const Result = (props) => {
    const { options, correct_options, customStyles } = props;
    const { textColor = '#000000' } = customStyles;

    const _renderResult = (item, index) => (
        <OptionItem
            key={index}
            item={item}
            index={index}
            textColor={textColor}
            correct_options={correct_options} />
    )

    return options.map(_renderResult)
}

const compareAnswer = (answers, correct_options) => {
    return !correct_options.find(item => {
        return item.answer != (!!answers[item.id]);
    })
}

export default {
    Options,
    Result,
    compareAnswer
}