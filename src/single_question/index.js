import PropTypes from 'prop-types'
import React from 'react'
import ChooseCorrectestQuestion from '../questions/choose-correctest-question'
import CompoundQuestion from '../questions/compound-question'
import DragOnBoxQuestion from '../questions/drag-on-box-question'
import FindFaultQuestion from '../questions/find-fault-question'
import FindFaultQuestion2 from '../questions/find-fault-question2'
import MultiCorrectQuestion from '../questions/multi-correct-question'
import MultiSelectBoxQuestion from '../questions/multi-selectbox-question'
import MultiChoice from '../questions/multichoice-question'
import PairingQuestion from '../questions/pairing-question'
import PhraseQuestion from '../questions/phrase-question'
import SelectSentenceQuestion from '../questions/select-sentence-question'
import ShaftNumberQuestion from '../questions/shaft-number-question'
import SortQuestion from '../questions/sort_question'
import TextDGNL from '../questions/text-dgnl-question'
import TextNonMathjaxQuestion from '../questions/text-nonmathjax-question'
import TFTableQuestion from '../questions/tf-table-question'
import YNQuestion from '../questions/yn-question'
import MathQuillQuestion from '../questions/mathquill-question'
import EssayQuestion from '../questions/essay-question'
import PictureEnglishQuestion from '../questions/picture-english-question'
import LGHCompoundQuestion from '../questions/lgh-compound-question'
import MathQuillQuestion2 from '../questions/mathquill-question-2'

const SingleQuestion = (props) => {
    const { question, globalConfig, globalStyles, customConfig, customStyles } = props;
    const { sdk_type } = question;

    const newConfig = Object.assign({}, globalConfig, customConfig);
    const newStyles = Object.assign({}, globalStyles, customStyles);

    switch (sdk_type) {
        case 1:
            return (
                <MultiChoice
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 2:
            return (
                <CompoundQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 3:
            return (
                <YNQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 4:
            return (
                <PairingQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 5:
            return (
                <PhraseQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 6:
            return (
                <SortQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 7:
            return (
                <TFTableQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 8:
            return (
                <FindFaultQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 9:
            return (
                <FindFaultQuestion2
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 10:
            return (
                <MultiCorrectQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 11:
            return (
                <SelectSentenceQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 12:
            return (
                <TextNonMathjaxQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 13:
            return (
                <DragOnBoxQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 14:
            return (
                <MathQuillQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 15:
            return (
                <ShaftNumberQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 16:
            return (
                <MathQuillQuestion2
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 17:
            return (
                <MultiSelectBoxQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 18:
            return (
                <ChooseCorrectestQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 19:
            return (
                <EssayQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 20:
            return (
                <TextDGNL
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 21:
            return (
                <PictureEnglishQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        case 22:
            return (
                <LGHCompoundQuestion
                    {...props}
                    customConfig={newConfig}
                    customStyles={newStyles}
                />
            )
        default:
            return null;
    }
}


SingleQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    primaryColor: PropTypes.string,
    globalConfig: PropTypes.shape({
        label_question: PropTypes.string,
        label_suggestion: PropTypes.string,
        label_solution_detail: PropTypes.string,
        label_result_txt: PropTypes.string,
    }),
    globalStyles: PropTypes.shape({
        primaryColor: PropTypes.string,
        subColor: PropTypes.string,
        textColor: PropTypes.string,
        container: PropTypes.object,
    }),
    customConfig: PropTypes.shape({
        label_question: PropTypes.string,
        label_suggestion: PropTypes.string,
        label_solution_detail: PropTypes.string,
        label_result_txt: PropTypes.string,
        btn_suggestion_text: PropTypes.string,
        btn_skip_text: PropTypes.string,
        popup_confirm_skip: PropTypes.string,
    }),
    customStyles: PropTypes.shape({
        primaryColor: PropTypes.string,
        subColor: PropTypes.string,
        textColor: PropTypes.string,
        container: PropTypes.object,
        question_type: PropTypes.object,
        question_title: PropTypes.object,
        options_container: PropTypes.object,
        // actived_option_btn: PropTypes.object,
        // actived_option_title: PropTypes.object,
        default_option_btn: PropTypes.object,
        default_option_txt: PropTypes.object,
        // 
        default_target_option: PropTypes.object,
        default_source_option: PropTypes.object,
        active_option_btn: PropTypes.object,
        active_option_txt: PropTypes.object,
        // 
        text_input_label: PropTypes.object,
        text_input_item: PropTypes.object,
        // 
        result_container: PropTypes.object,
        solution_detail: PropTypes.object,
        solution_suggestion: PropTypes.object,
        solution_detail_btn: PropTypes.object,
        solution_detail_btn_title: PropTypes.object,
    }),
    displayMode: PropTypes.oneOf(['default', 'result', 'preview']),
    getTopComponent: PropTypes.func,
    getMiddleComponent: PropTypes.func,
    getBottomComponent: PropTypes.func,
    getCornerComponent: PropTypes.func,
    customLevelComponent: PropTypes.func,
    onSelectOption: PropTypes.func,
    onToggleSuggestion: PropTypes.func,
    onSkipQuestion: PropTypes.func,
    onFinishQuestion: PropTypes.func,
    onToggleSolutionDetail: PropTypes.func,
}

SingleQuestion.defaultProps = {
    question: {},
    globalConfig: {},
    globalStyles: {},
    customConfig: {},
    customStyles: {},
    displayMode: 'default',
    getTopComponent: () => null,
    getMiddleComponent: () => null,
    getBottomComponent: () => null,
    getCornerComponent: () => null,
    customLevelComponent: () => null,
    onSelectOption: () => { },
    onToggleSuggestion: () => { },
    onSkipQuestion: () => { },
    onFinishQuestion: () => { },
    onToggleSolutionDetail: () => { },
}


export default SingleQuestion