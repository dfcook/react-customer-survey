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
    justify-content: flex-end;
    margin-right: 3rem;
    margin-bottom: 2rem;
    align-items: center;
  `;

  const NextButton = styled(Button)`
    background-color: #2ecc71;
    color: white;
    &:hover {
      opacity: 0.75;
    }
  `;

  const PreviousButton = styled(Button)`
    background-color: #2ecc71;
    color: white;
    &:hover {
      opacity: 0.75;
    }
  `;

  return (<Buttons>
    {
      currentIndex > 0 &&
      <PreviousButton onClick={moveToPreviousQuestion}>Previous</PreviousButton>
    }
    {
      currentIndex < (questionCount - 1) &&
      <NextButton onClick={moveToNextQuestion}>Next</NextButton>
    }
  </Buttons>);
};

export default NavigationButtons;