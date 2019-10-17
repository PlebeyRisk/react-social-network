const SET_USER_INFO = 'SET_USER_INFO';
const UPDATE_FETCHING = 'UPDATE_FETCHING';
const UPDATE_FOLLOW = 'UPDATE_FOLLOW';

const initialState = {
  userInfo: null,
  isFetching: false,
  isFollow: false
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_INFO: {
      let stateCopy = {
        ...state,
        userInfo: action.userInfo
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
    case UPDATE_FOLLOW: {
      let stateCopy = {
        ...state,
        isFollow: action.isFollow
      };
      return stateCopy;
    }
    default:
      return state;
  };
}

export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo});
export const updateFetching = (isFetching) => ({ type: UPDATE_FETCHING, isFetching});
export const updateFollow = (isFollow) => ({ type: UPDATE_FOLLOW, isFollow});

export default profileReducer;