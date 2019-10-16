import SearchInput from './input';
import { connect } from 'react-redux';
import { updateInputFocus, updateCoverHidden, updateInputValue, updateUsersListHidden } from '../../../../../redux/search-users-reducer';

let mapStateToProps = (state) => {
  return {
    focus: state.searchUsers.input.focus,
    value: state.searchUsers.input.value,
    usersIsLoading: state.searchUsers.usersList.isLoading
  }
}

const SearchInputContainer = connect(
  mapStateToProps,
  { updateInputFocus, updateCoverHidden, updateUsersListHidden, updateInputValue
  })(SearchInput);

export default SearchInputContainer;