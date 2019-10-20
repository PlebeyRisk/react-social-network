import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import directReducer from "./direct-reducer";
import searchUsersReducer from "./search-users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {
  reducer as formReducer
} from 'redux-form'

let reducers = combineReducers({
  direct: directReducer,
  searchUsers: searchUsersReducer,
  profile: profileReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;