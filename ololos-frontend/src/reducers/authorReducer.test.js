import expect from 'expect';
import authorReducer from './authorReducer';
import * as actions from '../actions/authorActions';


describe('authorReducer', () => {
  it('should load all authors on LOAD_AUTHORS_SUCCESS', () => {
    const initialState = [
      {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
      {id: 'andrii-los', firstName: 'Andrii', lastName: 'Los'},
    ];

    const action = actions.loadAuthorsSuccess(initialState);

    // act
    const newState = authorReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(2);
    expect(newState[0].id).toEqual('cory-house');
    expect(newState[1].id).toEqual('andrii-los');
  });

  it('should delete author on DELETE_AUTHOR_SUCCESS', () => {
    const initialState = [
      {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
      {id: 'andrii-los', firstName: 'Andrii', lastName: 'Los'},
    ];

    const authorToDelete = {id: 'andrii-los', firstName: 'Andrii', lastName: 'Los'};
    const action = actions.deleteAuthorSuccess(authorToDelete);

    // act
    const newState = authorReducer(initialState, action);

    // assert
    expect(newState[0].id).toEqual('cory-house');
    expect(newState.length).toEqual(1);
  });
});
