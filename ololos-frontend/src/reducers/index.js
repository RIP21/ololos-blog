import {combineReducers} from 'redux';
import items from './items';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  items,
  routing: routerReducer
});

export default rootReducer;
