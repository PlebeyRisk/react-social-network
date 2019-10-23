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

  updateFollowingUsers = () => {
    this.props.getFollowingUsers(1);
  };

  componentDidMount() {
    this.loadUserInfo();
    this.updateFollowingUsers();

    // let i = 2;
    // let idTimer = setInterval(() => {
    //   this.props.follow(i);
    //   i++;
    //   console.log(i);
    //   if (i === 50) {
    //     clearInterval(idTimer);
    //   }
    // }, 1000);
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.userId;
    const newId = Number(this.props.match.params.userId);

    if (prevProps.match != this.props.match) {
      this.loadUserInfo();
      if (isNaN(newId)) {
        this.updateFollowingUsers();
      }
    }

    if (!prevId && !newId) return;
    if (prevId == newId) return;

    this.loadUserInfo();
  }

  render() {
    return <Profile {...this.props} updateFollowingUsers={this.updateFollowingUsers} />;
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
