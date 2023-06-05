import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    question_item: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    item_content: {
        flex: 1,
    },
    checkbox: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginLeft: 4,
        backgroundColor: '#f2ead8',
    },
    checkbox_active: {
        // backgroundColor: '#d2eac2',
    },
    row: {
        flexDirection: 'row'
    },
    col_title: {
        width: 32,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 4,
        marginBottom: 4,
    }
})

export default styles;