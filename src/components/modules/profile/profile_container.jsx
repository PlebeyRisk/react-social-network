import React from 'react'
import { connect } from 'react-redux'
import Profile from './profile';
import * as axios from 'axios';
import { setUserInfo, updateFetching, updateFollow } from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom'


class ProfileContainer extends React.Component {
  getUserInfo = () => {
    if (this.props.isFetching) return;

    const defaultUserId = this.props.authUserId || 2;
    const userId = Number(this.props.match.params.userId || defaultUserId);
    const currentUserId = Number(this.props.userInfo ? this.props.userInfo.userId : undefined);

    if (userId === currentUserId) return;

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then( response => {
        this.props.setUserInfo(response.data);
        this.props.updateFetching(false);
        this.updateFollow(userId);
      }, error => {
        console.log('error fetching getUserInfo');
      });

    this.props.updateFetching(true);
  }

  updateFollow(userId) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
      withCredentials: true
    })
      .then( response => {
        this.props.updateFetching(false);
        this.props.updateFollow(response.data);
      }, error => {
        console.log('error fetching updateFollow');
      });

    this.props.updateFetching(true);
  }

  follow = () => {
    if (this.props.isFetching) return;

    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.userInfo.userId}`, null, {
      withCredentials: true,
      headers: { "API-KEY": 'd18db643-a35e-496c-b103-3f4633876335' }
    })
      .then( response => {
        if (response.data.resultCode === 0) {
          this.props.updateFetching(false);
          this.props.updateFollow(true);
        }
      }, error => {
        console.log('error fetching follow');
      });

    this.props.updateFetching(true);
  }

  unfollow = () => {
    if (this.props.isFetching) return;

    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.userInfo.userId}`, {
      withCredentials: true,
      headers: { "API-KEY": 'd18db643-a35e-496c-b103-3f4633876335' }
    })
      .then( response => {
        if (response.data.resultCode === 0) {
          this.props.updateFetching(false);
          this.props.updateFollow(false);
        }
      }, error => {
        console.log('error fetching unfollow');
      });

    this.props.updateFetching(true);
  }

  componentDidMount() {
    this.getUserInfo();
  }

  componentDidUpdate() {
    this.getUserInfo();
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