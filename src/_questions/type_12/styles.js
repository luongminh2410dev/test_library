import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    option_container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sentence_editor: {
        height: 30,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'gray',
        marginHorizontal: 8,
        textAlign: 'center'
    }
})

export default styles;