import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Dimensions, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const SelectBoxItem = forwardRef((props, ref) => {
    const { item, index, textColor, handleShowModal } = props;
    const [selected, setSelected] = useState(-1);
    const selectBoxLabel = selected == -1 ? "-- Đáp án --" : item.content[selected].value;

    useImperativeHandle(ref, () => ({
        getCurrentSelected: () => selected,
        setCurrentSelected: (idx) => setSelected(idx)
    }))

    const onPress = () => {
        handleShowModal(index);
    }

    return (
        <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity onPress={onPress} style={styles.selectbox_item}>
                <Text>{selectBoxLabel}</Text>
            </TouchableOpacity>
        </View>
    )
})

const MultiSelectBoxQuestion = (props) => {
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

    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);
    const [modalDataIndex, setModalDataIndex] = useState(-1);
    const refAnswers = useRef({});
    const refSelectBoxes = useRef([]);

    const isModalVisible = modalDataIndex != -1;

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
                const isIncorrect = correct_options.find(item => {
                    return item.answer != refAnswers.current[item.id];
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

    const _renderOptions = (item, index) => {
        switch (item.obj_type) {
            case 'richText':
                return item.content.map((it, idx) => (
                    <HtmlContent key={`${item.id}_${idx}`} content={it.content} color={textColor} />
                ))
            case 'choiceSelectOption':
                return <SelectBoxItem
                    ref={ref => refSelectBoxes.current[index] = ref}
                    key={index}
                    item={item}
                    index={index}
                    handleShowModal={handleShowModal} />
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

    const _renderResult = (item, index) => {
        switch (item.obj_type) {
            case 'richText':
                return item.content.map((it, idx) => (
                    <HtmlContent key={`${item.id}_${idx}`} content={it.content} color={textColor} />
                ))
            case 'choiceSelectOption':
                const answerIndex = correct_options.find(it => it.id == item.id)?.answer;
                return (
                    <View key={index} style={{ justifyContent: 'center' }}>
                        <View style={styles.selectbox_item}>
                            <Text>{item.content[answerIndex - 1].value}</Text>
                        </View>
                    </View>
                )
        }
    }

    const _renderSelectionItem = (item, index) => {
        const onPress = () => {
            refSelectBoxes.current[modalDataIndex].setCurrentSelected(index);
            refAnswers.current[options[modalDataIndex].id] = index + 1;
            setModalDataIndex(-1);
            questionStep == 0 && setQuestionStep(1);
        }
        return (
            <View key={index} style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
                <TouchableOpacity onPress={onPress} key={index} style={styles.selection_item}>
                    <Text style={styles.selection_txt}>{item.value}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const handleShowModal = (index) => {
        setModalDataIndex(index)
    }

    const handleCloseModal = () => {
        setModalDataIndex(-1);
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
                {options.map(_renderOptions)}
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
            <Modal
                backdropOpacity={0.4}
                coverScreen={true}
                style={styles.modal_container}
                avoidKeyboard={true}
                deviceWidth={width}
                deviceHeight={height}
                isVisible={isModalVisible}
                propagateSwipe={true}
                onBackdropPress={handleCloseModal}
                swipeDirection='down'
                useNativeDriver
                useNativeDriverForBackdrop
                hideModalContentWhileAnimating
                onSwipeComplete={handleCloseModal}>
                <View style={styles.modal_body}>
                    {modalDataIndex != -1 && options[modalDataIndex].content.map(_renderSelectionItem)}
                </View>
            </Modal>
        </View>
    )
}

export default MultiSelectBoxQuestion