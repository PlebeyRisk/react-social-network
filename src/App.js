import React from 'react';
import styled from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import Nav from './components/modules/nav/nav';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp, clearAllIntervals, setIntervalThunk, clearIntervalThunk} from './redux/app-reducer';
import Preloader from './components/common/preloader';
import { checkForTotalNewMessages } from './redux/direct-reducer';
import { appSEL } from './redux/app-selectors';
import { authSEL } from './redux/auth-selectors';
import { withSuspense } from './components/hoc/withSuspense';

const LoginContainer = React.lazy(() => import('./components/modules/login/login_container'));
const Explore = React.lazy(() => import('./components/modules/explore/explore'));
const Main = React.lazy(() => import('./components/modules/main/main'));
const DirectContainer = React.lazy(() => import('./components/modules/direct/direct_container'));
const ProfileContainer = React.lazy(() => import('./components/modules/profile/profile_container'));

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledWrapperContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInitialStatus = styled.div`
  font-size: 16px;
  width: 100%;
  text-align: center;
`;

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isAuth && this.props.isAuth) {
      this.props.setIntervalThunk(this.props.checkForTotalNewMessages, 15000, 'checkTotalNewMessages');
    }
    if (prevProps.isAuth && !this.props.isAuth) {
      this.props.clearIntervalThunk(this.props.startingIntervals.get('checkTotalNewMessages'), 'checkTotalNewMessages');
    }
  }

  componentWillUnmount() {
    this.props.clearAllIntervals(this.props.startingIntervals);
  }

  render() {
    const { initialized } = this.props;

    if (!initialized) return (
      <StyledApp>
        <StyledWrapperContent>
          <Preloader/>
          <StyledInitialStatus>{this.props.initializedStatus}</StyledInitialStatus>
        </StyledWrapperContent>
      </StyledApp>
    );

    const isLogin = this.props.location.pathname.includes('login');

    return (
      <StyledApp>
        {!isLogin ? <Nav/> : undefined}
        <StyledWrapperContent>
          <Route exact path="/" component={withSuspense(Main)} />
          <Route path="/explore" component={withSuspense(Explore)} />
          <Route path="/direct/:userId?" component={withSuspense(DirectContainer)} />
          <Route path="/profile/:userId?" component={withSuspense(ProfileContainer)} />
          <Route path="/login" component={withSuspense(LoginContainer)} />
        </StyledWrapperContent>
      </StyledApp>
    );
  }
}

const mapStateToProps = state => {
  const { getInitialized, getInitializedStatus, getStartingIntervals } = appSEL;
  const { getIsAuth } = authSEL;
  return {
    initialized: getInitialized(state),
    initializedStatus: getInitializedStatus(state),
    startingIntervals: getStartingIntervals(state),
    isAuth: getIsAuth(state),
  };
};

const mapDispatchToProps = {
  initializeApp,
  checkForTotalNewMessages,
  setIntervalThunk,
  clearIntervalThunk,
  clearAllIntervals
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(App);
