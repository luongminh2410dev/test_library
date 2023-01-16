import React, { useEffect, useRef, useState } from 'react';
import { Alert, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const { width, height } = Dimensions.get('screen');
const OPTION_WIDTH = (width / 2) - 18;
const OPTION_HEIGHT = (OPTION_WIDTH / 1.3) < 120 ? 120 : (OPTION_WIDTH / 1.3);
const PADDING_VIEW = 12;

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

    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);

    const [currentTarget, setCurrentTarget] = useState(-1);
    const [currentSource, setCurrentSource] = useState(-1);
    const [pairedList, setPairedList] = useState([]);
    const refPositions = useRef({ targets: {}, sources: {} });

    const nextButtonLabel = questionStep == 1 ? 'Kiểm tra' : btn_skip_text;
    const suggestButtonLabel = questionStep == 2 ? 'Xem lại lý thuyết' : btn_suggestion_text;

    const activeButtonStyles = Object.assign({}, { borderColor: primaryColor, }, active_option_btn);
    const activeTxtStyles = Object.assign({}, styles.active_answer_btn_txt, active_option_txt);

    useEffect(() => {
        if (questionStep == 2) {
            const isIncorrect = correct_options.find(item => {
                const pairedItem = pairedList.find(it => it.id == item.id);
                if (pairedItem) {
                    const pairedAnswer = sources.find(it => it.id == pairedItem.answer);
                    return item.answer != pairedAnswer?.index;
                }
                return true;
            })
            console.log(isIncorrect ? 'Không chính xác' : 'Chính xác');
        }
    }, [questionStep])

    useEffect(() => {
        if (pairedList.length == 0) {
            targets.map((i, idx) => {
                refPositions.current.targets[i.id] = idx;
                return;
            })
            sources.map((i, idx) => {
                refPositions.current.sources[i.id] = idx;
                return;
            })
        }
        // else {
        //     targets.map((it, idx) => {
        //         const getIndex = pairedList.findIndex(i => i.id == it.id);
        //         const oldIndex = refPositions.current.targets[it.id];
        //         refPositions.current.targets[it.id] =
        //             getIndex != -1 ?
        //                 getIndex
        //                 :
        //                 (
        //                     pairedList.length >= oldIndex ?
        //                         oldIndex + 1
        //                         :
        //                         oldIndex
        //                 );
        //         return;
        //     })
        //     sources.map((it, idx) => {
        //         const getIndex = pairedList.findIndex(i => i.answer == it.id);
        //         const oldIndex = refPositions.current.sources[it.id];
        //         refPositions.current.sources[it.id] =
        //             getIndex != -1 ?
        //                 getIndex
        //                 :
        //                 (
        //                     pairedList.length >= oldIndex ?
        //                         oldIndex + 1
        //                         :
        //                         oldIndex
        //                 );
        //         return;
        //     })
        // }
    }, [])

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

    const shortOptions = (target_id, source_id, isPairing) => {
        if (isPairing) {
            targets.map(item => {
                if (
                    item.id != target_id
                    && refPositions.current.targets[item.id] <= refPositions.current.targets[target_id]
                    && refPositions.current.targets[item.id] >= pairedList.length
                ) {
                    refPositions.current.targets[item.id] += 1;
                }
                return;
            })
            sources.map(item => {
                if (
                    item.id != source_id
                    && refPositions.current.sources[item.id] <= refPositions.current.sources[source_id]
                    && refPositions.current.sources[item.id] >= pairedList.length
                ) {
                    refPositions.current.sources[item.id] += 1;
                }
                return;
            })
            refPositions.current.targets[target_id] = pairedList.length;
            refPositions.current.sources[source_id] = pairedList.length;
        }
        else {
            targets.map(item => {
                if (
                    item.id != target_id
                    && refPositions.current.targets[item.id] > refPositions.current.targets[target_id]
                    && refPositions.current.targets[item.id] < pairedList.length
                ) {
                    refPositions.current.targets[item.id] -= 1;
                }
                return;
            })
            sources.map(item => {
                if (
                    item.id != source_id
                    && refPositions.current.sources[item.id] > refPositions.current.sources[source_id]
                    && refPositions.current.sources[item.id] < pairedList.length
                ) {
                    refPositions.current.sources[item.id] -= 1;
                }
                return;
            })
            refPositions.current.targets[target_id] = pairedList.length - 1;
            refPositions.current.sources[source_id] = pairedList.length - 1;
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
                        style={{ width: 200, height: 150 }}
                        source={{ uri: item.url }} />
                )
        }
    }

    const _renderTargetOption = (item, index) => {
        const isActive = currentTarget == item.id;
        const getIndex = pairedList.findIndex(it => it.id == item.id);
        const isPaired = getIndex != -1;

        const offsetX = useSharedValue(PADDING_VIEW);
        const offsetY = useSharedValue(OPTION_HEIGHT * index + index * PADDING_VIEW);

        const animatedStyles = useAnimatedStyle(() => {
            return {
                width: OPTION_WIDTH,
                top: offsetY.value,
                left: offsetX.value,
            };
        })

        useEffect(() => {
            moveToPosition(refPositions.current.targets[item.id], isPaired)
        }, [pairedList])

        const onPress = () => {
            if (isPaired) {
                const newArray = [...pairedList];
                const unpairingItem = newArray.splice(getIndex, 1);
                shortOptions(unpairingItem[0].id, unpairingItem[0].answer, false);
                setPairedList(newArray);
                questionStep != 0 && setQuestionStep(0);
            }
            else {
                if (currentTarget == item.id) {
                    setCurrentTarget(-1);
                }
                else if (currentSource == -1) {
                    setCurrentTarget(item.id)
                }
                else {
                    shortOptions(item.id, currentSource, true);
                    const newArray = [...pairedList, { id: item.id, answer: currentSource }];
                    onSelectOption(newArray);
                    setPairedList(newArray);
                    setCurrentSource(-1);
                    setCurrentTarget(-1);
                    if (newArray.length == targets.length) {
                        setQuestionStep(1)
                    }
                }
            }
        }

        const moveToPosition = (position, state) => {
            offsetX.value = withTiming(state ? PADDING_VIEW * 1.5 : PADDING_VIEW);
            offsetY.value = withTiming(OPTION_HEIGHT * position + position * PADDING_VIEW);
        }

        return (
            <AnimatedTouchable
                key={item.id}
                onPress={onPress}
                disabled={questionStep >= 2}
                style={[styles.target_item, animatedStyles, defaultTargetOptionStyles, isActive && activeButtonStyles]}>
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
                            return <Image key={idx} style={{ width: (width - PADDING_VIEW * 2) / 2, height: 150 }} source={{ uri: it.content }} />
                    }
                })}
            </AnimatedTouchable>
        )
    }

    const _renderSourceOption = (item, index) => {
        const isActive = currentSource == item.id;
        const getIndex = pairedList.findIndex(it => it.answer == item.id);
        const isPaired = getIndex != -1;

        const offsetX = useSharedValue((width / 2) + PADDING_VIEW)
        const offsetY = useSharedValue(OPTION_HEIGHT * index + index * PADDING_VIEW)

        const animatedStyles = useAnimatedStyle(() => {
            return {
                width: OPTION_WIDTH,
                top: offsetY.value,
                left: offsetX.value
            };
        })

        useEffect(() => {
            moveToPosition(refPositions.current.sources[item.id], isPaired);
        }, [pairedList])

        const onPress = () => {
            if (isPaired) {
                const newArray = [...pairedList];
                const unpairingItem = newArray.splice(getIndex, 1);
                shortOptions(unpairingItem[0].id, unpairingItem[0].answer, false);
                setPairedList(newArray);
                questionStep != 0 && setQuestionStep(0);
            }
            else {
                if (currentSource == item.id) {
                    setCurrentSource(-1)
                }
                else if (currentTarget == -1) {
                    setCurrentSource(item.id)
                }
                else {
                    shortOptions(currentTarget, item.id, true);
                    const newArray = [...pairedList, { id: currentTarget, answer: item.id }];
                    setPairedList(newArray);
                    setCurrentSource(-1);
                    setCurrentTarget(-1);
                    if (pairedList.length == sources.length - 1) {
                        setQuestionStep(1)
                    }
                }
            }
        }

        const moveToPosition = (position, state) => {
            offsetX.value = withTiming(state ? (width / 2) : ((width / 2) + PADDING_VIEW / 2));
            offsetY.value = withTiming(OPTION_HEIGHT * position + position * PADDING_VIEW);
        }

        return (
            <AnimatedTouchable
                key={index}
                onPress={onPress}
                disabled={questionStep >= 2}
                style={[styles.source_item, animatedStyles, defaultSourceOptionStyles, isActive && activeButtonStyles]}>
                {item.option_content.map((it, ix) => {
                    switch (it.type) {
                        case 'html':
                            return (
                                <HtmlContent
                                    key={ix}
                                    content={it.content}
                                    style={[
                                        styles.answer_btn_txt,
                                        defaultOptionTextStyles,
                                        isActive && activeTxtStyles
                                    ]} />
                            )
                        case 'image':
                            return <Image key={ix} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                    }
                })}
            </AnimatedTouchable>
        )
    }

    const _renderCorrectOptions = (item, index) => {
        const targetData = targets.find(i => i.id == item.id);
        const sourceData = sources.find(i => i.index == item.answer);

        return (
            <View key={index} style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                <View
                    style={[styles.result_item, { width: OPTION_WIDTH, backgroundColor: '#f1ead8' }, defaultTargetOptionStyles]}>
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
                                return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                        }
                    })}
                </View>
                <View
                    style={[styles.result_item, { width: OPTION_WIDTH }, defaultSourceOptionStyles]}>
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
                                return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                        }
                    })}
                </View>
            </View>
        )
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
                {_question.map(_renderContent)}
            </View>
            <View style={[styles.pairing_options, { height: OPTION_HEIGHT * sources.length + 24 }, optionContainerStyles]} pointerEvents={displayMode == 'result' ? 'none' : 'auto'}>
                {targets.map(_renderTargetOption)}
                {sources.map(_renderSourceOption)}
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

export default PairingQuestion