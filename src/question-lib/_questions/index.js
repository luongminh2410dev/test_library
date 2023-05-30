import QuestionType1 from './type_1'
import QuestionType3 from './type_3'
import QuestionType4 from './type_4'
import QuestionType5 from './type_5'
import QuestionType6 from './type_6'
import QuestionType7 from './type_7'
import QuestionType8 from './type_8'
import QuestionType9 from './type_9'
import QuestionType10 from './type_10'
import QuestionType11 from './type_11'
import QuestionType12 from './type_12'
import QuestionType13 from './type_13'
import QuestionType14 from './type_14'
import QuestionType15 from './type_15'
import QuestionType16 from './type_16'
import QuestionType17 from './type_17'
import QuestionType18 from './type_18'
import QuestionType19 from './type_19'
import QuestionType20 from './type_20'
import QuestionType21 from './type_21'
import QuestionType22 from './type_22'

export const OptionView = ({ question, customStyles, onAnswer }) => {
    const { sdk_type } = question;
    switch (sdk_type) {
        case 1:
            return (
                <QuestionType1.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            )
        case 3:
            return (
                <QuestionType3.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            )
        case 4:
            return (
                <QuestionType4.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            )
        case 5:
            return (
                <QuestionType5.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 6:
            return (
                <QuestionType6.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 7:
            return (
                <QuestionType7.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 8:
            return (
                <QuestionType8.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 9:
            return (
                <QuestionType9.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 10:
            return (
                <QuestionType10.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 11:
            return (
                <QuestionType11.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 12:
            return (
                <QuestionType12.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 13:
            return (
                <QuestionType13.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 14:
            return (
                <QuestionType14.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 15:
            return (
                <QuestionType15.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 16:
            return (
                <QuestionType16.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 17:
            return (
                <QuestionType17.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 18:
            return (
                <QuestionType18.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 19:
            return (
                <QuestionType19.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 20:
            return (
                <QuestionType20.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 21:
            return (
                <QuestionType21.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        case 22:
            return (
                <QuestionType22.Options
                    question={question}
                    customStyles={customStyles}
                    onAnswer={onAnswer}
                />
            );
        default:
            return null;
    }
}

export const ResultView = ({ question, customStyles, getAnswers }) => {
    const { sdk_type, options, correct_options, boxList, mathquill } = question;
    switch (sdk_type) {
        case 1:
            return (
                <QuestionType1.Result
                    getAnswers={getAnswers}
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 3:
            return (
                <QuestionType3.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 4:
            return (
                <QuestionType4.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 5:
            return (
                <QuestionType5.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 6:
            return (
                <QuestionType6.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 7:
            return (
                <QuestionType7.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 8:
            return (
                <QuestionType8.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 9:
            return (
                <QuestionType9.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 10:
            return (
                <QuestionType10.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 11:
            return (
                <QuestionType11.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 12:
            return (
                <QuestionType12.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 13:
            return (
                <QuestionType13.Result
                    options={options}
                    boxList={boxList}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 14:
            return (
                <QuestionType14.Result
                    mathquill={mathquill}
                    boxList={boxList}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 15:
            return (
                <QuestionType15.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 16:
            return (
                <QuestionType16.Result
                    mathquill={mathquill}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 17:
            return (
                <QuestionType17.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 18:
            return (
                <QuestionType18.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 19:
            return (
                <QuestionType19.Result
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 20:
            return (
                <QuestionType20.Result
                    getAnswers={getAnswers}
                    options={options}
                    correct_options={correct_options}
                    customStyles={customStyles}
                />
            );
        case 21:
            return (
                <QuestionType21.Result
                    options={options}
                    picture={question.picture}
                    correct_options={correct_options}
                />
            );
        case 22:
            return (
                <QuestionType22.Result
                    options={options}
                    sub_questions={question.sub_questions}
                    display_type={question.display_type}
                    customStyles={customStyles}
                />
            );
        default:
            return null;
    }
}

export const compareAnswer = (type, options, answers, correct_options) => {
    switch (type) {
        case 1:
            return QuestionType1.compareAnswer(answers, correct_options, options);
        case 2:
            return;
        case 3:
            return QuestionType3.compareAnswer(answers, correct_options);
        case 4:
            return QuestionType4.compareAnswer(answers, correct_options, options);
        case 5:
            return QuestionType5.compareAnswer(answers, correct_options);
        case 6:
            return QuestionType6.compareAnswer(answers, correct_options);
        case 7:
            return QuestionType7.compareAnswer(answers, correct_options);
        case 8:
            return QuestionType8.compareAnswer(answers, correct_options);
        case 9:
            return QuestionType9.compareAnswer(answers, correct_options);
        case 10:
            return QuestionType10.compareAnswer(answers, correct_options);
        case 11:
            return QuestionType11.compareAnswer(answers, correct_options);
        case 12:
            return QuestionType12.compareAnswer(answers, correct_options);
        case 13:
            return QuestionType13.compareAnswer(answers, correct_options);
        case 14:
            return QuestionType14.compareAnswer(answers, correct_options);
        case 15:
            return QuestionType15.compareAnswer(answers, correct_options);
        case 16:
            return QuestionType16.compareAnswer(answers, correct_options);
        case 17:
            return QuestionType17.compareAnswer(answers, correct_options);
        case 18:
            return QuestionType18.compareAnswer(answers, correct_options);
        case 19:
            return QuestionType19.compareAnswer(answers, correct_options);
        case 20:
            return QuestionType20.compareAnswer(answers, correct_options);
        case 21:
            return QuestionType21.compareAnswer(answers, correct_options);
        default:
            break;
    }
}