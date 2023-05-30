import React, { useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import HtmlContent from '../../components/html-content';
import styles from './styles';

const SentenceEditor = (props) => {
    const { item, index, sentenceId, textColor, updateAnswering } = props;
    const [focus, setFocus] = useState(false);
    const [editText, setEditText] = useState('');
    const refTextInputValue = useRef('');

    const onPress = () => {
        setFocus(!focus);
    }

    const onChange = (text) => {
        updateAnswering(sentenceId, text)
        refTextInputValue.current = text;
    }

    const onBlur = () => {
        setFocus(false);
        setEditText(refTextInputValue.current)
    }

    return (
        <View style={{ position: 'relative' }}>
            {
                editText &&
                <Text adjustsFontSizeToFit style={{ position: 'absolute', top: - 20, width: 100, left: 0 }}>{editText}</Text>
            }
            <TouchableOpacity
                onPress={onPress}
                style={[styles.sentence_item, (focus || editText) && { borderColor: 'green' }]}>
                <HtmlContent content={editText ? `<s>${item.content}</s>` : item.content} color={textColor} />
            </TouchableOpacity>
            {
                focus &&
                <View style={styles.absolute_view}>
                    <TextInput
                        autoFocus
                        defaultValue={editText}
                        style={{ flex: 1 }}
                        onChangeText={onChange}
                        onBlur={onBlur}
                    />
                </View>
            }
        </View>
    )
}

const Options = (props) => {
    const { question, customStyles, onAnswer } = props;
    const { textColor = '#000000' } = customStyles;
    const { suggestion_paragraph, options } = question;
    const refAnswering = useRef({});

    const _renderSentenceItem = (item, index) => {
        switch (item.type) {
            case 'choiceTextHightLight':
                return item.option_content.map((it, idx) => {
                    const editEnable = suggestion_paragraph.find(i => {
                        return /<.+?>(.*?)<\/.+?>/.exec(it.content)[1] == i.content;
                    })
                    return (
                        <View key={`${index}_${idx}`} style={{ height: 50, justifyContent: 'center' }}>
                            {!!editEnable ?
                                <SentenceEditor
                                    item={it}
                                    index={idx}
                                    sentenceId={item.id}
                                    textColor={textColor}
                                    updateAnswering={updateAnswering}
                                />
                                :
                                <HtmlContent content={it.content} color={textColor} />
                            }
                        </View>
                    )

                })
            case 'breakDown':
                return <View key={index} style={{ width: '100%' }} />;
        }
    }

    const updateAnswering = (id, answer) => {
        answer != '' ?
            refAnswering.current[id] = answer
            :
            delete refAnswering.current[id];
        onAnswer(refAnswering.current, Object.keys(refAnswering.current).length > 0)
    }

    return (
        <View style={styles.sentence_list}>
            {options.map(_renderSentenceItem)}
        </View>
    )
}

const Result = (props) => {
    const { options, correct_options, customStyles } = props;
    const { textColor = '#000000' } = customStyles;

    const _renderResult = (item, index) => {
        switch (item.type) {
            case 'choiceTextHightLight':
                return item.option_content.map((it, idx) => {
                    const incorrectSentence = correct_options.findIndex(i => {
                        return i.id == item.id;
                    })
                    return incorrectSentence != -1 ?
                        <View
                            key={`${index}_${idx}`}
                            style={{
                                marginHorizontal: 4,
                            }}>
                            <View style={{ position: 'absolute', top: -8 }}>
                                <Text>{correct_options[incorrectSentence].answer}</Text>
                            </View>
                            <HtmlContent content={`<s>${it.content}</s>`} color={textColor} />
                        </View>
                        :
                        <HtmlContent key={`${index}_${idx}`} content={it.content} color={textColor} />
                })
            case 'breakDown':
                return <View key={index} style={{ width: '100%' }} />;
        }
    }

    return (
        <View style={styles.correct_result}>
            {options.map(_renderResult)}
        </View>
    )
}

const compareAnswer = (answers, correct_options) => {
    if (Object.keys(answers).length != correct_options.length) return false;
    return !correct_options.find(item => {
        return item.answer?.toLowerCase() != answers[item.id]?.toLowerCase();
    })
}

export default {
    Options,
    Result,
    compareAnswer
}