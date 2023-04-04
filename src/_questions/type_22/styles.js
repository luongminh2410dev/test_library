import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    option_container: {
        width: '100%',
    },
    correct_result: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    sub_question_item: {
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    answer_btn: {
        width: '100%',
        paddingVertical: 12,
        paddingLeft: 12,
        flexDirection: 'row',
        alignItems: "center",
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 20,
        padding: 2,
        borderWidth: 1,
        marginRight: 8
    },
    checkbox_dot: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        overflow: 'hidden'
    },
    active_answer_btn: {
        borderColor: '#aad572',
        backgroundColor: '#aad572'
    },
    answer_btn_txt: {
        fontSize: 15,
    },
})

export default styles;