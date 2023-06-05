import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getParentRegex } from '.'
import InputText from './inputText'

const FracView = (props) => {
    const { numerator, denominator, initAnswers, textStyle, updateAnswers, correct_options } = props;

    const renderFracContent = (content) => {
        if (typeof content === 'function') return content();
        const latex = getParentRegex.exec(content);
        if (latex) {
            switch (latex[1]) {
                case 'inputText':
                    return (
                        <InputText
                            content={content}
                            initAnswers={initAnswers}
                            updateAnswers={updateAnswers}
                            correct_options={correct_options}
                        />
                    )
                default:
                    break;
            }
        }
        return <Text style={textStyle}>{content}</Text>
    }

    return (
        <View style={styles.container}>
            <View style={styles.numerator}>
                {renderFracContent(numerator)}
            </View>
            <View style={styles.denominator}>
                {renderFracContent(denominator)}
            </View>
        </View>
    )
}

FracView.propTypes = {
    numerator: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    denominator: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    textStyle: PropTypes.object,
    updateAnswers: PropTypes.func,
    correct_options: PropTypes.array,
}

FracView.defaultProps = {
    numerator: '',
    denominator: '',
    textStyle: {},
    updateAnswers: () => { },
    correct_options: [],
}

export default FracView

const styles = StyleSheet.create({
    container: {
        marginRight: 4,
        marginBottom: 12,
    },
    numerator: {
        minWidth: 40,
        paddingBottom: 4,
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
    },
    denominator: {
        paddingTop: 4,
    },
})