import * as types from './actionTypes';
import {browserHistory} from 'react-router';
import axios from 'axios';

export function displayAuthError(message) {
  return {type: types.ERROR_MESSAGE, message};
}

export function login(username, password) {
  return dispatch => {
    return dispatch({
      type: types.LOGIN,
      payload: axios.post('/api/session', {username, password})
        .then(response => {
          localStorage.setItem('auth-token', response.headers['x-auth-token']);
        })
    });
  };
}

export function logout() {
  return dispatch => {
    return dispatch({
      type: types.LOGOUT,
      payload: axios.delete('/api/session')
        .then(browserHistory.push('login')),
    });
  };
}

export function getSession() {
  return dispatch => {
    return dispatch({
      type: types.GET_SESSION,
      payload: axios.get('/api/session')
    });
  };
}

export function redirectToLoginWithMessage(messageKey) {
  return (dispatch, getState) => {
    const currentPath = getState().routing.locationBeforeTransitions.pathname;
    dispatch(displayAuthError(messageKey));
    browserHistory.replace({pathname: '/login', state: {nextPathname: currentPath}});
  };
}
