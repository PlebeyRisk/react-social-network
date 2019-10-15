import SearchInput from './search_input';
import { connect } from 'react-redux';
import { updateSearchInputFocusActionCreator, updateSearchCoverHiddenActionCreator, updateSearchInputValueActionCreator } from '../../../../redux/search-users-reducer';

let mapStateToProps = (state) => {
  return {
    focus: state.searchUsers.searchInput.focus,
    value: state.searchUsers.searchInput.value
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateFocus: (focus) => {
      let action = updateSearchInputFocusActionCreator(focus);
      dispatch(action);
      if (!focus) {
        action = updateSearchCoverHiddenActionCreator(false);
        dispatch(action);
      }
    },
    updateValue: (value) => {
      let action = updateSearchInputValueActionCreator(value);
      dispatch(action);
    }
  }
}

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);

export default SearchInputContainer;