import SearchInput from './input';
import { connect } from 'react-redux';
import { updateInputFocusAC, updateCoverHiddenAC, updateInputValueAC, updateUsersListHiddenAC } from '../../../../../redux/search-users-reducer';

let mapStateToProps = (state) => {
  return {
    focus: state.searchUsers.input.focus,
    value: state.searchUsers.input.value
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateFocus: (focus) => {
      let action = updateInputFocusAC(focus);
      dispatch(action);
      if (!focus) {
        action = updateCoverHiddenAC(false);
        dispatch(action);
        action = updateUsersListHiddenAC(true);
        dispatch(action);
      }
    },
    updateValue: (value) => {
      let action = updateInputValueAC(value);
      dispatch(action);
    }
  }
}

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);

export default SearchInputContainer;