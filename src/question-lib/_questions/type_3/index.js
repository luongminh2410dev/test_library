import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Options = (props) => {
    const { question, customStyles, onAnswer } = props;

    const {
        primaryColor = '#419e01',
        active_option_btn = {},
        active_option_txt = {},
        default_option_btn: defaultOptionButtonStyles = {},
        default_option_txt: defaultOptionTitleStyles = {},
    } = customStyles;

    const { options } = question;

    const [currentAnswer, setCurrentAnswer] = useState(-1);

    const activeButtonStyles = Object.assign({}, { borderColor: primaryColor, backgroundColor: primaryColor }, active_option_btn);
    const activeTxtStyles = Object.assign({}, styles.active_answer_btn_txt, active_option_txt);

    const _renderOptionItem = (item, index) => {
        const onPress = () => {
            onAnswer(item.id)
            setCurrentAnswer(index)
        }
        return (
            <TouchableOpacity
                key={index}
                onPress={onPress}
                style={[styles.answer_btn, defaultOptionButtonStyles, currentAnswer == index && activeButtonStyles]}>
                {item.option_content.map((it, idx) => {
                    switch (it.type) {
                        case 'html':
                            return (
                                <Text
                                    key={idx}
                                    style={[
                                        styles.answer_btn_txt,
                                        defaultOptionTitleStyles,
                                        currentAnswer == index && activeTxtStyles
                                    ]}>
                                    {it.content}
                                </Text>
                            )
                        case 'image':
                            return (
                                <Image
                                    key={idx}
                                    style={{ width: parseInt(it.width), height: parseInt(it.height) }}
                                    source={{ uri: it.content }} />
                            )
                    }
                })}
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.row}>
            {options.map(_renderOptionItem)}
        </View>
    )
}

const Result = (props) => {
    const { options, correct_options, customStyles } = props;

    const { primaryColor = '#419e01', active_option_btn = {}, active_option_txt = {} } = customStyles;
    const activeButtonStyles = Object.assign({}, { borderColor: primaryColor, backgroundColor: primaryColor }, active_option_btn);
    const activeTxtStyles = Object.assign({}, styles.active_answer_btn_txt, active_option_txt);

    const _renderOptionUnaccesible = (item, index) => {
        return (
            <View
                key={index}
                style={[styles.answer_btn, correct_options.includes(item.id) && activeButtonStyles]}>
                {item.option_content.map((it, idx) => {
                    switch (it.type) {
                        case 'html':
                            return <Text key={idx} style={[styles.answer_btn_txt, correct_options == item.id && activeTxtStyles]}>{it.content}</Text>
                        case 'image':
                            return <Image key={idx} style={{ width: parseInt(it.width), height: parseInt(it.height) }} source={{ uri: it.content }} />
                    }
                })}
            </View>
        )
    }
    return (
        <View style={styles.row}>
            {options.map(_renderOptionUnaccesible)}
        </View>
    )
}

const compareAnswer = (answers, correct_options, options) => {
    return correct_options.includes(answers);
}

export default {
    Options,
    Result,
    compareAnswer
}