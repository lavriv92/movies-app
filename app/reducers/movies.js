import { FETCH_MOVIES, SEARCH_MOVIES } from '../actions/actionTypes';


export default function movies(state={
  total: 0,
  items: []
}, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        items: [...state.items, ...action.data.items],
        total: action.data.total
      };
    case SEARCH_MOVIES:
      return {
        items: action.data.items,
        total: action.data.total
      };
    default:
      return state;
  };
}
