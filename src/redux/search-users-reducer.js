const UPDATE_COVER_HIDDEN = 'UPDATE_SEARCH_COVER_HIDDEN';
const UPDATE_INPUT_FOCUS = 'UPDATE_SEARCH_INPUT_FOCUS';
const UPDATE_INPUT_VALUE = 'UPDATE_SEARCH_INPUT_VALUE';
const UPDATE_USERSLIST_HIDDEN = 'UPDATE_USERSLIST_HIDDEN';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_LAST_LOADED_PAGE = 'SET_LAST_LOADED_PAGE';
const UPDATE_LOADING = 'UPDATE_LOADING';

const initialState = {
  cover: {
    hidden: false
  },
  input: {
    value: '',
    focus: false
  },
  usersList: {
    users: [],
    hidden: true,
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    lastLoadedPage: 0,
    isLoading: false
  }
}

const searchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COVER_HIDDEN: {
      let stateCopy = {
        ...state,
        cover: { ...state.cover }
      };
      stateCopy.cover.hidden = action.hidden;
      return stateCopy;
    }
    case UPDATE_INPUT_FOCUS: {
      let stateCopy = {
        ...state,
        input: { ...state.input }
      };
      stateCopy.input.focus = action.focus;
      return stateCopy;
    }
    case UPDATE_INPUT_VALUE: {
      let stateCopy = {
        ...state,
        input: { ...state.input }
      };
      stateCopy.input.value = action.value;
      return stateCopy;
    }
    case UPDATE_USERSLIST_HIDDEN: {
      let stateCopy = {
        ...state,
        usersList: { ...state.usersList }
      };
      stateCopy.usersList.hidden = action.hidden;
      return stateCopy;
    }
    case SET_USERS: {
      let stateCopy = {
        ...state,
        usersList: { ...state.usersList, users: [...state.usersList.users, ...action.users]}
      };
      return stateCopy;
    }
    case SET_CURRENT_PAGE: {
      let stateCopy = {
        ...state,
        usersList: { ...state.usersList}
      };
      stateCopy.usersList.currentPage = action.currentPage;
      return stateCopy;
    }
    case SET_TOTAL_COUNT: {
      let stateCopy = {
        ...state,
        usersList: { ...state.usersList}
      };
      stateCopy.usersList.totalCount = action.totalCount;
      return stateCopy;
    }
    case SET_LAST_LOADED_PAGE: {
      let stateCopy = {
        ...state,
        usersList: { ...state.usersList}
      };
      stateCopy.usersList.lastLoadedPage = action.lastLoadedPage;
      return stateCopy;
    }
    case UPDATE_LOADING: {
      let stateCopy = {
        ...state,
        usersList: { ...state.usersList}
      };
      stateCopy.usersList.isLoading = action.isLoading;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const updateCoverHidden = (hidden) => ({ type: UPDATE_COVER_HIDDEN, hidden });
export const updateInputFocus = (focus) => ({ type: UPDATE_INPUT_FOCUS, focus });
export const updateInputValue = (value) => ({ type: UPDATE_INPUT_VALUE, value });
export const updateUsersListHidden = (hidden) => ({ type: UPDATE_USERSLIST_HIDDEN, hidden });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const setLastLoadedPage = (lastLoadedPage) => ({ type: SET_LAST_LOADED_PAGE, lastLoadedPage });
export const updateLoading = (isLoading) => ({ type: UPDATE_LOADING, isLoading });

export default searchUsersReducer;