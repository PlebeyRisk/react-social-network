import React from 'react'
import { connect } from 'react-redux';
import { updateUsersListHidden, setUsers, setCurrentPage, setTotalCount, setLastLoadedPage, updateLoading } from '../../../../../redux/search-users-reducer';
import * as axios from 'axios';
import SearchUserList from './users_list';

class SearchUsersListContainer extends React.Component {
  getUsers() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalCount(response.data.totalCount);
      this.props.updateLoading(false);
    });
    this.props.updateLoading(true);
  }

  checkOnScroll = (target) => {
    if (this.props.isLoading) return;

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
    this.props.setLastLoadedPage(this.props.currentPage);
    this.getUsers();
  }

  componentDidUpdate() {
    if (this.props.currentPage > this.props.lastLoadedPage) {
      this.props.setLastLoadedPage(this.props.currentPage);
      this.getUsers();
    }
  }

  render() {
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
    isLoading: state.searchUsers.usersList.isLoading,
  }
}

export default connect(
  mapStateToProps,
  { updateUsersListHidden, setUsers, setCurrentPage, setTotalCount, setLastLoadedPage, updateLoading
  })(SearchUsersListContainer);