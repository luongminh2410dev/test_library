import React, { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const SelectBoxItem = (props) => {
    const { item, index, selection, textColor, handleShowModal } = props;
    const _selection = selection - 1;
    const selectBoxLabel = selection == -1 ? "-- Đáp án --" : item.option_content[_selection]?.value;

    const onPress = () => {
        handleShowModal(index);
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.selectbox_item}>
            <Text style={{ color: textColor }}>{selectBoxLabel}</Text>
        </TouchableOpacity>
    )
}

const Options = (props) => {
    const { question, customStyles, onAnswer, initAnswers } = props;
    const { primaryColor, textColor } = customStyles;
    const { options } = question;
    const [modalDataIndex, setModalDataIndex] = useState(-1);
    const [answer, setAnswer] = useState(initAnswers || {});
    const isModalVisible = modalDataIndex != -1;

    const _renderOptions = (item, index) => (
        <View key={index}>
            {
                item.obj_type == 'choiceSelectOption' ?
                    <SelectBoxItem
                        key={index}
                        item={item}
                        index={index}
                        selection={answer?.[item.id] || - 1}
                        handleShowModal={handleShowModal} />
                    :
                    item.option_content.map((it, idx) => (
                        <HtmlContent key={`${item.id}_${idx}`} content={it.content} color={textColor} />
                    ))
            }
        </View>
    )

    const _renderSelectionItem = (item, index) => {
        const isSelected =
            answer[options[modalDataIndex].id]
            &&
            answer[options[modalDataIndex].id] - 1 == index;

        const onPress = () => {
            let newAnswer = { ...answer, [options[modalDataIndex].id]: index + 1 };
            setModalDataIndex(-1);
            setAnswer(newAnswer)
            onAnswer(
                newAnswer,
                Object.keys(newAnswer).length == options.filter(it => it.obj_type == 'choiceSelectOption').length
            )
        }
        return (
            <View key={index} style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
                <TouchableOpacity onPress={onPress} key={index} style={styles.selection_item}>
                    <Text style={[styles.selection_txt, isSelected && { color: primaryColor }]}>{item.value}</Text>
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
        <>
            <View style={styles.option_container}>
                {options.map(_renderOptions)}
            </View>
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
                    {modalDataIndex != -1 && options[modalDataIndex].option_content.map(_renderSelectionItem)}
                </View>
            </Modal>
        </>
    )
}

const Result = (props) => {
    const { options, correct_options, customStyles } = props;
    const { textColor } = customStyles;

    const _renderResult = (item, index) => {
        switch (item.obj_type) {
            case 'richText':
                return item.option_content.map((it, idx) => (
                    <HtmlContent key={`${item.id}_${idx}`} content={it.content} color={textColor} />
                ))
            case 'choiceSelectOption':
                const answerIndex = correct_options.find(it => it.id == item.id)?.answer;
                return (
                    <View key={index} style={styles.selectbox_item}>
                        <Text>{item.option_content[answerIndex - 1].value}</Text>
                    </View>
                )
        }
    }

    return (
        <View style={styles.option_container}>
            {options.map(_renderResult)}
        </View>
    )
}

const compareAnswer = (answers, correct_options) => {
    return !correct_options.find(item => {
        return item.answer != answers[item.id];
    })
}

export default {
    Options,
    Result,
    compareAnswer
}