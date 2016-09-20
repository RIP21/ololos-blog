import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedActions = {
        type: types.CREATE_COURSE_SUCCESS,
        course,
      };

      // act
      const action = courseActions.createCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedActions);
    });
  });

  describe('deleteCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedActions = {
        type: types.DELETE_COURSE_SUCCESS,
        course,
      };

      // act
      const action = courseActions.deleteCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedActions);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Here's and example to call nock.
    // nock('example.com')
    // .get('/courses')
    // .reply(200, { body: {course [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}},
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });

  it('should create BEGIN_AJAX_CALL and DELETE_COURSES_SUCCESS when delete courses', (done) => {
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.DELETE_COURSE_SUCCESS, course: {id: 'A', title: 'A'}},
    ];

    const store = mockStore({courses: [{id: 'A', title: 'A'}, {id: 'B', title: 'B'}]}, expectedActions);
    const courseToDelete = {id: 'A', title: 'A'};
    store.dispatch(courseActions.deleteCourse(courseToDelete.id)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.DELETE_COURSE_SUCCESS);
      done();
    });
  });
});
