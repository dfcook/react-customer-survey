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

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
