import React from 'react'
import { connect } from 'react-redux'
import Profile from './profile';
import { setUserInfo, updateFetching, updateFollow } from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom'
import API from '../../../api/api';


class ProfileContainer extends React.Component {
  loadUserInfo = () => {
    if (this.props.isFetching) return;

    const defaultUserId = this.props.authUserId || 2;
    const userId = Number(this.props.match.params.userId || defaultUserId);
    const currentUserId = Number(this.props.userInfo ? this.props.userInfo.userId : undefined);

    if (userId === currentUserId) return;

    API.getUserInfo(userId).then( data => {
      this.props.setUserInfo(data);
      this.props.updateFetching(false);
      this.updateFollow(userId);
    });
    this.props.updateFetching(true);
  }

  updateFollow(userId) {
    API.isFollow(userId).then( data => {
      this.props.updateFetching(false);
      this.props.updateFollow(data);
    });
    this.props.updateFetching(true);
  }

  follow = () => {
    if (this.props.isFetching) return;

    API.postFollow(this.props.userInfo.userId).then( data => {
      if (data.resultCode === 0) {
        this.props.updateFetching(false);
        this.props.updateFollow(true);
      }
    });
    this.props.updateFetching(true);
  }

  unfollow = () => {
    if (this.props.isFetching) return;

    API.deleteFollow(this.props.userInfo.userId).then( data => {
      if (data.resultCode === 0) {
        this.props.updateFetching(false);
        this.props.updateFollow(false);
      }
    });
    this.props.updateFetching(true);
  }

  componentDidMount() {
    this.loadUserInfo();
  }

  componentDidUpdate() {
    this.loadUserInfo();
  }

  render() {
    return <Profile {...this.props} follow={this.follow} unfollow={this.unfollow}/>;
  }
}

let mapStateToProps = (state) => {
  return {
    userInfo: state.profile.userInfo,
    isFetching: state.profile.isFetching,
    authUserId: state.auth.userId,
    isFollow: state.profile.isFollow,
    isAuth: state.auth.isAuth
  }
}

export default connect(
  mapStateToProps,
  { setUserInfo, updateFetching, updateFollow
  })(withRouter(ProfileContainer));