import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sentence_list: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    correct_result: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    sentence_item: {
        paddingHorizontal: 2,
        marginRight: 4,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 4,
    },
    sentence_item_active: {
        backgroundColor: '#d2eac2',
        borderColor: '#6dae41'
    }
})

export default styles;