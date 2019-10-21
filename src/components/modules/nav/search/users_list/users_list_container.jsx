import React, { useEffect } from 'react';
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

const SearchUsersListContainer = props => {
  const loadUsers = () => {
    if (props.isFetching) return;
    props.getUsers(props.currentPage, props.pageSize, props.inputValue);
  };

  const checkOnScroll = target => {
    if (props.isFetching) return;

    const numberLastPage = Math.ceil(props.totalCount / props.pageSize);
    if (props.currentPage === numberLastPage) return;

    const endScrollY = target.scrollHeight - target.clientHeight;
    const currentScrollY = Math.ceil(target.scrollTop);

    if (endScrollY === currentScrollY) {
      const newCurrentPage = props.currentPage + 1;
      props.setCurrentPage(newCurrentPage);
    }
  };

  useEffect(() => {
    if (props.term !== props.inputValue) {
      props.setTerm(props.inputValue);
      props.clearUsers();
    }

    if (props.currentPage > props.lastLoadedPage) {
      loadUsers();
    }
  }, [props]);

  if (props.users.length === 0) return <></>;

  return <SearchUserList users={props.users} checkOnScroll={checkOnScroll} hidden={props.hidden} />;
};

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
