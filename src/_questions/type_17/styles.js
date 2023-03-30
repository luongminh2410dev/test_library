import { Dimensions, StyleSheet, Platform } from "react-native";

const { width, height } = Dimensions.get('window');
const isIPhoneX = Platform.OS === 'ios' && !Platform.isTVOS && (height >= 812 || width >= 812);
const styles = StyleSheet.create({
    option_container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    modal_container: {
        justifyContent: 'flex-end',
        margin: 0
    },
    modal_body: {
        width: '100%',
        minHeight: height * 0.4,
        justifyContent: 'flex-start',
        paddingHorizontal: 12,
        paddingTop: 12,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        top: isIPhoneX ? 24 : 0,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    selectbox_item: {
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginHorizontal: 4,
        marginVertical: 4,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'lightgray',
        backgroundColor: '#f2ead9'
    },
    selection_item: {
        width: '100%',
        padding: 12,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    selection_txt: {

    }
})

export default styles;