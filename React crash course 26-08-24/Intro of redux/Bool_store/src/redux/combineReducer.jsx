import { combineReducers } from 'redux';
import booksReducer from "./bookReducer";
import filterReducer from './filterReducer';

 export const rootReducer = combineReducers({
  books: booksReducer,
  filters: filterReducer,
});

export default rootReducer;
