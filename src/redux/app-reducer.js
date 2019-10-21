import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form'
import { auth } from "./auth-reducer";

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';
const SET_INITITALIZED_STATUS = 'SET_INITITALIZED_STATUS';


const initialState = {
  initialized: false,
  initializedStatus: ''
};

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INITIALIZATION_SUCCESS: {
      let stateCopy = {
        ...state,
        initialized: true
      };
      return stateCopy;
    }
    case SET_INITITALIZED_STATUS: {
      let stateCopy = {
        ...state,
        initializedStatus: action.status
      };
      return stateCopy;
    }
    default:
      return state;
  };
}

export const initializationSuccess = () => ({
  type: INITIALIZATION_SUCCESS
});
export const setInititalizedStatus = (status) => ({
  type: SET_INITITALIZED_STATUS,
  status
});

export const initializeApp = () => {
  return (dispatch) => {
    let authPromise = dispatch(auth());
    dispatch(setInititalizedStatus('авторизация пользователя'));

    Promise.all([authPromise])
      .then(() => {
        dispatch(initializationSuccess());
        dispatch(setInititalizedStatus(''));
      });
  };
};

export default appReducer;