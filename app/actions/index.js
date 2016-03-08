import fetch from 'isomorphic-fetch';
import { FETCH_MOVIES, SEARCH_MOVIES, SET_MOVIES_FILTER } from './actionTypes';


function receiveData(type, data) {
  return {
    type: type,
    data: data
  };
}

function requestData(type, page, searchKey='') {
  return dispatch => {
    if(!searchKey) {
      return dispatch(receiveData({ total: 0, items: [] }));
    }

    dispatch(receiveData({ total: 0, items: [] }));
    return fetch(`http://www.omdbapi.com/?s=${searchKey}&page=${page}`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(type, {
        items: json.Search || [],
        total: json.totalResults
      })));
  };
};

export function fetchMovies(page = 1, searchKey) {
  return (dispatch) => {
    return dispatch(requestData(FETCH_MOVIES, page, searchKey));
  };
};

export function searchMovies(page = 1, searchKey) {
  return (dispatch) => {
    return dispatch(requestData(SEARCH_MOVIES, page, searchKey));
  }
};

export function setMoviesFilter(filter) {
  return dispatch => {
    dispatch({
      type: SET_MOVIES_FILTER,
      filter: filter
    });
  }
}
