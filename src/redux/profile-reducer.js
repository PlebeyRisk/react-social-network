import {
  followAPI,
  profileAPI,
  usersAPI
} from '../api/api';
import { hasObjectInArrayByProperty, deleteObjectsInArrayByProperty, updateObjectInArray } from '../utils/helpers/object-helpers';

const SET_USER_INFO = 'SET_USER_INFO';
const UPDATE_FETCHING = 'PROFILE_UPDATE_FETCHING';
const UPDATE_FOLLOW = 'UPDATE_FOLLOW';
const UPDATE_FOLLOWING_PROGRESS = 'UPDATE_FOLLOWING_PROGRESS';
const UPDATE_TEXT_STATUS = 'UPDATE_TEXT_STATUS';
const UPDATE_STATUS_PROGRESS = 'UPDATE_STATUS_PROGRESS';
const ADD_FOLLOWING_USERS = 'ADD_FOLLOWING_USERS';
const CLEAR_FOLLOWING_USERS = 'CLEAR_FOLLOWING_USERS';
const SET_FOLLOWING_USERS = 'SET_FOLLOWING_USERS'
const UPDATE_LOAD_FOLLOWING_USERS_PROGRESS = 'UPDATE_LOAD_FOLLOWING_USERS_PROGRESS';
const UPDATE_IS_FOLLOW = 'UPDATE_IS_FOLLOW';

const initialState = {
  userInfo: null,
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
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case UPDATE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case UPDATE_FOLLOW:
      let followingUsers = state.followingUsers;

      if (!action.onlyChangeStatus) {
        if (action.status) {
          const {fullName, photos} = state.userInfo;

          const userObj = {
            name: fullName,
            id: action.id,
            photos: photos,
            status: state.textStatus,
            followed: action.status,
            uniqueUrlName: null
          };

          followingUsers.unshift(userObj);
        } else {
          followingUsers = [...deleteObjectsInArrayByProperty(followingUsers, Number(action.id), "id")];
        }
      } else {
        followingUsers = updateObjectInArray(followingUsers, action.id, "id", {followed: action.status});
      }

      return {
        ...state,
        followingUsers: [...followingUsers],
        isFollow: action.status
      };
    case UPDATE_IS_FOLLOW:
      return {
        ...state,
        isFollow: hasObjectInArrayByProperty(state.followingUsers, Number(action.userId), "id")
      };
    case UPDATE_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingInProgress: action.progress,
      };
    case UPDATE_TEXT_STATUS:
      return {
        ...state,
        textStatus: action.status,
      };
    case UPDATE_STATUS_PROGRESS:
      return {
        ...state,
        isUpdateStatusInProgress: action.progress,
      };
    case CLEAR_FOLLOWING_USERS:
      return {
        ...state,
        followingUsers: [],
      };
    case ADD_FOLLOWING_USERS:
      return {
        ...state,
        followingUsers: [...state.followingUsers, ...action.users],
      };
    case SET_FOLLOWING_USERS:
      return {
        ...state,
        followingUsers: [...action.users],
      };
    case UPDATE_LOAD_FOLLOWING_USERS_PROGRESS:
      return {
        ...state,
        isLoadFollowingUsersInProgress: action.progress,
      };
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
export const updateFollow = (id, status, onlyChangeStatus) => ({
  type: UPDATE_FOLLOW,
  id, status, onlyChangeStatus
});
export const updateIsFollow = (userId) => ({
  type: UPDATE_IS_FOLLOW,
  userId
});
export const updateFollowingProgress = progress => ({
  type: UPDATE_FOLLOWING_PROGRESS,
  progress,
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
export const setFollowingUsers = users => ({
  type: SET_FOLLOWING_USERS,
  users
});
export const updateLoadFollowingUsersProgress = progress => ({
  type: UPDATE_LOAD_FOLLOWING_USERS_PROGRESS,
  progress
});

export const loadUser = userId => async dispatch => {
  const loadTextStatus = async () => {
    const response = await profileAPI.getTextStatus(userId);

    if (response === undefined) return;

    dispatch(updateTextStatus(response));
  };

  loadTextStatus();

  dispatch(updateIsFollow(userId));

  dispatch(updateFetching(true));

  const response = await profileAPI.getUserInfo(userId);

  dispatch(updateFetching(false));
  if (!response) return;

  dispatch(setUserInfo(response));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, status, onlyChangeStatus) => {
  dispatch(updateFollowingProgress(true));

  const response = await apiMethod(userId);

  dispatch(updateFollowingProgress(false));

  if (response && response.resultCode === 0) {
    dispatch(updateFollow(userId, status, onlyChangeStatus));
  }
};

export const follow = (userId, onlyChangeStatus = false) => async dispatch => {
  followUnfollowFlow(dispatch, userId, followAPI.follow.bind(followAPI), true, onlyChangeStatus);
};

export const unfollow = (userId, onlyChangeStatus = false) => async dispatch => {
  followUnfollowFlow(dispatch, userId, followAPI.unFollow.bind(followAPI), false, onlyChangeStatus);
};

export const setTextStatus = status => async dispatch => {
  dispatch(updateStatusProgress(true));

  const response = await profileAPI.updateStatus(status);

  dispatch(updateStatusProgress(false));

  if (response && response.resultCode === 0) {
    dispatch(updateTextStatus(status));
  }
};

export const getFollowingUsers = (page = 1) => async dispatch => {
  if (page === 1) {
    dispatch(clearFollowingUsers());
    dispatch(updateLoadFollowingUsersProgress(true));
  }

  const response = await usersAPI.getUsers(page, 100);

  if (!response) {
    dispatch(updateLoadFollowingUsersProgress(false));
    return;
  }

  let followingUsers = [];

  response.items.forEach(user => {
    if (!user.followed) return;

    followingUsers.push(user);
  });

  if (followingUsers.length != 0) {
    dispatch(addFollowingUsers(followingUsers));
  }

  const { totalCount } = response;
  const totalPage = Math.ceil(totalCount / 100);

  if (page <= totalPage) {
    dispatch(getFollowingUsers(page + 1, totalCount))
  } else {
    dispatch(updateLoadFollowingUsersProgress(false));
  }
};

export default profileReducer;