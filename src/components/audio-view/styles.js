import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    audio_container: {
        width: width * 0.8,
        maxWidth: 400,
        height: 50,
        paddingHorizontal: 16,
        alignItems: 'center',
        backgroundColor: '#f1f3f4',
        borderRadius: 24,
        flexDirection: 'row',
    },
    play_btn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    error_label: {
        flex: 1,
        paddingHorizontal: 8,
        color: 'gray',
    },
    progress_time: {
        width: 76,
        textAlign: 'right'
    }
})

export default styles;