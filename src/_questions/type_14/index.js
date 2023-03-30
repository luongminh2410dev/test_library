import React, { useCallback, useRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { FracView, NTimes, regex } from '../../components/latexs';
import styles from './styles';

const SplitInput = (props) => {
    const { data, inputStyle, updateAnswers } = props;
    const refAnswer = useRef([]).current;
    const refInputs = useRef([]).current;
    const dataParser = regex.exec(data);

    const _renderInputItem = (item, index) => {
        const onKeyPress = ({ nativeEvent: { key } }) => {
            if (key == 'Backspace') {
                index != 0 && !refAnswer[index] && refInputs[index - 1].focus()
            }
            else {
                index + 1 < dataParser[3].length && refInputs[index + 1].focus();
            }
        }

        const onChangeText = (text) => {
            refAnswer.splice(index, 1, text);
            updateAnswers(`${dataParser[1]}_${dataParser[2]}`, refAnswer.join(''))
        }

        return (
            <TextInput
                ref={ref => refInputs[index] = ref}
                key={index}
                maxLength={1}
                selectTextOnFocus
                keyboardType='number-pad'
                onKeyPress={onKeyPress}
                onChangeText={onChangeText}
                style={[styles.split_input_item, inputStyle]}
            />
        )
    }

    return (
        <View style={styles.split_input}>
            {dataParser[3].split('').map(_renderInputItem)}
        </View>
    )
}

const getLatexContent = (target) => {
    const regex = /\\[a-zA-Z]+((?:\{[^{}]*\})+)/g;
    const content = [];
    let match;

    while ((match = regex.exec(target)) != null) {
        content.push(match[0])
    }
    return content;
}
const Options = (props) => {
    const { question, onAnswer } = props;
    const { mathquill } = question;
    const refAnswers = useRef({});

    const _renderMathquillItem = (item, index) => {
        const content = getLatexContent(item.content);

        const numerator = () => <NTimes content={content[0]} />

        const denominator = useCallback(() => (
            <SplitInput
                data={content[1]}
                updateAnswers={updateAnswers}
            />
        ), [])

        return (
            <FracView
                key={index}
                numerator={numerator}
                denominator={denominator}
                textStyle={styles.mathquill_text} />
        )
    }

    const updateAnswers = (id, answer) => {
        answer ?
            refAnswers.current[id] = answer
            :
            delete refAnswers.current[id];
        onAnswer(refAnswers.current, Object.keys(refAnswers.current).length > 0)
    }

    return (
        <View style={styles.mathquill}>
            {mathquill.map(_renderMathquillItem)}
        </View>
    )
}

const Result = (props) => {
    const { mathquill, correct_options } = props;
    const _renderResult = (item, index) => {
        const content = getLatexContent(item.content);

        const numerator = () => <NTimes content={content[0]} />

        const denominator = () => (
            <View style={styles.split_input}>
                {correct_options[0].answer.split('').map((it, idx) => (
                    <View key={idx} style={styles.split_input_item}>
                        <Text style={styles.split_input_txt}>{it}</Text>
                    </View>
                ))}
            </View>
        )

        return (
            <FracView
                key={index}
                numerator={numerator}
                denominator={denominator}
                textStyle={styles.mathquill_text} />
        )
    }

    return (
        <View style={styles.result}>
            {mathquill.map(_renderResult)}
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