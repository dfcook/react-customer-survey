import { IAnswer, ISelectQuestion } from '../types';

export interface IAppState {
  readonly answers: IAnswer[];
  readonly currentIndex: number;
  readonly questions: ISelectQuestion[];
}
