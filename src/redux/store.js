import { createStore, combineReducers } from "redux";
import directReducer from "./direct-reducer";
import searchUsersReducer from "./search-users-reducer";

let reducers = combineReducers({
  direct: directReducer,
  searchUsers: searchUsersReducer
});

let store = createStore(reducers);

export default store;