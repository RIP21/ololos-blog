import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {

    case `${types.CREATE_ITEM}_PENDING`:
      return state;
    case `${types.CREATE_ITEM}_FULFILLED`:
      return [...state, Object.assign({}, action.payload.data),];
    case `${types.CREATE_ITEM}_REJECTED`:
      return state;

    case `${types.UPDATE_ITEM}_PENDING`:
      return state;
    case `${types.UPDATE_ITEM}_FULFILLED`:
      return [...state.filter(item => item.id !== action.payload.data.id), Object.assign({}, action.payload.data),];
    case `${types.UPDATE_ITEM}_REJECTED`:
      return state;

    case `${types.DELETE_ITEM}_PENDING`:
      return state;
    case `${types.DELETE_ITEM}_FULFILLED`:
      return [...state.filter(item => item.id !== action.payload.data.id)];
    case `${types.DELETE_ITEM}_REJECTED`:
      return state;

    case `${types.LOAD_ITEMS}_PENDING`:
      return state;
    case `${types.LOAD_ITEMS}_FULFILLED`:
      return action.payload.data._embedded.items;
    case `${types.LOAD_ITEMS}_REJECTED`:
      return state;

    default:
      return state;
  }
}
