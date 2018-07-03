import axios from 'axios';
import { FETCH_PRACTICES } from './types';

//GET all practices
export const fetchPractices = () => async dispatch => {
  const res = await axios.get('/api/practices');

  dispatch({ type: FETCH_PRACTICES, payload: res.data });
};

//POST a new practice
export const submitPractice = values => async dispatch => {
  const res = await axios.post('/api/practices', values);

  dispatch({ payload: res.data });
};

//DELETE practice by id
export const deletePractice = practiceId => async dispatch => {
  const res = await axios.delete('/api/practices/' + practiceId);

  dispatch({ type: FETCH_PRACTICES, payload: res.data });
};
