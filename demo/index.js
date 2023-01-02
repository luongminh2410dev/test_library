import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import YNQuestion from '../src/yn-question'

const data = {
    id: 123123,
    text_label: "Câu 1",
    guide_touch: "Em hãy chọn đáp án đúng hoặc sai",
    content_format: "array",
    question: [
        { type: 'html', content: '<p>Nội dung sau về tác giả Nguyển Du đúng hay sai?<p>' },
        { type: 'html', content: '<p>Nguyễn Du chỉ sáng tác bằng chữ hán</p>' }
    ],
    solution_suggestion: [
        { type: 'html', content: '<p>Vài nét về tác giả Nguyễn Du - <a href="#">Xem chi tiết</a></p>' }
    ],
    solution_detail: [
        { type: 'html', content: '- Sai' },
        { type: 'html', content: '- Nguyễn Du sáng tác bằng cả chữ Hán và chữ Nôm' },
    ],
    notice: [],
    sdk_type: 3,
    options: [
        { id: 'cky9uzxte000g396xj4la4mp1', option_content: [{ type: 'html', content: 'Đúng' }] },
        { id: 'cky9uzxte000g396xj4133mp1', option_content: [{ type: 'html', content: 'Sai' }] },
    ],
    correct_options: ['cky9uzxte000g396xj4la4mp1'],
    difficult_level: 2,
    // user_answers: ['cky9uzxte000g396xj4la4mp1'] ,
    spec_question: 1
}

const CustomView = () => {
    // HANDLE SOMETHING
    return (
        <View style={{ width: '100%', height: 100, backgroundColor: 'red' }} />
    )
}

const Demo = () => {

    return (
        <ScrollView style={{ flex: 1, paddingTop: 80, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', width: '100%', textAlign: 'center' }}>Demo App</Text>
            <YNQuestion
                question={data}
                customConfig={{
                    label_suggestion: 'Phương pháp giải abc',
                    label_solution_detail: 'Lời giải của GV Loigiaihay.com',
                    btn_skip_text: 'Câu tiếp theo',
                }}
            // onSelectOption={(e) => {
            //     console.log(e)
            // }}
            // onToggleSuggestion={(e) => {
            //     console.log('suggestion state: ' + e.isShow)
            // }}
            // onSkipQuestion={() => {
            //     console.log('skip question')
            // }}
            // onFinishQuestion={() => {
            //     console.log('finish question')
            // }}
            // onToggleSolutionDetail={(e) => {
            //     console.log('solution detail state: ' + e.isShow)
            // }}
            />
        </ScrollView>
    )
}

export default Demo