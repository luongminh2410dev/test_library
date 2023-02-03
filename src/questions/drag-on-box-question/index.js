import React, { useEffect, useRef, useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Animated, { CurvedTransition, EntryExitTransition, FadeIn, FadeInRight, FadeInUp, FadeOut, FadeOutUp, FadingTransition, JumpingTransition, SequencedTransition, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
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
            {item.content.map(_renderContent)}
        </AnimatedTouchable>
    )
}

const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);
const DragOnBoxQuestion = (props) => {
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
        guide_touch, question: _question, boxList,
        difficult_level, solution_suggestion,
        options, correct_options, solution_detail
    } = question;

    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);
    const [currentOption, setCurrentOption] = useState(null);
    const [pairedList, setPairedList] = useState({})
    const refAnswers = useRef({});

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
                // CHECK RESULT
                const isCorrect = !correct_options.find(item => {
                    return pairedList[item.id] == undefined || item.answer.index != pairedList[item.id];
                })
                console.log(isCorrect ? 'Chính xác' : 'Không chính xác');
                break;
            case 2:
                onFinishQuestion();
                break;
            default:
                break;
        }
    }

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
            // if remove all answer
            Object.keys(newPaired).length == 0 && setQuestionStep(0);
        }

        if (!data) return null;
        return (
            <AnimatedTouchable
                key={idx}
                entering={FadeInUp}
                layout={SequencedTransition}
                onPress={onPress}
                style={styles.option_item}>
                {data.content.map(_renderContent)}
            </AnimatedTouchable>
        )
    }

    const _renderBoxItem = (item, index) => {
        const itemsOnBox = Object.keys(pairedList).filter(it => pairedList[it] == item.index);

        const onPress = () => {
            if (currentOption) {
                setPairedList({ ...pairedList, [currentOption]: item.index })
                setCurrentOption(null);
                questionStep == 0 && setQuestionStep(1);
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
                                    {it.content.map(_renderContent)}
                                </View>
                            )
                        }
                        return null;
                    })}
                </View>
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
            <View
                style={[styles.option_container, optionContainerStyles]}
                pointerEvents={(displayMode == 'result' || questionStep == 2) ? 'none' : 'auto'}
            >
                {options.map(_renderOptionItem)}
            </View>
            <View style={styles.box_list}>
                {boxList.map(_renderBoxItem)}
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
                    <View style={styles.correct_result} pointerEvents='none'>
                        {boxList.map(_renderResult)}
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

export default DragOnBoxQuestion