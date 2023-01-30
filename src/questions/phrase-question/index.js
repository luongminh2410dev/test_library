import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Feather from 'react-native-vector-icons/Feather';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const { width, height } = Dimensions.get('screen');
const OPTION_WIDTH = (width / 2) - 18;
const OPTION_HEIGHT = (OPTION_WIDTH / 1.3) < 120 ? 120 : (OPTION_WIDTH / 1.3);

// nextBtnState: 0 - chua chon dap an, 1 - da chon dap an, 2 - da hoan thanh cau hoi
const PhraseQuestion = (props) => {
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

    const { phrases, sentences } = options;

    const [currentPhrase, setCurrentPhrase] = useState(null);
    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);
    const [pairedList, setPairedList] = useState({});

    const nextButtonLabel = questionStep == 1 ? 'Kiểm tra' : btn_skip_text;
    const suggestButtonLabel = questionStep == 2 ? 'Xem lại lý thuyết' : btn_suggestion_text;

    const activeButtonStyles = Object.assign({}, { borderColor: primaryColor, }, active_option_btn);
    const activeTxtStyles = Object.assign({}, styles.active_answer_btn_txt, active_option_txt);

    useEffect(() => {
        if (Object.keys(pairedList).length == correct_options.length) {
            setQuestionStep(1)
        }
    }, [pairedList])

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
                setSuggestionCollapsed(true);
                setQuestionStep(2);
                // CHECK RESULT
                const isIncorrect = correct_options.find(item => {
                    const pairedItem = pairedList[item.id];
                    if (pairedItem) {
                        return item.answer != pairedItem;
                    }
                    return true;
                })
                console.log(isIncorrect ? 'Không chính xác' : 'Chính xác');
                break;
            case 2:
                onFinishQuestion();
                break;
            default:
                break;
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

    const _renderPhraseItem = (item, index) => {
        const isActive = currentPhrase == item.content;
        const isUnavailable = Object.keys(pairedList).some(i => pairedList[i] == item.content)
        const onPress = () => {
            setCurrentPhrase(isActive ? null : item.content)
        }
        return (
            <TouchableOpacity
                key={item.id}
                onPress={onPress}
                disabled={questionStep >= 2 || isUnavailable}
                style={[
                    styles.phrase_item,
                    defaultOptionButtonStyles,
                    isActive && activeButtonStyles,
                    isUnavailable && { opacity: 0.6 }
                ]}>
                <Text style={[styles.phrase_item_txt, defaultOptionTextStyles, isActive && activeTxtStyles]}>{item.content}</Text>
            </TouchableOpacity>
        )
    }

    const _renderSentenceItem = (item, index) => {
        const isActive = Object.keys(pairedList).some(i => i == item.id);

        const onPress = () => {
            if (isActive) {
                const newObject = { ...pairedList };
                delete newObject[item.id]
                setPairedList(newObject)
            }
            else if (currentPhrase) {
                const newObject = { ...pairedList };
                newObject[item.id] = currentPhrase;
                setPairedList(newObject)
                setCurrentPhrase(null);
            }
            return;
        }

        switch (item.type) {
            case 'richText':
                return item.content;
            case 'boxText':
                return (
                    <TouchableOpacity
                        key={item.id}
                        onPress={onPress}
                        style={styles.sentence_box}>
                        <Text style={styles.sentence_box_txt}>{isActive ? pairedList[item.id] : '___________'}</Text>
                    </TouchableOpacity>
                )
            case 'breakDown':
                return `\n`;
        }
    }

    const _renderCorrectOptions = (item, index) => {
        const correctPhrase = correct_options.find(it => it.id == item.id);

        switch (item.type) {
            case 'richText':
                return item.content;
            case 'boxText':
                return (
                    <View style={styles.sentence_box}>
                        <Text style={styles.sentence_box_txt}> {correctPhrase.answer} </Text>
                    </View>
                )
            case 'breakDown':
                return `\n`;
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
                {_question.map(_renderContent)}
            </View>
            <View style={[styles.option_container, optionContainerStyles]} pointerEvents={displayMode == 'result' ? 'none' : 'auto'}>
                <View style={styles.phrase_list}>
                    {phrases.map(_renderPhraseItem)}
                </View>
                <Text style={styles.sentence_list}>
                    {sentences.map(_renderSentenceItem)}
                </Text>
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
                    <Text style={styles.sentence_list}>
                        {sentences.map(_renderCorrectOptions)}
                    </Text>
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

export default PhraseQuestion