export const getUsers = (state) => {
  return state.searchUsers.usersList.users;
}

export const getUsersListHidden = (state) => {
  return state.searchUsers.usersList.hidden;
}

export const getPageSize = (state) => {
  return state.searchUsers.usersList.pageSize;
}

export const getTotalCount = (state) => {
  return state.searchUsers.usersList.totalCount;
}

export const getCurrentPage = (state) => {
  return state.searchUsers.usersList.currentPage;
}

export const getLastLoadedPage = (state) => {
  return state.searchUsers.usersList.lastLoadedPage;
}

export const getIsFetching = (state) => {
  return state.searchUsers.usersList.isFetching;
}

export const getInputValue = (state) => {
  return state.searchUsers.input.value;
}

export const getTerm = (state) => {
  return state.searchUsers.usersList.term;
}

export const usersSEL = {
  getUsers,
  getUsersListHidden,
  getPageSize,
  getTotalCount,
  getCurrentPage,
  getLastLoadedPage,
  getIsFetching,
  getInputValue,
  getTerm
};