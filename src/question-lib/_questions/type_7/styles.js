import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    question_item: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    item_content: {
        flex: 1,
    },
    answer_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    checkbox: {
        padding: 4,
        borderRadius: 4,
        marginLeft: 4,
        borderWidth: 1,
        backgroundColor: '#f2ead8',
        borderColor: '#e0e0e0',
    },
    checkbox_active: {
        backgroundColor: '#d2eac2',
        borderColor: '#6dae41'
    }
})

export default styles;