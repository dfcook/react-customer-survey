import React from 'react';
import { IQuestion } from '../types';
import './Question.css';
import QuestionHelpText from './QuestionHelpText';

interface IQuestionProps {
  question: IQuestion;
}

interface IQuestionState {
  helpTextVisible: boolean;
}

export default class Question extends React.Component<IQuestionProps, IQuestionState> {
  public state: IQuestionState = {
    helpTextVisible: false
  };

  constructor (props: IQuestionProps) {
    super(props);

    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  public render() {
    const { question, children } = this.props;
    const { helpTextVisible } = this.state;

    return (
      <div
        className="question-container"
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}>
        <label className="question-label">{question.text}</label>
        <div className="question-input">{children}</div>

        <QuestionHelpText text={question.helpText} visible={helpTextVisible} />
      </div>
    );
  }

  private onEnter() {
    this.setState({
      helpTextVisible: true
    });
  }

  private onLeave() {
    this.setState({
      helpTextVisible: false
    });
  }
}
