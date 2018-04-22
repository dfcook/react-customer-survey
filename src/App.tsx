import React from 'react';

import './App.css';
import NavigationButtons from './components/NavigationButtons';
import RadioQuestion from './components/RadioQuestion';
import SelectQuestion from './components/SelectQuestion';
import { AnswerType, IAnswer, IQuestion, IRadioQuestion, ISelectQuestion } from './types';

export interface IAppProps {
  answers: IAnswer[];
  currentIndex: number;
  questions: IQuestion[];
  moveToQuestion: (index: number) => void;
  updateAnswer: (answer: IAnswer) => void;
}

const App = ({ questions, answers, currentIndex, moveToQuestion, updateAnswer }: IAppProps) => {
  const currentQuestion = questions[currentIndex];
  const answer = answers.find(a => a.key === currentQuestion.key) || { value: '' };

  let child = <div />;

  switch (currentQuestion.answerType) {
    case AnswerType.Radio:
      child = <RadioQuestion
        key={currentQuestion.key}
        updateAnswer={updateAnswer}
        question={currentQuestion as IRadioQuestion}
        answer={answer.value} />;
      break;

    case AnswerType.Select:
      child = <SelectQuestion
        key={currentQuestion.key}
        updateAnswer={updateAnswer}
        question={currentQuestion as ISelectQuestion}
        answer={answer.value} />;
      break;
  }

  return (
    <div className="App">
      <div className="title">Customer Satisfaction Survey</div>

      <div className="questions-container">
        {child}
      </div>

      <NavigationButtons
        moveToQuestion={moveToQuestion}
        questionCount={questions.length}
        currentIndex={currentIndex} />

      <div className="footer">
        {currentIndex + 1} of {questions.length} questions
      </div>
    </div>
  );
};

export default App;
