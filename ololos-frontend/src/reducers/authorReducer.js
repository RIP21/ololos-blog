import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
/*
    case `${types.CREATE_POST}_PENDING`:
      return state;
    case `${types.CREATE_POST}_FULFILLED`:
      return [...state, Object.assign({}, action.payload.data),];
    case `${types.CREATE_POST}_REJECTED`:
      return state;

    case `${types.UPDATE_POST}_PENDING`:
      return state;
    case `${types.UPDATE_POST}_FULFILLED`:
      return [...state.filter(post => post.id !== action.payload.data.id), Object.assign({}, action.payload.data),];
    case `${types.UPDATE_POST}_REJECTED`:
      return state;

    case `${types.DELETE_POST}_PENDING`:
      return state;
    case `${types.DELETE_POST}_FULFILLED`:
      return [...state.filter(post => post.id !== action.payload.data.id)];
    case `${types.DELETE_POST}_REJECTED`:
      return state;*/

    case `${types.LOAD_AUTHORS}_PENDING`:
      return state;
    case `${types.LOAD_AUTHORS}_FULFILLED`:
      return action.payload.data._embedded.authors;
    case `${types.LOAD_AUTHORS}_REJECTED`:
      return state;

    default:
      return state;
  }
}
