import React from 'react'
import { connect } from 'react-redux'
import Login from './login';
import { auth } from '../../../redux/auth-reducer';
import Preloader from '../../common/preloader';

class LoginContainer extends React.Component {
  auth = () => {
    if (this.props.isFetching) return;
    this.props.auth();
  }

  componentDidMount() {
    this.auth();
  }

  render() {
    if (this.props.isFetching) return <Preloader/>;
    return this.props.isAuth ? <div>Вы вошли</div> : <Login {...this.props}/>;
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
  { auth
  })(LoginContainer);