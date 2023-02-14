import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { regex } from './index';

const InputText = (props) => {
    const { content, inputStyle, updateAnswers } = props;
    const contentParser = regex.exec(content);

    const onChangeText = (text) => {
        updateAnswers(`${contentParser[1]}_${contentParser[2]}`, text)
    }

    return (
        <TextInput
            defaultValue=''
            keyboardType='number-pad'
            onChangeText={onChangeText}
            maxLength={contentParser[3].length}
            style={[styles.text_input, inputStyle]}
        />
    )
}

InputText.propTypes = {
    content: PropTypes.string.isRequired,
    inputStyle: PropTypes.object,
    updateAnswers: PropTypes.func,
}

InputText.defaultProps = {
    content: '',
    inputStyle: {},
    updateAnswers: () => { }
}

export default InputText

const styles = StyleSheet.create({
    text_input: {
        width: 60,
        height: 30,
        borderWidth: 0.5,
        borderRadius: 4,
        borderColor: 'black',
        textAlign: 'center'
    }
})