import {createStore,applyMiddleware}from 'redux';
import {addTodo} from './reducer/addTodo.reducer';
import logger from 'react-logger';
import { createLogger } from 'redux-logger'

export const store = createStore(addTodo,applyMiddleware(logger))