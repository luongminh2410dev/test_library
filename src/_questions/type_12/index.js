import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const WORD_WIDTH = 15;
const SentenceEditor = (props) => {
    const { item, index, updateAnswers, correct_options } = props;
    const defaultValue = correct_options ? correct_options.find(it => it.id == item.id)?.answer : '';

    const onChangeText = (text) => {
        updateAnswers(item.id, text)
    }

    return (
        <TextInput
            defaultValue={defaultValue}
            onChangeText={onChangeText}
            style={[styles.sentence_editor, { width: WORD_WIDTH * item.width }]} />
    )
}

const Options = (props) => {
    const { question, customStyles, onAnswer } = props;

    const { textColor = '#000000' } = customStyles;
    const { options } = question;

    const refAnswers = useRef({});

    const _renderSentenceItem = (item, index) => {
        switch (item.obj_type) {
            case 'richText':
                return item.option_content.map((it, idx) => (
                    <HtmlContent key={`${index}_${idx}`} content={it.content} color={textColor} />
                ))
            case 'inputText':
                return <SentenceEditor key={index} item={item} updateAnswers={updateAnswers} />
            case 'breakDown':
                return <View key={index} style={{ width: '100%' }} />;
        }
    }

    const updateAnswers = (id, answer) => {
        answer.trim() != '' ?
            refAnswers.current[id] = answer
            :
            delete refAnswers.current[id];
        onAnswer(
            refAnswers.current,
            Object.keys(refAnswers.current).length == options.filter(it => it.obj_type == 'inputText').length
        )
    }

    return (
        <View style={styles.option_container}>
            {options.map(_renderSentenceItem)}
        </View>
    )
}

const Result = (props) => {
    const { options, correct_options, customStyles } = props;
    const { textColor = '#000000' } = customStyles;

    const _renderResult = (item, index) => {
        switch (item.obj_type) {
            case 'richText':
                return item.content.map((it, idx) => (
                    <HtmlContent key={`${index}_${idx}`} content={it.content} color={textColor} />
                ))
            case 'inputText':
                return <SentenceEditor
                    key={index}
                    item={item}
                    correct_options={correct_options} />
            case 'breakDown':
                return <View key={index} style={{ width: '100%' }} />;
        }
    }

    return (
        <View style={styles.correct_result} pointerEvents='none'>
            {options.map(_renderResult)}
        </View>
    )
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