import { FETCH_PRACTICES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRACTICES:
      return action.payload || false;
    default:
      return state;
  }
}
