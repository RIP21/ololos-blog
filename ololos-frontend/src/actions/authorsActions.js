import * as types from './actionTypes';
import AuthorsApi from '../api/authorsApi';
import * as Exception from './../exceptions/exceptions';


export function loadAuthors() {
  return dispatch => {
    return dispatch({
      type: types.LOAD_AUTHORS,
      payload: AuthorsApi.getAll()
        .catch((error) => {
          throw new Exception.Error(error);
        })
    });
  };
}

export function createAuthor(author) {
  return (dispatch) => {
    return dispatch({
      type: types.CREATE_AUTHOR,
      payload: AuthorsApi.save(author)
        .catch((error) => {
          throw new Exception.Error(error);
        })
    });
  };
}

export function updateAuthor(post) {
  return dispatch => {
    return dispatch({
      type: types.UPDATE_AUTHOR,
      payload: AuthorsApi.save(post)
        .catch((error) => {
          throw new Exception.Error(error);
        })
    });
  };
}

export function deleteAuthor(postId) {
  return dispatch => {
    return dispatch({
      type: types.DELETE_AUTHOR,
      payload: AuthorsApi.deleteAuthor(postId)
        .catch((error) => {
          throw new Exception.Error(error);
        })
    });
  };
}


