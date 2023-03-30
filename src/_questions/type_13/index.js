import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Animated, { FadeInUp, SequencedTransition, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const boxColors = ['#e39001', '#8ac53e', 'gray'];

const OptionItem = (props) => {
    const { item, index, currentOption, setCurrentOption, pairedList, textColor } = props;
    const isPaired = pairedList[item.id] != undefined;
    const isPairing = !isPaired && currentOption == item.id;
    const animated = useSharedValue(1);

    useEffect(() => {
        animated.value = withTiming(isPaired ? 0.5 : 1)
    }, [isPaired])

    const animatedButtonStyles = useAnimatedStyle(() => {
        return { opacity: animated.value }
    })

    const _renderContent = (it, idx) => {
        switch (it.type) {
            case 'html':
                return <HtmlContent key={idx} content={it.content} color={textColor} />
            case 'image':
                return (
                    <Image
                        key={idx}
                        resizeMode='contain'
                        style={{ width: parseInt(it.width), height: parseInt(it.height) }}
                        source={{ uri: it.url }} />
                )
        }
    }

    const onPress = () => {
        setCurrentOption(item.id);
    }

    return (
        <AnimatedTouchable
            onPress={onPress}
            disabled={isPaired}
            style={[animatedButtonStyles, styles.option_item, isPairing && { borderColor: '#6dae41' }]}>
            {item.option_content.map(_renderContent)}
        </AnimatedTouchable>
    )
}

const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);
const Options = (props) => {
    const { question, customStyles, onAnswer } = props;

    const { textColor = '#000000' } = customStyles;

    const { boxList, options } = question;

    const [currentOption, setCurrentOption] = useState(null);
    const [pairedList, setPairedList] = useState({});

    useEffect(() => {
        onAnswer(pairedList, Object.keys(pairedList).length == options.length)
    }, [pairedList])

    const _renderOptionItem = (item, index) => (
        <OptionItem
            key={index}
            item={item}
            index={index}
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
            textColor={textColor}
            pairedList={pairedList}
        />
    )

    const _renderContent = (item, index) => {
        switch (item.type) {
            case 'html':
                return <HtmlContent key={index} content={item.content} color={textColor} />
            case 'image':
                return (
                    <Image
                        key={index}
                        resizeMode='contain'
                        style={{ width: parseInt(item.width), height: parseInt(item.height) }}
                        source={{ uri: item.url }} />
                )
        }
    }

    const _renderOptionPaired = (it, idx) => {
        const data = options.find(i => i.id == it);

        const onPress = () => {
            const newPaired = { ...pairedList };
            delete newPaired[it];
            setPairedList(newPaired);
        }

        if (!data) return null;
        return (
            <AnimatedTouchable
                key={idx}
                entering={FadeInUp}
                layout={SequencedTransition}
                onPress={onPress}
                style={styles.option_item}>
                {data.option_content.map(_renderContent)}
            </AnimatedTouchable>
        )
    }

    const _renderBoxItem = (item, index) => {
        const itemsOnBox = Object.keys(pairedList).filter(it => pairedList[it] == item.index);

        const onPress = () => {
            if (currentOption) {
                setPairedList({ ...pairedList, [currentOption]: item.index })
                setCurrentOption(null);
            }
        }

        return (
            <Pressable
                key={index}
                onPress={onPress}
                style={styles.box_item}>
                <View style={[styles.box_header, { backgroundColor: boxColors[index] }]}>
                    <Text style={styles.box_title}>{item.title}</Text>
                </View>
                <Animated.View
                    style={styles.box_space}>
                    {itemsOnBox && itemsOnBox.map(_renderOptionPaired)}
                </Animated.View>
            </Pressable>
        )
    }

    return (
        <>
            <View style={styles.option_list} >
                {options.map(_renderOptionItem)}
            </View>
            <View style={styles.box_list}>
                {boxList.map(_renderBoxItem)}
            </View>
        </>
    )
}

const Result = (props) => {
    const { options, correct_options, boxList, customStyles } = props;
    const { textColor = '#000000' } = customStyles;

    const _renderContent = (item, index) => {
        switch (item.type) {
            case 'html':
                return <HtmlContent key={index} content={item.content} color={textColor} />
            case 'image':
                return (
                    <Image
                        key={index}
                        resizeMode='contain'
                        style={{ width: parseInt(item.width), height: parseInt(item.height) }}
                        source={{ uri: item.url }} />
                )
        }
    }

    const _renderResult = (item, index) => {
        const itemsOnBox = correct_options.filter(it => it.answer.index == item.index);
        return (
            <View key={index}
                style={styles.box_item}>
                <View style={[styles.box_header, { backgroundColor: boxColors[index] }]}>
                    <Text style={styles.box_title}>{item.title}</Text>
                </View>
                <View
                    style={styles.box_space}>
                    {itemsOnBox && options.map((it, idx) => {
                        if (!!itemsOnBox.find(i => i.id == it.id)) {
                            return (
                                <View
                                    key={idx}
                                    style={styles.option_item}>
                                    {it.option_content.map(_renderContent)}
                                </View>
                            )
                        }
                        return null;
                    })}
                </View>
            </View>
        )
    }

    return boxList.map(_renderResult)
}

const compareAnswer = (answers, correct_options) => {
    return !correct_options.find(item => {
        return !answers[item.id] || item.answer.index != answers[item.id];
    })
}

export default {
    Options,
    Result,
    compareAnswer
}