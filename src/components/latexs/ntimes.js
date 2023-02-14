import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { regex } from './index';

const getCalculatorSign = (string) => {
    switch (string) {
        case 'stimes':
            return '−'
        case 'atimes':
            return '+';
        case 'ntimes':
            return '×';
        default:
            return string;
    }

}
const NTimes = (props) => {
    const { content, textStyle } = props;
    const contentParser = regex.exec(content);

    return (
        <View style={styles.container}>
            <Text style={[styles.text, textStyle]}>{contentParser[2]}</Text>
            <Text style={[styles.text, textStyle, { textAlign: 'left' }]}>
                {getCalculatorSign(contentParser[1])}
            </Text>
            <Text style={[styles.text, textStyle]}>{contentParser[3]}</Text>
        </View>
    )
}

NTimes.propTypes = {
    content: PropTypes.string.isRequired,
    textStyle: PropTypes.object,
}

NTimes.defaultProps = {
    content: '',
    textStyle: {}
}

export default NTimes;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    text: {
        fontSize: 15,
        textAlign: 'center'
    }
})