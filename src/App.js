import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import Nav from './components/modules/nav';
import Main from './components/modules/main';
import Footer from './components/modules/footer';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <StyledApp>
        <Nav/>
        <Main/>
        <Footer/>
      </StyledApp>
      <GlobalStyle/>
    </div>
  );
}

export default App;
