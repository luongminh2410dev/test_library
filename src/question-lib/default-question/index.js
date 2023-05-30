import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Feather from 'react-native-vector-icons/Feather';
import { OptionView, ResultView, compareAnswer } from '../_questions';
import QuestionType22 from '../_questions/type_22';
import CollapseView from '../components/collapse-view';
import HtmlContent from '../components/html-content';
import styles from './styles';
import Animated, { FadeInUp } from 'react-native-reanimated';

const CollapseArticle = (props) => {
    const { content, color } = props;
    const [isCollapsed, setCollapsed] = useState(true);
    const removedButtonContent = content.replace(/<(.*?)<(button|a)(?!([^>]*?)analytics-on)(?:[^>]*?)>(?:[^<]*)<\/(button|a)><\/(.*?)>/g, '');

    const onPress = () => setCollapsed(!isCollapsed)

    return (
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={onPress}
                style={{ paddingVertical: 8, paddingHorizontal: 12, backgroundColor: 'lightgray', borderRadius: 4, }} >
                <Text style={{ fontSize: 15 }}>Xem bài đọc</Text>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed} style={{ paddingTop: 12 }}>
                <HtmlContent content={removedButtonContent} color={color} />
            </Collapsible>
        </View>
    );
}

const DefaultQuestion = (props) => {
    const {
        question, globalConfig, globalStyles, customConfig, customStyles, customColors, displayMode,
        getTopComponent, getMiddleComponent, getBottomComponent, getCornerComponent,
        customPrimaryButton, customSecondaryButton, customLevelComponent, onSelectOption,
        onToggleSuggestion, onSkipQuestion, onFinishQuestion, onToggleSolutionDetail
    } = props;

    const questionConfig = Object.assign({}, globalConfig, customConfig);
    const questionStyles = Object.assign({}, globalStyles, customStyles);

    const {
        label_question = 'Câu 1',
        label_suggestion = 'Phương pháp giải',
        label_solution_detail = 'Lời giải của GV Vungoi.vn',
        btn_suggestion_text = 'Gợi ý',
        btn_skip_text = 'Câu tiếp theo',
        popup_confirm_skip = {},
    } = questionConfig;

    const {
        container: containerStyles = {},
        question_type: questionTypeStyles = {},
        question_title: questionTitleStyles = {},
        options_container: optionContainerStyles = {},
        result_container: resultContainerStyles = {},
        solution_detail: solutionDetailStyles = {},
        solution_suggestion: solutionSuggestionStyles = {},
        // solution_detail_btn: solutionDetailBtnStyles = {},
        // solution_detail_btn_title: solutionDetailBtnTitleStyles = {},
    } = questionStyles;

    const {
        primaryColor = '#419e01',
        secondaryColor = '#e7a22b',
        activeViewColor = '#419e01',
        activeLabelColor = '#fff',
        textColor = '#000000',
    } = customColors;

    const {
        guide_touch, question: _question,
        difficult_level, solution_suggestion,
        options, correct_options, solution_detail
    } = question;

    const { sdk_type } = question;

    const [questionStep, setQuestionStep] = useState(0);
    const refSuggestionView = useRef();
    const refSuggestionState = useRef(true);
    // const refSolutionDetail = useRef();
    // const refSolutionDetailState = useRef(true);
    const refAnswers = useRef();

    const nextButtonLabel = questionStep == 1 && (correct_options || sdk_type == 22) ? 'Kiểm tra' : btn_skip_text;
    const suggestButtonLabel = questionStep == 2 ? 'Xem lại lý thuyết' : btn_suggestion_text;

    const getDifficultQuestion = () => {
        switch (difficult_level) {
            case 1:
                return <Text style={{ fontWeight: '400', color: 'green' }}>Cơ bản</Text>
            case 2:
                return <Text style={{ fontWeight: '400', color: 'orange' }}>Trung bình</Text>
            case 3:
                return <Text style={{ fontWeight: '400', color: 'red' }}>Nâng cao</Text>
            case 4:
                return <Text style={{ fontWeight: '400', color: 'purple' }}>Siêu khó</Text>
            default:
                break;
        }
    }

    const toggleSuggestionVisible = () => {
        if (questionStep == 2) {
            console.log('xem li thuyet');
        }
        else {
            refSuggestionState.current = !refSuggestionState.current;
            onToggleSuggestion(refSuggestionState.current)
            refSuggestionView.current.toggle(refSuggestionState.current);
        }
    }

    // const toggleSolutionDetail = () => {
    //     refSolutionDetailState.current = !refSolutionDetailState.current;
    //     onToggleSolutionDetail(refSolutionDetailState.current)
    //     refSolutionDetail.current.toggle(refSolutionDetailState.current);
    // }

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
                if (!correct_options && sdk_type != 22) return onFinishQuestion();
                setQuestionStep(2);
                // Compare answer with result
                const isCorrect = sdk_type == 22 ?
                    QuestionType22.compareAnswer(refAnswers.current, question.sub_questions)
                    :
                    compareAnswer(sdk_type, options, refAnswers.current, correct_options);
                console.log(isCorrect);
                // Collapse suggestion-view on show result;
                refSuggestionState.current = true;
                refSuggestionView.current.toggle(true);
                break;
            case 2:
                onFinishQuestion();
                break;
            default:
                break;
        }
    }

    const onAnswer = (answers, isValidAnswer = true) => {
        onSelectOption(answers);
        refAnswers.current = answers;
        setQuestionStep(isValidAnswer ? 1 : 0);
    }

    const _renderContent = (item, index) => {
        switch (item.type) {
            case 'html':
                if (sdk_type == 18) {
                    const isCollapseButton = item.content.includes('<button class=\"btn btn-link\" data-toggle=\"collapse\"')
                    if (isCollapseButton) {
                        return <CollapseArticle key={index} content={item.content} color={textColor} />
                    }
                }
                return <HtmlContent key={index} content={item.content} color={textColor} />
            case 'image':
                return (
                    <Image
                        key={index}
                        resizeMode='contain'
                        style={{ width: parseInt(item.width) || '100%', height: parseInt(item.height) || 'auto' }}
                        source={{ uri: item.url }} />
                )
        }
    }

    const getAnswer = () => refAnswers.current;

    return (
        <View style={[styles.container, containerStyles]}>
            <View style={[styles.row, { paddingHorizontal: 12 }]}>
                <View style={styles.question_label}>
                    <Text style={[styles.question_label_txt, { color: textColor }]}>{label_question}: </Text>
                    {customLevelComponent(difficult_level) || getDifficultQuestion()}
                </View>
                {getCornerComponent(question.id, question.sdk_type)}
            </View>
            {getTopComponent()}
            {
                guide_touch &&
                <Text style={[styles.guide_label, { color: primaryColor }, questionTypeStyles]}>{guide_touch}</Text>
            }
            <View style={[styles.question_view, questionTitleStyles]}>
                {sdk_type == 20 && question.request_question.map(_renderContent)}
                {_question.map(_renderContent)}
            </View>
            <View
                style={[styles.options, optionContainerStyles]}
                pointerEvents={questionStep == 2 ? 'none' : 'auto'}>
                <OptionView
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            </View>
            <CollapseView ref={refSuggestionView}>
                <Text style={[styles.collapse_label, { color: secondaryColor }]}>{label_suggestion}</Text>
                {solution_suggestion.map(_renderContent)}
            </CollapseView>
            <View style={styles.row}>
                {
                    customSecondaryButton(toggleSuggestionVisible, suggestButtonLabel) ||
                    <TouchableOpacity
                        onPress={toggleSuggestionVisible}
                        style={[styles.suggestion_btn, { borderColor: primaryColor }]}>
                        {
                            questionStep != 2 && <View style={{ marginRight: 8 }}>
                                <Feather name='sun' size={20} color={primaryColor} />
                            </View>
                        }
                        <Text style={[styles.suggestion_txt, { color: primaryColor }]}>{suggestButtonLabel}</Text>
                    </TouchableOpacity>
                }
                {
                    customPrimaryButton(onNextButtonPress, nextButtonLabel) ||
                    <TouchableOpacity onPress={onNextButtonPress} style={[styles.next_question_btn, { backgroundColor: primaryColor }]}>
                        <Text style={styles.next_question_txt}>{nextButtonLabel}</Text>
                        <Feather name='chevrons-right' size={20} color='white' />
                    </TouchableOpacity>
                }
            </View>
            {getMiddleComponent()}
            {
                (questionStep == 2 || displayMode != 'default') &&
                <View style={[styles.result_container, resultContainerStyles]}>
                    <View style={{ paddingHorizontal: 12 }} pointerEvents='none'>
                        <ResultView
                            question={question}
                            customStyles={customStyles}
                            getAnswers={getAnswer}
                        />
                    </View>
                    {/* <View style={styles.solution_detail_view}>
                        <TouchableOpacity onPress={toggleSolutionDetail} style={[styles.solution_detail_btn, solutionDetailBtnStyles]}>
                            <Text style={[{ fontSize: 15, }, solutionDetailBtnTitleStyles]}>Xem lời giải</Text>
                        </TouchableOpacity>
                    </View> */}
                    {getBottomComponent()}
                    {/* <CollapseView ref={refSolutionDetail}>
                        <View style={solutionSuggestionStyles}>
                            <Text style={[styles.suggestion_label, { color: secondaryColor }]}>{label_suggestion}</Text>
                            <View style={{ marginTop: 12 }}>
                                {solution_suggestion.map(_renderContent)}
                            </View>
                        </View>
                        <View style={solutionDetailStyles}>
                            <Text style={[styles.suggestion_label, { color: secondaryColor }]}>{label_solution_detail}</Text>
                            <View style={{ marginTop: 12 }}>
                                {solution_detail.map(_renderContent)}
                            </View>
                        </View>
                    </CollapseView> */}
                    <Animated.View entering={FadeInUp} style={{ paddingHorizontal: 12 }} >
                        <View style={solutionSuggestionStyles}>
                            <Text style={[styles.suggestion_label, { color: secondaryColor }]}>{label_suggestion}</Text>
                            <View style={{ marginTop: 12 }}>
                                {solution_suggestion.map(_renderContent)}
                            </View>
                        </View>
                        <View style={solutionDetailStyles}>
                            <Text style={[styles.suggestion_label, { color: secondaryColor }]}>{label_solution_detail}</Text>
                            <View style={{ marginTop: 12 }}>
                                {solution_detail.map(_renderContent)}
                            </View>
                        </View>
                    </Animated.View>
                </View>
            }
        </View>
    )
}

DefaultQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    primaryColor: PropTypes.string,
    globalConfig: PropTypes.shape({
        label_question: PropTypes.string,
        label_suggestion: PropTypes.string,
        label_solution_detail: PropTypes.string,
        label_result_txt: PropTypes.string,
    }),
    globalStyles: PropTypes.shape({
        primaryColor: PropTypes.string,
        secondaryColor: PropTypes.string,
        textColor: PropTypes.string,
        container: PropTypes.object,
    }),
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
        container: PropTypes.object,
        question_type: PropTypes.object,
        question_title: PropTypes.object,
        options_container: PropTypes.object,
        // actived_option_btn: PropTypes.object,
        // actived_option_title: PropTypes.object,
        default_option_btn: PropTypes.object,
        default_option_txt: PropTypes.object,
        // 
        default_target_option: PropTypes.object,
        default_source_option: PropTypes.object,
        active_option_btn: PropTypes.object,
        active_option_txt: PropTypes.object,
        // 
        text_input_label: PropTypes.object,
        text_input_item: PropTypes.object,
        // 
        result_container: PropTypes.object,
        solution_detail: PropTypes.object,
        solution_suggestion: PropTypes.object,
        solution_detail_btn: PropTypes.object,
        solution_detail_btn_title: PropTypes.object,
    }),
    customColors: PropTypes.shape({
        primaryColor: PropTypes.string,
        secondaryColor: PropTypes.string,
        activeViewColor: PropTypes.string,
        activeLabelColor: PropTypes.string,
        textColor: PropTypes.string,
    }),
    displayMode: PropTypes.oneOf(['default', 'result', 'preview']),
    getTopComponent: PropTypes.func,
    getMiddleComponent: PropTypes.func,
    getBottomComponent: PropTypes.func,
    getCornerComponent: PropTypes.func,
    customPrimaryButton: PropTypes.func,
    customSecondaryButton: PropTypes.func,
    customLevelComponent: PropTypes.func,
    onSelectOption: PropTypes.func,
    onToggleSuggestion: PropTypes.func,
    onSkipQuestion: PropTypes.func,
    onFinishQuestion: PropTypes.func,
    onToggleSolutionDetail: PropTypes.func,
}

DefaultQuestion.defaultProps = {
    question: {},
    globalConfig: {},
    globalStyles: {},
    customConfig: {},
    customStyles: {},
    customColors: {},
    displayMode: 'default',
    getTopComponent: () => null,
    getMiddleComponent: () => null,
    getBottomComponent: () => null,
    getCornerComponent: () => null,
    customPrimaryButton: () => null,
    customSecondaryButton: () => null,
    customLevelComponent: () => null,
    onSelectOption: () => { },
    onToggleSuggestion: () => { },
    onSkipQuestion: () => { },
    onFinishQuestion: () => { },
    onToggleSolutionDetail: () => { },
}

export default DefaultQuestion