import { connect } from 'react-redux';
import SearchUsersList from './users_list';
import { updateUsersListHiddenAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../../../../redux/search-users-reducer';

let mapStateToProps = (state) => {
  return {
    users: state.searchUsers.usersList.users,
    hidden: state.searchUsers.usersList.hidden,
    pageSize: state.searchUsers.usersList.pageSize,
    totalCount: state.searchUsers.usersList.totalCount,
    currentPage: state.searchUsers.usersList.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateHidden: (hidden) => {
      dispatch(updateUsersListHiddenAC(hidden));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalCount: (count) => {
      dispatch(setTotalCountAC(count));
    }
  }
}

const SearchUsersListContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUsersList);

export default SearchUsersListContainer;