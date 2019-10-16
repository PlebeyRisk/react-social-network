import SearchCover from './cover';
import { connect } from 'react-redux'
import { updateCoverHidden, updateInputFocus, updateUsersListHidden } from '../../../../../redux/search-users-reducer';

let mapStateToProps = (state) => {
  return {
    hidden: state.searchUsers.cover.hidden
  }
}

const SearchCoverContainer = connect(
  mapStateToProps,
  { updateCoverHidden, updateInputFocus, updateUsersListHidden
  })(SearchCover);

export default SearchCoverContainer;