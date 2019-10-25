import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  updateUsersListHidden,
  setCurrentPage,
  setTerm,
  getUsers,
  rebootPageCount,
} from '../../../../../redux/search-users-reducer';
import SearchUsersForm from './search_users_form';
import { usersSEL } from '../../../../../redux/search-users-selectors';

const UsersFormContainer = props => {
  const loadUsers = addMethod => {
    if (props.isFetching) return;
    props.getUsers(props.currentPage, props.pageSize, props.inputValue, addMethod);
  };

  useEffect(() => {
    if (props.term !== props.inputValue) {
      props.setTerm(props.inputValue);
      props.rebootPageCount();
    }

    if (props.currentPage > props.lastLoadedPage) {
      props.lastLoadedPage === 0 ? loadUsers('set') : loadUsers('add');
    }
  }, [props]);

  if (props.users.length === 0) return <></>;

  return (
    <SearchUsersForm
      users={props.users}
      hidden={props.hidden}
      isFetching={props.isFetching}
      totalCount={props.totalCount}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      setCurrentPage={props.setCurrentPage}
    />
  );
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
  { updateUsersListHidden, setCurrentPage, setTerm, getUsers, rebootPageCount },
)(UsersFormContainer);
