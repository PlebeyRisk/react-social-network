import React from 'react';
import styled from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import Nav from './components/modules/nav/nav';
import Main from './components/modules/main/main';
import Explore from './components/modules/explore/explore';
import DirectContainer from './components/modules/direct/direct_container';
import ProfileContainer from './components/modules/profile/profile_container';
import LoginContainer from './components/modules/login/login_container';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader';

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
          <Route exact path="/" component={Main} />
          <Route path="/explore" component={Explore} />
          <Route path="/direct" component={DirectContainer} />
          <Route path="/profile/:userId?" component={ProfileContainer} />
          <Route path="/login" component={LoginContainer} />
        </StyledWrapperContent>
      </StyledApp>
    );
  }
}

let mapStateToProps = state => {
  return {
    initialized: state.app.initialized,
    initializedStatus: state.app.initializedStatus
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      initializeApp,
    },
  ),
  withRouter,
)(App);
