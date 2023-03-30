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
        backgroundColor: 'black'
    },
    point_item: {
        position: 'absolute',
        maxWidth: 100,
        paddingHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    point_beacon: {
        width: 1,
        height: 8,
        backgroundColor: 'black',
        marginBottom: 8,
        transform: [{ translateY: -4 }]
    },
    point_content: {
        width: '100%',
        textAlign: 'center',
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#44a500',
        backgroundColor: '#d2eac3',
    }
})

export default styles;