import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    list_question: {
        width: '100%',
    },
    list_question_container: {
        paddingLeft: 12,
    },
    // MINI MAP
    minimap_item: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 12,
        marginRight: 12,
    },
    minimap_item_txt: {
        color: 'red',
        fontSize: 20,
    },
    // QUESTION DETAIL
    list_question_detail: {
        // marginTop: 12,
    },
    question_item: {
        width: width,
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    question_txt: {
        fontSize: 18,
    },
    list_answer: {
        width: '100%'
    },
    answer_row: {
        marginTop: 12,
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    answer_item: {
        flex: 1,
        paddingVertical: 12,
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: 'lightgray',
        justifyContent: "center",
        alignItems: "center"
    },
    active_button: {
        backgroundColor: 'green',
        borderColor: 'tranparent'
    },
    active_txt: {
        color: 'white'
    }
})

export default styles