import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View, Alert } from 'react-native';
import Collapsible from 'react-native-collapsible';
import RenderHtml from 'react-native-render-html';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const { width, height } = Dimensions.get('window');

// nextBtnState: 0 - chua chon dap an, 1 - da chon dap an, 2 - da hoan thanh cau hoi
const YNQuestion = (props) => {
    const {
        question, customConfig, customStyles, displayMode,
        getTopComponent, getMiddleComponent, getBottomComponent,
        getCornerComponent,
        onSelectOption
    } = props;

    const {
        label_suggestion = 'Phương pháp giải',
        label_solution_detail = 'Lời giải của GV Vungoi.vn',
        label_result_txt = 'Đáp án của GV Vungoi.vn',
        btn_suggestion_text = 'Gợi ý',
        btn_skip_text = 'Câu tiếp theo',
        popup_confirm_skip = {},
    } = customConfig;

    const {
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
    } = customStyles;

    const {
        text_label, guide_touch, question: _question,
        difficult_level, solution_suggestion,
        options, correct_options, solution_detail
    } = question;

    const [currentAnswer, setCurrentAnswer] = useState(-1);
    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);

    const nextButtonLabel = questionStep == 1 ? 'Kiểm tra' : btn_skip_text;
    const suggestButtonLabel = questionStep == 2 ? 'Xem lại lý thuyết' : btn_suggestion_text;

    const activeButtonStyles = Object.assign({}, styles.active_answer_btn, actived_option_btn);
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
            setSuggestionCollapsed(!suggestionCollapsed)
        }
    }

    const toggleSolutionDetail = () => setSolutionCollapsed(!solutionCollapsed)

    const onNextButtonPress = () => {
        const {
            title = 'Bạn chưa chọn câu trả lời!',
            content = 'Bạn muốn bỏ qua câu hỏi này?',
            btn_ok = 'Đồng ý',
            btn_cancel = 'Huỷ'
        } = popup_confirm_skip;
        switch (questionStep) {
            case 0:
                Alert.alert(title, content, [
                    {
                        style: 'default',
                        text: btn_ok,
                        onPress: () => { console.log('next question'); }
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
                console.log('next question')
                break;
            default:
                break;
        }
    }

    if (!question) return null;
    return (
        <View style={[styles.container, containerStyles]} pointerEvents={displayMode == 'preview' ? 'none' : 'auto'}>
            <View style={styles.question_label}>
                <Text style={styles.question_label_txt}>{text_label}: {getDifficultQuestion()}</Text>
                {getCornerComponent()}
            </View>
            {getTopComponent()}
            <Text style={[styles.guide_label, questionTypeStyles]}>{guide_touch}</Text>
            <View style={[styles.question_view, questionTitleStyles]}>
                {_question.map((i, idx) => {
                    switch (i.type) {
                        case 'html':
                            return <RenderHtml key={idx} source={{ html: i.content }} contentWidth={width} />
                        case 'image':
                            return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: i.content }} />
                    }
                })}
            </View>
            <View style={[styles.row, optionContainerStyles]}>
                {options.map((i, idx) => {
                    const onPress = () => {
                        onSelectOption(i)
                        setCurrentAnswer(idx)
                        setQuestionStep(1)
                    }
                    const renderAnswerContent = () => {
                        return i.option_content.map((it, ix) => {
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
                        })

                    }
                    return (
                        <TouchableOpacity
                            key={idx}
                            onPress={onPress}
                            disabled={questionStep >= 2}
                            style={[styles.answer_btn, defaultOptionButtonStyles, currentAnswer == idx && activeButtonStyles]}>
                            {renderAnswerContent()}
                        </TouchableOpacity>
                    )
                })}
            </View>
            <Collapsible
                style={styles.suggestion_collapsible}
                collapsed={suggestionCollapsed}>
                <Text style={styles.suggestion_label}>{label_suggestion}</Text>
                {solution_suggestion.map((i, idx) => {
                    switch (i.type) {
                        case 'html':
                            return <RenderHtml key={idx} source={{ html: i.content }} contentWidth={width} />
                        case 'image':
                            return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: i.content }} />
                    }
                })}
            </Collapsible>
            <View style={styles.row}>
                <TouchableOpacity onPress={toggleSuggestionVisible} style={styles.suggestion_btn}>
                    {
                        questionStep != 2 && <View style={{ marginRight: 8 }}>
                            <Feather name='sun' size={20} color='#419e01' />
                        </View>
                    }
                    <Text style={styles.suggestion_txt}>{suggestButtonLabel}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onNextButtonPress} style={styles.next_question_btn}>
                    <Text style={styles.next_question_txt}>{nextButtonLabel}</Text>
                    <Feather name='chevrons-right' size={20} color='white' />
                </TouchableOpacity>
            </View>
            {getMiddleComponent()}
            {
                questionStep == 2 &&
                <View style={[styles.result_container, resultContainerStyles]}>
                    <Text style={styles.suggestion_label}>{label_result_txt}</Text>
                    <View style={styles.row}>
                        {options.map((i, idx) => {
                            const renderAnswerContent = () => {
                                return i.option_content.map((it, ix) => {
                                    switch (it.type) {
                                        case 'html':
                                            return <Text key={ix} style={[styles.answer_btn_txt, correct_options == i.id && activeTxtStyles]}>{it.content}</Text>
                                        case 'image':
                                            return <Image key={ix} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                                    }
                                })

                            }
                            return (
                                <View
                                    key={idx}
                                    style={[styles.answer_btn, correct_options == i.id && activeButtonStyles]}>
                                    {renderAnswerContent()}
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.solution_detail_view}>
                        <TouchableOpacity onPress={toggleSolutionDetail} style={styles.solution_detail_btn}>
                            <Text style={{ fontSize: 15, }}>Xem lời giải</Text>
                        </TouchableOpacity>
                    </View>
                    {getBottomComponent()}
                    <Collapsible collapsed={solutionCollapsed} >
                        <View style={solutionSuggestionStyles}>
                            <Text style={styles.suggestion_label}>{label_suggestion}</Text>
                            {solution_suggestion.map((i, idx) => {
                                switch (i.type) {
                                    case 'html':
                                        return <RenderHtml key={idx} source={{ html: i.content }} contentWidth={width} />
                                    case 'image':
                                        return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: i.content }} />
                                }
                            })}
                        </View>
                        <View style={solutionDetailStyles}>
                            <Text style={styles.suggestion_label}>{label_solution_detail}</Text>
                            <View style={{ marginTop: 12 }}>
                                {solution_detail.map((i, idx) => {
                                    switch (i.type) {
                                        case 'html':
                                            return <RenderHtml key={idx} source={{ html: i.content }} contentWidth={width} />
                                        case 'image':
                                            return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: i.content }} />
                                    }
                                })}
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
    customConfig: PropTypes.shape({
        label_suggestion: PropTypes.string,
        label_solution_detail: PropTypes.string,
        label_result_txt: PropTypes.string,
        btn_suggestion_text: PropTypes.string,
        btn_skip_text: PropTypes.string,
        popup_confirm_skip: PropTypes.string,
    }),
    customStyles: PropTypes.shape({
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
    }),
    displayMode: PropTypes.oneOf(['default', 'result', 'preview']),
    getTopComponent: PropTypes.func,
    getMiddleComponent: PropTypes.func,
    getBottomComponent: PropTypes.func,
    getCornerComponent: PropTypes.func,
    onSelectOption: PropTypes.func,
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
    onSelectOption: () => { }
}

export default YNQuestion