import { AnswerAction, IMoveToQuestionAction, IUpdateAnswerAction } from '../actions';
import ActionTypes from '../ActionTypes';
import { IAppState } from '../AppState';
import initialState from '../initialState';

export default (state: IAppState = initialState, action: AnswerAction | any): IAppState => {
  switch (action.type) {
    case ActionTypes.UPDATE_ANSWER:
      const answer = (action as IUpdateAnswerAction).answer;

      return {
        ...state,
        answers: state.answers.map(a => a.key === answer.key ? answer : a)
      };

    case ActionTypes.MOVE_TO_QUESTION:
      const index = (action as IMoveToQuestionAction).index;

      return {
        ...state,
        currentIndex: index
      };

    default:
      return state;
  }
};
