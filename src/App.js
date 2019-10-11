import React from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle, { colors } from './theme/globalStyle';
import Nav from './components/modules/nav/nav';
import Footer from './components/modules/footer/footer';
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
  flex-grow: 1;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${ colors.border };
`

function App() {
  return (
    <Router>
      <StyledApp>
        <Nav/>
        <StyledWrapperContent>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/explore" component={Explore}/>
            <Route path="/direct" component={Direct}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </StyledWrapperContent>
        <Footer/>
      </StyledApp>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
