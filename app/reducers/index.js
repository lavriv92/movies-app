import { combineReducers } from 'redux';

import movies from './movies';
import moviesFilter from './moviesFilter';

export default combineReducers({
  movies,
  moviesFilter
});
