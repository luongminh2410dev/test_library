import React, { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const answerKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const Options = (props) => {
    const { question, customStyles, onAnswer } = props;

    const {
        primaryColor = '#419e01',
        subColor = '#e7a22b',
        textColor = '#000000',
    } = customStyles;

    const { items_per_row = 1, options } = question;
    const [currentAnswer, setCurrentAnswer] = useState(-1);

    const _renderOptionItem = (item, index) => {
        const isActive = currentAnswer == index;

        const onPress = () => {
            onAnswer(item.id)
            setCurrentAnswer(index)
        }

        return (
            <TouchableOpacity
                key={index}
                onPress={onPress}
                style={[styles.answer_btn, { width: `${100 / items_per_row}%` }]}>
                <View style={[styles.checkbox, isActive && { borderColor: primaryColor }]}>
                    <View style={[styles.checkbox_dot, isActive && { backgroundColor: primaryColor }]} />
                </View>
                <View style={{ flex: 1 }}>
                    {item.option_content.map((it, idx) => {
                        switch (it.type) {
                            case 'html':
                                return (
                                    <HtmlContent key={idx} content={`${answerKeys[index]}. ${it.content}`} color={isActive ? primaryColor : textColor} />
                                )
                            case 'image':
                                return (
                                    <>
                                        <Text style={{ fontSize: 15, color: isActive ? primaryColor : textColor }}>{answerKeys[index]}. </Text>
                                        <Image
                                            key={idx}
                                            style={{ width: parseInt(it.width), height: parseInt(it.height) }}
                                            source={{ uri: it.content }}
                                        />
                                    </>
                                )
                        }
                    })}
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.option_list}>
            {options.map(_renderOptionItem)}
        </View>
    )
}

const Result = (props) => {
    const { answers, options, correct_options, customStyles } = props;
    const { primaryColor = '#419e01' } = customStyles;

    const correctAnswer = answerKeys[options.findIndex(i => correct_options.includes(i.id))];
    const isCorrect = correct_options.includes(answers);
    return (
        <View style={[styles.result_container, { borderColor: primaryColor }]}>
            <Text style={[styles.result_txt, { color: primaryColor }]}>
                {
                    isCorrect ?
                        <Text>Bạn đã chọn đúng </Text>
                        :
                        <Text style={{ color: 'red' }}>Bạn đã chọn sai </Text>
                } | Đáp án đúng: {correctAnswer}
            </Text>
        </View>
    )
}

const compareAnswer = (answers, correct_options) => {
    return correct_options.includes(answers)
}

export default {
    Options,
    Result,
    compareAnswer
}