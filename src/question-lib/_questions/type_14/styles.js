import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    result: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mathquill: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mathquill_text: {
        fontSize: 15,
        textAlign: 'center'
    },
    split_input: {
        flexDirection: 'row',
    },
    split_input_item: {
        minWidth: 24,
        minHeight: 32,
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 2,
        marginHorizontal: 2,
        textAlign: 'center',
        fontSize: 15
    },
    split_input_txt: {
        textAlign: 'center',
        fontSize: 15
    }
})

export default styles;