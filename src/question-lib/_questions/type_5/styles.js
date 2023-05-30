import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        borderColor: 'transparent',
        borderRadius: 4,
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
        borderBottomWidth: 1,
        transform: [
            { translateY: 4 }
        ]
    },
    sentence_box_txt: {
        width: '100%',
        fontSize: 15,
        minWidth: 60,
        textAlign: 'center',
    },
})

export default styles;