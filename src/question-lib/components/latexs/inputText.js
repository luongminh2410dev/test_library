import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { regex } from './index';

const InputText = (props) => {
    const { content, inputStyle, updateAnswers, correct_options } = props;
    const contentParser = regex.exec(content);
    const defaultValue = correct_options.find(i => i.id === `${contentParser[1]}_${contentParser[2]}`)?.answer || '';

    const onChangeText = (text) => {
        updateAnswers(`${contentParser[1]}_${contentParser[2]}`, text)
    }

    return (
        <TextInput
            defaultValue={defaultValue}
            keyboardType='number-pad'
            onChangeText={onChangeText}
            maxLength={contentParser ? contentParser[3]?.length : undefined}
            style={[styles.text_input, inputStyle]}
        />
    )
}

InputText.propTypes = {
    content: PropTypes.string.isRequired,
    inputStyle: PropTypes.object,
    updateAnswers: PropTypes.func,
    correct_options: PropTypes.array
}

InputText.defaultProps = {
    content: '',
    inputStyle: {},
    updateAnswers: () => { },
    correct_options: []
}

export default InputText

const styles = StyleSheet.create({
    text_input: {
        width: 60,
        height: 30,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'gray',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})