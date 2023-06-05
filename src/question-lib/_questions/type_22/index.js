import React, { useRef, useState } from 'react';
import { Image, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Webview from 'react-native-autoheight-webview';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const configHtml = (content, textColor) => {
    const styles = `
        <style>
            html, body {
                border: 0px;
                margin: 0px;
                padding: 0px;
            }
            .formula{
                width: 100%;
                margin: 0px;
                padding: 0;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 15px;
                color: ${textColor};
            }
            .simple-text-input {
                width: 80px;
                height: 28px;
                margin-right: 2px;
                border-width: 1px;
                border-color: 'lightgray';
                border-radius: 4px;
                text-align: center;
            }
            p, span, a, tr, td, strong {
                color: ${textColor};
                line-height: 30px;
            }
            input, select:focus, textarea {
                font-size: 16px !important;
            }
            textarea:focus, input:focus{
                outline: none;
            }
        </style>
    `
    return `
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        </head>
        ${styles}
        <body>
            <div class="formula">
                ${content}
            </div>
        </body>
    `;
}

const FillEmptyQuestion = (props) => {
    const { item, index, customStyles, htmlContent, updateAnswers } = props;
    const { textColor } = customStyles;

    const onMessage = event => {
        const message = JSON.parse(event.nativeEvent.data);
        updateAnswers(message.id, message.value);
    }

    const injectJavascript = `
        const simpleInputs = document.getElementsByClassName('simple-text-input');
        for(let i = 0; i < simpleInputs.length; i++)
        {
            simpleInputs[i].onblur = function(e){
                let id = simpleInputs[i].getAttribute("id");
                const data = JSON.stringify({id, value: e.target.value});
                window.ReactNativeWebView.postMessage(data);
            }
        }
    `
    return (
        <Webview
            source={{ html: configHtml(htmlContent, textColor) }}
            style={{ width: '100%' }}
            onMessage={onMessage}
            renderLoading={() => null}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            originWhitelist={['*']}
            startInLoadingState
            cacheEnabled={false}
            scalesPageToFit={false}
            customScript={injectJavascript}
            javaScriptEnabled
            cacheMode='LOAD_NO_CACHE'
            thirdPartyCookiesEnabled={false}
            nestedScrollEnabled={false}
            textZoom={100}
            scrollEnabled={false}
            injectedJavaScriptForMainFrameOnly
            automaticallyAdjustContentInsets={false}
        />
    )
}

const QuizQuestion = (props) => {
    const { item, index, initValue, customStyles, updateAnswers, resultMode = false } = props;
    const { textColor, primaryColor } = customStyles;
    const [currentAnswer, setCurrentAnswer] = useState(() => {
        if (resultMode) {
            return item.options.findIndex(it => it.correct)
        }
        return initValue;
    });

    const _renderOptionItem = (i, idx) => {
        const isActive = currentAnswer == idx;
        const onPress = () => {
            setCurrentAnswer(idx)
            updateAnswers(item.id, idx)
        }
        return (
            <TouchableOpacity
                key={idx}
                onPress={onPress}
                style={styles.answer_btn}>
                <View style={[styles.checkbox]}>
                    <View style={[styles.checkbox_dot, isActive && { backgroundColor: primaryColor }]} />
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, color: isActive ? primaryColor : textColor }}>{i.answer_key.toUpperCase()}. </Text>
                    {i.option_content.map((it, ix) => {
                        switch (it.type) {
                            case 'html':
                                return (
                                    <HtmlContent key={ix} content={it.content} color={isActive ? primaryColor : textColor} />
                                )
                            case 'image':
                                return <Image key={ix} style={{ width: 200, height: 150 }} source={{ uri: it.content }} />
                        }
                    })}
                </View>
            </TouchableOpacity>
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

    return (
        <View style={{ width: '100%' }}>
            <View style={styles.question_view}>
                {item.question_child.map(_renderContent)}
            </View>
            {item.options.map(_renderOptionItem)}
        </View>
    )
}

const Options = (props) => {
    const { question, customStyles, onAnswer, initAnswers = {} } = props;
    const { sub_questions, display_type } = question;
    const refAnswers = useRef(initAnswers);

    const _renderSubQuestion = (item, index) => {
        switch (item.sub_type) {
            case 'fill_empty':
                const htmlContent = item.options.reduce((pre, cur) => {
                    switch (cur.obj_type) {
                        case 'richText':
                            return (pre + cur.option_content.reduce((pr, cr) => pr + cr.content, ''));
                        case 'inputText':
                            return pre + `<input type="text" class="simple-text-input" id="${item.id}" value="${initAnswers?.[item.id] || ''}">`
                    }
                }, '').replace(/p>/g, 'span>')
                return (
                    <FillEmptyQuestion
                        key={index}
                        item={item}
                        index={index}
                        customStyles={customStyles}
                        htmlContent={htmlContent}
                        updateAnswers={updateAnswers} />
                )
            case 'quiz':
                return (
                    <QuizQuestion
                        key={index}
                        item={item}
                        index={index}
                        initValue={initAnswers?.[item.id] || -1}
                        customStyles={customStyles}
                        updateAnswers={updateAnswers} />
                )
            default:
                return null;
        }
    }

    const updateAnswers = (id, answer) => {
        answer !== '' ?
            refAnswers.current[id] = answer
            :
            delete refAnswers.current[id]
        onAnswer(refAnswers.current, Object.keys(refAnswers.current).length == sub_questions.length)
    }

    const _renderComboSubQuestion = () => {
        const newSubQuestions = sub_questions.reduce((previous, current) => {
            const previousMaping = [...previous];
            switch (current.sub_type) {
                case 'fill_empty':
                    const getIndex = previous.findIndex(it => it.sub_type == 'fill_empty');
                    const currentContent = current.options.reduce((pre, cur) => {
                        switch (cur.obj_type) {
                            case 'richText':
                                return (pre + cur.option_content.reduce((pr, cr) => pr + cr.content, ''));
                            case 'inputText':
                                return pre + ` <input type="text" class="simple-text-input" id="${current.id}" value="${initAnswers?.[current.id] || ''}">`
                        }
                    }, '')
                    if (getIndex != -1) {
                        const newContent = { ...previous[getIndex], content: previous[getIndex].content + currentContent };
                        previousMaping.splice(getIndex, 1, newContent);
                    }
                    else {
                        previousMaping.push({ ...current, content: currentContent });
                    }
                    return previousMaping;
                case 'quiz':
                    previousMaping.push(current);
                    return previousMaping;
                default:
                    return previous;
            }
        }, [])

        return newSubQuestions.map((item, index) => {
            switch (item.sub_type) {
                case 'fill_empty':
                    return (
                        <FillEmptyQuestion
                            key={index}
                            htmlContent={item.content.replace(/p>/g, 'span>')}
                            customStyles={customStyles}
                            updateAnswers={updateAnswers}
                        />
                    )
                case 'quiz':
                    return (
                        <QuizQuestion
                            key={index}
                            item={item}
                            index={index}
                            initValue={initAnswers?.[item.id] || -1}
                            customStyles={customStyles}
                            updateAnswers={updateAnswers} />
                    )
                default:
                    return null;
            }
        });
    }

    return (
        <View style={styles.option_container}>
            {
                display_type == 2 ?
                    _renderComboSubQuestion()
                    :
                    sub_questions.map(_renderSubQuestion)
            }
        </View>
    )
}

const Result = (props) => {
    const { sub_questions, customStyles, display_type } = props;
    const { textColor } = customStyles;

    const _renderComboSubQuestion = () => {
        const newSubQuestions = sub_questions.reduce((previous, current) => {
            const previousMaping = [...previous];
            switch (current.sub_type) {
                case 'fill_empty':
                    const getIndex = previous.findIndex(it => it.sub_type == 'fill_empty');
                    const currentContent = current.options.reduce((pre, cur) => {
                        switch (cur.obj_type) {
                            case 'richText':
                                return (pre + cur.option_content.reduce((pr, cr) => pr + cr.content, ''));
                            case 'inputText':
                                return pre + `<u><i>${cur.option_content}</i></u>`
                        }
                    }, '')
                    if (getIndex != -1) {
                        const newContent = { ...previous[getIndex], content: previous[getIndex].content + currentContent };
                        previousMaping.splice(getIndex, 1, newContent);
                    }
                    else {
                        previousMaping.push({ ...current, content: currentContent });
                    }
                    return previousMaping;
                case 'quiz':
                    previousMaping.push(current);
                    return previousMaping;
                default:
                    return previous;
            }
        }, [])

        return newSubQuestions.map((item, index) => {
            switch (item.sub_type) {
                case 'fill_empty':
                    return (
                        <HtmlContent
                            key={index}
                            content={
                                `<span style="line-height: 28px;">${item.content.replace(/<p>/g, ' ').replace(/<\/p>/g, ' ')}</span>`
                            }
                            color={textColor}
                        />
                    )
                case 'quiz':
                    return (
                        <QuizQuestion
                            key={index}
                            item={item}
                            index={index}
                            resultMode
                            customStyles={customStyles}
                        />
                    )
                default:
                    return null;
            }
        });
    }

    const _renderResult = (item, index) => {
        switch (item.sub_type) {
            case 'fill_empty':
                let resultContent = '';
                item.options.map((it, idx) => {
                    if (it.obj_type == 'inputText') {
                        return resultContent += `<u><i>${it.option_content}</i></u>`;
                    }
                    return it.option_content.map(i => resultContent += i.content)
                });
                return <HtmlContent key={index} content={`<span style="line-height: 28px;">${resultContent.replace(/<p>/g, ' ').replace(/<\/p>/g, ' ')}</span>`} color={textColor} />
            case 'quiz':
                return (
                    <QuizQuestion
                        key={index}
                        item={item}
                        index={index}
                        resultMode
                        customStyles={customStyles}
                    />
                )
            default:
                return null;
        }
    }

    return (
        <View style={styles.correct_result}>
            {
                display_type == 2 ?
                    _renderComboSubQuestion()
                    :
                    sub_questions.map(_renderResult)
            }
        </View>
    )
}

const compareAnswer = (answers, sub_questions) => {
    return sub_questions.every(item => {
        switch (item.sub_type) {
            case 'fill_empty':
                return answers[item.id]?.toLowerCase() == item.options.find(it => it.obj_type == 'inputText')?.option_content.toLowerCase();
            case 'quiz':
                return answers[item.id] == item.options.findIndex(it => it.correct);
            default:
                return false;
        }
    })
}

export default {
    Options,
    Result,
    compareAnswer
}