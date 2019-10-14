import React from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle, { colors } from './theme/globalStyle';
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

const App = (props) => {
  return (
    <Router>
      <StyledApp>
        <Nav/>
        <StyledWrapperContent>
          <Switch>
            <Route exact path="/" render={ () => <Main/> }/>
            <Route path="/explore" render={ () => <Explore/> }/>
            <Route path="/direct" render={ () => <Direct state={props.state.direct}/> }/>
            <Route path="/profile" render={ () => <Profile/> }/>
          </Switch>
        </StyledWrapperContent>
      </StyledApp>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
