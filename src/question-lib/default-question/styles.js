import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 12,
        justifyContent: 'center',
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
        textAlign: 'center'
    },
    image: {
        marginTop: 12,
        width: width * 0.7,
        height: width * 0.7 * 9 / 16,
    },
    question_view: {
        width: '100%',
        paddingHorizontal: 12,
        marginTop: 12
    },
    question: {
        fontSize: 16,
        marginTop: 12,
    },
    options: {
        width: '100%',
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 12,
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
        marginTop: 12,
    },
    result_txt: {
        fontWeight: 'bold',
        padding: 8,
        fontSize: 15,
    },
    solution_detail_view: {
        // marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    solution_detail_btn: {
        paddingHorizontal: 36,
        paddingVertical: 12,
        backgroundColor: '#ebeff1',
        borderRadius: 4,
    },
    collapse_view: {
        width: '100%',
        paddingTop: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 12,
    },
    collapse_label: {
        width: '100%',
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'left',
    },
})

export default styles;