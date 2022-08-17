import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import greetingReducer from './greetingReducer/greetingReducer';

const middleware = applyMiddleware(thunk);

const reducer = combineReducers({
  greetings: greetingReducer,
});

const store = createStore(reducer, middleware);

export default store;
