import SearchCover from './search_cover';
import { connect } from 'react-redux'
import { updateSearchCoverHiddenActionCreator, updateSearchInputFocusActionCreator } from '../../../../redux/search-users-reducer';

let mapStateToProps = (state) => {
  return {
    hidden: state.searchUsers.searchCover.hidden
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateHidden: () => {
      let action = updateSearchCoverHiddenActionCreator(true);
      dispatch(action);
      action = updateSearchInputFocusActionCreator(true);
      dispatch(action);
    }
  }
}

const SearchCoverContainer = connect(mapStateToProps, mapDispatchToProps)(SearchCover);

export default SearchCoverContainer;