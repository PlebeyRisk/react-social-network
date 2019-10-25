import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import directReducer from "./direct-reducer";
import searchUsersReducer from "./search-users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {
  reducer as formReducer
} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
  direct: directReducer,
  searchUsers: searchUsersReducer,
  profile: profileReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;