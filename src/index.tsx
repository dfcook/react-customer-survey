import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { moveToQuestion, updateAnswer } from './store/actions';
import { IAppState } from './store/AppState';
import IDispatch from './store/dispatch';
import { AnswerType } from './types';

const mapStateToProps = ({ answers, currentIndex, questions }: IAppState) => {
  return {
    answers,
    currentIndex,
    questions,
  };
};

const mapDispatchToProps = (dispatch: IDispatch) => ({
  moveToQuestion: bindActionCreators(moveToQuestion, dispatch),
  updateAnswer: bindActionCreators(updateAnswer, dispatch)
});

store.dispatch({
  questions: [
    {
      answerType: AnswerType.Radio,
      index: 0,
      key: 'customer-service',
      options: [
        {
          key: 'superior',
          text: 'Superior',
        },
        {
          key: 'very-satisfactory',
          text: 'Very Satisfactory',
        },
        {
          key: 'about-average',
          text: 'About Average',
        },
        {
          key: 'somewhat-unsatisfactory',
          text: 'Somewhat Unsatisfactory',
        },
        {
          key: 'very-poor',
          text: 'Very Poor',
        }
      ],
      text: 'In thinking about your most recent experience with Initech, how was the quality of customer service you received?',
    },
    {
      answerType: AnswerType.Radio,
      index: 0,
      key: 'concern-resolution',
      options: [
        {
          key: 'very-unsatisfactory',
          text: 'Very Unsatisfactory',
        },
        {
          key: 'somewhat-satisfactory',
          text: 'Somewhat Satisfactory',
        },
        {
          key: 'about-average',
          text: 'About Average',
        },
        {
          key: 'somewhat-satisfactory',
          text: 'Somewhat Satisfactory',
        },
        {
          key: 'very-satisfactory',
          text: 'Very Satisfactory',
        },
      ],
      text: 'The process for getting your concerns resolved was:',
    },
  ],
  type: 'LOAD_QUESTIONS',
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
