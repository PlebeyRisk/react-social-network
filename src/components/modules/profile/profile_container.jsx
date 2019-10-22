import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import {
  loadUser,
  follow,
  unfollow,
  setTextStatus,
  getFollowingUsers,
  clearFollowingUsers,
} from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { logout } from '../../../redux/auth-reducer';
import { profileSEL } from '../../../redux/profile-selectors';

class ProfileContainer extends React.Component {
  setCurrentPage = page => {
    this.setState({ currentPage: page });
  };

  loadUserInfo = () => {
    if (this.props.isFetching) return;
    this.props.loadUser(this.props.match.params.userId || this.props.authUserId || 2);
  };

  follow = () => {
    this.props.follow(this.props.userInfo.userId);
  };

  unfollow = () => {
    this.props.unfollow(this.props.userInfo.userId);
  };

  componentDidMount() {
    this.loadUserInfo();
    this.props.getFollowingUsers(1);
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.lastLoadedPage !== this.props.lastLoadedPage){
    //   this.loadFollowingUsers();
    // }
    const prevId = prevProps.match.params.userId;
    const newId = Number(this.props.match.params.userId);

    if (!prevId && !newId) return;
    if (prevId == newId) return;

    this.loadUserInfo();
  }

  componentWillUnmount() {
    this.props.clearFollowingUsers();
  }

  render() {
    return <Profile {...this.props} follow={this.props.follow} unfollow={this.props.unfollow} />;
  }
}

let mapStateToProps = state => {
  const {
    getUserInfo,
    getIsFetching,
    getIsFollow,
    getIsFollowingInProgress,
    getOldUserId,
    getTextStatus,
    getIsUpdateStatusInProgress,
    getFollowingUsers,
    getIsLoadFollowingUsersInProgress,
  } = profileSEL;
  return {
    userInfo: getUserInfo(state),
    isFetching: getIsFetching(state),
    isFollow: getIsFollow(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
    oldUserId: getOldUserId(state),
    textStatus: getTextStatus(state),
    isUpdateStatusInProgress: getIsUpdateStatusInProgress(state),
    followingUsers: getFollowingUsers(state),
    isLoadFollowingUsersInProgress: getIsLoadFollowingUsersInProgress(state),
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = {
  loadUser,
  follow,
  unfollow,
  setTextStatus,
  logout,
  getFollowingUsers,
  clearFollowingUsers,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
