import { View, Text } from 'react-native'
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
const Demo = () => {

    return (
        <View style={{ flex: 1, paddingTop: 100, alignItems: 'center', backgroundColor: 'white' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Demo App</Text>
            <YNQuestion
                question={data}
                customConfig={{
                    label_suggestion: 'Phương pháp',
                    label_solution_detail: 'Lời giải của GV Loigiaihay.com',
                }}
            />
        </View>
    )
}

export default Demo