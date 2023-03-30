import React, { useEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const PADDING_VIEW = 12;
const Options = (props) => {
    const { question, customStyles, onAnswer } = props;

    const {
        primaryColor = '#419e01',
        default_target_option: defaultTargetOptionStyles = {},
        default_source_option: defaultSourceOptionStyles = {},
        default_option_txt: defaultOptionTextStyles = {},
        active_option_btn = {},
        active_option_txt = {},
    } = customStyles;

    const { options } = question;
    const { targets, sources } = options;
    const [currentTarget, setCurrentTarget] = useState(-1);
    const [currentSource, setCurrentSource] = useState(-1);
    const [pairedList, setPairedList] = useState([]);
    const refOptionLayouts = useRef({});

    const activeButtonStyles = Object.assign({}, { borderColor: primaryColor, }, active_option_btn);
    const activeTxtStyles = Object.assign({}, styles.active_answer_btn_txt, active_option_txt);

    const getItemOffsetY = (targetIndex) => {
        return targets.reduce((previous, current, currentIndex) => {
            if (currentIndex >= targetIndex) return previous;
            const pairedItem = pairedList.find(it => it.id == current.id);
            if (!!pairedItem) {
                return previous + refOptionLayouts.current[pairedItem.id].height + refOptionLayouts.current[pairedItem.answer].height + PADDING_VIEW;
            }
            else {
                return previous + refOptionLayouts.current[current.id].height + PADDING_VIEW;
            }
        }, 0)
    }

    const _renderTargetOption = (item, index) => {
        const isActive = currentTarget == item.id;
        const getIndex = pairedList.findIndex(it => it.id == item.id);
        const isPaired = getIndex != -1;
        const translateY = useSharedValue(0);

        const animatedStyles = useAnimatedStyle(() => {
            return {
                transform: [{ translateY: translateY.value }]
            };
        })

        useEffect(() => {
            if (Object.keys(refOptionLayouts.current).length == targets.length * 2) {
                const offsetY = getItemOffsetY(index);
                translateY.value = withTiming(offsetY - refOptionLayouts.current[item.id].offsetY, { duration: 500 })
            }
        }, [pairedList])

        const onPress = () => {
            if (isPaired) {
                const newArray = [...pairedList];
                newArray.splice(getIndex, 1);
                setPairedList(newArray);
                onAnswer(newArray, newArray.length == targets.length)
            }
            else {
                if (currentTarget == item.id) {
                    setCurrentTarget(-1);
                }
                else if (currentSource == -1) {
                    setCurrentTarget(item.id)
                }
                else {
                    // sortOptions(item.id, currentSource, true);
                    const newArray = [...pairedList, { id: item.id, answer: currentSource }];
                    onAnswer(newArray, newArray.length == targets.length)
                    setPairedList(newArray);
                    setCurrentSource(-1);
                    setCurrentTarget(-1);
                }
            }
        }

        const onLayout = e => {
            refOptionLayouts.current[item.id] = {
                height: e.nativeEvent.layout.height,
                offsetY: e.nativeEvent.layout.y
            }
        }

        return (
            <Animated.View
                key={item.id}
                onLayout={onLayout}
                style={[
                    styles.target_item,
                    animatedStyles,
                    defaultTargetOptionStyles,
                    isActive && activeButtonStyles,
                ]}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button_item}
                    onPress={onPress}>
                    {item.option_content.map((it, idx) => {
                        switch (it.type) {
                            case 'html':
                                return (
                                    <HtmlContent
                                        key={idx}
                                        content={it.content}
                                        style={[
                                            styles.answer_btn_txt,
                                            defaultOptionTextStyles,
                                            isActive && activeTxtStyles
                                        ]} />
                                )
                            case 'image':
                                return <Image
                                    key={ix}
                                    style={{ width: parseInt(it.width), height: parseInt(it.height) }}
                                    source={{ uri: it.content }}
                                />
                        }
                    })}
                </TouchableOpacity>
            </Animated.View>
        )
    }

    const _renderSourceOption = (item, index) => {
        const isActive = currentSource == item.id;
        const getIndex = pairedList.findIndex(it => it.answer == item.id);
        const isPaired = getIndex != -1;
        const translateY = useSharedValue(0);

        const animatedStyles = useAnimatedStyle(() => {
            return {
                transform: [{ translateY: translateY.value }]
            };
        })

        useEffect(() => {
            if (Object.keys(refOptionLayouts.current).length == targets.length * 2) {
                if (isPaired) {
                    const targetIndex = targets.findIndex(it => it.id == pairedList[getIndex].id);
                    const targetOffsetY = getItemOffsetY(targetIndex);
                    translateY.value = withTiming(
                        targetOffsetY +
                        refOptionLayouts.current[pairedList[getIndex].id].height -
                        refOptionLayouts.current[item.id].offsetY
                    )
                }
                else {
                    const targetOffsetY = targets.reduce((previous, current) => {
                        const pairedItem = pairedList.find(it => it.id == current.id);
                        if (pairedItem) {
                            return previous + refOptionLayouts.current[pairedItem.id].height + refOptionLayouts.current[pairedItem.answer].height + PADDING_VIEW;
                        }
                        else {
                            return previous + refOptionLayouts.current[current.id].height + PADDING_VIEW;
                        }
                    }, 0);
                    const sourceOffsetY = sources.reduce((previous, current, currentIndex) => {
                        if (currentIndex >= index) return previous;

                        const pairedIndex = pairedList.findIndex(it => it.answer == current.id);
                        if (pairedIndex != -1) return previous;

                        return previous + refOptionLayouts.current[current.id].height + PADDING_VIEW;
                    }, 0)
                    translateY.value = withTiming(targetOffsetY + sourceOffsetY - refOptionLayouts.current[item.id].offsetY)
                }
            }
        }, [pairedList])

        const onPress = () => {
            if (isPaired) {
                const newArray = [...pairedList];
                newArray.splice(getIndex, 1);
                setPairedList(newArray);
                onAnswer(newArray, newArray.length == targets.length)
            }
            else {
                if (currentSource == item.id) {
                    setCurrentSource(-1)
                }
                else if (currentTarget == -1) {
                    setCurrentSource(item.id)
                }
                else {
                    const newArray = [...pairedList, { id: currentTarget, answer: item.id }];
                    setPairedList(newArray);
                    onAnswer(newArray, newArray.length == targets.length)
                    setCurrentSource(-1);
                    setCurrentTarget(-1);
                }
            }
        }

        const onLayout = e => {
            refOptionLayouts.current[item.id] = {
                height: e.nativeEvent.layout.height,
                offsetY: e.nativeEvent.layout.y
            }
        }

        return (
            <Animated.View
                key={item.id}
                onLayout={onLayout}
                style={[
                    styles.source_item,
                    animatedStyles,
                    defaultTargetOptionStyles,
                    isActive && activeButtonStyles
                ]}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button_item}
                    onPress={onPress}>
                    {item.option_content.map((it, idx) => {
                        switch (it.type) {
                            case 'html':
                                return (
                                    <HtmlContent
                                        key={idx}
                                        content={it.content}
                                        style={[
                                            styles.answer_btn_txt,
                                            defaultOptionTextStyles,
                                            isActive && activeTxtStyles
                                        ]} />
                                )
                            case 'image':
                                return <Image
                                    key={ix}
                                    style={{ width: parseInt(it.width), height: parseInt(it.height) }}
                                    source={{ uri: it.content }}
                                />
                        }
                    })}
                </TouchableOpacity>
            </Animated.View>
        )
    }

    return (
        <View style={{ width: '100%' }}>
            {targets.map(_renderTargetOption)}
            {sources.map(_renderSourceOption)}
        </View>
    )
}

