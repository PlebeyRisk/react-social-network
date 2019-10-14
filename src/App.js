import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Nav from './components/modules/nav/nav';
import Main from './components/modules/main/main';
import Explore from './components/modules/explore/explore';
import Profile from './components/modules/profile/profile';
import Direct from './components/modules/direct/direct';

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
          <Route exact path="/" render={ () => <Main/> }/>
          <Route path="/explore" render={ () => <Explore/> }/>
          <Route path="/direct" render={ () => <Direct/> }/>
          <Route path="/profile" render={ () => <Profile/> }/>
      </StyledWrapperContent>
    </StyledApp>
  );
}

export default App;
