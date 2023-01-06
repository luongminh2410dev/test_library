import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import SingleQuestion from '../src/single_question'
import { textDGNLQuestion } from '../src/const'
const CustomView = () => {
    // HANDLE SOMETHING
    return (
        <View style={{ width: '100%', height: 100, backgroundColor: 'red' }} />
    )
}

const Demo = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }} contentContainerStyle={{ paddingTop: 80, }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', width: '100%', textAlign: 'center' }}>Demo App</Text>
            <SingleQuestion
                question={textDGNLQuestion}
            />
        </ScrollView>
    )
}

export default Demo