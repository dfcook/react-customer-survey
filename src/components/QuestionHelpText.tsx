import React from 'react';
import './QuestionHelpText.css';

interface IQuestionHelpTextProps {
  text?: string;
  visible: boolean;
}

const QuestionHelpText = (props: IQuestionHelpTextProps) =>
  <div className="question-help-text">
    { props.visible && <p>{ props.text }</p> }
  </div>;

export default QuestionHelpText;
