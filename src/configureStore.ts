import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import reduxThunk from 'redux-thunk'; // no changes here 😀
import { reducers } from './shared/store';

export const rootReducer = combineReducers(reducers);

//export type AppState = ReturnType<typeof rootReducer>;

//import reduxThunk from 'redux-thunk';
const Store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default Store;
