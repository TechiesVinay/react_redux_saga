import { createStore } from "redux";
import combineReducers from './RootReducer'

const store = createStore(combineReducers)
export default store