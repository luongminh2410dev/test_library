import React, { useRef } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { interpolateColor, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import AudioView from '../../components/audio-view';
import styles from './styles';

const AnimatedButton = Animated.createAnimatedComponent(Pressable)
const OptionItem = (props) => {
    const { item, index, findOptionPosition, updateAnswers } = props;
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scale = useSharedValue(1);
    const backgroundColor = useSharedValue(0);
    const refOptionPosition = useRef();
    const refCurrentSocket = useRef(-1);


    const animatedItemStyles = useAnimatedStyle(() => {
        const bgColor = interpolateColor(
            backgroundColor.value,
            [0, 1],
            ['rgba(242, 234, 217, 1)', 'rgba(242, 234, 217, 0.4)']
        )
        return {
            backgroundColor: bgColor,
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
                { scale: scale.value }
            ]
        }
    })

    const getPosition = () => {
        const offsetX = refOptionPosition.current.x + translateX.value;
        const offsetY = refOptionPosition.current.y + translateY.value;
        const { position, socketIndex } = findOptionPosition({ x: offsetX, y: offsetY });
        if (position) {
            if (refCurrentSocket.current != -1) {
                updateAnswers(refCurrentSocket.current)
            }
            translateX.value = withTiming(position.x - refOptionPosition.current.x)
            translateY.value = withTiming(position.y - refOptionPosition.current.y)
            scale.value = withTiming(1);
            backgroundColor.value = withTiming(1);
            refCurrentSocket.current = socketIndex;
            updateAnswers(socketIndex, item);
        }
        else {
            translateX.value = withTiming(0);
            translateY.value = withTiming(0);
            scale.value = withTiming(1);
            backgroundColor.value = withTiming(0);
            if (refCurrentSocket.current != -1) {
                updateAnswers(refCurrentSocket.current);
                refCurrentSocket.current = -1;
            }
        }
    }

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
            scale.value = withTiming(1.2)
        },
        onActive: (event, context) => {
            translateX.value = context.translateX + event.translationX;
            translateY.value = context.translateY + event.translationY;
        },
        onFinish: (event, context) => {
            runOnJS(getPosition)()
        }
    })

    const onLayout = ({ nativeEvent }) => {
        refOptionPosition.current = { x: nativeEvent.layout.x, y: nativeEvent.layout.y }
    }

    const onPress = () => {
        if (refCurrentSocket.current != -1) {
            translateX.value = withTiming(0);
            translateY.value = withTiming(0);
            scale.value = withTiming(1);
            backgroundColor.value = withTiming(0);
            updateAnswers(refCurrentSocket.current);
        }
        return null;
    }

    return (
        <PanGestureHandler maxPointers={1} onGestureEvent={onGestureEvent}>
            <AnimatedButton
                onPress={onPress}
                onLayout={onLayout}
                style={[styles.option_item, animatedItemStyles]}>
                <Text style={styles.option_item_label}>{item}</Text>
            </AnimatedButton>
        </PanGestureHandler>
    )
}

const Options = (props) => {
    const { question, customStyles, onAnswer } = props;
    const { textColor = '#000000' } = customStyles;
    const { attachment, picture, options } = question;
    const refAnswers = useRef({});
    const refSocketPositions = useRef({});

    const _renderOptionItem = (item, index) => (
        <OptionItem
            key={index}
            item={item}
            index={index}
            textColor={textColor}
            updateAnswers={updateAnswers}
            findOptionPosition={findOptionPosition}
        />
    )

    const _renderOptionHint = (item, index) => (
        <View key={index} style={[styles.option_item, { backgroundColor: 'rgba(242, 234, 217, 0.5)' }]}>
            <Text style={[styles.option_item_label, { opacity: 0 }]}>{item}</Text>
        </View>
    )

    const _renderAbsoluteSocket = (item, index) => {
        const onLayout = (e) => {
            refSocketPositions.current[index] = { x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y }
        }

        return (
            <View
                key={index}
                onLayout={onLayout}
                style={[styles.socket_item, { top: `${item.y_percent}%`, left: `${item.x_percent}%` }]}>
                <Text style={styles.option_item_label}> </Text>
            </View>
        )
    }

    const findOptionPosition = ({ x, y }) => {
        let position = null;
        const socketIndex = picture.coordinates.findIndex((item, index) => {
            const distance = Math.sqrt(Math.pow((refSocketPositions.current[index].x - x), 2) + Math.pow((refSocketPositions.current[index].y - y), 2))
            if (distance < 25 && !refAnswers.current[index]) {
                position = refSocketPositions.current[index];
                return true;
            }
            return false;
        })
        return { position, socketIndex }
    }

    const updateAnswers = (socketIndex, option = false) => {
        option ?
            refAnswers.current[socketIndex] = option
            :
            delete refAnswers.current[socketIndex];
        onAnswer(refAnswers.current, Object.keys(refAnswers.current).length == options.length)
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <AudioView source={attachment.audioFile} />
            <View style={styles.option_container}>
                {picture.coordinates.map(_renderAbsoluteSocket)}
                <Image
                    resizeMode='cover'
                    source={{ uri: picture.url }}
                    style={{ width: '100%', aspectRatio: picture.width / picture.height, borderRadius: 4 }}
                />
                <GestureHandlerRootView style={styles.option_list}>
                    {options.map(_renderOptionItem)}

                </GestureHandlerRootView>
                <View style={[styles.option_list, { zIndex: 1 }]}>
                    {options.map(_renderOptionHint)}
                </View>
            </View>
        </View>
    )
}

const Result = ({ picture, correct_options }) => {
    const _renderResult = (item, index) => {
        return (
            <View
                key={index}
                style={[styles.socket_item, { top: `${item.y_percent}%`, left: `${item.x_percent}%` }]}>
                <Text style={styles.option_item_label}>{correct_options[index]}</Text>
            </View>
        )
    }
    return (
        <View style={styles.correct_result}>
            {picture.coordinates.map(_renderResult)}
            <Image
                resizeMode='cover'
                source={{ uri: picture.url }}
                style={{ width: '100%', aspectRatio: picture.width / picture.height, borderRadius: 4 }}
            />
        </View>
    )
}

const compareAnswer = (answers, correct_options) => {
    return !correct_options.find((item, index) => {
        return answers[index]?.trim() != item.trim();
    })
}

export default {
    Options,
    Result,
    compareAnswer
}