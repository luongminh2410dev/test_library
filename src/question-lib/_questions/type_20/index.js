import React, { useRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

const Options = (props) => {
    const { customStyles, onAnswer } = props;
    const {
        text_input_label: inputLabelStyles = {},
        text_input_item: textInputStyles = {},
    } = customStyles;
    const refAnswering = useRef();

    const onInputChange = (text) => {
        refAnswering.current = text;
        onAnswer(text, text.trim() != '')
    }

    return (
        <View style={styles.row}>
            <Text style={[styles.result_input_label, inputLabelStyles]}>Đáp án:</Text>
            <TextInput
                style={[styles.result_input, textInputStyles]}
                onChangeText={onInputChange}
            />
        </View>
    )
}

const Result = ({ getAnswers, correct_options, customStyles }) => {
    const { primaryColor = '#419e01' } = customStyles;
    const isCorrect = correct_options[0] == getAnswers();
    return (
        <View style={[styles.result_view, { borderColor: isCorrect ? primaryColor : 'red', }]}>
            <Text style={[styles.result_txt, { color: isCorrect ? primaryColor : 'red' }]}>Đáp án đúng là: "{correct_options}"</Text>
        </View>
    )
}

const compareAnswer = (answers, correct_options) => {
    return correct_options[0] == answers;
}

export default {
    Options,
    Result,
    compareAnswer
}