import { IAnswer, ISelectQuestion } from '../types';

export interface IAppState {
  readonly questions: ISelectQuestion[];
  readonly answers: IAnswer[];
}
