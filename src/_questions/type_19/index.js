import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const PickedImages = (props) => {
    const { onUploadImageChange } = props;
    const [images, setImages] = useState([]);

    useEffect(() => {
        onUploadImageChange(images)
    }, [images])

    const _renderImageItem = (item, index) => {
        const removeUploadImage = () => {
            const getIndex = images.indexOf(item);
            const newState = [...images];
            newState.splice(getIndex, 1)
            setImages(newState)
        }

        return (
            <Animated.View
                key={index}
                entering={FadeIn}
                exiting={FadeOut}
                style={styles.upload_image}>
                <TouchableOpacity onPress={removeUploadImage} style={styles.remove_upload_image}>
                    <Entypo name='circle-with-minus' size={24} color={'#ff2e4d'} />
                </TouchableOpacity>
                <Image
                    source={{ uri: item }}
                    resizeMode='cover'
                    style={{ width: 100, aspectRatio: 3 / 4, borderRadius: 4 }}
                />
            </Animated.View>
        )
    }

    const handlePickImageFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(img => {
            setImages([...images, img.sourceURL])
        });
    }

    const handlePickImageFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(img => {
            setImages([...images, img.sourceURL])
        });
    }

    return (
        <>
            <View style={styles.image_picker_bar}>
                <Text style={styles.image_picker_label}>Ảnh đính kèm: </Text>
                <TouchableOpacity
                    onPress={handlePickImageFromGallery}
                    style={styles.image_picker_btn}>
                    <Ionicons name='image' size={20} color='white' />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handlePickImageFromCamera}
                    style={styles.image_picker_btn}>
                    <Ionicons name='camera' size={20} color='white' />
                </TouchableOpacity>
            </View>
            {
                !!images &&
                <ScrollView horizontal style={styles.upload_image_container}>
                    {images.map(_renderImageItem)}
                </ScrollView>
            }
        </>
    )
}

const Options = (props) => {
    const { question, customStyles, onAnswer } = props;
    const { textColor = '#000000' } = customStyles;

    const { prefix_input } = question;
    const refAnswering = useRef({ content: '', images: [] })

    const _renderContent = (item, index) => {
        switch (item.type) {
            case 'html':
                return <HtmlContent key={index} content={item.content} color={textColor} />
            case 'image':
                return (
                    <Image
                        key={index}
                        resizeMode='contain'
                        style={{ width: parseInt(item.width), height: parseInt(item.height) }}
                        source={{ uri: item.url }} />
                )
        }
    }

    const onTextInputChange = (text) => {
        refAnswering.current.content = text;
        onAnswer(
            refAnswering.current,
            refAnswering.current.images.length != 0 || text != ''
        )
    }

    const onUploadImageChange = (images) => {
        refAnswering.current.images = images;
        onAnswer(
            refAnswering.current,
            images.length != 0 || refAnswering.current.content != ''
        )
    }

    return (
        <>
            <View style={{ width: '100%', alignItems: 'center' }}>
                {prefix_input.map(_renderContent)}
            </View>
            <PickedImages onUploadImageChange={onUploadImageChange} />
            <TextInput
                style={styles.textinput_answer}
                multiline
                onChangeText={onTextInputChange}
            />
        </>
    )
}

const Result = (props) => {
    const { correct_options, customStyles } = props;
    const { textColor = '#000000' } = customStyles;

    const _renderResult = (item, index) => (
        <Text key={index} style={{ fontSize: 15, color: textColor }}>{item}</Text>
    )
    return correct_options.map(_renderResult)
}

const compareAnswer = (answers, correct_options) => {
    return correct_options[0] == answers.content;
}

export default {
    Options,
    Result,
    compareAnswer
}