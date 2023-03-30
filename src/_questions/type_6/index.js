import React, { useRef, useState } from 'react';
import { Dimensions, Image, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

const PhraseItem = (props) => {
    const { item, index, onAnswer, positions, updatePhraseConfigs } = props;
    const [moving, setMoving] = useState(false);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const onLayout = ({ nativeEvent: { layout } }) => {
        updatePhraseConfigs(item.id, { ...layout, position: index + 1 })
    }

    const animatedStyles = useAnimatedStyle(() => {
        return {
            top: translateY.value,
            left: translateX.value + width,
            zIndex: moving ? 100 : 1,
        }
    })

    useAnimatedReaction(
        () => positions.value[item.id]?.x,
        (currentPosition, previousPosition) => {
            if (currentPosition !== previousPosition) {
                if (!positions.value[item.id] || moving) return;
                translateX.value = withTiming(positions.value[item.id].x);
                translateY.value = withTiming(positions.value[item.id].y);
            }
        }, [moving]
    );

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
            runOnJS(setMoving)(true);
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;

            if (Math.abs(event.velocityX) < 50 && Math.abs(event.velocityY) < 50) return;
            const getId = Object.keys(positions.value).find(it => {
                if (it == item.id) return false;
                if (
                    Math.abs(positions.value[it].x - translateX.value) < (positions.value[it].width / 2)
                    &&
                    Math.abs(positions.value[it].y - translateY.value) < (positions.value[it].height / 2)
                ) {
                    return true;
                }
                return false;
            })

            if (getId) {
                const newObj = { ...positions.value };

                Object.keys(positions.value).map(it => {
                    if (it == item.id) {
                        newObj[it] = { ...newObj[it], position: positions.value[getId].position };
                        return;
                    };
                    if (positions.value[getId].position < positions.value[item.id].position) {
                        if (
                            positions.value[it].position >= positions.value[getId].position
                            &&
                            positions.value[it].position < positions.value[item.id].position
                        ) {
                            newObj[it] = { ...newObj[it], position: newObj[it].position + 1 }
                        }
                    }
                    else {
                        if (
                            positions.value[it].position > positions.value[item.id].position
                            &&
                            positions.value[it].position <= positions.value[getId].position
                        ) {
                            newObj[it] = { ...newObj[it], position: newObj[it].position - 1 }
                        }
                    }
                    return;
                })

                const sortedArray = Object.keys(newObj)
                    .map(it => { return { ...newObj[it], id: it } })
                    .sort((a, b) => a.position - b.position);

                sortedArray.map((it, idx) => {
                    const newOffset = sortedArray.reduce((t, c, cIdx) => {
                        if (c.position >= it.position) return t;
                        if (t.x + c.width > (width - 24 - (sortedArray[cIdx + 1]?.width || 0))) {
                            return { x: 0, y: t.y + c.height }
                        }
                        return { x: t.x + c.width, y: t.y }
                    }, { x: 0, y: 0 });

                    newObj[it.id] = { ...newObj[it.id], x: newOffset.x, y: newOffset.y };
                    return;
                })

                positions.value = newObj;
            }
        },
        onEnd: (event, context) => {
            translateX.value = withTiming(positions.value[item.id].x);
            translateY.value = withTiming(positions.value[item.id].y);
            runOnJS(setMoving)(false);
            runOnJS(onAnswer)(positions.value)
        }
    })

    const _renderContent = (it, idx) => {
        switch (it.type) {
            case 'html':
                return <HtmlContent key={idx} content={it.content} color={'white'} />
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

    return (
        <View onLayout={onLayout} style={{ position: 'absolute', left: -width }}>
            <PanGestureHandler
                maxPointers={1}
                minDist={10}
                onGestureEvent={onGestureEvent}
            >
                <Animated.View style={[styles.phrase_item, animatedStyles]}>
                    {item.option_content.map(_renderContent)}
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

const Options = (props) => {
    const { question, customStyles, onAnswer } = props;
    const { textColor = '#000000' } = customStyles;
    const { options } = question;

    const refPhraseLayout = useRef({});
    const positions = useSharedValue([]);

    const updatePhraseConfigs = (id, config) => {
        refPhraseLayout.current[id] = config;

        if (Object.keys(refPhraseLayout.current).length == options.length) {
            console.log('here');
            const newObj = {};

            const sortedArray = Object.keys(refPhraseLayout.current)
                .map(it => { return { ...refPhraseLayout.current[it], id: it } })
                .sort((a, b) => a.position - b.position);

            sortedArray.map((it, idx) => {
                const newOffset = sortedArray.reduce((t, c, cIdx) => {
                    if (c.position >= it.position) return t;
                    if (t.x + c.width > (width - 24 - (sortedArray[cIdx].width || 0))) {
                        return { x: 0, y: t.y + c.height }
                    }
                    return { x: t.x + c.width, y: t.y }
                }, { x: 0, y: 0 });

                newObj[it.id] = { ...refPhraseLayout.current[it.id], x: newOffset.x, y: newOffset.y };
            })
            positions.value = newObj;
        }
    }

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

    const _renderPhraseItem = (item, index) => (
        <PhraseItem
            key={index}
            item={item}
            index={index}
            onAnswer={onAnswer}
            positions={positions}
            updatePhraseConfigs={updatePhraseConfigs}
        />
    )

    return (
        <>
            <GestureHandlerRootView style={styles.phrase_list}>
                {options.map(_renderPhraseItem)}
            </GestureHandlerRootView>
            <View style={styles.phrase_list_invisible}>
                {options.map((item, index) => (
                    <View key={index} style={[styles.phrase_item, { opacity: 0 }]}>
                        {item.option_content.map(_renderContent)}
                    </View>
                ))}
            </View>
        </>
    )
}

const Result = (props) => {
    const { correct_options, options } = props;
    const _renderResult = (item, index) => {
        const data = options.find(it => it.id == item.id);
        return (
            <View key={index} style={styles.phrase_item}>
                {data.option_content.map((it, idx) => {
                    switch (it.type) {
                        case 'html':
                            return <HtmlContent key={idx} content={it.content} color={'white'} />
                        case 'image':
                            return (
                                <Image
                                    key={idx}
                                    resizeMode='contain'
                                    style={{ width: parseInt(it.width), height: parseInt(it.height) }}
                                    source={{ uri: it.url }} />
                            )
                    }
                })}
            </View>
        )
    }

    return (
        <View style={styles.correct_result}>
            {correct_options.sort(function (a, b) { return a.answer - b.answer }).map(_renderResult)}
        </View>
    )
}

const compareAnswer = (answers, correct_options) => {
    return !correct_options.some(item => {
        return answers[item.id].position != item.answer
    })
}

export default {
    Options,
    Result,
    compareAnswer
}