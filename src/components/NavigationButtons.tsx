import React from 'react';
import styled from 'styled-components';

import Button from './Button';

export interface INavigationButtonsProps {
  currentIndex: number;
  questionCount: number;
  moveToQuestion: (index: number) => void;
}

const NavigationButtons = ({ currentIndex, questionCount, moveToQuestion }: INavigationButtonsProps) => {
  const moveToNextQuestion = () => {
    moveToQuestion(currentIndex + 1);
  }

  const moveToPreviousQuestion = () => {
    moveToQuestion(currentIndex - 1);
  }

  const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 3rem;
    margin-left: 3rem;
    margin-bottom: 2rem;
  `;

  const NextButton = styled(Button)`
    background-color: #6f8ce2;
    align-self: flex-start;
    justify-self: flex-start;
    border-color: #456bd9;
    color: white;
    &:hover {
      border-color: #99aeea;
      background-color: #5a7bdd;
    }
  `;

  const PreviousButton = styled(Button)`
    background-color: #f26941;
    align-self: flex-end;
    justify-self: flex-end;
    border-color: #da5f3b;
    color: white;
    &:hover {
      border-color: #e6643e;
      background-color: #f37c58;
    }
  `;

  return (<Buttons>
    <div>
      {
        currentIndex > 0 &&
        <PreviousButton onClick={moveToPreviousQuestion}>Previous</PreviousButton>
      }
    </div>
    <div>
      {
        currentIndex < (questionCount - 1) &&
        <NextButton onClick={moveToNextQuestion}>Next</NextButton>
      }
    </div>
  </Buttons>);
};

export default NavigationButtons;