import { combineReducers } from 'redux';
import modalReducer from './modal/modal_reducer';
import loadingReducer from './loading_reducer';
import bookingLoadingReducer from './booking_loading_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  loading: loadingReducer,
  bookingLoading: bookingLoadingReducer,
});

export default uiReducer;
