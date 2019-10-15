const UPDATE_COVER_HIDDEN = 'UPDATE_SEARCH_COVER_HIDDEN';
const UPDATE_INPUT_FOCUS = 'UPDATE_SEARCH_INPUT_FOCUS';
const UPDATE_INPUT_VALUE = 'UPDATE_SEARCH_INPUT_VALUE';
const UPDATE_USERSLIST_HIDDEN = 'UPDATE_USERSLIST_HIDDEN';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

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
    currentPage: 1
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
    default:
      return state;
  }
}

export const updateCoverHiddenAC = (hidden) =>
  ({ type: UPDATE_COVER_HIDDEN, hidden });

export const updateInputFocusAC = (focus) =>
  ({ type: UPDATE_INPUT_FOCUS, focus });

export const updateInputValueAC = (value) =>
  ({ type: UPDATE_INPUT_VALUE, value });

export const updateUsersListHiddenAC = (hidden) =>
  ({ type: UPDATE_USERSLIST_HIDDEN, hidden });

export const setUsersAC = (users) =>
  ({ type: SET_USERS, users: users });

export const setCurrentPageAC = (currentPage) =>
  ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalCountAC = (totalCount) =>
  ({ type: SET_TOTAL_COUNT, totalCount });

export default searchUsersReducer;