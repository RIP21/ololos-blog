import {combineReducers} from 'redux';
import posts from './postReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import authentication from './authenticationReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  authentication,
  posts,
  authors,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
