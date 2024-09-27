import {legacy_createStore} from "redux"
import rootReducer from "./combineReducer"
 export const store=legacy_createStore(rootReducer)