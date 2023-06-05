import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    option_list: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    box_list: {
        width: '100%',
    },
    box_item: {
        flex: 1,
        marginTop: 12,
        minHeight: width * 0.6,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4,
        overflow: 'hidden',
    },
    box_header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    box_title: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white'
    },
    box_space: {
        flex: 1,
        width: '100%',
        flexDirection: "row",
        flexWrap: 'wrap',
        padding: 12,
    },
    option_item: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4,
        paddingHorizontal: 16,
        paddingVertical: 6,
        marginRight: 12,
        marginBottom: 12
    }
})

export default styles;