import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const QuestionDetail = (props) => {
    const { item, index, customActiveBtnStyles, customActiveTxtStyles } = props;
    const [answer, setAnswer] = useState(0);

    const activeButtonStyles = { ...styles.active_button, ...customActiveBtnStyles };
    const activeTxtStyles = { ...styles.active_txt, ...customActiveTxtStyles };
    return (
        <View style={styles.question_item}>
            <Text style={styles.question_txt}><Text style={{ fontWeight: 'bold' }}>Câu hỏi {index + 1}:</Text> {item.question}</Text>
            <View style={styles.list_answer}>
                <View style={styles.answer_row}>
                    <TouchableOpacity
                        onPress={() => setAnswer(1)}
                        style={[styles.answer_item, answer == 1 && activeButtonStyles]}>
                        <Text style={[styles.answer_item_txt, answer == 1 && activeTxtStyles]}>{item.answerA}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setAnswer(2)}
                        style={[styles.answer_item, answer == 2 && activeButtonStyles]}>
                        <Text style={[styles.answer_item_txt, answer == 2 && activeTxtStyles]}>{item.answerB}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.answer_row}>
                    <TouchableOpacity
                        onPress={() => setAnswer(3)}
                        style={[styles.answer_item, answer == 3 && activeButtonStyles]}>
                        <Text style={[styles.answer_item_txt, answer == 3 && activeTxtStyles]}>{item.answerC}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setAnswer(4)}
                        style={[styles.answer_item, answer == 4 && activeButtonStyles]}>
                        <Text style={[styles.answer_item_txt, answer == 4 && activeTxtStyles]}>{item.answerD}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const QuestionMinimap = (props) => {
    const { item, index, moveToQuestion } = props;
    const onPress = () => {
        moveToQuestion(index)
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.minimap_item}>
            <Text style={styles.minimap_item_txt}>Câu {index + 1}</Text>
        </TouchableOpacity>
    )
}

const keyExtractor = (item, index) => `question_item_${index}`
const ListQuestion = ({ questions = [], style = {}, customActiveBtnStyles = {}, customActiveTxtStyles = {} }) => {
    // const { questions = [], style = {}, customActiveBtnStyles = {}, customActiveTxtStyles = {} } = props;
    const refListQuestion = useRef();
    const refCurrentQuestion = useRef(0);

    const renderMinimapItem = ({ item, index }) => (
        <QuestionMinimap
            item={item}
            index={index}
            moveToQuestion={moveToQuestion}
        />
    )

    const renderQuestionDetail = ({ item, index }) => (
        <QuestionDetail
            item={item}
            index={index}
            customActiveBtnStyles={customActiveBtnStyles}
            customActiveTxtStyles={customActiveTxtStyles} />
    )

    const moveToQuestion = (index) => {
        refListQuestion.current.scrollToIndex({ index })
    }

    return (
        <View style={[styles.container, style]}>
            <View style={styles.list_question}>
                <FlatList
                    horizontal
                    data={questions}
                    renderItem={renderMinimapItem}
                    keyExtractor={keyExtractor}
                    style={styles.list_question}
                    contentContainerStyle={styles.list_question_container}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.list_question_detail}>
                <FlatList
                    ref={refListQuestion}
                    horizontal
                    pagingEnabled
                    data={questions}
                    renderItem={renderQuestionDetail}
                    keyExtractor={keyExtractor}
                    style={styles.list_question}
                />
            </View>
        </View>
    )
}

ListQuestion.propTypes = {
    questions: PropTypes.array.isRequired,
    style: PropTypes.object,
    customActiveBtnStyles: PropTypes.object,
    customActiveTxtStyles: PropTypes.object
}

export default ListQuestion