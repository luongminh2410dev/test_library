import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    result_input_label: {
        fontSize: 15,
        marginRight: 4,
    },
    result_input: {
        width: '50%',
        padding: 4,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'gray'
    },
    result_view: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 4,
        marginBottom: 12,
    },
    result_txt: {
        fontWeight: 'bold',
        padding: 8,
        fontSize: 15,
    },
    row: {
        width: '100%',
        marginTop: 12,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default styles;