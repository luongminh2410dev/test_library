import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sentence_list: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    correct_result: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    sentence_item: {
        position: 'relative',
        backgroundColor: '#f2ead9',
        marginHorizontal: 4,
        paddingHorizontal: 4,
        borderRadius: 4,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    absolute_view: {
        position: 'absolute',
        top: -44,
        width: 80,
        height: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4
    },
    textinput_view: {
        width: '100%',
        height: 40,
        paddingHorizontal: 8,
        borderTopWidth: 1,
        borderColor: 'lightgray',
        backgroundColor: 'white'
    }
})

export default styles;