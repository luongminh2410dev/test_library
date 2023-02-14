import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const FracView = (props) => {
    const { numerator: Numerator, denominator: Denominator, textStyle } = props;

    return (
        <View style={styles.container}>
            {
                typeof Numerator === 'string' ?
                    <Text style={textStyle}>{Numerator}</Text>
                    :
                    <View style={styles.numerator}>
                        <Numerator />
                    </View>
            }
            <View style={styles.denominator}>
                {
                    typeof Denominator === 'string' ?
                        <Text style={textStyle}>{Denominator}</Text>
                        :
                        <Denominator />
                }
            </View>
        </View>
    )
}

FracView.propTypes = {
    numerator: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]).isRequired,
    denominator: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]).isRequired,
    textStyle: PropTypes.object
}

FracView.defaultProps = {
    numerator: '',
    denominator: '',
    textStyle: {}
}

export default FracView


const styles = StyleSheet.create({
    container: {
        marginRight: 4,
    },
    numerator: {
        minWidth: 40,
        paddingBottom: 4,
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
    },
    denominator: {
        paddingTop: 8,
    },
})