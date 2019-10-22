import {
  followAPI,
  profileAPI,
  usersAPI
} from '../api/api';

const SET_USER_INFO = 'SET_USER_INFO';
const UPDATE_FETCHING = 'PROFILE_UPDATE_FETCHING';
const UPDATE_FOLLOW = 'UPDATE_FOLLOW';
const UPDATE_FOLLOWING_PROGRESS = 'UPDATE_FOLLOWING_PROGRESS';
const UPDATE_OLD_USER_ID = 'UPDATE_OLD_USER_ID';
const UPDATE_TEXT_STATUS = 'UPDATE_TEXT_STATUS';
const UPDATE_STATUS_PROGRESS = 'UPDATE_STATUS_PROGRESS';
const ADD_FOLLOWING_USERS = 'ADD_FOLLOWING_USERS';
const CLEAR_FOLLOWING_USERS = 'CLEAR_FOLLOWING_USERS';
const UPDATE_LOAD_FOLLOWING_USERS_PROGRESS = 'UPDATE_LOAD_FOLLOWING_USERS_PROGRESS';

const initialState = {
  userInfo: null,
  oldUserId: null,
  isFetching: false,
  isFollow: false,
  isFollowingInProgress: false,
  textStatus: null,
  isUpdateStatusInProgress: false,
  followingUsers: [],
  isLoadFollowingUsersInProgress: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      let stateCopy = {
        ...state,
        userInfo: action.userInfo,
      };
      return stateCopy;
    }
    case UPDATE_FETCHING: {
      let stateCopy = {
        ...state,
        isFetching: action.isFetching,
      };
      return stateCopy;
    }
    case UPDATE_FOLLOW: {
      let stateCopy = {
        ...state,
        isFollow: action.isFollow,
      };
      return stateCopy;
    }
    case UPDATE_FOLLOWING_PROGRESS: {
      let stateCopy = {
        ...state,
        isFollowingInProgress: action.progress,
      };
      return stateCopy;
    }
    case UPDATE_OLD_USER_ID: {
      let stateCopy = {
        ...state,
        oldUserId: action.oldUserId,
      };
      return stateCopy;
    }
    case UPDATE_TEXT_STATUS: {
      let stateCopy = {
        ...state,
        textStatus: action.status,
      };
      return stateCopy;
    }
    case UPDATE_STATUS_PROGRESS: {
      let stateCopy = {
        ...state,
        isUpdateStatusInProgress: action.progress,
      };
      return stateCopy;
    }
    case CLEAR_FOLLOWING_USERS: {
      let stateCopy = {
        ...state,
        followingUsers: [],
      };
      return stateCopy;
    }
    case ADD_FOLLOWING_USERS: {
      let stateCopy = {
        ...state,
        followingUsers: [...state.followingUsers, ...action.users],
      };
      return stateCopy;
    }
    case UPDATE_LOAD_FOLLOWING_USERS_PROGRESS: {
      let stateCopy = {
        ...state,
        isLoadFollowingUsersInProgress: action.progress,
      };
      return stateCopy;
    }
    default:
      return state;
  }
};

export const setUserInfo = userInfo => ({
  type: SET_USER_INFO,
  userInfo,
});
export const updateFetching = isFetching => ({
  type: UPDATE_FETCHING,
  isFetching,
});
export const updateFollow = isFollow => ({
  type: UPDATE_FOLLOW,
  isFollow,
});
export const updateFollowingProgress = progress => ({
  type: UPDATE_FOLLOWING_PROGRESS,
  progress,
});
export const updateOldUserId = oldUserId => ({
  type: UPDATE_OLD_USER_ID,
  oldUserId,
});
export const updateTextStatus = status => ({
  type: UPDATE_TEXT_STATUS,
  status,
});
export const updateStatusProgress = progress => ({
  type: UPDATE_STATUS_PROGRESS,
  progress,
});
export const addFollowingUsers = users => ({
  type: ADD_FOLLOWING_USERS,
  users,
});
export const clearFollowingUsers = () => ({
  type: CLEAR_FOLLOWING_USERS
});
export const updateLoadFollowingUsersProgress = progress => ({
  type: UPDATE_LOAD_FOLLOWING_USERS_PROGRESS,
  progress
});

export const loadUser = userId => {
  return dispatch => {
    const loadFollowStatus = () => {
      followAPI.isFollow(userId).then(data => {
        if (data === undefined) return;

        dispatch(updateFollow(data));
      });
    };

    const loadTextStatus = () => {
      profileAPI.getTextStatus(userId).then(data => {
        if (data === undefined) return;

        dispatch(updateTextStatus(data));
      });
    };

    loadFollowStatus();
    loadTextStatus();

    dispatch(updateFetching(true));

    profileAPI.getUserInfo(userId).then(data => {
      dispatch(updateFetching(false));

      if (!data) return;

      dispatch(setUserInfo(data));
    });
  };
};

export const follow = userId => {
  return dispatch => {
    console.log(`follow ${userId}`);
    dispatch(updateFollowingProgress(true));

    followAPI.postFollow(userId).then(data => {
      dispatch(updateFollowingProgress(false));

      if (data && data.resultCode === 0) {
        console.log(`done`);
        dispatch(updateFollow(true));
      }
    });
  };
};

export const unfollow = userId => {
  return dispatch => {
    console.log(`unfollow ${userId}`);
    dispatch(updateFollowingProgress(true));

    followAPI.deleteFollow(userId).then(data => {
      dispatch(updateFollowingProgress(false));

      if (data && data.resultCode === 0) {
        console.log(`done`);
        dispatch(updateFollow(false));
      }
    });
  };
};

export const setTextStatus = status => {
  return dispatch => {
    dispatch(updateStatusProgress(true));
    profileAPI.updateStatus(status).then(data => {
      dispatch(updateStatusProgress(false));
      if (data && data.resultCode === 0) {
        dispatch(updateTextStatus(status));
      }
    });
  };
};

export const getFollowingUsers = (page) => {
  return dispatch => {
    if (page === 1) {
      dispatch(updateLoadFollowingUsersProgress(true));
    }

    usersAPI.getUsers(page, 100).then(data => {
      if (!data) {
        dispatch(updateLoadFollowingUsersProgress(false));
        return;
      }

      let followingUsers = [];
      data.items.forEach(user => {
        if (!user.followed) return;
        followingUsers.push(user);
      });

      if (followingUsers.length != 0) {
        dispatch(addFollowingUsers(followingUsers));
      }

      const totalPage = Math.ceil(data.totalCount / 100);
      if (page <= totalPage) {
        dispatch(getFollowingUsers(page + 1, data.totalCount))
      } else {
        dispatch(updateLoadFollowingUsersProgress(false));
      }
    });
  };
};

export default profileReducer;