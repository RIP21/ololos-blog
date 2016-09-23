import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import posts from './postReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  posts,
  ajaxCallsInProgress,
});

export default rootReducer;
