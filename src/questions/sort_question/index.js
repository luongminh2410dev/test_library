import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

const DISPLAY_WIDTH = width - 24;
const DISPLAY_HEIGHT = 150;

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const PhraseItem = (props) => {
    const { item, index, selected, findPhrasePosition, updatePhraseSelected, updateSizeOfPhrase } = props;
    const { id } = item;
    const getSelectedIndex = selected.findIndex(it => it.id == item.id);
    const isSelected = getSelectedIndex != -1;
    const phraseOffset = useRef({ x: 0, y: 0 });
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    useEffect(() => {
        if (isSelected) {
            const { offsetX, offsetY } = selected[getSelectedIndex];
            const finalOffsetY = - (phraseOffset.current.y + (DISPLAY_HEIGHT - offsetY));
            const finalOffsetX = offsetX - phraseOffset.current.x;
            translateX.value = withTiming(finalOffsetX);
            translateY.value = withTiming(finalOffsetY);
        }
        else {
            translateX.value = withTiming(0);
            translateY.value = withTiming(0);
        }
    }, [selected])

    const onLayout = (e) => {
        const { x, y, width, height } = e.nativeEvent.layout;
        phraseOffset.current = { x, y };
        updateSizeOfPhrase(id, { width, height })
    }

    const animatedButtonStyles = useAnimatedStyle(() => {
        return {
            position: 'absolute',
            top: translateY.value,
            left: translateX.value
        }
    })

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;
        },
        onEnd: (event, context) => {
            runOnJS(findPhrasePosition)(id, getSelectedIndex, {
                x: event.translationX + selected[getSelectedIndex].offsetX,
                y: event.translationY + selected[getSelectedIndex].offsetY
            });
        }
    })

    const onPress = () => updatePhraseSelected(id, getSelectedIndex);

    return (
        <View onLayout={onLayout}>
            <GestureHandlerRootView>
                <View style={[styles.phrase_item, { backgroundColor: 'lightgray' }]}>
                    <View style={[styles.phrase_item_txt, { opacity: 0 }]}>
                        {item.content.map((it, idx) => {
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
                </View>
                <PanGestureHandler
                    enabled={isSelected}
                    maxPointers={1}
                    onGestureEvent={onGestureEvent}>
                    <AnimatedTouchable
                        onPress={onPress}
                        style={[
                            styles.phrase_item,
                            animatedButtonStyles
                        ]}>
                        {item.content.map((it, idx) => {
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
                    </AnimatedTouchable>
                </PanGestureHandler>
            </GestureHandlerRootView>
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
    const [selected, setSelected] = useState([]);
    const refConfigOfPhrases = useRef({});

    const nextButtonLabel = questionStep == 1 && correct_options ? 'Kiểm tra' : btn_skip_text;
    const suggestButtonLabel = questionStep == 2 ? 'Xem lại lý thuyết' : btn_suggestion_text;

    useEffect(() => {
        if (selected.length > 0 && questionStep != 1) {
            setQuestionStep(1)
        }
    }, [selected])


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

    const _renderPhraseList = (item, index) => (
        <PhraseItem
            key={index}
            item={item}
            index={index}
            selected={selected}
            setSelected={setSelected}
            findPhrasePosition={findPhrasePosition}
            updatePhraseSelected={updatePhraseSelected}
            updateSizeOfPhrase={updateSizeOfPhrase} />
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

    const updateSizeOfPhrase = (id, layout) => {
        refConfigOfPhrases.current[id] = { width: layout.width, height: layout.height };
    }

    const updatePhraseSelected = (id, selectedIndex) => {
        let newState = [...selected];
        selectedIndex == -1 ?
            newState.push({ id, offsetX: 0, offsetY: 0 })
            :
            newState.splice(selectedIndex, 1);

        let offsetX = 8;
        let offsetY = 12;
        const phraseHeight = refConfigOfPhrases.current[id].height;
        newState.map((item, index) => {
            if (index == 0) {
                newState[index] = { ...item, offsetX: 8, offsetY: 12 };
            } else {
                if (offsetX + refConfigOfPhrases.current[item.id].width > (width - 12)) {
                    offsetX = 8;
                    offsetY += phraseHeight;
                }
                newState[index] = { ...item, offsetX, offsetY }
            }
            offsetX += refConfigOfPhrases.current[item.id].width;
        })
        setSelected(newState);
    }

    const findPhrasePosition = (id, selectedIndex, position) => {
        const { x, y } = position;
        const positionX = x + (refConfigOfPhrases.current[id].width / 2);
        const positionY = y + (refConfigOfPhrases.current[id].height / 2);
        let minDistance = 1000;
        let minItem = - 1;
        selected.map((item, index) => {
            const distance = Math.sqrt(Math.pow((item.offsetX - positionX), 2) + Math.pow((item.offsetY - positionY), 2));
            if (distance < minDistance) {
                minDistance = distance;
                minItem = index;
            }
            return null;
        })

        let offsetX = 8;
        let offsetY = 12;
        const phraseHeight = refConfigOfPhrases.current[id].height;
        let newState = [...selected];
        if (minDistance > 150) {
            // DO NOTHING
        }
        else if (
            positionX >= selected[selected.length - 1].offsetX
            && positionY >= selected[selected.length - 1].offsetY
        ) {
            newState.splice(selectedIndex, 1);
            newState.push(selected[selectedIndex]);
        }
        else {
            newState.splice(selectedIndex, 1);
            newState.splice(minItem, 0, selected[selectedIndex]);
        }
        newState.map((item, index) => {
            if (index == 0) {
                newState[index] = { ...item, offsetX: 8, offsetY: 12 };
            } else {
                if (offsetX + refConfigOfPhrases.current[item.id].width > (width - 12)) {
                    offsetX = 8;
                    offsetY += phraseHeight;
                }
                newState[index] = { ...item, offsetX, offsetY }
            }
            offsetX += refConfigOfPhrases.current[item.id].width;
        })
        setSelected(newState);
    }

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
                <View style={[styles.display, { width: DISPLAY_WIDTH, height: DISPLAY_HEIGHT }]}>
                    <View style={styles.display_absolute}>
                        <View style={styles.display_line}>
                            <View style={[styles.phrase_item, { opacity: 0 }]}>
                                <Text style={styles.phrase_item_txt}>test</Text>
                            </View>
                        </View>
                        <View style={styles.display_line}>
                            <View style={[styles.phrase_item, { opacity: 0 }]}>
                                <Text style={styles.phrase_item_txt}>test</Text>
                            </View>
                        </View>
                        <View style={styles.display_line}>
                            <View style={[styles.phrase_item, { opacity: 0 }]}>
                                <Text style={styles.phrase_item_txt}>test</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.phrase_list}>
                    {options.map(_renderPhraseList)}
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