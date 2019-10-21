import React from 'react';
import { connect } from 'react-redux';
import {
  updateUsersListHidden,
  setCurrentPage,
  setTerm,
  getUsers,
  clearUsers,
} from '../../../../../redux/search-users-reducer';
import SearchUserList from './users_list';
import { usersSEL } from '../../../../../redux/search-users-selectors';

class SearchUsersListContainer extends React.Component {
  loadUsers() {
    if (this.props.isFetching) return;
    this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.inputValue);
  }

  checkOnScroll = target => {
    if (this.props.isFetching) return;

    const numberLastPage = Math.ceil(this.props.totalCount / this.props.pageSize);
    if (this.props.currentPage === numberLastPage) return;

    const endScrollY = target.scrollHeight - target.clientHeight;
    const currentScrollY = Math.ceil(target.scrollTop);

    if (endScrollY === currentScrollY) {
      const newCurrentPage = this.props.currentPage + 1;
      this.props.setCurrentPage(newCurrentPage);
    }
  };

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
      <SearchUserList
        users={this.props.users}
        checkOnScroll={this.checkOnScroll}
        hidden={this.props.hidden}
      />
    );
  }
}

let mapStateToProps = state => {
  const {
    getUsers,
    getUsersListHidden,
    getPageSize,
    getTotalCount,
    getCurrentPage,
    getLastLoadedPage,
    getIsFetching,
    getInputValue,
    getTerm,
  } = usersSEL;
  return {
    users: getUsers(state),
    hidden: getUsersListHidden(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    lastLoadedPage: getLastLoadedPage(state),
    isFetching: getIsFetching(state),
    inputValue: getInputValue(state),
    term: getTerm(state),
  };
};

export default connect(
  mapStateToProps,
  { updateUsersListHidden, setCurrentPage, setTerm, getUsers, clearUsers },
)(SearchUsersListContainer);
