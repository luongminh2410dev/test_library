import React, { useRef, useState } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const QuestionItem = (props) => {
    const { item, index, initValue, customStyles, onChooseSelection, correctOptions } = props;
    const { primaryColor, textColor } = customStyles;
    const [selection, setSelection] = useState(() => {
        if (correctOptions) {
            const getItem = correctOptions.find(it => it.id == item.id);
            return getItem.answer ? 0 : 1;
        }
        switch (initValue) {
            case true: return 0;
            case false: return 1;
            default: return -1;
        }
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

    const onFirstCheckboxPress = () => {
        onChooseSelection(item.id, selection == 0 ? null : true)
        setSelection(selection == 0 ? -1 : 0);
    }

    const onSecondCheckboxPress = () => {
        onChooseSelection(item.id, selection == 1 ? null : false)
        setSelection(selection == 1 ? -1 : 1)
    }

    return (
        <View style={styles.question_item}>
            <View style={styles.item_content}>
                {item.option_content.map(_renderContent)}
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={onFirstCheckboxPress}
                    style={[
                        styles.checkbox,
                        selection == 0 && styles.checkbox_active
                    ]}>
                    <Entypo name='check' size={20} color={primaryColor} style={{ opacity: selection == 0 ? 1 : 0 }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onSecondCheckboxPress}
                    style={[styles.checkbox, selection == 1 && styles.checkbox_active]}>
                    <Entypo name='check' size={20} color={primaryColor} style={{ opacity: selection == 1 ? 1 : 0 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Options = (props) => {
    const { question, customStyles, onAnswer, initAnswers } = props;
    const { options } = question;

    const refSelected = useRef(initAnswers || {});

    const _renderQuestionItem = (item, index) => (
        <QuestionItem
            key={index}
            item={item}
            index={index}
            initValue={initAnswers?.[item.id]}
            customStyles={customStyles}
            onChooseSelection={onChooseSelection}
        />
    )

    const onChooseSelection = (id, answer) => {
        answer == null ?
            delete refSelected.current[id]
            :
            refSelected.current[id] = answer;
        onAnswer(
            refSelected.current,
            Object.keys(refSelected.current).length == options.length
        )
    }

    return (
        <>
            <View style={styles.row}>
                <View style={{ flex: 1, }} />
                <View style={styles.row}>
                    <Text style={styles.col_title}>T</Text>
                    <Text style={styles.col_title}>F</Text>
                </View>
            </View>
            {options.map(_renderQuestionItem)}

        </>
    )
}

const Result = (props) => {
    const { options, correct_options, customStyles } = props;

    const _renderResult = (item, index) => (
        <QuestionItem
            key={index}
            item={item}
            index={index}
            customStyles={customStyles}
            correctOptions={correct_options}
        />
    )

    return options.map(_renderResult)
}

const compareAnswer = (answers, correct_options) => {
    return !correct_options.find(item => {
        return item.answer != answers[item.id];
    })
}

export default {
    Options,
    Result,
    compareAnswer
}