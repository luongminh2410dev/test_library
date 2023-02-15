import React, { useRef, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Feather from 'react-native-vector-icons/Feather';
import HtmlContent from '../../components/html-content';
import { FracView, InputText, getParentRegex } from '../../components/latexs';
import styles from './styles';

const getChildsOfFrac = (string) => {
    const childRegex = /\\([a-zA-Z]+)((?:\{[^{}]*\})+)/g;
    const childRegex2 = /\\([a-zA-Z]+)\{(\w+)?\}\{(\w+)?\}/g;

    let match;
    const childs = [];
    while ((match = childRegex.exec(string)) != null) {
        if (match.index == 0) {
            while ((match = childRegex2.exec(string)) != null) {
                childs.push(match[2])
                match[3] && childs.push(match[3])
            }
            break;
        }
        else {
            childs.push(match[0])
        }
    }
    const regex = /\\.*?\{.*?\}\{(\w+)\}/;
    if (!childs[1]) {
        const matchChild = regex.exec(string)
        childs.push(matchChild ? matchChild[1] : '')
    }
    return childs;
}

const MathQuillItem = (props) => {
    const { item, index, updateAnswers, correct_options } = props;
    const parent = getParentRegex.exec(item);
    if (parent) {
        switch (parent[1]) {
            case 'frac':
                const childs = getChildsOfFrac(item);
                return (
                    <FracView
                        numerator={childs[0]}
                        denominator={childs[1]}
                        textStyle={styles.mathquill_text}
                        updateAnswers={updateAnswers}
                        correct_options={correct_options} />
                )
            case 'inputText':
                return (
                    <View style={{ marginRight: 4, marginBottom: 12 }}>
                        <InputText
                            content={item}
                            updateAnswers={updateAnswers}
                            correct_options={correct_options}
                        />
                    </View>
                )
            default:
                return;
        }
    }
    return <Text key={index} style={styles.mathquill_text}>{item}</Text>
}

const MathQuillQuestion2 = (props) => {
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
        result_container: resultContainerStyles = {},
        solution_detail: solutionDetailStyles = {},
        solution_suggestion: solutionSuggestionStyles = {},
        solution_detail_btn: solutionDetailBtnStyles = {},
        solution_detail_btn_title: solutionDetailBtnTitleStyles = {},
    } = customStyles;

    const {
        guide_touch, question: _question,
        difficult_level, solution_suggestion,
        mathquill, correct_options, solution_detail
    } = question;

    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);
    const refAnswers = useRef({});

    const nextButtonLabel = questionStep == 1 && correct_options ? 'Kiểm tra' : btn_skip_text;
    const suggestButtonLabel = questionStep == 2 ? 'Xem lại lý thuyết' : btn_suggestion_text;

    const activeButtonStyles = { borderColor: primaryColor };

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
                    return item.answer != refAnswers.current[item.id];
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

    const _renderMathquillRow = (item, index) => {
        const mathquills = item.content.split(/\s?(\+|\-|\*|\/|\(|\)|\=)\s?/).filter(i => i.trim() != '')

        const _renderMathquillItem = (it, idx) => (
            <MathQuillItem
                key={idx}
                item={it}
                index={idx}
                updateAnswers={updateAnswers}
            />
        )

        return (
            <View key={index} style={styles.mathquill_row}>
                {mathquills.map(_renderMathquillItem)}
            </View>
        );
    }

    const _renderResult = (item, index) => {
        const mathquills = item.content.split(/\s?(\+|\-|\*|\/|\(|\)|\=)\s?/).filter(i => i.trim() != '')

        const _renderMathquillItem = (it, idx) => (
            <MathQuillItem
                key={idx}
                item={it}
                index={idx}
                correct_options={correct_options}
            />
        )

        return (
            <View key={index} style={styles.mathquill_row}>
                {mathquills.map(_renderMathquillItem)}
            </View>
        );
    }

    const updateAnswers = (id, answer) => {
        answer ?
            refAnswers.current[id] = answer
            :
            delete refAnswers.current[id];

        setQuestionStep(Object.keys(refAnswers.current).length == correct_options.length ? 1 : 0)
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
            <View
                style={[styles.option_container, optionContainerStyles]}
                pointerEvents={(displayMode == 'result' || questionStep == 2) ? 'none' : 'auto'}>
                {mathquill.map(_renderMathquillRow)}
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
                        {mathquill.map(_renderResult)}
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

export default MathQuillQuestion2