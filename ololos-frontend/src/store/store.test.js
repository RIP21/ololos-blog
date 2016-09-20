import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';
import * as authorActions from '../actions/authorActions';

describe('Store', () => {
  describe('Courses workflow', () => {
    it('Should handle creating courses', () => {
      // arrange
      const store = createStore(rootReducer, initialState);
      const course = {
        title: 'Clean Code',
      };

      // act
      const action = courseActions.createCourseSuccess(course);
      store.dispatch(action);

      // assert
      const actual = store.getState().courses[0];
      const expected = {
        title: 'Clean Code',
      };
      expect(actual).toEqual(expected);
    });

    it('Should handle deleting courses', () => {
      // arrange
      const initialState = {
        courses: [
          {id: 'A', title: 'A'},
          {id: 'B', title: 'B'},
          {id: 'C', title: 'C'},
        ],
      };

      const store = createStore(rootReducer, initialState);
      const courseToDelete = {
        id: 'A',
        title: 'A',
      };

      // act
      const action = courseActions.deleteCourseSuccess(courseToDelete);
      store.dispatch(action);

      // assert
      const actual = store.getState().courses;
      const expected = [
        {id: 'B', title: 'B'},
        {id: 'C', title: 'C'},
      ];
      expect(actual).toNotEqual(initialState);
      expect(actual.length).toEqual(2);
      expect(actual).toEqual(expected);
      expect(actual[0]).toNotEqual(courseToDelete);
    });
  });

  it('Should handle deleting authors', () => {
    const initialState = {
      authors: [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'andrii-los', firstName: 'Andrii', lastName: 'Los'},
      ],
    };


    const authorToDelete = {id: 'andrii-los', firstName: 'Andrii', lastName: 'Los'};

    // arrange
    const store = createStore(rootReducer, initialState);

    // act
    const action = authorActions.deleteAuthorSuccess(authorToDelete);
    store.dispatch(action);

    // assert
    const actual = store.getState().authors[0];
    const expected = {id: 'cory-house', firstName: 'Cory', lastName: 'House'};

    expect(actual).toEqual(expected);
  });
});
