import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    option_item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    checkbox: {
        padding: 4,
        borderRadius: 4,
        marginRight: 4,
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