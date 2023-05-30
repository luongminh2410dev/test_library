import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    answer_btn: {
        minWidth: '30%',
        maxWidth: 120,
        marginRight: 12,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f1ead8',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 8,
    },
    active_answer_btn: {
        borderColor: '#aad572',
        backgroundColor: '#aad572'
    },
    answer_btn_txt: {
        fontSize: 15,
    },
    active_answer_btn_txt: {
        color: 'white'
    },
})

export default styles;