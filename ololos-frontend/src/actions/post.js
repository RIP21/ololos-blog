import toastr from 'toastr';
import BlogPostApi from '../api/postApi';
import * as types from '../constants/actionTypes';

export function loadPosts() {
  return dispatch => {
    return dispatch({
      type: types.LOAD_POSTS,
      payload: BlogPostApi.getAll()
    }).catch((error) => {
      toastr.error(error);
    });
  };
}

const getAuthorByAuthentication = (getState) => {
  return getState().authors.filter(author => author.id === getState().authentication.username)[0];
};

export function createPost(post) {
  return (dispatch, getState) => {
    post.author = getAuthorByAuthentication(getState);
    return dispatch({
      type: types.CREATE_POST,
      payload: BlogPostApi.save(post)
    });
  };
}

export function updatePost(post) {
  return dispatch => {
    return dispatch({
      type: types.UPDATE_POST,
      payload: BlogPostApi.save(post)
    });
  };
}

export function deletePost(postId) {
  return dispatch => {
    return dispatch({
      type: types.DELETE_POST,
      payload: BlogPostApi.deletePost(postId)
    });
  };
}


