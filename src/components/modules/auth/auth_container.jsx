import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Auth from './auth';
import { setUserData, updateFetching, updateAuth } from '../../../redux/auth-reducer';
import Preloader from '../../common/preloader';
import API from '../../../api/api';

class AuthContainer extends React.Component {
  getUserInfo = () => {
    if (this.props.isFetching) return;

    API.auth().then( data => {
      if (data.resultCode === 0) {
        this.props.setUserData(data.data.id, data.data.email, data.data.login);
        this.props.updateAuth(true);
      }
      this.props.updateFetching(false);
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