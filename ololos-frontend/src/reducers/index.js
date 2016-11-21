import {combineReducers} from 'redux';
import posts from './post';
import authors from './author';
import ajaxCallsInProgress from './ajaxStatus';
import authentication from './authentication';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  authentication,
  posts,
  authors,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
