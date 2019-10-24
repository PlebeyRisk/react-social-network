import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form'
import { auth } from "./auth-reducer";

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';
const SET_INITITALIZED_STATUS = 'SET_INITITALIZED_STATUS';

const ADD_INTERVAL = 'ADD_INTERVAL';
const CLEAR_INTERVAL = 'CLEAR_INTERVAL';
const CLEAR_ALL_INTERVALS = 'CLEAR_ALL_INTERVALS';


const initialState = {
  initialized: false,
  initializedStatus: '',
  startingIntervals: new Map(),
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
    case ADD_INTERVAL: {
      let stateCopy = {
        ...state
      };
      stateCopy.startingIntervals.set(action.name, action.id);
      return stateCopy;
    }
    case CLEAR_INTERVAL: {
      let stateCopy = {
        ...state
      };
      stateCopy.startingIntervals.delete(action.name);
      return stateCopy;
    }
    case CLEAR_ALL_INTERVALS: {
      let stateCopy = {
        ...state
      };
      stateCopy.startingIntervals.clear();
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
export const addIntervalAction = (name, id) => ({
  type: ADD_INTERVAL,
  name, id
});
export const clearIntervalAction = (name) => ({
  type: CLEAR_INTERVAL,
  name
});
export const clearAllIntervalsAction = () => ({
  type: CLEAR_ALL_INTERVALS
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

export const setIntervalThunk = (func, delay, name) => {
  return (dispatch) => {
    func();
    const id = setInterval(func, delay);
    dispatch(addIntervalAction(name, id));
    console.log('запустил ' + id);
  };
};

export const clearIntervalThunk = (id, name) => {
  return (dispatch) => {
    if (!id) return;
    console.log('удалил ' + id);
    clearInterval(id);
    dispatch(clearIntervalAction(name));
  };
};

export const clearAllIntervals = (startingIntervals) => {
  return (dispatch) => {
    startingIntervals.values().forEach((timerId => clearInterval(timerId)));
    dispatch(clearAllIntervalsAction());
  };
};


export default appReducer;