const Result = (props) => {
    const { options, correct_options, customStyles } = props;
    const { targets, sources } = options;
    const {
        defaultTargetOptionStyles,
        defaultSourceOptionStyles,
        defaultOptionTextStyles
    } = customStyles;

    const _renderCorrectOptions = (item, index) => {
        const targetData = targets.find(i => i.id == item.id);
        const sourceData = sources.find(i => i.index == item.answer);

        return (
            <View key={index} style={{ width: '100%', marginBottom: PADDING_VIEW }}>
                <View
                    style={[styles.result_item, { backgroundColor: '#f1ead8' }, defaultTargetOptionStyles]}>
                    {targetData.option_content.map((it, idx) => {
                        switch (it.type) {
                            case 'html':
                                return (
                                    <HtmlContent
                                        key={idx}
                                        content={it.content}
                                        style={[
                                            styles.answer_btn_txt,
                                            defaultOptionTextStyles,
                                        ]} />
                                )
                            case 'image':
                                return <Image key={idx} style={{ width: parseInt(it.width), height: parseInt(it.height) }} source={{ uri: it.content }} />
                        }
                    })}
                </View>
                <View
                    style={[styles.result_item, defaultSourceOptionStyles]}>
                    {sourceData.option_content.map((it, idx) => {
                        switch (it.type) {
                            case 'html':
                                return (
                                    <HtmlContent
                                        key={idx}
                                        content={it.content}
                                        style={[
                                            styles.answer_btn_txt,
                                            defaultOptionTextStyles,
                                        ]} />
                                )
                            case 'image':
                                return <Image key={idx} style={{ width: parseInt(it.width), height: parseInt(it.height) }} source={{ uri: it.content }} />
                        }
                    })}
                </View>
            </View>
        )
    }
    return (
        <View style={{ marginTop: 12 }}>
            {correct_options.map(_renderCorrectOptions)}
        </View>
    )
}

export const compareAnswer = (answers, correct_options, options) => {
    const { sources } = options;
    return !correct_options.find(item => {
        const pairedItem = answers.find(it => it.id == item.id);
        if (pairedItem) {
            const pairedAnswer = sources.find(it => it.id == pairedItem.answer);
            return item.answer != pairedAnswer?.index;
        }
        return true;
    })
}

export default {
    Options,
    Result,
    compareAnswer
}