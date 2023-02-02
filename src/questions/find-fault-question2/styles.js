import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 12,
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
        width: '100%',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: "center",
    },
    question: {
        fontSize: 16,
        marginTop: 12,
    },
    row: {
        width: '100%',
        marginTop: 12,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    option_container: {
        paddingHorizontal: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
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
        width: '100%',
        flexDirection: 'row',
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
    // 
    suggestion_paragraph: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    paragraph_item: {
        marginRight: 8,
        marginBottom: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#6dae41',
    },
    paragraph_item_label: {
        fontSize: 15
    },
    sentence_item: {
        position: 'relative',
        backgroundColor: '#f2ead9',
        marginHorizontal: 4,
        paddingHorizontal: 4,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    absolute_view: {
        position: 'absolute',
        top: -44,
        width: 80,
        height: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4
    },
})

export default styles;