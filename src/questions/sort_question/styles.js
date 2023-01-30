import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    question_label: {
        flex: 1,
        flexDirection: 'row'
    },
    question_label_txt: {
        textAlign: 'left',
        fontWeight: "bold"
    },
    guide_label: {
        width: '100%',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 12,
        paddingHorizontal: 12,
    },
    image: {
        marginTop: 12,
        width: width * 0.7,
        height: width * 0.7 * 9 / 16,
    },
    question_view: {
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: "center"
    },
    question: {
        fontSize: 16,
        marginTop: 12,
    },
    options: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    row: {
        width: '100%',
        marginTop: 12,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    answer_btn: {
        width: width / 1,
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
        borderRadius: 20
    },
    active_answer_btn: {
        borderColor: '#aad572',
        backgroundColor: '#aad572'
    },
    answer_btn_txt: {
        fontSize: 15,
    },
    suggestion_collapsible: {
        width: width,
        paddingTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    suggestion_label: {
        width: '100%',
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'left',
    },
    suggestion_btn: {
        flexDirection: "row",
        marginRight: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderWidth: 1,
        borderRadius: 8,
    },
    suggestion_txt: {
        fontSize: 16,
    },
    correct_result: {
        marginTop: 12,
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    next_question_btn: {
        flexDirection: "row",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24
    },
    next_question_txt: {
        fontSize: 15,
        color: 'white',
        marginRight: 4,
    },
    result_container: {
        width: '100%',
        paddingHorizontal: 12,
        marginTop: 12,
    },
    result_txt: {
        fontWeight: 'bold',
        padding: 8,
        fontSize: 15,
    },
    solution_detail_view: {
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    solution_detail_btn: {
        paddingHorizontal: 36,
        paddingVertical: 12,
        backgroundColor: '#ebeff1',
        borderRadius: 4,
    },
    option_container: {
        // position: 'relative'
    },
    display: {
        alignSelf: 'center',
    },
    display_absolute: {
        position: 'absolute',
        width: '100%',
        top: 8,
    },
    display_line: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    phrase_list: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: 'wrap',
    },
    phrase_item: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'gray',
        marginRight: 8,
        marginBottom: 8,
        borderRadius: 16,
    },
    phrase_item_txt: {
        fontSize: 15,
        color: 'white'
    },
    result_btn: {
        marginTop: 24,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'black',
        alignSelf: 'center',
        borderRadius: 4
    },
})
export default styles