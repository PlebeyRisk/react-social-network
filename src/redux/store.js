import { createStore, combineReducers } from "redux";
import directReducer from "./direct-reducer";
import searchUsersReducer from "./search-users-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
  direct: directReducer,
  searchUsers: searchUsersReducer,
  profile: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;