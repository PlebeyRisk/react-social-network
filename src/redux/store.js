import { createStore, combineReducers, applyMiddleware } from "redux";
import directReducer from "./direct-reducer";
import searchUsersReducer from "./search-users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  direct: directReducer,
  searchUsers: searchUsersReducer,
  profile: profileReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;