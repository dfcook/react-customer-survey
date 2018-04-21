import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { updateAnswer } from './store/actions';
import { IAppState } from './store/AppState';
import IDispatch from './store/dispatch';

const mapStateToProps = (state: IAppState) => {
  return {
    answers: state.answers,
    questions: state.questions,
  };
};

const mapDispatchToProps = (dispatch: IDispatch) => ({
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
