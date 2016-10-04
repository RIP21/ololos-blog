import {combineReducers} from 'redux';
import posts from './postReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import authenticationReducer from './authenticationReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  authenticationReducer,
  posts,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
