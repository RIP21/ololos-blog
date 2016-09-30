import AuthorApi from '../api/mockAuthorApi';
import CourseApi from '../api/mockCourseApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import * as Exception from './../exceptions/exceptions';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function deleteAuthorSuccess(author) {
  return {type: types.DELETE_AUTHOR_SUCCESS, author};
}

export function updateAuthorSuccess(author) {
  return {type: types.UPDATE_AUTHOR_SUCCESS, author};
}

export function createAuthorSuccess(author) {
  return {type: types.CREATE_AUTHOR_SUCCESS, author};
}

export function loadAuthors() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then((authors) => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw (new Exception.Error(error));
    });
  };
}

export function deleteAuthor(id) {
  return (dispatch) => {
    return CourseApi.getAllCourses().then((courses) => {
      const owningCourses = courses.filter(course => course.authorId == id);
      if (!owningCourses.length) {
        dispatch(beginAjaxCall());
        return AuthorApi.deleteAuthor(id).then((author) => {
          dispatch(deleteAuthorSuccess(author));
        }).catch((error) => {
          dispatch(ajaxCallError());
          throw (new Exception.Error(error));
        });
      } else {
        throw (new Exception.Warning('Cannot delete author. Author owns ' + owningCourses.length + ' courses'));
      }
    });
  };
}


export function saveAuthor(author) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.saveAuthor(author).then((author) => {
      author.id ? dispatch(updateAuthorSuccess(author)) :
        dispatch(createAuthorSuccess(author));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw (new Exception.Error(error));
    });
  };
}
