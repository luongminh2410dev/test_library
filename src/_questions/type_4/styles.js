import { StyleSheet } from "react-native";

const PADDING_VIEW = 12;
const styles = StyleSheet.create({
    target_item: {
        width: '100%',
        marginBottom: PADDING_VIEW,
        backgroundColor: '#f1ead8',
        borderWidth: 1,
        borderColor: 'transparent',
        overflow: 'hidden'
    },
    source_item: {
        width: '100%',
        marginBottom: PADDING_VIEW,
        backgroundColor: '#c8e6f3',
        borderWidth: 1,
        borderColor: 'transparent',
        overflow: 'hidden'
    },
    button_item: {
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    result_item: {
        width: '100%',
        // aspectRatio: 1.3,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#c8e6f3',
    },
    active_answer_btn: {
        borderColor: '#aad572',
        backgroundColor: '#aad572'
    },
    answer_btn_txt: {
        fontSize: 15,
    },
    active_answer_btn_txt: {
        // color: 'white'
    }
})

export default styles;