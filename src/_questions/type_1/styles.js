import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    option_list: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    answer_btn: {
        width: '100%',
        paddingVertical: 12,
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
    result_container: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 4,
        borderStyle: 'dashed',
        marginBottom: 12,
    },
    result_txt: {
        fontWeight: 'bold',
        padding: 8,
        fontSize: 15,
    },
})

export default styles;