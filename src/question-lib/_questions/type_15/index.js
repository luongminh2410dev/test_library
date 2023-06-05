import React, { useRef } from 'react';
import { Dimensions, Text, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const SHAFT_NUMBER_WIDTH = width - 24;
const ITEMS_PER_ROW = width > 600 ? 10 : (width > 350 ? 7 : 6);
const POINT_DISTANCE = SHAFT_NUMBER_WIDTH / ITEMS_PER_ROW;
const PointItem = (props) => {
    const { item, index, initValue, customStyles, updateAnswers } = props;
    const { primaryColor, textColor } = customStyles;
    const offsetX = index * POINT_DISTANCE;

    const onChangeText = (text) => {
        updateAnswers(item.id, text)
    }

    return (
        <View style={[styles.point_item, { width: POINT_DISTANCE, left: offsetX }]}>
            <View style={[styles.point_beacon, { backgroundColor: textColor }]} />
            <View style={styles.point_border}>
                {
                    item.obj_type == 'inputText' ?
                        <TextInput
                            defaultValue={initValue}
                            onChangeText={onChangeText}
                            keyboardType='decimal-pad'
                            style={[styles.point_content, { backgroundColor: '#f2ead8' }]} />
                        :
                        <Text style={styles.point_content}>{item.content}</Text>
                }
            </View>
        </View>
    )
}

const Options = (props) => {
    const { question, customStyles, onAnswer, initAnswers } = props;
    const { textColor } = customStyles;
    const { options } = question;
    const lines = new Array(Math.ceil(options.length / ITEMS_PER_ROW)).fill(null);
    const refAnswers = useRef(initAnswers || {});

    const _renderShaftNumber = (item, index) => {
        const isLastLine = (index + 1) == lines.length;
        const items = options.slice(index * ITEMS_PER_ROW, ITEMS_PER_ROW * (index + 1));
        const shaftWidth = options.length <= ITEMS_PER_ROW ?
            '100%'
            :
            `${(items.length / ITEMS_PER_ROW) * 100}%`;
        return (
            <View
                key={index}
                style={[
                    styles.shaft_number,
                    isLastLine && { width: shaftWidth }
                ]}>
                <View style={[styles.shaft_line, { backgroundColor: textColor }]} />
                {
                    isLastLine &&
                    <AntDesign
                        name='caretright'
                        size={12}
                        color={textColor}
                        style={{ position: 'absolute', right: 0, top: -6 }}
                    />
                }
                {items.map(_renderPointItem)}
            </View>
        )
    }

    const _renderPointItem = (item, index) => (
        <PointItem
            key={index}
            item={item}
            index={index}
            initValue={initAnswers?.[item.id] || ''}
            customStyles={customStyles}
            updateAnswers={updateAnswers}
        />
    )

    const updateAnswers = (id, answer) => {
        answer ?
            refAnswers.current[id] = answer
            :
            delete refAnswers.current[id];
        onAnswer(
            refAnswers.current,
            Object.keys(refAnswers.current).length == options.filter(it => it.obj_type == 'inputText').length
        )
    }

    return (
        <View style={styles.option_container} >
            {lines.map(_renderShaftNumber)}
        </View>
    )
}

const Result = (props) => {
    const { options, correct_options, customStyles: { textColor } } = props;
    const lines = new Array(Math.ceil(options.length / ITEMS_PER_ROW)).fill(null);

    const _renderShaftNumber = (item, index) => {
        const isLastLine = (index + 1) == lines.length;
        const items = options.slice(index * ITEMS_PER_ROW, ITEMS_PER_ROW * (index + 1));
        const shaftWidth = options.length <= ITEMS_PER_ROW ?
            '100%'
            :
            `${(items.length / ITEMS_PER_ROW) * 100}%`;
        return (
            <View
                key={index}
                style={[
                    styles.shaft_number,
                    { paddingBottom: 0 },
                    isLastLine && { width: shaftWidth }
                ]}>
                <View style={[styles.shaft_line, { backgroundColor: textColor }]} />
                {
                    isLastLine &&
                    <AntDesign
                        name='caretright'
                        size={12}
                        color={textColor}
                        style={{ position: 'absolute', right: 0, top: -6 }}
                    />
                }
                {items.map(_renderResult)}
            </View>
        )
    }

    const _renderResult = (item, index) => {
        const offsetX = (SHAFT_NUMBER_WIDTH / 2) + POINT_DISTANCE * item.x - (POINT_DISTANCE / 2);
        const isTextInput = item.obj_type == 'inputText';
        const content = isTextInput ? correct_options.find(it => it.id == item.id)?.answer : item.content;

        return (
            <View key={index} style={[styles.point_item, { width: POINT_DISTANCE, left: offsetX }]}>
                <View style={[
                    styles.point_beacon,
                    { backgroundColor: textColor }
                ]} />
                <View style={styles.point_border}>
                    <Text style={styles.point_content}>{content}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.shaft_number}>
            {lines.map(_renderShaftNumber)}
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