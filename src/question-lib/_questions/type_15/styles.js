import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    option_container: {
        width: '100%',
    },
    shaft_number: {
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
    },
    shaft_line: {
        flex: 1,
        height: 1,
    },
    point_item: {
        position: 'absolute',
        top: 0,
        maxWidth: 100,
        paddingHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    point_beacon: {
        width: 1,
        height: 8,
        marginBottom: 8,
        transform: [{ translateY: -4 }],
    },
    point_border: {
        borderRadius: 4,
        width: '100%',
        overflow: 'hidden'
    },
    point_content: {
        width: '100%',
        paddingVertical: 8,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        backgroundColor: '#d2eac3',
    }
})

export default styles;