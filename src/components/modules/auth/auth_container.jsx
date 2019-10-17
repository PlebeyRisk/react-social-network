import React from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios';
import { withRouter } from 'react-router-dom'
import Auth from './auth';
import { setUserData, updateFetching, updateAuth } from '../../../redux/auth-reducer';
import Preloader from '../../common/preloader';

class AuthContainer extends React.Component {
  getUserInfo = () => {
    if (this.props.isFetching) return;

    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then( response => {
        console.log();
        if (response.data.resultCode === 0) {
          this.props.setUserData(response.data.data.id, response.data.data.email, response.data.data.login);
          this.props.updateAuth(true);
        }

        this.props.updateFetching(false);
      }, error => {
        console.log('error fetching');
      });

    this.props.updateFetching(true);
  }

  componentDidMount() {
    this.getUserInfo();
  }

  render() {
    if (this.props.isFetching) return <Preloader/>;
    return this.props.isAuth ? <div>Вы вошли</div> : <Auth {...this.props}/>;
  }
}

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
  }
}

export default connect(
  mapStateToProps,
  { setUserData, updateFetching, updateAuth
  })(withRouter(AuthContainer));