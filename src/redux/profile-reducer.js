import API from "../api/api";

const SET_USER_INFO = 'SET_USER_INFO';
const UPDATE_FETCHING = 'PROFILE_UPDATE_FETCHING';
const UPDATE_FOLLOW = 'UPDATE_FOLLOW';
const UPDATE_FOLLOWING_PROGRESS = 'UPDATE_FOLLOWING_PROGRESS';
const UPDATE_OLD_USER_ID = 'UPDATE_OLD_USER_ID';

const initialState = {
  userInfo: null,
  oldUserId: null,
  isFetching: false,
  isFollow: false,
  isFollowingInProgress: false
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
    case UPDATE_FOLLOWING_PROGRESS: {
      let stateCopy = {
        ...state,
        isFollowingInProgress: action.progress
      };
      return stateCopy;
    }
    case UPDATE_OLD_USER_ID: {
      let stateCopy = {
        ...state,
        oldUserId: action.oldUserId
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
export const updateFollowingProgress = (progress) => ({ type: UPDATE_FOLLOWING_PROGRESS, progress});
export const updateOldUserId = (oldUserId) => ({ type: UPDATE_OLD_USER_ID, oldUserId});

export const loadUser = (userId) => {
  return (dispatch) => {
    const loadFollowStatus = () => {
      dispatch(updateFetching(true));

      API.isFollow(userId).then( data => {
        dispatch(updateFetching(false));
        console.log(data);
        if (data === undefined) return;

        dispatch(updateFollow(data));
      });
    }

    dispatch(updateFetching(true));

    API.getUserInfo(userId).then( data => {
      dispatch(updateFetching(false));

      if (!data) return;

      dispatch(setUserInfo(data));
      loadFollowStatus();
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(updateFollowingProgress(true));

    API.postFollow(userId).then( data => {
      dispatch(updateFollowingProgress(false));

      if (data && data.resultCode === 0) {;
        dispatch(updateFollow(true));
      }
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(updateFollowingProgress(true));

    API.deleteFollow(userId).then( data => {
      dispatch(updateFollowingProgress(false));

      if (data && data.resultCode === 0) {;
        dispatch(updateFollow(false));
      }
    });
  };
};

export default profileReducer;