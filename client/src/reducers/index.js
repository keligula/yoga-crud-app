import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import practicesReducer from './practicesReducer';

export default combineReducers({
  form: reduxForm,
  practices: practicesReducer
});
