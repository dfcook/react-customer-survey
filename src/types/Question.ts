import { AnswerType } from './AnswerType';
import IOption from './Option';

export interface IQuestion {
  key: string;
  index: number;
  text: string;
  answerType: AnswerType;
  helpText?: string;
}

export interface ISelectQuestion extends IQuestion {
  options: IOption[];
}

export interface IRadioQuestion extends IQuestion {
  options: IOption[];
}

export type Question =
  | ISelectQuestion
  | IRadioQuestion;
