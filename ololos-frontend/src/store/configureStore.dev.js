import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk, promiseMiddleware(), reduxImmutableStateInvariant()),
    window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );
}

