import { combineReducers } from 'redux';
import modalReducer from './modal/modal_reducer';
import loadingReducer from './loadingReducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  loading: loadingReducer,
});

export default uiReducer;
