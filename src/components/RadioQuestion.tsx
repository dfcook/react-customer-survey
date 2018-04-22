import React from 'react';
import { IAnswer, IRadioQuestion } from "../types";
import Question from './Question';

interface IRadioQuestionProps {
  answer: any;
  question: IRadioQuestion;
  updateAnswer: (answer: IAnswer) => void;
}

const RadioQuestion = ({ question, answer, updateAnswer }: IRadioQuestionProps) => {
  const onValueChanged = (e: React.FormEvent<HTMLInputElement>) => updateAnswer({
    key: question.key,
    value: e.currentTarget.value
  });

  return (
    <Question question={question}>
      {question.options.map(option => (
        <div className="radio-select">
          <label className="radio-select-label">
            <input
              name={question.key}
              type="radio"
              key={option.key}
              value={option.key}
              checked={option.key === answer}
              onChange={onValueChanged}
            />
            <span className="radio-option-text">{ option.text }</span>
          </label>
        </div>
      ))}
    </Question>
  );
}

export default RadioQuestion;
