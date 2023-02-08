import React, { useRef, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Feather from 'react-native-vector-icons/Feather';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const FillEmptyQuestion = (props) => {
    const { item, index, textColor, updateAnswers } = props;

    const onChangeText = (text) => {
        updateAnswers(item.id, text)
    }

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

    const _renderOption = (it, idx) => {
        switch (it.obj_type) {
            case 'richText':
                return (
                    <View key={idx}>
                        {it.content.map(_renderContent)}
                    </View>
                )
            case 'inputText':
                return (
                    <TextInput
                        key={idx}
                        onChangeText={onChangeText}
                        style={{
                            width: 70,
                            height: 30,
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            borderRadius: 4,
                            paddingHorizontal: 4
                        }} />
                )
        }
    }

    return (
        <View style={styles.sub_question_item}>
            {item.options.map(_renderOption)}
        </View>
    )
}

const QuizQuestion = (props) => {
    const { item, index, textColor, primaryColor, updateAnswers, resultMode = false } = props;
    const [currentAnswer, setCurrentAnswer] = useState(() => {
        if (resultMode) {
            return item.options.findIndex(it => it.correct)
        }
        return -1;
    });

    const _renderOptionItem = (i, idx) => {
        const isActive = currentAnswer == idx;
        const onPress = () => {
            setCurrentAnswer(idx)
            updateAnswers(item.id, idx)
        }
        return (
            <TouchableOpacity
                key={idx}
                onPress={onPress}
                style={styles.answer_btn}>
                <View style={[styles.checkbox]}>
                    <View style={[styles.checkbox_dot, isActive && { backgroundColor: primaryColor }]} />
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, color: isActive ? primaryColor : textColor }}>{i.answer_key.toUpperCase()}. </Text>
                    {i.content.map((it, ix) => {
                        switch (it.type) {
                            case 'html':
                                return (
                                    <HtmlContent key={ix} content={it.content} color={isActive ? primaryColor : textColor} />
                                )
                            case 'image':
                                return <Image key={ix} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                        }
                    })}
                </View>
            </TouchableOpacity>
        )
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

    return (
        <View style={{ width: '100%' }}>
            <View style={styles.question_view}>
                {item.question_child.map(_renderContent)}
            </View>
            {item.options.map(_renderOptionItem)}
        </View>
    )
}

const LghCompoundQuestion = (props) => {
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
        sub_questions, solution_detail
    } = question;

    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);
    const refAnswers = useRef({});

    const nextButtonLabel = questionStep == 1 ? 'Kiểm tra' : btn_skip_text;
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
                setSuggestionCollapsed(true)
                setQuestionStep(2)
                console.log(refAnswers.current);
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

    const _renderSubQuestion = (item, index) => {
        switch (item.sub_type) {
            case 'fill_empty':
                return (
                    <FillEmptyQuestion
                        key={index}
                        item={item}
                        index={index}
                        textColor={textColor}
                        updateAnswers={updateAnswers} />
                )
            case 'quiz':
                return (
                    <QuizQuestion
                        key={index}
                        item={item}
                        index={index}
                        textColor={textColor}
                        primaryColor={primaryColor}
                        updateAnswers={updateAnswers} />
                )
            default:
                return null;
        }
    }

    const _renderSuggestion = (item, index) => (
        item.solution_suggestion.length != 0 ?
            <View key={index} style={{ width: '100%' }}>
                <Text style={styles.suggestion_label}>Câu {index + 1}</Text>
                {item.solution_suggestion.map(_renderContent)}
            </View>
            : null
    )

    const _renderResult = (item, index) => {
        switch (item.sub_type) {
            case 'fill_empty':
                let resultContent = '';
                item.options.map((it, idx) => {
                    if (it.obj_type == 'inputText') {
                        return resultContent += `<u><i>${it.content}</i></u>`;
                    }
                    return it.content.map(i => resultContent += i.content)
                });
                return <HtmlContent key={index} content={`<p>${resultContent.replace(/<p>/g, ' ').replace(/<\/p>/g, ' ')}</p>`} color={textColor} />

            case 'quiz':
                return (
                    <QuizQuestion
                        key={index}
                        item={item}
                        index={index}
                        resultMode
                        textColor={textColor}
                        primaryColor={primaryColor}
                        updateAnswers={updateAnswers}
                    />
                )
            default:
                return null;
        }
    }

    const updateAnswers = (id, answer) => {
        answer != '' ?
            refAnswers.current[id] = answer
            :
            delete refAnswers.current[id]

        setQuestionStep(Object.keys(refAnswers.current).length == sub_questions.length ? 1 : 0)
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
                {sub_questions.map(_renderSubQuestion)}
            </View>
            <Collapsible
                style={styles.suggestion_collapsible}
                collapsed={suggestionCollapsed}>
                <Text style={[styles.suggestion_label, { color: subColor }]}>{label_suggestion}</Text>
                {solution_suggestion.map(_renderContent)}
                {sub_questions.map(_renderSuggestion)}
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
                        {sub_questions.map(_renderResult)}
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
                            {sub_questions.map(_renderSuggestion)}
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

export default LghCompoundQuestion