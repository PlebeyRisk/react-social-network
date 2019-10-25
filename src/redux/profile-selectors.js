export const getUserInfo = (state) => {
  return state.profile.userInfo;
}

export const getIsFetching = (state) => {
  return state.profile.isFetching;
}

export const getIsFollow = (state) => {
  return state.profile.isFollow;
}

export const getIsFollowingInProgress = (state) => {
  return state.profile.isFollowingInProgress;
}

export const getTextStatus = (state) => {
  return state.profile.textStatus;
}

export const getIsUpdateStatusInProgress = (state) => {
  return state.profile.isUpdateStatusInProgress;
}

export const getFollowingUsers = (state) => {
  return state.profile.followingUsers;
}

export const getIsLoadFollowingUsersInProgress = (state) => {
  return state.profile.isLoadFollowingUsersInProgress;
}

export const profileSEL = {
  getUserInfo,
  getIsFetching,
  getIsFollow,
  getIsFollowingInProgress,
  getTextStatus,
  getIsUpdateStatusInProgress,
  getFollowingUsers,
  getIsLoadFollowingUsersInProgress
};