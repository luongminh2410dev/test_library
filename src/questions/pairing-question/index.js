import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Animated, { useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import HtmlContent from '../../components/html-content';
import { objectMove, listToObject } from '../../utils/functions';
import styles from './styles';

const { width, height } = Dimensions.get('screen');
const OPTION_WIDTH = (width / 2) - 18;
const OPTION_HEIGHT = (OPTION_WIDTH / 1.3) < 120 ? 120 : (OPTION_WIDTH / 1.3);

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
// nextBtnState: 0 - chua chon dap an, 1 - da chon dap an, 2 - da hoan thanh cau hoi
const PairingQuestion = (props) => {
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
        default_target_option: defaultTargetOptionStyles = {},
        default_source_option: defaultSourceOptionStyles = {},
        default_option_txt: defaultOptionTextStyles = {},
        active_option_btn = {},
        active_option_txt = {},
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

    const { targets, sources } = options;

    const [currentTarget, setCurrentTarget] = useState(-1);
    const [currentSource, setCurrentSource] = useState(-1);
    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);
    const [pairedList, setPairedList] = useState([]);

    const targetPositions = useSharedValue(listToObject(targets));
    const sourcePositions = useSharedValue(listToObject(sources));

    const nextButtonLabel = questionStep == 1 ? 'Kiểm tra' : btn_skip_text;
    const suggestButtonLabel = questionStep == 2 ? 'Xem lại lý thuyết' : btn_suggestion_text;

    const activeButtonStyles = Object.assign({}, { borderColor: primaryColor, }, active_option_btn);
    const activeTxtStyles = Object.assign({}, styles.active_answer_btn_txt, active_option_txt);

    useEffect(() => {
        if (questionStep == 2) {
            const isIncorrect = correct_options.find(item => {
                const pairedItem = pairedList.find(it => it.id == item.id);
                if (pairedItem) {
                    return item.answer != pairedItem.answer;
                }
                return true;
            })
            console.log(isIncorrect ? 'Không chính xác' : 'Chính xác');
        }
    }, [questionStep])


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
                        onPress: () => {
                            onSkipQuestion()
                        }
                    },
                    {
                        style: 'destructive',
                        text: btn_cancel
                    },
                ])
                break;
            case 1:
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

    const _renderQuestion = (i, idx) => {
        switch (i.type) {
            case 'html':
                return <HtmlContent key={idx} content={i.content} color={textColor} />
            case 'image':
                return <Image key={idx} resizeMode='contain' style={{ width: 200, height: 150 }} source={{ uri: i.url }} />
        }
    }

    const _renderTargetOption = (i, idx) => {
        const position = useSharedValue(idx);
        const getIndex = pairedList.findIndex(it => it.id == i.id);
        const isActive = getIndex != -1;

        const animatedStyles = useAnimatedStyle(() => {
            const top = OPTION_HEIGHT * position.value + position.value * 12;
            return {
                width: OPTION_WIDTH,
                top,
                right: isActive ? 0 : 6,
            };
        })

        useAnimatedReaction(
            () => targetPositions.value[i.id],
            (
                currentPosition, previousPosition) => {
                if (currentPosition !== previousPosition) {
                    position.value = withTiming(currentPosition)
                }
            });

        const onPress = () => {
            if (isActive) {
                const newArray = [...pairedList];
                newArray.splice(getIndex, 1);
                const findSourceIndex = sources.findIndex(i => i.index == pairedList[getIndex].answer);
                targetPositions.value = objectMove(targetPositions.value, targetPositions.value[i.id], newArray.length);
                sourcePositions.value = objectMove(sourcePositions.value, sourcePositions.value[sources[findSourceIndex].id], newArray.length);
                onSelectOption(newArray)
                setPairedList(newArray)
                questionStep != 0 && setQuestionStep(0);
            }
            else {
                if (currentTarget == i.id) {
                    setCurrentTarget(-1);
                }
                else if (currentSource == -1) {
                    setCurrentTarget(i.id)
                }
                else {
                    targetPositions.value = objectMove(targetPositions.value, targetPositions.value[i.id], pairedList.length);
                    sourcePositions.value = objectMove(sourcePositions.value, sourcePositions.value[sources[currentSource].id], pairedList.length);
                    if (pairedList.length == targets.length - 1) {
                        setQuestionStep(1)
                    }
                    onSelectOption([...pairedList, { id: i.id, answer: currentSource }])
                    setPairedList([...pairedList, { id: i.id, answer: currentSource }]);
                    setCurrentSource(-1);
                    setCurrentTarget(-1);
                }
            }
        }

        return (
            <AnimatedTouchable
                key={i.id}
                onPress={onPress}
                disabled={questionStep >= 2}
                style={[styles.target_item, animatedStyles, defaultTargetOptionStyles, currentTarget == i.id && activeButtonStyles]}>
                {i.option_content.map((it, ix) => {
                    switch (it.type) {
                        case 'html':
                            return (
                                <HtmlContent
                                    key={ix}
                                    content={it.content}
                                    style={[
                                        styles.answer_btn_txt,
                                        defaultOptionTextStyles,
                                        currentTarget == idx && activeTxtStyles
                                    ]} />
                            )
                        case 'image':
                            return <Image key={ix} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                    }
                })}
            </AnimatedTouchable>
        )
    }

    const _renderSourceOption = (i, idx) => {
        const position = useSharedValue(idx);
        const getIndex = pairedList.findIndex(it => it.answer == i.index);
        const isActive = getIndex != -1;

        const animatedStyles = useAnimatedStyle(() => {
            const top = OPTION_HEIGHT * position.value + position.value * 12;
            return {
                width: OPTION_WIDTH,
                top,
                left: isActive ? 0 : 6
            };
        })

        useAnimatedReaction(
            () => sourcePositions.value[i.id],
            (currentPosition, previousPosition) => {
                if (currentPosition !== previousPosition) {
                    position.value = withTiming(currentPosition)
                }
            });

        const onPress = () => {
            if (isActive) {
                const newArray = [...pairedList];
                newArray.splice(getIndex, 1);
                targetPositions.value = objectMove(targetPositions.value, targetPositions.value[pairedList[getIndex].id], newArray.length);
                sourcePositions.value = objectMove(sourcePositions.value, sourcePositions.value[i.id], newArray.length);
                onSelectOption(newArray)
                setPairedList(newArray)
                questionStep != 0 && setQuestionStep(0);
            }
            else {
                if (currentSource == i.index) {
                    setCurrentSource(-1)
                }
                else if (currentTarget == -1) {
                    setCurrentSource(i.index)
                }
                else {
                    targetPositions.value = objectMove(targetPositions.value, targetPositions.value[currentTarget], pairedList.length);
                    sourcePositions.value = objectMove(sourcePositions.value, sourcePositions.value[i.id], pairedList.length);
                    onSelectOption([...pairedList, { id: currentTarget, answer: i.index }])
                    setPairedList([...pairedList, { id: currentTarget, answer: i.index }])
                    setCurrentSource(-1);
                    setCurrentTarget(-1);
                    if (pairedList.length == sources.length - 1) {
                        setQuestionStep(1)
                    }
                }
            }
        }
        return (
            <AnimatedTouchable
                key={idx}
                onPress={onPress}
                disabled={questionStep >= 2}
                style={[styles.source_item, animatedStyles, defaultSourceOptionStyles, currentSource == i.index && activeButtonStyles]}>
                {i.option_content.map((it, ix) => {
                    switch (it.type) {
                        case 'html':
                            return (
                                <HtmlContent
                                    key={ix}
                                    content={it.content}
                                    style={[
                                        styles.answer_btn_txt,
                                        defaultOptionTextStyles,
                                        currentSource == i.index && activeTxtStyles
                                    ]} />
                            )
                        case 'image':
                            return <Image key={ix} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                    }
                })}
            </AnimatedTouchable>
        )
    }

    const _renderSuggestion = (i, idx) => {
        switch (i.type) {
            case 'html':
                return <HtmlContent key={idx} content={i.content} color={textColor} />
            case 'image':
                return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: i.content }} />
        }
    }

    const _renderCorrectOptions = (item, index) => {
        const targetIndex = targets.findIndex(i => i.id == item.id);
        const targetData = targets[targetIndex].option_content;

        const sourceIndex = sources.findIndex(i => i.index == item.answer);
        const sourceData = sources[sourceIndex].option_content;

        return (
            <View key={index} style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                <View
                    style={[styles.result_item, { width: OPTION_WIDTH, backgroundColor: '#f1ead8' }, defaultTargetOptionStyles]}>
                    {targetData.map((it, idx) => {
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
                                return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                        }
                    })}
                </View>
                <View
                    style={[styles.result_item, { width: OPTION_WIDTH }, defaultSourceOptionStyles]}>
                    {sourceData.map((it, idx) => {
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
                                return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                        }
                    })}
                </View>
            </View>
        )
    }

    const _renderSolutionDetail = (i, idx) => {
        switch (i.type) {
            case 'html':
                return <HtmlContent key={idx} content={i.content} color={textColor} />
            case 'image':
                return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: i.uri }} />
        }
    }

    if (!question) return null;
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
                {_question.map(_renderQuestion)}
            </View>
            <View style={[styles.pairing_options, { height: OPTION_HEIGHT * sources.length + 24 }, optionContainerStyles]} pointerEvents={displayMode == 'result' ? 'none' : 'auto'}>
                <View style={{ position: 'relative', flex: 1, }}>
                    {targets.map(_renderTargetOption)}
                </View>
                <View style={{ position: 'relative', flex: 1, alignItems: 'flex-end' }}>
                    {sources.map(_renderSourceOption)}
                </View>
            </View>
            <Collapsible
                style={styles.suggestion_collapsible}
                collapsed={suggestionCollapsed}>
                <Text style={[styles.suggestion_label, { color: subColor }]}>{label_suggestion}</Text>
                {solution_suggestion.map(_renderSuggestion)}
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
                    <View style={{ marginTop: 12 }}>
                        {correct_options.map(_renderCorrectOptions)}
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
                            {solution_suggestion.map(_renderSuggestion)}
                        </View>
                        <View style={solutionDetailStyles}>
                            <Text style={[styles.suggestion_label, { color: subColor }]}>{label_solution_detail}</Text>
                            <View style={{ marginTop: 12 }}>
                                {solution_detail.map(_renderSolutionDetail)}
                            </View>
                        </View>
                    </Collapsible>
                </View>
            }
        </View>
    )
}

export default PairingQuestion