import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
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
        onSelectOption
    } = props;


    const {
        label_suggestion = 'Phương pháp giải',
        label_solution_detail = 'Lời giải của GV Vungoi.vn',
        label_result_txt = 'Đáp án của GV Vungoi.vn',
        btn_suggestion_text = 'Gợi ý'
    } = customConfig;

    const [currentAnswer, setCurrentAnswer] = useState(-1);
    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);

    const nextButtonLabel = questionStep == 1 ? 'Kiểm tra' : 'Câu tiếp theo';
    const suggestButtonLabel = questionStep == 2 ? 'Xem lại lý thuyết' : btn_suggestion_text;
    const getDifficultQuestion = () => {
        switch (question.difficult_level) {
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

    const activeButtonStyles = { ...styles.active_answer_btn, ...customStyles?.active_button_styles };
    const activeTxtStyles = { ...styles.active_answer_btn_txt, ...customStyles?.active_txt_styles };

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
        switch (questionStep) {
            case 0:
                console.log('next question')
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
        <View style={styles.container}>
            <Text style={styles.question_label}>{question.text_label}: {getDifficultQuestion()}</Text>
            <Text style={styles.guide_label}>{question.guide_touch}</Text>
            <View style={styles.question_view}>
                {question.question.map((i, idx) => {
                    switch (i.type) {
                        case 'html':
                            return <RenderHtml key={idx} source={{ html: i.content }} contentWidth={width} />
                        case 'image':
                            return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: i.content }} />
                    }
                })}
            </View>
            <View style={styles.row}>
                {question.options.map((i, idx) => {
                    const onPress = () => {
                        onSelectOption(i)
                        setCurrentAnswer(idx)
                        setQuestionStep(1)
                    }
                    const renderAnswerContent = () => {
                        return i.option_content.map((it, ix) => {
                            switch (it.type) {
                                case 'html':
                                    return <Text key={ix} style={[styles.answer_btn_txt, currentAnswer == idx && activeTxtStyles]}>{it.content}</Text>
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
                            style={[styles.answer_btn, currentAnswer == idx && activeButtonStyles]}>
                            {renderAnswerContent()}
                        </TouchableOpacity>
                    )
                })}
            </View>
            <Collapsible
                style={styles.suggestion_collapsible}
                collapsed={suggestionCollapsed}>
                <Text style={styles.suggestion_label}>{label_suggestion}</Text>
                {question.solution_suggestion.map((i, idx) => {
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
            {
                questionStep == 2 &&
                <View style={styles.result_container}>
                    <Text style={styles.suggestion_label}>{label_result_txt}</Text>
                    <View style={styles.row}>
                        {question.options.map((i, idx) => {
                            const renderAnswerContent = () => {
                                return i.option_content.map((it, ix) => {
                                    switch (it.type) {
                                        case 'html':
                                            return <Text key={ix} style={[styles.answer_btn_txt, question.correct_options == i.id && activeTxtStyles]}>{it.content}</Text>
                                        case 'image':
                                            return <Image key={ix} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                                    }
                                })

                            }
                            return (
                                <View
                                    key={idx}
                                    style={[styles.answer_btn, question.correct_options == i.id && activeButtonStyles]}>
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
                    <Collapsible collapsed={solutionCollapsed} >
                        <Text style={styles.suggestion_label}>{label_suggestion}</Text>
                        {question.solution_suggestion.map((i, idx) => {
                            switch (i.type) {
                                case 'html':
                                    return <RenderHtml key={idx} source={{ html: i.content }} contentWidth={width} />
                                case 'image':
                                    return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: i.content }} />
                            }
                        })}
                        <Text style={styles.suggestion_label}>{label_solution_detail}</Text>
                        <View style={{ marginTop: 12 }}>
                            {question.solution_detail.map((i, idx) => {
                                switch (i.type) {
                                    case 'html':
                                        return <RenderHtml key={idx} source={{ html: i.content }} contentWidth={width} />
                                    case 'image':
                                        return <Image key={idx} style={{ width: 200, height: 150 }} source={{ uri: i.content }} />
                                }
                            })}
                        </View>
                    </Collapsible>
                </View>
            }
        </View>
    )
}

YNQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    customConfig: PropTypes.object,
    customStyles: PropTypes.object,
    displayMode: PropTypes.string,
    getTopComponent: PropTypes.func,
    getMiddleComponent: PropTypes.func,
    getBottomComponent: PropTypes.func,
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
    onSelectOption: () => { }
}

export default YNQuestion