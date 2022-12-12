import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const SingleQuestion = (props) => {
    const { question = {}, customActiveBtnStyles = {}, customActiveTxtStyles = {} } = props;
    const [answer, setAnswer] = useState(0);

    const activeButtonStyles = { ...styles.active_button, ...customActiveBtnStyles };
    const activeTxtStyles = { ...styles.active_txt, ...customActiveTxtStyles };

    return (
        <View style={styles.question_item}>
            <Text style={styles.question_txt}><Text style={{ fontWeight: 'bold' }}>Câu hỏi đơn:</Text> {question.question}</Text>
            <View style={styles.list_answer}>
                <View style={styles.answer_row}>
                    <TouchableOpacity
                        onPress={() => setAnswer(1)}
                        style={[styles.answer_item, answer == 1 && activeButtonStyles]}>
                        <Text style={[styles.answer_item_txt, answer == 1 && activeTxtStyles]}>{question.answerA}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setAnswer(2)}
                        style={[styles.answer_item, answer == 2 && activeButtonStyles]}>
                        <Text style={[styles.answer_item_txt, answer == 2 && activeTxtStyles]}>{question.answerB}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.answer_row}>
                    <TouchableOpacity
                        onPress={() => setAnswer(3)}
                        style={[styles.answer_item, answer == 3 && activeButtonStyles]}>
                        <Text style={[styles.answer_item_txt, answer == 3 && activeTxtStyles]}>{question.answerC}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setAnswer(4)}
                        style={[styles.answer_item, answer == 4 && activeButtonStyles]}>
                        <Text style={[styles.answer_item_txt, answer == 4 && activeTxtStyles]}>{question.answerD}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

SingleQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    customActiveBtnStyles: PropTypes.object,
    customActiveTxtStyles: PropTypes.object
}

export default SingleQuestion