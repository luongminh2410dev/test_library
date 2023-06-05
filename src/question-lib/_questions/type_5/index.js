import React, { useEffect, useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import styles from './styles';

const AnimatedButton = Animated.createAnimatedComponent(Pressable);
const PhraseItem = (props) => {
    const {
        item, index, currentPhrase, setCurrentPhrase, pairedList,
        activeButtonStyles, activeTxtStyles, defaultOptionButtonStyles, defaultOptionTextStyles
    } = props;
    const opacityAnim = useSharedValue(1);
    const isActive = currentPhrase == item.content;
    const isDisable = Object.keys(pairedList).some(i => pairedList[i] == item.content);

    useEffect(() => {
        opacityAnim.value = withTiming(isDisable ? 0.5 : 1)
    }, [isDisable])

    const animatedButtonStyles = useAnimatedStyle(() => {
        return { opacity: opacityAnim.value }
    })

    const onPress = () => {
        setCurrentPhrase(isActive ? null : item.content)
    }

    return (
        <AnimatedButton
            onPress={onPress}
            disabled={isDisable}
            style={[
                styles.phrase_item,
                defaultOptionButtonStyles,
                isActive && activeButtonStyles,
                animatedButtonStyles
            ]}>
            <Text style={[styles.phrase_item_txt, defaultOptionTextStyles, isActive && activeTxtStyles]}>{item.content}</Text>
        </AnimatedButton>
    )
}

const Options = (props) => {
    const { question, customStyles, onAnswer, initAnswers } = props;
    const { options } = question;
    const {
        primaryColor = '#419e01',
        active_option_btn = {},
        active_option_txt = {},
        default_option_btn: defaultOptionButtonStyles = {},
        default_option_txt: defaultOptionTextStyles = {},
    } = customStyles;

    const { phrases, sentences } = options;

    const [currentPhrase, setCurrentPhrase] = useState(null);
    const [pairedList, setPairedList] = useState(initAnswers || {});

    const activeButtonStyles = Object.assign({}, { borderColor: primaryColor, }, active_option_btn);
    const activeTxtStyles = Object.assign({}, styles.active_answer_btn_txt, active_option_txt);

    useEffect(() => {
        onAnswer(pairedList, Object.keys(pairedList).length == phrases.length)
    }, [pairedList])

    const _renderPhraseItem = (item, index) => (
        <PhraseItem
            key={index}
            item={item}
            index={index}
            currentPhrase={currentPhrase}
            setCurrentPhrase={setCurrentPhrase}
            pairedList={pairedList}
            activeButtonStyles={activeButtonStyles}
            activeTxtStyles={activeTxtStyles}
            defaultOptionButtonStyles={defaultOptionButtonStyles}
            defaultOptionTextStyles={defaultOptionTextStyles}
        />
    )

    const _renderSentenceItem = (item, index) => {
        const isActive = Object.keys(pairedList).some(i => i == item.id);

        const onPress = () => {
            if (isActive) {
                const newObject = { ...pairedList };
                delete newObject[item.id]
                setPairedList(newObject)
            }
            else if (currentPhrase) {
                const newObject = { ...pairedList };
                newObject[item.id] = currentPhrase;
                setPairedList(newObject)
                setCurrentPhrase(null);
            }
        }

        switch (item.type) {
            case 'richText':
                return item.content + ' ';
            case 'boxText':
                return (
                    <Text key={item.id}>
                        <TouchableOpacity
                            onPress={onPress}
                            style={styles.sentence_box}>
                            <Text style={styles.sentence_box_txt}>{isActive ? pairedList[item.id] : ''}</Text>
                        </TouchableOpacity>
                        {' '}
                    </Text>
                )
            case 'breakDown':
                return `\n\n`;
        }
    }

    return (
        <>
            <View style={styles.phrase_list}>
                {phrases.map(_renderPhraseItem)}
            </View>
            <Text style={styles.sentence_list}>
                {sentences.map(_renderSentenceItem)}
            </Text>
        </>
    )
}

const Result = (props) => {
    const { correct_options, options } = props;
    const { sentences } = options;

    const _renderCorrectOptions = (item, index) => {
        const correctPhrase = correct_options.find(it => it.id == item.id);

        switch (item.type) {
            case 'richText':
                return item.content;
            case 'boxText':
                return (
                    <View key={index} style={styles.sentence_box}>
                        <Text style={styles.sentence_box_txt}> {correctPhrase.answer} </Text>
                    </View>
                )
            case 'breakDown':
                return `\n`;
        }
    }

    return (
        <Text style={styles.sentence_list}>
            {sentences.map(_renderCorrectOptions)}
        </Text>
    )
}

const compareAnswer = (answers, correct_options) => {
    return !correct_options.find(item => {
        const pairedItem = answers[item.id];
        if (pairedItem) {
            return item.answer != pairedItem;
        }
        return true;
    })
}

export default {
    Options,
    Result,
    compareAnswer
}