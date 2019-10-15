import SearchCover from './cover';
import { connect } from 'react-redux'
import { updateCoverHiddenAC, updateInputFocusAC, updateUsersListHiddenAC } from '../../../../../redux/search-users-reducer';

let mapStateToProps = (state) => {
  return {
    hidden: state.searchUsers.cover.hidden
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateHidden: () => {
      let action = updateCoverHiddenAC(true);
      dispatch(action);
      action = updateInputFocusAC(true);
      dispatch(action);
      action = updateUsersListHiddenAC(false);
      dispatch(action);
    }
  }
}

const SearchCoverContainer = connect(mapStateToProps, mapDispatchToProps)(SearchCover);

export default SearchCoverContainer;