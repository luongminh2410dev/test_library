import React, { useState } from 'react';
import { Image, View } from 'react-native';
import HtmlContent from '../../components/html-content';
import SingleQuestion from '../../single_question';
import styles from './styles';

// nextBtnState: 0 - chua chon dap an, 1 - da chon dap an, 2 - da hoan thanh cau hoi
const CompoundQuestion = (props) => {
    const {
        question, customConfig, customStyles, displayMode,
        getTopComponent, getMiddleComponent, getBottomComponent, getCornerComponent,
        customLevelComponent,
        onSelectOption, onToggleSuggestion, onSkipQuestion, onFinishQuestion, onToggleSolutionDetail
    } = props;

    const { label_question = 'Câu 1' } = customConfig;

    const {
        textColor = '#000000',
        container: containerStyles = {},
        question_title: questionTitleStyles = {},
    } = customStyles;

    const { question: _question, } = question;

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const moveToNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
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
                        style={{ width: 200, height: 150 }}
                        source={{ uri: item.url }} />
                )
        }
    }

    const _renderChildQuestion = (item, index) => {
        const childIndex = parseInt(label_question.charAt(label_question.length - 1)) || 1;

        const onChildSelectOption = (e) => {
            // console.log(e, index);
        }
        return (
            <SingleQuestion
                key={item.id}
                question={item}
                customStyles={customStyles}
                customConfig={{
                    ...customConfig,
                    label_question: `Câu ${childIndex + index}`
                }}
                getMiddleComponent={getMiddleComponent}
                getBottomComponent={getBottomComponent}
                getCornerComponent={getCornerComponent}
                customLevelComponent={customLevelComponent}
                onSelectOption={onChildSelectOption}
                onSkipQuestion={moveToNextQuestion}
                onFinishQuestion={moveToNextQuestion}
            />
        )
    }

    if (!question) return null;
    return (
        <View style={[styles.container, containerStyles]} pointerEvents={displayMode == 'preview' ? 'none' : 'auto'}>
            {getTopComponent()}
            <View style={[styles.question_view, questionTitleStyles]}>
                {_question.content.map(_renderContent)}
            </View>
            <View style={styles.child_questions}>
                {_renderChildQuestion(_question.sub_questions[currentQuestion], currentQuestion)}
            </View>
        </View>
    )
}

export default CompoundQuestion