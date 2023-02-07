import React, { useRef, useState } from 'react';
import { Dimensions, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Feather from 'react-native-vector-icons/Feather';
import HtmlContent from '../../components/html-content';
import styles from './styles';
import Animated, { interpolateColor, runOnJS, runOnUI, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import AudioView from '../../components/audio-view';

const { width, height } = Dimensions.get('window')

const AnimatedButton = Animated.createAnimatedComponent(Pressable)
const OptionItem = (props) => {
    const { item, index, findOptionPosition, updateAnswers } = props;
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scale = useSharedValue(1);
    const backgroundColor = useSharedValue(0);
    const refOptionPosition = useRef();
    const refCurrentSocket = useRef(-1);

    const animatedItemStyles = useAnimatedStyle(() => {
        const bgColor = interpolateColor(
            backgroundColor.value,
            [0, 1],
            ['rgba(242, 234, 217, 1)', 'rgba(242, 234, 217, 0.4)']
        )
        return {
            backgroundColor: bgColor,
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
                { scale: scale.value }
            ]
        }
    })

    const getPosition = ({ translateX: _translateX, translateY: _translateY }) => {
        const offsetX = refOptionPosition.current.x + _translateX;
        const offsetY = refOptionPosition.current.y + _translateY;
        const { position, socketIndex } = findOptionPosition({ x: offsetX, y: offsetY });
        if (position) {
            translateX.value = withTiming(position.x - refOptionPosition.current.x)
            translateY.value = withTiming(position.y - refOptionPosition.current.y)
            scale.value = withTiming(1);
            backgroundColor.value = withTiming(1);
            refCurrentSocket.current = socketIndex;
            updateAnswers(socketIndex, item);
        }
        else {
            translateX.value = withTiming(0);
            translateY.value = withTiming(0);
            scale.value = withTiming(1);
            backgroundColor.value = withTiming(0);
        }
    }

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
            scale.value = withTiming(1.2)
        },
        onActive: (event, context) => {
            translateX.value = context.translateX + event.translationX;
            translateY.value = context.translateY + event.translationY;
        },
        onFinish: (event, context) => {
            runOnJS(getPosition)({
                translateX: event.translationX,
                translateY: event.translationY
            })
        }
    })

    const onLayout = ({ nativeEvent }) => {
        refOptionPosition.current = { x: nativeEvent.layout.x, y: nativeEvent.layout.y }
    }

    const onPress = () => {
        if (refCurrentSocket.current != -1) {
            translateX.value = withTiming(0);
            translateY.value = withTiming(0);
            scale.value = withTiming(1);
            backgroundColor.value = withTiming(0);
            updateAnswers(refCurrentSocket.current)
        }
        return null;
    }

    return (
        <PanGestureHandler maxPointers={1} onGestureEvent={onGestureEvent}>
            <AnimatedButton
                onPress={onPress}
                onLayout={onLayout}
                style={[styles.option_item, animatedItemStyles]}>
                <Text style={styles.option_item_label}>{item}</Text>
            </AnimatedButton>
        </PanGestureHandler>
    )
}

