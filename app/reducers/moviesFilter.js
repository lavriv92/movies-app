import { SET_MOVIES_FILTER } from '../actions/actionTypes';


export default function moviesFilter(state = 'ALL', action) {
  switch (action.type) {
    case SET_MOVIES_FILTER:
      return action.filter;
    default:
      return state;
  }
};
