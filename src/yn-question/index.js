import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Alert, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import RenderHtml from 'react-native-render-html';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const HtmlContent = (props) => {
    const { content, color } = props;
    return (
        <RenderHtml source={{ html: content }} contentWidth={width} baseStyle={{ color }} />
    )
}

// nextBtnState: 0 - chua chon dap an, 1 - da chon dap an, 2 - da hoan thanh cau hoi
const YNQuestion = (props) => {
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
        actived_option_btn = {},
        actived_option_title = {},
        default_option_btn: defaultOptionButtonStyles = {},
        default_option_title: defaultOptionTitleStyles = {},
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

    const [currentAnswer, setCurrentAnswer] = useState(-1);
    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);

    const nextButtonLabel = questionStep == 1 ? 'Kiểm tra' : btn_skip_text;
    const suggestButtonLabel = questionStep == 2 ? 'Xem lại lý thuyết' : btn_suggestion_text;

    const activeButtonStyles = Object.assign({}, { borderColor: primaryColor, backgroundColor: primaryColor }, actived_option_btn);
    const activeTxtStyles = Object.assign({}, styles.active_answer_btn_txt, actived_option_title);

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
                return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: i.content }} />
        }
    }

    const _renderOptionItem = (i, idx) => {
        const onPress = () => {
            onSelectOption(i)
            setCurrentAnswer(idx)
            setQuestionStep(1)
        }
        return (
            <TouchableOpacity
                key={idx}
                onPress={onPress}
                disabled={questionStep >= 2}
                style={[styles.answer_btn, defaultOptionButtonStyles, currentAnswer == idx && activeButtonStyles]}>
                {i.option_content.map((it, ix) => {
                    switch (it.type) {
                        case 'html':
                            return (
                                <Text
                                    key={ix}
                                    style={[
                                        styles.answer_btn_txt,
                                        defaultOptionTitleStyles,
                                        currentAnswer == idx && activeTxtStyles
                                    ]}>
                                    {it.content}
                                </Text>
                            )
                        case 'image':
                            return <Image key={ix} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                    }
                })}
            </TouchableOpacity>
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

    const _renderOptionUnaccesible = (i, idx) => {
        return (
            <View
                key={idx}
                style={[styles.answer_btn, correct_options == i.id && activeButtonStyles]}>
                {i.option_content.map((it, ix) => {
                    switch (it.type) {
                        case 'html':
                            return <Text key={ix} style={[styles.answer_btn_txt, correct_options == i.id && activeTxtStyles]}>{it.content}</Text>
                        case 'image':
                            return <Image key={ix} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                    }
                })}
            </View>
        )
    }

    const _renderSolutionDetail = (i, idx) => {
        switch (i.type) {
            case 'html':
                return <HtmlContent key={idx} content={i.content} color={textColor} />
            case 'image':
                return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: i.content }} />
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
                {getCornerComponent()}
            </View>
            {getTopComponent()}
            <Text style={[styles.guide_label, { color: primaryColor }, questionTypeStyles]}>{guide_touch}</Text>
            <View style={[styles.question_view, questionTitleStyles]}>
                {_question.map(_renderQuestion)}
            </View>
            <View style={[styles.row, optionContainerStyles]} pointerEvents={displayMode == 'result' ? 'none' : 'auto'}>
                {options.map(_renderOptionItem)}
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
                questionStep == 2 &&
                <View style={[styles.result_container, resultContainerStyles]}>
                    <Text style={[styles.suggestion_label, { color: subColor }]}>{label_result_txt}</Text>
                    <View style={styles.row}>
                        {options.map(_renderOptionUnaccesible)}
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

YNQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    primaryColor: PropTypes.string,
    customConfig: PropTypes.shape({
        label_question: PropTypes.string,
        label_suggestion: PropTypes.string,
        label_solution_detail: PropTypes.string,
        label_result_txt: PropTypes.string,
        btn_suggestion_text: PropTypes.string,
        btn_skip_text: PropTypes.string,
        popup_confirm_skip: PropTypes.string,
    }),
    customStyles: PropTypes.shape({
        primaryColor: PropTypes.string,
        subColor: PropTypes.string,
        textColor: PropTypes.string,
        container: PropTypes.object,
        question_type: PropTypes.object,
        question_title: PropTypes.object,
        options_container: PropTypes.object,
        actived_option_btn: PropTypes.object,
        actived_option_title: PropTypes.object,
        default_option_btn: PropTypes.object,
        default_option_title: PropTypes.object,
        result_container: PropTypes.object,
        solution_detail: PropTypes.object,
        solution_suggestion: PropTypes.object,
        solution_detail_btn: PropTypes.object,
        solution_detail_btn_title: PropTypes.object,
    }),
    displayMode: PropTypes.oneOf(['default', 'result', 'preview']),
    getTopComponent: PropTypes.func,
    getMiddleComponent: PropTypes.func,
    getBottomComponent: PropTypes.func,
    getCornerComponent: PropTypes.func,
    customLevelComponent: PropTypes.func,
    onSelectOption: PropTypes.func,
    onToggleSuggestion: PropTypes.func,
    onSkipQuestion: PropTypes.func,
    onFinishQuestion: PropTypes.func,
    onToggleSolutionDetail: PropTypes.func,
}

YNQuestion.defaultProps = {
    question: {},
    customConfig: {},
    customStyles: {},
    displayMode: 'default',
    getTopComponent: () => null,
    getMiddleComponent: () => null,
    getBottomComponent: () => null,
    getCornerComponent: () => null,
    customLevelComponent: () => null,
    onSelectOption: () => { },
    onToggleSuggestion: () => { },
    onSkipQuestion: () => { },
    onFinishQuestion: () => { },
    onToggleSolutionDetail: () => { },
}

export default YNQuestion