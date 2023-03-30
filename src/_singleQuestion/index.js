import PropTypes from 'prop-types';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Feather from 'react-native-vector-icons/Feather';
import QuestionType1 from '../_questions/type_1';
import QuestionType10 from '../_questions/type_10';
import QuestionType11 from '../_questions/type_11';
import QuestionType12 from '../_questions/type_12';
import QuestionType13 from '../_questions/type_13';
import QuestionType14 from '../_questions/type_14';
import QuestionType15 from '../_questions/type_15';
import QuestionType16 from '../_questions/type_16';
import QuestionType17 from '../_questions/type_17';
import QuestionType18 from '../_questions/type_18';
import QuestionType19 from '../_questions/type_19';
import QuestionType20 from '../_questions/type_20';
import QuestionType21 from '../_questions/type_21';
import QuestionType22 from '../_questions/type_22';
import QuestionType3 from '../_questions/type_3';
import QuestionType4 from '../_questions/type_4';
import QuestionType5 from '../_questions/type_5';
import QuestionType6 from '../_questions/type_6';
import QuestionType7 from '../_questions/type_7';
import QuestionType8 from '../_questions/type_8';
import QuestionType9 from '../_questions/type_9';
import HtmlContent from '../components/html-content';
import styles from './styles';

const CollapseView = forwardRef((props, ref) => {
    const { children } = props;
    const [isCollapse, setCollapse] = useState(true);

    useImperativeHandle(ref, () => ({
        toggle: (value) => setCollapse(value),
        show: () => {
            setCollapse(false);
        },
        hidden: () => {
            setCollapse(true)
        }
    }))

    return (
        <Collapsible
            style={styles.collapse_view}
            collapsed={isCollapse}>
            {children}
        </Collapsible>
    )
})

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

const compareAnswer = (type, options, answers, correct_options) => {
    switch (type) {
        case 1:
            return QuestionType1.compareAnswer(answers, correct_options, options);
        case 2:
            return;
        case 3:
            return QuestionType3.compareAnswer(answers, correct_options);
        case 4:
            return QuestionType4.compareAnswer(answers, correct_options, options);
        case 5:
            return QuestionType5.compareAnswer(answers, correct_options);
        case 6:
            return QuestionType6.compareAnswer(answers, correct_options);
        case 7:
            return QuestionType7.compareAnswer(answers, correct_options);
        case 8:
            return QuestionType8.compareAnswer(answers, correct_options);
        case 9:
            return QuestionType9.compareAnswer(answers, correct_options);
        case 10:
            return QuestionType10.compareAnswer(answers, correct_options);
        case 11:
            return QuestionType11.compareAnswer(answers, correct_options);
        case 12:
            return QuestionType12.compareAnswer(answers, correct_options);
        case 13:
            return QuestionType13.compareAnswer(answers, correct_options);
        case 14:
            return QuestionType14.compareAnswer(answers, correct_options);
        case 15:
            return QuestionType15.compareAnswer(answers, correct_options);
        case 16:
            return QuestionType16.compareAnswer(answers, correct_options);
        case 17:
            return QuestionType17.compareAnswer(answers, correct_options);
        case 18:
            return QuestionType18.compareAnswer(answers, correct_options);
        case 19:
            return QuestionType19.compareAnswer(answers, correct_options);
        case 20:
            return QuestionType20.compareAnswer(answers, correct_options);
        case 21:
            return QuestionType21.compareAnswer(answers, correct_options);
        default:
            break;
    }
}

