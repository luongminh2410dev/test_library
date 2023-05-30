import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    option_container: {
        width: '100%',
        position: 'relative',
        marginTop: 12,
    },
    correct_result: {
        width: '100%',
        marginBottom: 12,
    },
    option_list: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        justifyContent: 'center',
        alignItems: 'flex-end',
        zIndex: 2,
    },
    option_item: {
        width: 50,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        marginBottom: 12,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'transparent'
    },
    option_item_label: {

    },
    socket_item: {
        position: 'absolute',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(242, 234, 217, 0.7)',
        paddingVertical: 4,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#f2ead9',
        borderStyle: 'dashed',
        zIndex: 1,
    }
})

export default styles;