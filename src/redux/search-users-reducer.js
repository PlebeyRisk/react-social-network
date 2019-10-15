const UPDATE_SEARCH_COVER_HIDDEN = 'UPDATE_SEARCH_COVER_HIDDEN';
const UPDATE_SEARCH_INPUT_FOCUS = 'UPDATE_SEARCH_INPUT_FOCUS';
const UPDATE_SEARCH_INPUT_VALUE = 'UPDATE_SEARCH_INPUT_VALUE';

const initialState = {
  searchCover: {
    hidden: false
  },
  searchInput: {
    value: '',
    focus: false
  }
}

const searchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_COVER_HIDDEN: {
      let stateCopy = {
        ...state,
        searchCover: { ...state.searchCover }
      };
      stateCopy.searchCover.hidden = action.hidden;
      return stateCopy;
    }
    case UPDATE_SEARCH_INPUT_FOCUS: {
      let stateCopy = {
        ...state,
        searchInput: { ...state.searchInput }
      };
      stateCopy.searchInput.focus = action.focus;
      return stateCopy;
    }
    case UPDATE_SEARCH_INPUT_VALUE: {
      let stateCopy = {
        ...state,
        searchInput: { ...state.searchInput }
      };
      stateCopy.searchInput.value = action.value;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const updateSearchCoverHiddenActionCreator = (hidden) =>
  ({ type: UPDATE_SEARCH_COVER_HIDDEN, hidden: hidden });

export const updateSearchInputFocusActionCreator = (focus) =>
  ({ type: UPDATE_SEARCH_INPUT_FOCUS, focus: focus });

export const updateSearchInputValueActionCreator = (value) =>
  ({ type: UPDATE_SEARCH_INPUT_VALUE, value: value });

export default searchUsersReducer;