import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducers from '../reducers';

export default createStore(
  appReducers,
  applyMiddleware(thunkMiddleware)
)
