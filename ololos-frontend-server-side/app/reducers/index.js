import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import posts from './post';
import authors from './author';
import ajaxCallsInProgress from './ajaxStatus';
import authentication from './authentication';
import * as types from "../constants/actionTypes";


const isFetching = ( state = false, action ) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};
// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  isFetching,
  authentication,
  posts,
  authors,
  ajaxCallsInProgress,
  routing
});

export default rootReducer;

