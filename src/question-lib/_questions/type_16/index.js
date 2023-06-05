import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import { FracView, InputText, getParentRegex } from '../../components/latexs';
import styles from './styles';

const getChildsOfFrac = (string) => {
    const childRegex = /\\([a-zA-Z]+)((?:\{[^{}]*\})+)/g;
    const childRegex2 = /\\([a-zA-Z]+)\{(\w+)?\}\{(\w+)?\}/g;

    let match;
    const childs = [];
    while ((match = childRegex.exec(string)) != null) {
        if (match.index == 0) {
            while ((match = childRegex2.exec(string)) != null) {
                childs.push(match[2])
                match[3] && childs.push(match[3])
            }
            break;
        }
        else {
            childs.push(match[0])
        }
    }
    const regex = /\\.*?\{.*?\}\{(\w+)\}/;
    if (!childs[1]) {
        const matchChild = regex.exec(string)
        childs.push(matchChild ? matchChild[1] : '')
    }
    return childs;
}

const MathQuillItem = (props) => {
    const { item, index, initAnswers, updateAnswers, correct_options } = props;
    const parent = getParentRegex.exec(item);
    if (parent) {
        switch (parent[1]) {
            case 'frac':
                const childs = getChildsOfFrac(item);
                return (
                    <FracView
                        numerator={childs[0]}
                        denominator={childs[1]}
                        initAnswers={initAnswers}
                        textStyle={styles.mathquill_text}
                        updateAnswers={updateAnswers}
                        correct_options={correct_options} />
                )
            case 'inputText':
                return (
                    <View style={{ marginRight: 4, marginBottom: 12 }}>
                        <InputText
                            content={item}
                            initAnswers={initAnswers}
                            updateAnswers={updateAnswers}
                            correct_options={correct_options}
                        />
                    </View>
                )
            default:
                return;
        }
    }
    return <Text key={index} style={styles.mathquill_text}>{item}</Text>
}

const Options = (props) => {
    const { question, onAnswer, initAnswers } = props;
    const { mathquill } = question;
    const refAnswers = useRef(initAnswers || {});
    const sizeOfInput = (
        mathquill
            .reduce((pre, cur) => {
                return pre + cur.content;
            }, '')
            .match(/inputText/g) || []
    ).length;

    const _renderMathquillRow = (item, index) => {
        const mathquills = item.content.split(/\s?(\+|\-|\*|\/|\(|\)|\=)\s?/).filter(i => i.trim() != '')

        const _renderMathquillItem = (it, idx) => (
            <MathQuillItem
                key={idx}
                item={it}
                index={idx}
                initAnswers={initAnswers}
                updateAnswers={updateAnswers}
            />
        )

        return (
            <View key={index} style={styles.mathquill_row}>
                {mathquills.map(_renderMathquillItem)}
            </View>
        );
    }

    const updateAnswers = (id, answer) => {
        answer ?
            refAnswers.current[id] = answer
            :
            delete refAnswers.current[id];
        onAnswer(refAnswers.current, Object.keys(refAnswers.current).length == sizeOfInput)
    }

    return mathquill.map(_renderMathquillRow)
}

const Result = (props) => {
    const { mathquill, correct_options } = props;

    const _renderResult = (item, index) => {
        const mathquills = item.content.split(/\s?(\+|\-|\*|\/|\(|\)|\=)\s?/).filter(i => i.trim() != '')

        const _renderMathquillItem = (it, idx) => (
            <MathQuillItem
                key={idx}
                item={it}
                index={idx}
                correct_options={correct_options}
            />
        )

        return (
            <View key={index} style={styles.mathquill_row}>
                {mathquills.map(_renderMathquillItem)}
            </View>
        );
    }

    return mathquill.map(_renderResult)
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