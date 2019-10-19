import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Nav from './components/modules/nav/nav';
import Main from './components/modules/main/main';
import Explore from './components/modules/explore/explore';
import DirectContainer from './components/modules/direct/direct_container';
import ProfileContainer from './components/modules/profile/profile_container';
import LoginContainer from './components/modules/login/login_container';

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
`

const App = () => {
  return (
    <StyledApp>
      <Nav/>
      <StyledWrapperContent>
          <Route exact path="/" component={Main}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/direct" component={DirectContainer}/>
          <Route path="/profile/:userId?" component={ProfileContainer}/>
          <Route path="/login" component={LoginContainer}/>
      </StyledWrapperContent>
    </StyledApp>
  );
}

export default App;