const PictureEnglishQuestion = (props) => {
    const {
        question, customConfig, customStyles, displayMode,
        getTopComponent, getMiddleComponent, getBottomComponent, getCornerComponent,
        customLevelComponent,
        onSelectOption, onToggleSuggestion, onSkipQuestion, onFinishQuestion, onToggleSolutionDetail
    } = props;

    const {
        label_question = 'Câu 1',
        label_suggestion = 'Phương pháp giải',
        label_solution_detail = 'Lời giải của GV Vungoi.vn',
        label_result_txt = 'Đáp án của GV Vungoi.vn',
        btn_suggestion_text = 'Gợi ý',
        btn_skip_text = 'Câu tiếp theo',
        popup_confirm_skip = {},
    } = customConfig;

    const {
        primaryColor = '#419e01',
        subColor = '#e7a22b',
        textColor = '#000000',
        container: containerStyles = {},
        question_type: questionTypeStyles = {},
        question_title: questionTitleStyles = {},
        options_container: optionContainerStyles = {},
        active_option_btn = {},
        active_option_txt = {},
        default_option_btn: defaultOptionButtonStyles = {},
        default_option_txt: defaultOptionTextStyles = {},
        result_container: resultContainerStyles = {},
        solution_detail: solutionDetailStyles = {},
        solution_suggestion: solutionSuggestionStyles = {},
        solution_detail_btn: solutionDetailBtnStyles = {},
        solution_detail_btn_title: solutionDetailBtnTitleStyles = {},
    } = customStyles;

    const {
        guide_touch, question: _question, attachment,
        difficult_level, solution_suggestion, picture,
        options, correct_options, solution_detail
    } = question;

    const [suggestionCollapsed, setSuggestionCollapsed] = useState(true);
    const [solutionCollapsed, setSolutionCollapsed] = useState(true);
    const [questionStep, setQuestionStep] = useState(0);
    const refAnswers = useRef({});

    const refSocketPositions = useRef({});

    const nextButtonLabel = questionStep == 1 ? 'Kiểm tra' : btn_skip_text;
    const suggestButtonLabel = questionStep == 2 ? 'Xem lại lý thuyết' : btn_suggestion_text;

    const getDifficultQuestion = () => {
        switch (difficult_level) {
            case 1:
                return <Text style={{ fontWeight: '400', color: 'green' }}>Cơ bản</Text>
            case 2:
                return <Text style={{ fontWeight: '400', color: 'orange' }}>Trung bình</Text>
            case 3:
                return <Text style={{ fontWeight: '400', color: 'red' }}>Nâng cao</Text>
            default:
                break;
        }
    }

    const toggleSuggestionVisible = () => {
        if (questionStep == 2) {
            console.log('xem li thuyet');
        }
        else {
            onToggleSuggestion({ isShow: suggestionCollapsed })
            setSuggestionCollapsed(!suggestionCollapsed)
        }
    }

    const toggleSolutionDetail = () => {
        onToggleSolutionDetail({ isShow: solutionCollapsed })
        setSolutionCollapsed(!solutionCollapsed)
    }

    const onNextButtonPress = () => {
        const {
            title = 'Bạn chưa chọn câu trả lời!',
            content = 'Bạn muốn bỏ qua câu hỏi này?',
            btn_ok = 'Đồng ý',
            btn_cancel = 'Huỷ'
        } = popup_confirm_skip;
        switch (questionStep) {
            case 0:
                if (displayMode == 'result') {
                    return console.log('next question');;
                }
                Alert.alert(title, content, [
                    {
                        style: 'default',
                        text: btn_ok,
                        onPress: onSkipQuestion
                    },
                    {
                        style: 'destructive',
                        text: btn_cancel
                    },
                ])
                break;
            case 1:
                setSuggestionCollapsed(true)
                setQuestionStep(2)
                // CHECK RESULT
                const isIncorrect = picture.coordinates.find((item, index) => {
                    return item.correct_text.trim() != refAnswers.current[index].trim();
                })
                console.log(isIncorrect ? 'Không chính xác' : 'Chính xác');
                break;
            case 2:
                onFinishQuestion();
                break;
            default:
                break;
        }
    }

    const _renderOptionItem = (item, index) => (
        <OptionItem
            key={index}
            item={item}
            index={index}
            textColor={textColor}
            updateAnswers={updateAnswers}
            findOptionPosition={findOptionPosition}
        />
    )

    const _renderAbsoluteSocket = (item, index) => {
        const onLayout = (e) => {
            refSocketPositions.current[index] = { x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y }
        }

        return (
            <View
                key={index}
                onLayout={onLayout}
                style={[styles.socket_item, { top: `${item.y_percent}%`, left: `${item.x_percent}%` }]}>
                <Text style={styles.option_item_label}> </Text>
            </View>
        )
    }

    const _renderResult = (item, index) => {
        const onLayout = (e) => {
            refSocketPositions.current[index] = { x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y }
        }

        return (
            <View
                key={index}
                onLayout={onLayout}
                style={[styles.socket_item, { top: `${item.y_percent}%`, left: `${item.x_percent}%` }]}>
                <Text style={styles.option_item_label}>{item.correct_text}</Text>
            </View>
        )
    }


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

    const findOptionPosition = ({ x, y }) => {
        let position = null;
        const socketIndex = picture.coordinates.findIndex((item, index) => {
            const distance = Math.sqrt(Math.pow((refSocketPositions.current[index].x - x), 2) + Math.pow((refSocketPositions.current[index].y - y), 2))
            if (distance < 25 && !refAnswers.current[index]) {
                position = refSocketPositions.current[index];
                return true;
            }
            return false;
        })
        return { position, socketIndex }
    }

    const updateAnswers = (socketIndex, option = false) => {
        option ?
            refAnswers.current[socketIndex] = option
            :
            delete refAnswers.current[socketIndex];

        setQuestionStep((Object.keys(refAnswers.current).length == options.length) ? 1 : 0)
    }

    return (
        <View style={[styles.container, containerStyles]} pointerEvents={displayMode == 'preview' ? 'none' : 'auto'}>
            <View style={[styles.row, { paddingHorizontal: 12 }]}>
                <View style={styles.question_label}>
                    <Text style={[styles.question_label_txt, { color: textColor }]}>{label_question}: </Text>
                    {customLevelComponent(difficult_level) || getDifficultQuestion()}
                </View>
                {getCornerComponent(question.id, question.sdk_type)}
            </View>
            {getTopComponent()}
            <Text style={[styles.guide_label, { color: primaryColor }, questionTypeStyles]}>{guide_touch}</Text>
            <View style={[styles.question_view, questionTitleStyles]}>
                {_question.map(_renderContent)}
            </View>
            <AudioView source={attachment.audioFile} />
            <View
                style={[styles.option_container, optionContainerStyles]}
                pointerEvents={(displayMode == 'result' || questionStep == 2) ? 'none' : 'auto'}
            >
                {picture.coordinates.map(_renderAbsoluteSocket)}
                <Image
                    resizeMode='cover'
                    source={{ uri: picture.url }}
                    style={{ width: '100%', aspectRatio: picture.width / picture.height, borderRadius: 4 }}
                />
                <GestureHandlerRootView style={styles.option_list}>
                    {options.map(_renderOptionItem)}
                </GestureHandlerRootView>
            </View>
            <Collapsible
                style={styles.suggestion_collapsible}
                collapsed={suggestionCollapsed}>
                <Text style={[styles.suggestion_label, { color: subColor }]}>{label_suggestion}</Text>
                <Image
                    resizeMode='cover'
                    source={{ uri: picture.url }}
                    style={{ width: '100%', aspectRatio: picture.width / picture.height, borderRadius: 4 }}
                />
            </Collapsible>
            <View style={styles.row}>
                <TouchableOpacity
                    disabled={displayMode == 'result'}
                    onPress={toggleSuggestionVisible}
                    style={[styles.suggestion_btn, { borderColor: primaryColor }]}>
                    {
                        questionStep != 2 && <View style={{ marginRight: 8 }}>
                            <Feather name='sun' size={20} color={primaryColor} />
                        </View>
                    }
                    <Text style={[styles.suggestion_txt, { color: primaryColor }]}>{suggestButtonLabel}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onNextButtonPress} style={[styles.next_question_btn, { backgroundColor: primaryColor }]}>
                    <Text style={styles.next_question_txt}>{nextButtonLabel}</Text>
                    <Feather name='chevrons-right' size={20} color='white' />
                </TouchableOpacity>
            </View>
            {getMiddleComponent()}
            {
                (questionStep == 2 || displayMode != 'default') &&
                <View style={[styles.result_container, resultContainerStyles]}>
                    <Text style={[styles.suggestion_label, { color: subColor }]}>{label_result_txt}</Text>
                    <View style={styles.correct_result}>
                        {picture.coordinates.map(_renderResult)}
                        <Image
                            resizeMode='cover'
                            source={{ uri: picture.url }}
                            style={{ width: '100%', aspectRatio: picture.width / picture.height, borderRadius: 4 }}
                        />
                    </View>
                    <View style={styles.solution_detail_view}>
                        <TouchableOpacity onPress={toggleSolutionDetail} style={[styles.solution_detail_btn, solutionDetailBtnStyles]}>
                            <Text style={[{ fontSize: 15, }, solutionDetailBtnTitleStyles]}>Xem lời giải</Text>
                        </TouchableOpacity>
                    </View>
                    {getBottomComponent()}
                    <Collapsible collapsed={solutionCollapsed} >
                        <View style={solutionSuggestionStyles}>
                            <Text style={[styles.suggestion_label, { color: subColor }]}>{label_suggestion}</Text>
                            {solution_suggestion.map(_renderContent)}
                        </View>
                        <View style={solutionDetailStyles}>
                            <Text style={[styles.suggestion_label, { color: subColor }]}>{label_solution_detail}</Text>
                            <View style={{ marginTop: 12 }}>
                                {solution_detail.map(_renderContent)}
                            </View>
                        </View>
                    </Collapsible>
                </View>
            }
        </View>
    )
}

export default PictureEnglishQuestion