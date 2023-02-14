import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { mathQuillQuestion } from '../src/const'
import SingleQuestion from '../src/single_question'

const CustomView = () => {
    // HANDLE SOMETHING
    return (
        <View style={{ width: '100%', height: 100, backgroundColor: 'red' }} />
    )
}

const Demo = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', }} contentContainerStyle={{ paddingVertical: 80 }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', width: '100%', textAlign: 'center' }}>Demo App</Text>
            <SingleQuestion
                question={mathQuillQuestion}
            />
        </ScrollView>
    )
}

export default Demo