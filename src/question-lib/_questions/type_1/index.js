import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const answerKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const Options = (props) => {
    const { question, customStyles, onAnswer, initAnswers } = props;
    const { primaryColor, textColor } = customStyles;
    const { items_per_row = 1, options } = question;
    const [currentAnswer, setCurrentAnswer] = useState(initAnswers || -1);

    const _renderOptionItem = (item, index) => {
        const isActive = currentAnswer == item.id;

        const onPress = () => {
            onAnswer(item.id)
            setCurrentAnswer(item.id)
        }

        return (
            <TouchableOpacity
                key={index}
                onPress={onPress}
                style={[styles.answer_btn, { width: `${100 / items_per_row}%` }]}>
                <View style={[styles.answer_key, isActive && { backgroundColor: primaryColor }]}>
                    <Text style={[styles.answer_label, isActive && { color: 'white' }]}>{answerKeys[index]}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                    {item.option_content.map((it, idx) => {
                        switch (it.type) {
                            case 'html':
                                return (
                                    <View key={idx} style={{ width: '100%' }}>
                                        <HtmlContent key={idx} content={it.content} color={isActive ? primaryColor : textColor} />
                                    </View>
                                )
                            case 'image':
                                return (
                                    <Image
                                        key={idx}
                                        style={{ width: parseInt(it.width), height: parseInt(it.height) }}
                                        source={{ uri: it.content }}
                                    />
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
    const { getAnswers, options, correct_options, customStyles } = props;
    const { primaryColor } = customStyles;

    const correctAnswer = answerKeys[options.findIndex(i => correct_options.includes(i.id))];
    const isCorrect = correct_options.includes(getAnswers());
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