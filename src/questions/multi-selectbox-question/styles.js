import { Dimensions, StyleSheet, Platform } from "react-native";

const { width, height } = Dimensions.get('window');
const isIPhoneX = Platform.OS === 'ios' && !Platform.isTVOS && (height >= 812 || width >= 812);
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
        paddingHorizontal: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
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
    modal_container: {
        justifyContent: 'flex-end',
        margin: 0
    },
    modal_body: {
        width: '100%',
        minHeight: height * 0.4,
        justifyContent: 'flex-start',
        paddingHorizontal: 12,
        paddingTop: 12,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        top: isIPhoneX ? 24 : 0,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    selectbox_item: {
        justifyContent: 'center',
        paddingHorizontal: 4,
        paddingVertical: 8,
        marginHorizontal: 4,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'lightgray',
    },
    selection_item: {
        width: '100%',
        padding: 12,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    // selection_checkbox: {
    //     width: 20,
    //     height: 20,
    //     borderRadius: 20,
    //     padding: 1,
    //     marginRight: 8,
    //     borderWidth: 1,
    //     borderColor: '#6dae41',
    // },
    // selection_checkbox_active: {
    //     width: '100%',
    //     height: '100%',
    //     borderRadius: 20,
    //     backgroundColor: '#93ea77'
    // },
    selection_txt: {
        // borderBottomWidth: 1,
        // borderBottomColor: 'lightgray'
    }
})

export default styles;