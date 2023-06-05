import React, { useRef, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const SentenceItem = (props) => {
    const { item, index, initValue, customStyles, onChooseSelection, correctOptions } = props;
    const { textColor } = customStyles;
    const [isSelected, setSelected] = useState(() => {
        if (correctOptions) {
            const getItem = correctOptions.find(it => it.id == item.id);
            return !!getItem?.answer;
        }
        return initValue;
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

    const onPress = () => {
        setSelected(!isSelected);
        onChooseSelection(item.id, !isSelected);
    }
    switch (item.obj_type) {
        case 'breakDown':
            return <View key={index} style={{ width: '100%', height: 8 }} />;
        default:
            return (
                <TouchableOpacity
                    onPress={onPress}
                    key={index}
                    style={[styles.sentence_item, isSelected && styles.sentence_item_active]}>
                    {item.option_content.map(_renderContent)}
                </TouchableOpacity>
            )
    }
}

const Options = (props) => {
    const { question, customStyles, onAnswer, initAnswers } = props;
    const { options } = question;
    const refSelected = useRef(initAnswers || {});

    const _renderSentenceItem = (item, index) => (
        <SentenceItem
            key={index}
            item={item}
            index={index}
            initValue={initAnswers[item.id] || false}
            customStyles={customStyles}
            onChooseSelection={onChooseSelection}
        />
    )

    const onChooseSelection = (id, answer) => {
        answer ?
            refSelected.current[id] = answer
            :
            delete refSelected.current[id];
        onAnswer(refSelected.current, Object.keys(refSelected.current).length > 0)
    }

    return (
        <View style={styles.option_container}>
            {options.map(_renderSentenceItem)}
        </View>
    )
}

const Result = (props) => {
    const { options, correct_options, customStyles } = props;

    const _renderResult = (item, index) => (
        <SentenceItem
            key={index}
            item={item}
            index={index}
            customStyles={customStyles}
            correctOptions={correct_options}
        />
    )

    return (
        <View style={styles.option_container}>
            {options.map(_renderResult)}
        </View>
    )
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