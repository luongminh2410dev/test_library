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
    answer_key: {
        width: 32,
        height: 32,
        borderRadius: 100,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc'
    },
    answer_label: {
        fontSize: 15,
        fontWeight: 'bold',
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