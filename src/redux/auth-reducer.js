import {
  authAPI
} from "../api/api";
import {
  stopSubmit
} from 'redux-form'
import { getFollowingUsers } from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const UPDATE_FETCHING = 'AUTH_UPDATE_FETCHING'
const UPDATE_AUTH = 'UPDATE_AUTH'
const SET_CAPTCHA = 'SET_CAPTCHA'
const UPDATE_FETCHING_CAPTCHA_PROGRESS = 'UPDATE_FETCHING_CAPTCHA_PROGRESS'


const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captcha: null,
  isFetchingCaptchaInProgress: false,
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
    case SET_CAPTCHA: {
      let stateCopy = {
        ...state,
        captcha: action.captcha
      };
      return stateCopy;
    }
    case UPDATE_FETCHING_CAPTCHA_PROGRESS: {
      let stateCopy = {
        ...state,
        isFetchingCaptchaInProgress: action.progress
      };
      return stateCopy;
    }
    default:
      return state;
  };
}

export const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login
  }
});
export const updateFetching = (isFetching) => ({
  type: UPDATE_FETCHING,
  isFetching
});
export const updateAuth = (isAuth) => ({
  type: UPDATE_AUTH,
  isAuth
});
export const setCaptcha = (captcha) => ({
  type: SET_CAPTCHA,
  captcha
});
export const updateFetchingCaptchaProgress = (progress) => ({
  type: UPDATE_FETCHING_CAPTCHA_PROGRESS,
  progress
});

export const auth = () => async (dispatch) => {
  dispatch(updateFetching(true));

  const response = await authAPI.auth();

  dispatch(updateFetching(false));

  if (response && response.resultCode === 0) {
    const {id, email, login} = response.data;

    dispatch(setUserData(id, email, login));
    dispatch(updateAuth(true));
    dispatch(getFollowingUsers());
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

  const response = await authAPI.login(email, password, rememberMe, captcha)

  if (!response) return;

  const {resultCode, messages} = response;

  if (resultCode === 0) {
    dispatch(auth());
  } else if (resultCode === 10) {
    dispatch(getCaptcha());
    errorsHandler(messages);
  } else {
    errorsHandler(messages);
  }

  function errorsHandler(messages) {

    let errors = {};

    if (messages.includes("Incorrect anti-bot symbols")) {
      errors = {
        captcha: "Неправильная каптча"
      }
    } else {
      errors = {
        email: "Неправильный Email или пароль",
        password: "Неправильный Email или пароль",
      }
    }

    dispatch(stopSubmit('login', errors));
  };
};

export const logout = () => async (dispatch) => {
  dispatch(updateFetching(true));

  const response = await authAPI.logout();

  dispatch(updateFetching(false));

  if (response && response.resultCode === 0) {
    dispatch(setUserData(null, null, null));
    dispatch(setCaptcha(null));
    dispatch(updateAuth(false));
  }
};

export const getCaptcha = () => async (dispatch) => {
    dispatch(updateFetchingCaptchaProgress(true));

    const response = await authAPI.getCaptcha();

    dispatch(updateFetchingCaptchaProgress(false));
    if (response === null) return;

    dispatch(setCaptcha(response.url));
};

export default authReducer;