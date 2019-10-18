import API from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UPDATE_FETCHING = 'AUTH_UPDATE_FETCHING'
const UPDATE_AUTH = 'UPDATE_AUTH'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: {
      let stateCopy = {
        ...state,
        ...action.data
      };
      return stateCopy;
    }
    case UPDATE_FETCHING: {
      let stateCopy = {
        ...state,
        isFetching: action.isFetching
      };
      return stateCopy;
    }
    case UPDATE_AUTH: {
      let stateCopy = {
        ...state,
        isAuth: action.isAuth
      };
      return stateCopy;
    }
    default:
      return state;
  };
}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data:{ userId, email, login }});
export const updateFetching = (isFetching) => ({ type: UPDATE_FETCHING, isFetching});
export const updateAuth = (isAuth) => ({ type: UPDATE_AUTH, isAuth});

export const auth = () => {
  return (dispatch) => {
    dispatch(updateFetching(true));

    API.auth().then( data => {
      dispatch(updateFetching(false));
      if (data && data.resultCode === 0) {
        dispatch(setUserData(data.data.id, data.data.email, data.data.login));
        dispatch(updateAuth(true));
      }
    });
  };
};

export default authReducer;