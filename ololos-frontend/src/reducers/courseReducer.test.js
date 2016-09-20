import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'},
    ];
    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);


    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
  });
  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'},
    ];
    const course = {id: 'B', title: 'New Title'};
    const action = actions.updateCourseSuccess(course);

    // act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(b => b.id === course.id);
    const untouchedCourse = newState.find(a => a.id === 'A');

    // assert
    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });

  it('should delete course when passed DELETE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'},
    ];
    const course = {id: 'B', title: 'B'};
    const action = actions.deleteCourseSuccess(course);

    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(2);
    expect(newState[0]).toEqual(initialState[0]);
    expect(newState[1]).toNotEqual(initialState[1]);
    expect(newState[1]).toEqual(initialState[2]);
  });
});
