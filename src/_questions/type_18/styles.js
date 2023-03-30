import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    options: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    answer_btn: {
        width: '100%',
        paddingVertical: 8,
        marginBottom: 12,
        alignItems: "center",
        borderRadius: 8,
    },
    correct_result: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

export default styles;