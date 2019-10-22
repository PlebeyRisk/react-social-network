import {
  authAPI
} from "../api/api";
import {
  stopSubmit
} from 'redux-form'

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

export const auth = () => {
  return (dispatch) => {
    dispatch(updateFetching(true));

    authAPI.auth().then(data => {
      dispatch(updateFetching(false));

      if (data && data.resultCode === 0) {
        dispatch(setUserData(data.data.id, data.data.email, data.data.login));
        dispatch(updateAuth(true));
      }
    });
  };
};

export const login = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then(data => {
      if (!data) return;
      if (data.resultCode === 0) {
        dispatch(auth());
      } else if (data.resultCode === 10) {
        dispatch(getCaptcha());
        errorsHandler(data.messages);
      } else {
        errorsHandler(data.messages);
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
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(updateFetching(true));

    authAPI.logout().then(data => {
      dispatch(updateFetching(false));

      if (data && data.resultCode === 0) {
        dispatch(setUserData(null, null, null));
        dispatch(setCaptcha(null));
        dispatch(updateAuth(false));
      }
    });
  };
};

export const getCaptcha = () => {
  return (dispatch) => {
    dispatch(updateFetchingCaptchaProgress(true));

    authAPI.getCaptcha().then(data => {
      dispatch(updateFetchingCaptchaProgress(false));

      if (data === null) return;

      dispatch(setCaptcha(data.url));
    });
  };
};

export default authReducer;