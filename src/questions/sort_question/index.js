import React, { useRef, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

const PhraseItem = (props) => {
    const { item, index, positions, questionStep, setQuestionStep, updatePhraseConfigs } = props;
    const [moving, setMoving] = useState(false);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const onLayout = ({ nativeEvent: { layout } }) => {
        updatePhraseConfigs(item.id, { ...layout, position: index })
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
            questionStep == 0 && runOnJS(setQuestionStep)(1);
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
                    {item.content.map(_renderContent)}
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

const SortQuestion = (props) => {
    const {
        question, customConfig, customStyles, displayMode,
        getTopComponent, getMiddleComponent, getBottomComponent, getCornerComponent,
        customLevelComponent,
        onSelectOption, onToggleSuggestion, onSkipQuestion, onFinishQuestion, onToggleSolutionDetail
    } = props;

    const {
        label_question = 'Câu 1',
        label_suggestion = 'Phương pháp giải',
        label_solution_detail = 'Lời giải của GV Vungoi.vn',
        label_result_txt = 'Đáp án của GV Vungoi.vn',
        btn_suggestion_text = 'Gợi ý',
        btn_skip_text = 'Câu tiếp theo',
        popup_confirm_skip = {},
    } = customConfig;

    const {
        primaryColor = '#419e01',
        subColor = '#e7a22b',
        textColor = '#000000',
        container: containerStyles = {},
        question_type: questionTypeStyles = {},
        question_title: questionTitleStyles = {},
        options_container: optionContainerStyles = {},
        active_option_btn = {},
        active_option_txt = {},
        default_option_btn: defaultOptionButtonStyles = {},
        default_option_txt: defaultOptionTextStyles = {},
        result_container: resultContainerStyles = {},
        solution_detail: solutionDetailStyles = {},
        solution_suggestion: solutionSuggestionStyles = {},
        solution_detail_btn: solutionDetailBtnStyles = {},
        solution_detail_btn_title: solutionDetailBtnTitleStyles = {},
    } = customStyles;

    const {
        guide_touch, question: _question,
        difficult_level, solution_suggestion,
        options, correct_options, solution_detail
    } = question;

    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);
    const refPhraseLayout = useRef({});
    const positions = useSharedValue([]);

    const nextButtonLabel = questionStep == 1 && correct_options ? 'Kiểm tra' : btn_skip_text;
    const suggestButtonLabel = questionStep == 2 ? 'Xem lại lý thuyết' : btn_suggestion_text;

    const getDifficultQuestion = () => {
        switch (difficult_level) {
            case 1:
                return <Text style={{ fontWeight: '400', color: 'green' }}>Cơ bản</Text>
            case 2:
                return <Text style={{ fontWeight: '400', color: 'orange' }}>Trung bình</Text>
            case 3:
                return <Text style={{ fontWeight: '400', color: 'red' }}>Nâng cao</Text>
            default:
                break;
        }
    }

    const toggleSuggestionVisible = () => {
        if (questionStep == 2) {
            console.log('xem li thuyet');
        }
        else {
            onToggleSuggestion({ isShow: suggestionCollapsed })
            setSuggestionCollapsed(!suggestionCollapsed)
        }
    }

    const toggleSolutionDetail = () => {
        onToggleSolutionDetail({ isShow: solutionCollapsed })
        setSolutionCollapsed(!solutionCollapsed)
    }

    const onNextButtonPress = () => {
        const {
            title = 'Bạn chưa chọn câu trả lời!',
            content = 'Bạn muốn bỏ qua câu hỏi này?',
            btn_ok = 'Đồng ý',
            btn_cancel = 'Huỷ'
        } = popup_confirm_skip;
        switch (questionStep) {
            case 0:
                if (displayMode == 'result') {
                    return console.log('next question');;
                }
                Alert.alert(title, content, [
                    {
                        style: 'default',
                        text: btn_ok,
                        onPress: onSkipQuestion
                    },
                    {
                        style: 'destructive',
                        text: btn_cancel
                    },
                ])
                break;
            case 1:
                if (!correct_options) return onFinishQuestion();
                setSuggestionCollapsed(true)
                setQuestionStep(2)
                break;
            case 2:
                onFinishQuestion();
                break;
            default:
                break;
        }
    }

    const updatePhraseConfigs = (id, config) => {
        refPhraseLayout.current[id] = config;

        if (Object.keys(refPhraseLayout.current).length == options.length) {
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
            positions={positions}
            questionStep={questionStep}
            setQuestionStep={setQuestionStep}
            updatePhraseConfigs={updatePhraseConfigs}
        />
    )

    const _renderResult = (item, index) => {
        const data = options.find(it => it.id == item.id);
        return (
            <View key={index} style={styles.phrase_item}>
                {data.content.map((it, idx) => {
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
        <View style={[styles.container, containerStyles]} pointerEvents={displayMode == 'preview' ? 'none' : 'auto'}>
            <View style={[styles.row, { paddingHorizontal: 12 }]}>
                <View style={styles.question_label}>
                    <Text style={[styles.question_label_txt, { color: textColor }]}>{label_question}: </Text>
                    {customLevelComponent(difficult_level) || getDifficultQuestion()}
                </View>
                {getCornerComponent(question.id, question.sdk_type)}
            </View>
            {getTopComponent()}
            <Text style={[styles.guide_label, { color: primaryColor }, questionTypeStyles]}>{guide_touch}</Text>
            <View style={[styles.question_view, questionTitleStyles]}>
                {_question.map(_renderContent)}
            </View>
            <View style={[styles.option_container, optionContainerStyles]} pointerEvents={displayMode == 'result' || questionStep == 2 ? 'none' : 'auto'}>
                <GestureHandlerRootView style={styles.phrase_list}>
                    {options.map(_renderPhraseItem)}
                </GestureHandlerRootView>
                <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', zIndex: 0 }}>
                    {options.map((item, index) => (
                        <View key={index} style={[styles.phrase_item, { opacity: 0 }]}>
                            {item.content.map(_renderContent)}
                        </View>
                    ))}
                </View>
            </View>
            <Collapsible
                style={styles.suggestion_collapsible}
                collapsed={suggestionCollapsed}>
                <Text style={[styles.suggestion_label, { color: subColor }]}>{label_suggestion}</Text>
                {solution_suggestion.map(_renderContent)}
            </Collapsible>
            <View style={styles.row}>
                <TouchableOpacity
                    disabled={displayMode == 'result'}
                    onPress={toggleSuggestionVisible}
                    style={[styles.suggestion_btn, { borderColor: primaryColor }]}>
                    {
                        questionStep != 2 && <View style={{ marginRight: 8 }}>
                            <Feather name='sun' size={20} color={primaryColor} />
                        </View>
                    }
                    <Text style={[styles.suggestion_txt, { color: primaryColor }]}>{suggestButtonLabel}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onNextButtonPress} style={[styles.next_question_btn, { backgroundColor: primaryColor }]}>
                    <Text style={styles.next_question_txt}>{nextButtonLabel}</Text>
                    <Feather name='chevrons-right' size={20} color='white' />
                </TouchableOpacity>
            </View>
            {getMiddleComponent()}
            {
                (questionStep == 2 || displayMode != 'default') &&
                <View style={[styles.result_container, resultContainerStyles]}>
                    <Text style={[styles.suggestion_label, { color: subColor }]}>{label_result_txt}</Text>
                    <View style={styles.correct_result}>
                        {correct_options.sort(function (a, b) { return a.answer - b.answer }).map(_renderResult)}
                    </View>
                    <View style={styles.solution_detail_view}>
                        <TouchableOpacity onPress={toggleSolutionDetail} style={[styles.solution_detail_btn, solutionDetailBtnStyles]}>
                            <Text style={[{ fontSize: 15, }, solutionDetailBtnTitleStyles]}>Xem lời giải</Text>
                        </TouchableOpacity>
                    </View>
                    {getBottomComponent()}
                    <Collapsible collapsed={solutionCollapsed} >
                        <View style={solutionSuggestionStyles}>
                            <Text style={[styles.suggestion_label, { color: subColor }]}>{label_suggestion}</Text>
                            {solution_suggestion.map(_renderContent)}
                        </View>
                        <View style={solutionDetailStyles}>
                            <Text style={[styles.suggestion_label, { color: subColor }]}>{label_solution_detail}</Text>
                            <View style={{ marginTop: 12 }}>
                                {solution_detail.map(_renderContent)}
                            </View>
                        </View>
                    </Collapsible>
                </View>
            }
        </View>
    )
}

export default SortQuestion