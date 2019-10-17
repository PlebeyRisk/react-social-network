import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Nav from './components/modules/nav/nav';
import Main from './components/modules/main/main';
import Explore from './components/modules/explore/explore';
import Direct from './components/modules/direct/direct';
import ProfileContainer from './components/modules/profile/profile_container';
import AuthContainer from './components/modules/auth/auth_container';

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
          <Route exact path="/" component={AuthContainer}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/direct" component={Direct}/>
          <Route path="/profile/:userId?" component={ProfileContainer}/>
          <Route path="/auth" component={AuthContainer}/>
      </StyledWrapperContent>
    </StyledApp>
  );
}

export default App;
