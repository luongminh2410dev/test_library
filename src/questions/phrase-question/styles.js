import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
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
        fontWeight: "bold",
    },
    guide_label: {
        fontSize: 17,
        paddingHorizontal: 12,
        fontWeight: 'bold',
        marginTop: 12,
        textAlign: 'center'
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
    row: {
        width: '100%',
        marginTop: 12,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    option_container: {
        marginTop: 12,
        width: '100%',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // 
    phrase_list: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    phrase_item: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        marginHorizontal: 6,
        backgroundColor: '#f2ead9',
        borderWidth: 1,
        borderColor: 'transparent'
    },
    phrase_item_txt: {
        fontSize: 15,
    },
    sentence_list: {
        width: '100%',
        marginTop: 12,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sentence_box: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    sentence_box_txt: {
        fontSize: 15,
    },
    // 
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
    }
})

export default styles;