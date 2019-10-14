import { createStore, combineReducers } from "redux";
import directReducer from "./direct-reducer";

let reducers = combineReducers({
  direct: directReducer
});

let store = createStore(reducers);

export default store;