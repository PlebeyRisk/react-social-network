import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { loadUser, follow, unfollow, setTextStatus } from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { logout } from '../../../redux/auth-reducer';

class ProfileContainer extends React.Component {
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
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.userId;
    const newId = Number(this.props.match.params.userId);

    if (!prevId && !newId) return;
    if (prevId == newId) return;

    this.loadUserInfo();
  }

  render() {
    return <Profile {...this.props} follow={this.follow} unfollow={this.unfollow} />;
  }
}

let mapStateToProps = state => {
  return {
    userInfo: state.profile.userInfo,
    isFetching: state.profile.isFetching,
    authUserId: state.auth.userId,
    isFollow: state.profile.isFollow,
    isAuth: state.auth.isAuth,
    isFollowingInProgress: state.profile.isFollowingInProgress,
    oldUserId: state.profile.oldUserId,
    textStatus: state.profile.textStatus,
    isUpdateStatusInProgress: state.profile.isUpdateStatusInProgress,
  };
};

let mapDispatchToProps = {
  loadUser,
  follow,
  unfollow,
  setTextStatus,
  logout,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
