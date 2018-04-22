import { ActionCreator } from 'redux';

import { IAnswer } from '../types';
import ActionTypes from './ActionTypes';

export interface IUpdateAnswerAction {
  readonly type: ActionTypes.UPDATE_ANSWER;
  readonly answer: IAnswer;
}

export interface IMoveToQuestionAction {
  readonly type: ActionTypes.MOVE_TO_QUESTION;
  readonly index: number;
}

export type AnswerAction =
  | IUpdateAnswerAction
  | IMoveToQuestionAction;

export const updateAnswer: ActionCreator<AnswerAction> = (answer: IAnswer) => ({
  answer,
  type: ActionTypes.UPDATE_ANSWER,
});

export const moveToQuestion: ActionCreator<AnswerAction> = (index: number) => ({
  index,
  type: ActionTypes.MOVE_TO_QUESTION,
});
