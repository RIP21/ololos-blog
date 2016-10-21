import * as types from './actionTypes';
import BlogPostApi from '../api/postApi';
import * as Exception from './../exceptions/exceptions';


export function loadPosts() {
  return dispatch => {
    return dispatch({
      type: types.LOAD_POSTS,
      payload: BlogPostApi.getAll()
        .catch((error) => {
          throw new Exception.Error(error);
        })
    });
  };
}

export function createPost(post) {
  return dispatch => {
    return dispatch({
      type: types.CREATE_POST,
      payload: BlogPostApi.save(post)
        .catch((error) => {
          throw new Exception.Error(error);
        })
    });
  };
}

export function updatePost(post) {
  return dispatch => {
    return dispatch({
      type: types.UPDATE_POST,
      payload: BlogPostApi.save(post)
        .catch((error) => {
          throw new Exception.Error(error);
        })
    });
  };
}

export function deletePost(postId) {
  return dispatch => {
    return dispatch({
      type: types.DELETE_POST,
      payload: BlogPostApi.deletePost(postId)
        .catch((error) => {
          throw new Exception.Error(error);
        })
    });
  };
}


