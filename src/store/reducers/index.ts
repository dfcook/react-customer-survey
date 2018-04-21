import { AnswerAction } from '../actions';
import ActionTypes from '../ActionTypes';
import { IAppState } from '../AppState';
import initialState from '../initialState';

export default (state: IAppState = initialState, action: AnswerAction | any): IAppState => {
  switch (action.type) {
    case ActionTypes.UPDATE_ANSWER:
      const answer = (action as AnswerAction).answer;

      return {
        ...state,
        answers: state.answers.map(a => a.key === answer.key ? answer : a)
      };

    default:
      return state;
  }
};
