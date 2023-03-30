import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const Options = (props) => {
    const { question, customStyles, onAnswer } = props;
    const { primaryColor = '#419e01', subColor = '#e7a22b', textColor = '#000000' } = customStyles;
    const { options } = question;
    const [currentAnswer, setCurrentAnswer] = useState(-1);

    const _renderOptionItem = (i, idx) => {
        const isActive = currentAnswer == idx;
        const onPress = () => {
            onAnswer({ [i.id]: true });
            setCurrentAnswer(idx);
        }
        return (
            <TouchableOpacity
                key={idx}
                onPress={onPress}
                style={[styles.answer_btn, { backgroundColor: isActive ? '#aad575' : '#f3ead8' }]}>
                {i.option_content.map((it, ix) => {
                    switch (it.type) {
                        case 'html':
                            return (
                                <HtmlContent key={ix} content={it.content} color={textColor} />
                            )
                        case 'image':
                            return <Image key={ix} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                    }
                })}
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.options} >
            {options.map(_renderOptionItem)}
        </View>
    )
}

const Result = (props) => {
    const { options, correct_options, customStyles } = props;
    const { textColor } = customStyles;

    const _renderResult = (item, index) => {
        const findAnswer = correct_options.find(it => it.id == item.id);
        if (findAnswer.answer) {
            return (
                <View key={index} style={[styles.answer_btn, { backgroundColor: '#aad575' }]}>
                    {item.option_content.map((it, ix) => {
                        switch (it.type) {
                            case 'html':
                                return (
                                    <HtmlContent key={ix} content={it.content} color={textColor} />
                                )
                            case 'image':
                                return <Image
                                    key={ix}
                                    resizeMode='contain'
                                    style={{ width: parseInt(it.width), height: parseInt(it.height) }}
                                    source={{ uri: it.url }} />
                        }
                    })}
                </View>
            )
        }
        return null;
    }

    return (
        <View style={styles.correct_result}>
            {options.map(_renderResult)}
        </View>
    )
}

const compareAnswer = (answers, correct_options) => {
    return !correct_options.find(item => {
        return item.answer && !answers[item.id];
    })
}

export default {
    Options,
    Result,
    compareAnswer,
}