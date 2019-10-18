import React from 'react'
import { connect } from 'react-redux';
import { updateUsersListHidden, setCurrentPage, setTerm, getUsers, clearUsers } from '../../../../../redux/search-users-reducer';
import SearchUserList from './users_list';

class SearchUsersListContainer extends React.Component {
  loadUsers() {
    if (this.props.isFetching) return;
    this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.inputValue);
  }

  checkOnScroll = (target) => {
    if (this.props.isFetching) return;

    const numberLastPage = Math.ceil(this.props.totalCount / this.props.pageSize);
    if (this.props.currentPage === numberLastPage) return;

    const endScrollY = target.scrollHeight - target.clientHeight;
    const currentScrollY = Math.ceil(target.scrollTop);

    if (endScrollY === currentScrollY) {
      const newCurrentPage = this.props.currentPage + 1;
      this.props.setCurrentPage(newCurrentPage);
    }
  }

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate() {
    if (this.props.term !== this.props.inputValue) {
      this.props.setTerm(this.props.inputValue);
      this.props.clearUsers();
    }

    if (this.props.currentPage > this.props.lastLoadedPage) {
      this.loadUsers();
    }
  }

  render() {
    if (this.props.users.length === 0) return <></>;

    return (
      <SearchUserList users={this.props.users}
                      checkOnScroll={this.checkOnScroll}
                      hidden={this.props.hidden}
                      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.searchUsers.usersList.users,
    hidden: state.searchUsers.usersList.hidden,
    pageSize: state.searchUsers.usersList.pageSize,
    totalCount: state.searchUsers.usersList.totalCount,
    currentPage: state.searchUsers.usersList.currentPage,
    lastLoadedPage: state.searchUsers.usersList.lastLoadedPage,
    isFetching: state.searchUsers.usersList.isFetching,
    inputValue: state.searchUsers.input.value,
    term: state.searchUsers.usersList.term,
  }
}

export default connect(
  mapStateToProps,
  { updateUsersListHidden, setCurrentPage, setTerm,
    getUsers, clearUsers,
  })(SearchUsersListContainer);