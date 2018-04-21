import { ActionCreator } from 'redux';

import { IAnswer } from '../types';
import ActionTypes from './ActionTypes';

export interface IUpdateAnswerAction {
  readonly type: ActionTypes.UPDATE_ANSWER;
  readonly answer: IAnswer;
}

export type AnswerAction =
  | IUpdateAnswerAction;

export const updateAnswer: ActionCreator<AnswerAction> = (answer: IAnswer) => ({
  answer,
  type: ActionTypes.UPDATE_ANSWER,
});

