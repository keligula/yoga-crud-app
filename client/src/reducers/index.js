import { combineReducers } from 'redux';
import practicesReducer from './practicesReducer';

export default combineReducers({
  practices: practicesReducer
});
