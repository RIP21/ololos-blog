import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import posts from './post';
import authors from './author';
import ajaxCallsInProgress from './ajaxStatus';
import authentication from './authentication';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  authentication,
  posts,
  authors,
  ajaxCallsInProgress,
  routing
});

export default rootReducer;

