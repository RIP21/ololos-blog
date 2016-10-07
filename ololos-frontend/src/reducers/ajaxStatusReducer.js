import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {

  const actionTypeEndsWithFulfilledOrRejected = (type) => {
    return (type.substring(type.length - 10) == '_FULFILLED' ||
    type.substring(type.length - 9) == '_REJECTED');
  };

  const actionTypeEndsWithPending = (type) => {
    return type.substring(type.length - 8) == '_PENDING';
  };

  if (actionTypeEndsWithPending(action.type)) {
    return state + 1;
  } else if (actionTypeEndsWithFulfilledOrRejected(action.type)) {
    return state - 1;
  }

  return state;
}
