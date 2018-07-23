import { FETCH_PRACTICES, FETCH_PRACTICE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRACTICES:
      return action.payload || false;
    case FETCH_PRACTICE:
      return action.payload || false;
    default:
      return state;
  }
}
