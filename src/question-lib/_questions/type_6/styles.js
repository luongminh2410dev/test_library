import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    correct_result: {
        marginTop: 12,
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    phrase_list: {
        width: '100%',
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        zIndex: 2,
    },
    phrase_list_invisible: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        zIndex: 0
    },
    absolute_phrase: {
        position: 'absolute',
    },
    phrase_item: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#cccccc',
        marginRight: 8,
        marginBottom: 8,
        borderRadius: 8,
    },
    phrase_item_txt: {
        fontSize: 15,
        // color: 'white'
    },
})
export default styles