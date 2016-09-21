import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import * as Exception from './../exceptions/exceptions';

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function deleteCourseSuccess(course) {
    return {type: types.DELETE_COURSE_SUCCESS, course};
}


export function loadCourses() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CourseApi.getAllCourses().then((courses) => {
            dispatch(loadCoursesSuccess(courses));
        }).catch((error) => {
            throw (new Exception.Error(error));
        });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return CourseApi.saveCourse(course).then((savedCourse) => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch((error) => {
            dispatch(ajaxCallError());
            throw (new Exception.Error(error));
        });
    };
}
export function deleteCourse(courseId) {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return CourseApi.deleteCourse(courseId).then((course) => {
            dispatch(deleteCourseSuccess(course));
        }).catch((error) => {
            dispatch(ajaxCallError());
            throw (new Exception.Error(error));
        });
    };
}

