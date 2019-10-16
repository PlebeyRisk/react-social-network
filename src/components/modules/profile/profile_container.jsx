import React from 'react'
import { connect } from 'react-redux'
import Profile from './profile';
import * as axios from 'axios';
import { setUserInfo, updateFetching } from '../../../redux/profile-reducer';


class ProfileContainer extends React.Component {
  getUserInfo = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then( response => {
        this.props.setUserInfo(response.data);
        this.props.updateFetching(false);
      });

    this.props.updateFetching(true);
  }

  componentDidMount() {
    this.getUserInfo();
  }

  render() {
    return <Profile {...this.props}/>;
  }
}

let mapStateToProps = (state) => {
  return {
    userInfo: state.profile.userInfo,
    isFetching: state.profile.isFetching
  }
}

export default connect(
  mapStateToProps,
  { setUserInfo, updateFetching
  })(ProfileContainer);