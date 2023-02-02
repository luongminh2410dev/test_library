import React, { forwardRef, useRef, useState } from 'react';
import { Image, KeyboardAvoidingView, Text, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, Platform, Dimensions, TextInput } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Feather from 'react-native-vector-icons/Feather';
import HtmlContent from '../../components/html-content';
import styles from './styles';
import InputItem from '../../components/input-item'

const { width, height } = Dimensions.get('window')

const SentenceEditor = (props) => {
    const { item, index, sentenceId, textColor, updateAnswering, correct_options } = props;
    const [focus, setFocus] = useState(false);
    const [editText, setEditText] = useState('');
    const refTextInputValue = useRef('');

    const onPress = () => {
        setFocus(!focus);
    }

    const onChange = (text) => {
        updateAnswering(sentenceId, text)
        refTextInputValue.current = text;
    }

    const onBlur = () => {
        setFocus(false);
        setEditText(refTextInputValue.current)
    }

    return (
        <View style={{ position: 'relative' }} pointerEvents={correct_options ? 'none' : 'auto'}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.sentence_item, (focus || editText) && { borderColor: 'green' }]}>
                <HtmlContent content={item.content} color={textColor} />
            </TouchableOpacity>
            {
                focus &&
                <View style={styles.absolute_view}>
                    <TextInput
                        autoFocus
                        defaultValue={editText}
                        style={{ flex: 1 }}
                        onChangeText={onChange}
                        onBlur={onBlur}
                    />
                </View>
            }
        </View>
    )
}

const dismissKeyboard = () => Keyboard.dismiss();
const FindFaultQuestion2 = (props) => {
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
        guide_touch, question: _question, suggestion_paragraph,
        difficult_level, solution_suggestion,
        options, correct_options, solution_detail
    } = question;

    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);
    const refAnswering = useRef({});

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
                let isCorrect = false;
                if (correct_options.length == Object.keys(refAnswering.current).length) {
                    isCorrect = !correct_options.find(item => {
                        return !refAnswering.current[item.id] || item.answer != refAnswering.current[item.id].toLowerCase();
                    })
                }
                console.log(isCorrect ? 'Chính xác' : 'Không chính xác');
                break;
            case 2:
                onFinishQuestion();
                break;
            default:
                break;
        }
    }

    const _renderSentenceItem = (item, index) => {
        switch (item.type) {
            case 'choiceTextHightLight':
                return item.content.map((it, idx) => {
                    const editEnable = suggestion_paragraph.find(i => {
                        return /<.+?>(.*?)<\/.+?>/.exec(it.content)[1] == i.content;
                    })
                    return !!editEnable ?
                        <SentenceEditor
                            key={`${index}_${idx}`}
                            item={it}
                            index={idx}
                            sentenceId={item.id}
                            textColor={textColor}
                            updateAnswering={updateAnswering}
                        />
                        :
                        <HtmlContent key={`${index}_${idx}`} content={it.content} color={textColor} />
                })
            case 'breakDown':
                return <View key={index} style={{ width: '100%' }} />;
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

    const _renderSuggestionParagraph = (item, index) => (
        <View key={index} style={styles.paragraph_item}>
            <Text style={styles.paragraph_item_label}>{item.content}</Text>
        </View>
    )

    const _renderResult = (item, index) => {
        switch (item.type) {
            case 'choiceTextHightLight':
                return item.content.map((it, idx) => {
                    const incorrectSentence = correct_options.findIndex(i => {
                        return i.id == item.id;
                    })
                    return incorrectSentence != -1 ?
                        <View key={`${index}_${idx}`} style={{
                            marginHorizontal: 4,
                        }}>
                            <View style={{ position: 'absolute', top: -4 }}>
                                <Text>{correct_options[incorrectSentence].answer}</Text>
                            </View>
                            <HtmlContent content={`<s>${it.content}</s>`} color={textColor} />
                        </View>
                        :
                        <HtmlContent key={`${index}_${idx}`} content={it.content} color={textColor} />
                })
            case 'breakDown':
                return <View key={index} style={{ width: '100%' }} />;
        }
    }

    const updateAnswering = (id, answer) => {
        answer != '' ?
            refAnswering.current[id] = answer
            :
            delete refAnswering.current[id];
        setQuestionStep(Object.keys(refAnswering.current).length > 0 ? 1 : 0)
    }

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
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
                <View style={styles.suggestion_paragraph}>
                    {suggestion_paragraph.map(_renderSuggestionParagraph)}
                </View>
                <View
                    style={[styles.option_container, optionContainerStyles]}
                    pointerEvents={(displayMode == 'result' || questionStep == 2) ? 'none' : 'auto'}
                >
                    {options.map(_renderSentenceItem)}
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
                            {options.map(_renderResult)}
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
        </TouchableWithoutFeedback>
    )
}

export default FindFaultQuestion2