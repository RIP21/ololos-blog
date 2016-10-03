import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {

  const actionTypeEndsWithFulfilled = (type) => {
    return type.substring(type.length - 10) == '_FULFILLED';
  };

  const actionTypeEndsWithPending = (type) => {
    return type.substring(type.length - 8) == '_PENDING';
  };

  if (actionTypeEndsWithPending(action.type)) {
    return state + 1;
  } else if (actionTypeEndsWithFulfilled(action.type)) {
    return state - 1;
  }

  return state;
}
