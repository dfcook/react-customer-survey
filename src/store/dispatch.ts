import ReactRedux from 'react-redux';
import { IAppState } from './AppState';

export default interface IDispatch extends ReactRedux.Dispatch<IAppState> {
}
