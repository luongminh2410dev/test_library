import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, KeyboardAvoidingView, ScrollView, Text, TextInput, View } from 'react-native'
import { multiChoicesData, sampleExam } from '../src/const'
import SingleQuestion from '../src/single_question'
import _SingleQuestion from '../src/_singleQuestion'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('screen');

const CustomView = () => {
    // HANDLE SOMETHING
    return (
        <View style={{ width: '100%', height: 100, backgroundColor: 'red' }} />
    )
}

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

const keyExtractor = (item, index) => index;
const Demo = () => {
    const test = sampleExam.map(it => formatData(it));
    const refFlatlist = useRef();
    const refCurrentQuestion = useRef(0);

    const onFinishQuestion = () => {
        if (refCurrentQuestion.current == test.length - 1) return;
        refFlatlist.current.scrollToIndex({ index: ++refCurrentQuestion.current })
    }

    const renderItem = ({ item, index }) => (
        <View style={{ width }}>
            <_SingleQuestion
                question={item}
                onFinishQuestion={onFinishQuestion}
            />
        </View>
    )
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ScrollView
                style={{ flex: 1, backgroundColor: 'white', }}
                contentContainerStyle={{ paddingVertical: 80 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', width: '100%', textAlign: 'center' }}>Demo App</Text>
                {/* <KeyboardAvoidingView style={{ flex: 1 }} behavior='position' keyboardVerticalOffset={0}> */}
                <View style={{ flex: 1 }}>
                    <_SingleQuestion
                        question={multiChoicesData}
                        onToggleSuggestion={(value) => {
                            console.log('toggle', value);
                        }}
                    // onFinishQuestion={() => {
                    //     setCurrentQuestion(pre => pre + 1)
                    // }}
                    />
                </View>
                {/* <FlatList
                    ref={refFlatlist}
                    data={test}
                    horizontal
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                /> */}
                {/* </KeyboardAvoidingView> */}
            </ScrollView>
        </GestureHandlerRootView>
    )
}

export default Demo