const TSingleQuestion = (props) => {
    const {
        question, globalConfig, globalStyles, customConfig, customStyles, displayMode,
        getTopComponent, getMiddleComponent, getBottomComponent, getCornerComponent,
        customLevelComponent, onSelectOption, onToggleSuggestion, onSkipQuestion,
        onFinishQuestion, onToggleSolutionDetail
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
        primaryColor = '#419e01',
        subColor = '#e7a22b',
        textColor = '#000000',
        container: containerStyles = {},
        question_type: questionTypeStyles = {},
        question_title: questionTitleStyles = {},
        options_container: optionContainerStyles = {},
        result_container: resultContainerStyles = {},
        solution_detail: solutionDetailStyles = {},
        solution_suggestion: solutionSuggestionStyles = {},
        solution_detail_btn: solutionDetailBtnStyles = {},
        solution_detail_btn_title: solutionDetailBtnTitleStyles = {},
    } = questionStyles;

    const {
        guide_touch, question: _question,
        difficult_level, solution_suggestion,
        options, correct_options, solution_detail
    } = question;

    const { sdk_type } = question;

    const [questionStep, setQuestionStep] = useState(0);
    const refSuggestionView = useRef();
    const refSuggestionState = useRef(true);
    const refSolutionDetail = useRef();
    const refSolutionDetailState = useRef(true);
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

    const toggleSolutionDetail = () => {
        refSolutionDetailState.current = !refSolutionDetailState.current;
        onToggleSolutionDetail(refSolutionDetailState.current)
        refSolutionDetail.current.toggle(refSolutionDetailState.current);
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

    const renderOptionItems = () => {
        switch (sdk_type) {
            case 1:
                return (
                    <QuestionType1.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                )
            case 3:
                return (
                    <QuestionType3.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                )
            case 4:
                return (
                    <QuestionType4.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                )
            case 5:
                return (
                    <QuestionType5.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 6:
                return (
                    <QuestionType6.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 7:
                return (
                    <QuestionType7.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 8:
                return (
                    <QuestionType8.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 9:
                return (
                    <QuestionType9.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 10:
                return (
                    <QuestionType10.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 11:
                return (
                    <QuestionType11.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 12:
                return (
                    <QuestionType12.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 13:
                return (
                    <QuestionType13.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 14:
                return (
                    <QuestionType14.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 15:
                return (
                    <QuestionType15.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 16:
                return (
                    <QuestionType16.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 17:
                return (
                    <QuestionType17.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 18:
                return (
                    <QuestionType18.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 19:
                return (
                    <QuestionType19.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 20:
                return (
                    <QuestionType20.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 21:
                return (
                    <QuestionType21.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            case 22:
                return (
                    <QuestionType22.Options
                        question={question}
                        customStyles={customStyles}
                        onAnswer={onAnswer}
                    />
                );
            default:
                return null;
        }
    }

    const renderResultView = () => {
        switch (sdk_type) {
            case 1:
                return (
                    <QuestionType1.Result
                        answers={refAnswers.current}
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 3:
                return (
                    <QuestionType3.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 4:
                return (
                    <QuestionType4.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 5:
                return (
                    <QuestionType5.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 6:
                return (
                    <QuestionType6.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 7:
                return (
                    <QuestionType7.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 8:
                return (
                    <QuestionType8.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 9:
                return (
                    <QuestionType9.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 10:
                return (
                    <QuestionType10.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 11:
                return (
                    <QuestionType11.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 12:
                return (
                    <QuestionType12.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 13:
                const { boxList } = question;
                return (
                    <QuestionType13.Result
                        options={options}
                        boxList={boxList}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 14:
                return (
                    <QuestionType14.Result
                        mathquill={question.mathquill}
                        boxList={boxList}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 15:
                return (
                    <QuestionType15.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 16:
                return (
                    <QuestionType16.Result
                        mathquill={question.mathquill}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 17:
                return (
                    <QuestionType17.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 18:
                return (
                    <QuestionType18.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 19:
                return (
                    <QuestionType19.Result
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 20:
                return (
                    <QuestionType20.Result
                        answers={refAnswers.current}
                        options={options}
                        correct_options={correct_options}
                        customStyles={customStyles}
                    />
                );
            case 21:
                return (
                    <QuestionType21.Result
                        options={options}
                        picture={question.picture}
                        correct_options={correct_options}
                    />
                );
            case 22:
                return (
                    <QuestionType22.Result
                        options={options}
                        sub_questions={question.sub_questions}
                        display_type={question.display_type}
                        customStyles={customStyles}
                    />
                );
            default:
                return null;
        }
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
                        style={{ width: parseInt(item.width) || '100%', height: parseInt(item.height) || undefined }}
                        source={{ uri: item.url }} />
                )
        }
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
                pointerEvents={(displayMode == 'result' || questionStep == 2) ? 'none' : 'auto'}>
                {renderOptionItems()}
            </View>
            <CollapseView ref={refSuggestionView}>
                <Text style={[styles.collapse_label, { color: subColor }]}>{label_suggestion}</Text>
                {solution_suggestion.map(_renderContent)}
            </CollapseView>
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
                    <View style={{ paddingHorizontal: 12 }} pointerEvents='none'>
                        {renderResultView()}
                    </View>
                    <View style={styles.solution_detail_view}>
                        <TouchableOpacity onPress={toggleSolutionDetail} style={[styles.solution_detail_btn, solutionDetailBtnStyles]}>
                            <Text style={[{ fontSize: 15, }, solutionDetailBtnTitleStyles]}>Xem lời giải</Text>
                        </TouchableOpacity>
                    </View>
                    {getBottomComponent()}
                    <CollapseView ref={refSolutionDetail}>
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
                    </CollapseView>
                </View>
            }
        </View>
    )
}

TSingleQuestion.propTypes = {
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
        subColor: PropTypes.string,
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
        primaryColor: PropTypes.string,
        subColor: PropTypes.string,
        textColor: PropTypes.string,
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

TSingleQuestion.defaultProps = {
    question: {},
    globalConfig: {},
    globalStyles: {},
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

export default TSingleQuestion