import {  legacy_createStore } from 'redux';
import {todoReducer} from './todoReducer';

// Create the Redux store using the legacy createStore method
export const store = legacy_createStore(todoReducer);
