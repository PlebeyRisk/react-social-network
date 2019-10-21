import React from 'react';
import { connect } from 'react-redux';
import Login from './login';
import { login, getCaptcha } from '../../../redux/auth-reducer';
import Preloader from '../../common/preloader';
import { Redirect } from 'react-router-dom';

class LoginContainer extends React.Component {
  login = formData => {
    const { email, password, rememberMe, captcha } = formData;
    this.props.login(email, password, rememberMe, captcha);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    if (this.props.isFetching) return <Preloader />;
    return this.props.isAuth ? (
      <Redirect to="/profile" />
    ) : (
      <Login {...this.props} onSubmit={this.login} />
    );
  }
}

let mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
    isFetchingCaptchaInProgress: state.auth.isFetchingCaptchaInProgress,
  };
};

export default connect(
  mapStateToProps,
  { login, getCaptcha },
)(LoginContainer);
