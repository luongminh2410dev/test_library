import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textinput_answer: {
        width: '100%',
        textAlignVertical: 'top',
        minHeight: 200,
        paddingHorizontal: 8,
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'lightgray'
    },
    image_picker_bar: {
        width: '100%',
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image_picker_label: {
        fontSize: 15,
        fontWeight: '500'
    },
    image_picker_btn: {
        width: 30,
        height: 30,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8035ff',
        borderRadius: 8,
    },
    upload_image_container: {
        marginTop: 12,
    },
    upload_image: {
        position: 'relative',
        marginRight: 12,
    },
    remove_upload_image: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
    }
})

export default styles;