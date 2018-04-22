import { ActionCreator } from 'redux';

import { IAnswer, Question } from '../types';
import ActionTypes from './ActionTypes';

export interface IUpdateAnswerAction {
  readonly type: ActionTypes.UPDATE_ANSWER;
  readonly answer: IAnswer;
}

export interface IMoveToQuestionAction {
  readonly type: ActionTypes.MOVE_TO_QUESTION;
  readonly index: number;
}

export interface ILoadQuestionsAction {
  readonly type: ActionTypes.LOAD_QUESTIONS;
  readonly questions: Question[];
}

export type AnswerAction =
  | IUpdateAnswerAction
  | IMoveToQuestionAction
  | ILoadQuestionsAction;

export const updateAnswer: ActionCreator<AnswerAction> = (answer: IAnswer) => ({
  answer,
  type: ActionTypes.UPDATE_ANSWER,
});

export const moveToQuestion: ActionCreator<AnswerAction> = (index: number) => ({
  index,
  type: ActionTypes.MOVE_TO_QUESTION,
});

export const loadQuestions: ActionCreator<AnswerAction> = (questions: Question[]) => ({
  questions,
  type: ActionTypes.LOAD_QUESTIONS,
});
