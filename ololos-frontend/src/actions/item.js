import toastr from 'toastr';
import ItemApi from '../api/item';
import * as types from '../constants/actionTypes';

export function loadItems() {
  return dispatch => {
    return dispatch({
      type: types.LOAD_ITEMS,
      payload: ItemApi.getAll()
    }).catch((error) => {
      toastr.error(error);
    });
  };
}

export function updateItem(item) {
  return dispatch => {
    return dispatch({
      type: types.UPDATE_ITEM,
      payload: ItemApi.save(item)
    });
  };
}

export function deleteItem(itemId) {
  return dispatch => {
    return dispatch({
      type: types.DELETE_ITEM,
      payload: ItemApi.deleteItem(itemId)
    });
  };
}


