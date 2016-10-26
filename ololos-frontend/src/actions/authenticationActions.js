import axios from 'axios';
import toastr from 'toastr';
import {browserHistory} from 'react-router';
import * as types from '../constants/actionTypes';

export function displayAuthError(message) {
  return {type: types.ERROR_MESSAGE, message};
}

export function login(username, password) {
  return (dispatch, getState) => {
    return dispatch({
      type: types.LOGIN,
      payload: axios.post('/api/session', {username, password})
    }).then(() => {
      redirectAfterSuccess(getState);
      toastr.success("Login success!");
    }).catch(error => toastr.error(error));
  };
}

export function logout() {
  return dispatch => {
    return dispatch({
      type: types.LOGOUT,
      payload: axios.delete('/api/session')
    }).then(browserHistory.push('/'));
  };
}

export function getSession() {
  return (dispatch) => {
    return dispatch({
      type: types.GET_SESSION,
      payload: axios.get('/api/session')
    });
  };
}

const redirectAfterSuccess = (getState) => {
  let redirect = getState().routing.locationBeforeTransitions.query.redirect;
  redirect ? browserHistory.push(redirect) : browserHistory.push("/");//reads query params of redirect
};
