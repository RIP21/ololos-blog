import toastr from 'toastr';
import AuthorsApi from '../api/authors';
import * as types from '../constants/actionTypes';


export function loadAuthors() {
  return dispatch => {
    return dispatch({
      type: types.LOAD_AUTHORS,
      payload: AuthorsApi.getAll()
    }).catch((error) => {
      toastr.error(error);
    });
  };
}

export function createAuthor(author) {
  return (dispatch) => {
    return dispatch({
      type: types.CREATE_AUTHOR,
      payload: AuthorsApi.save(author)
    });
  };
}

export function updateAuthor(post) {
  return dispatch => {
    return dispatch({
      type: types.UPDATE_AUTHOR,
      payload: AuthorsApi.save(post)
    });
  };
}

export function deleteAuthor(postId) {
  return dispatch => {
    return dispatch({
      type: types.DELETE_AUTHOR,
      payload: AuthorsApi.deleteAuthor(postId)
    });
  };
}


