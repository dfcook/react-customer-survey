import React from 'react';
import styled from 'styled-components';
import { IAnswer, ISelectQuestion } from "../types";
import Question from './Question';

interface ISelectQuestionProps {
  answer: any;
  question: ISelectQuestion;
  updateAnswer: (answer: IAnswer) => void;
}

const Select = styled.select`
  min-height: 1.9rem;
  width: 100%;
  max-width: 25rem;
  border: 1px solid #cccccc;
  border-radius: 0.3rem;
  font-family: 'Roboto';
  padding-top: 0.3rem;
  font-size: 0.9em;
  &:focus {
    outline: 0;
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`;

const SelectQuestion = ({ question, answer, updateAnswer }: ISelectQuestionProps) => {
  const onValueChanged = (e: React.FormEvent<HTMLSelectElement>) => updateAnswer({
    key: question.key,
    value: e.currentTarget.value
  });

  return (
    <Question question={question}>
      <Select
        onChange={onValueChanged}
        name={question.key}
        value={answer}>
        { question.options.map(option => <option key={option.key} value={option.key}>{option.text}</option>)}
      </Select>
    </Question>
  );
}


export default SelectQuestion;
