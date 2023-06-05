import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    option_container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    sentence_item: {
        padding: 4,
        // borderWidth: 1,
        // borderColor: 'transparent',
        borderRadius: 4,
    },
    sentence_item_active: {
        backgroundColor: '#d2eac2',
        // borderColor: '#6dae41'
    }
})

export default styles;