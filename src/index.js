import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { findFaultQuestion2, pictureEnglishQuestion, multiCorrectQuestion } from './const'
import { DefaultQuestion } from './question-lib'
import AutoHeightWebView from 'react-native-autoheight-webview'
const formatData = (object) => {
    const newObject = {};
    newObject.id = object._id;
    newObject.solution_suggestion = object?.solution_suggesstion || [];
    newObject.solution_detail = object?.solution_detail || [];
    newObject.question = object?.question?.content || object?.question?.quiz.content_question.items[0].content || [];
    newObject.guide_touch = object.question?.title?.desktop;
    switch (object.question_type) {
        case 1:
            newObject.sdk_type = 1;
            break;
        case 2:
            newObject.sdk_type = 2;
            break;
        case 3:
            switch (object.question.type) {
                case 1:
                    newObject.sdk_type = 3;
                    break;
                case 2:
                    newObject.sdk_type = 4;
                    break;
                case 3:
                    newObject.sdk_type = 5;
                    break;
                case 4:
                    newObject.sdk_type = 6;
                    break;
                case 5:
                    newObject.sdk_type = 7;
                    break;
                case 6:
                    newObject.sdk_type = 8;
                    break;
                case 7:
                    newObject.sdk_type = 9;
                    break;
                case 10:
                    newObject.sdk_type = 10;
                    break;
                case 11:
                    newObject.sdk_type = 11;
                    break;
                case 12:
                    newObject.sdk_type = 12;
                    break;
                case 13:
                    newObject.sdk_type = 13;
                    break;
                case 15:
                    newObject.sdk_type = 14;
                    break;
                case 16:
                    newObject.sdk_type = 15;
                    break;
                case 17:
                    newObject.sdk_type = 16;
                    break;
                case 20:
                    newObject.sdk_type = 17;
                    break;
                case 23:
                    newObject.sdk_type = 18;
                    break;
                default:
                    break;
            }
            break;
        case 4:
            newObject.sdk_type = 19;
            break;
        case 5:
            newObject.sdk_type = 20;
            break;
        default:
            newObject.sdk_type = object.question_type;
            break;
    }
    newObject.options =
        object?.question?.answers?.map(item => {
            return { id: item.id, option_content: item.text }
        })
        ||
        object?.question?.quiz?.option?.items?.map(item => {
            return { id: item.id, option_content: item.answer }
        })
        || [];
    newObject.difficult_level = object.difficult_degree;

    return newObject;
}

const Demo = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [padding, setPadding] = useState(80);

    useEffect(() => {
        fetch('https://devapi.loigiaihay.com/v4/tn/exam/summary/5d5c1403ea5cb900220fa32f')
            .then(data => data.json())
            .then(data => {
                // setQuestions(data?.list_quiz)
                setQuestions([pictureEnglishQuestion, multiCorrectQuestion, findFaultQuestion2,])
            })
    }, [])

    if (questions.length == 0) return null;
    return (
        <KeyboardAvoidingView style={{ flex: 1, }} behavior='height'>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <ScrollView
                    style={{ flex: 1, backgroundColor: 'white', }}
                    contentContainerStyle={{ paddingVertical: padding }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => {
                            setPadding(40)
                            setCurrentQuestion(currentQuestion - 1)
                        }}>
                            <Text>Back</Text>
                        </TouchableOpacity>
                        <DefaultQuestion
                            key={questions[currentQuestion].id}
                            question={questions[currentQuestion]}
                            initAnswers={answers[questions[currentQuestion].id]}
                            // key={questions[currentQuestion]._id}
                            // question={formatData(questions[currentQuestion])}
                            // initAnswers={answers[questions[currentQuestion]._id]}
                            onSelectOption={(answer) => {
                                setAnswers({ ...answers, [questions[currentQuestion].id]: answer })
                            }}
                            customConfig={{
                                label_question: `Câu ${currentQuestion + 1}`,
                            }}
                            onSkipQuestion={() => setCurrentQuestion(currentQuestion + 1)}
                            onFinishQuestion={() => setCurrentQuestion(currentQuestion + 1)}
                        />
                    </View>
                </ScrollView>
            </GestureHandlerRootView>
        </KeyboardAvoidingView>
    )
}

export default Demo