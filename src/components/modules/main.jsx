import React from 'react'
import styled from 'styled-components';
import Container from '../common/container';

const StyledMain = styled.main`
  flex-grow: 1;
  background: #fafafa;
  border-top: 1px solid #dbdbdb;
`;

const MainContainer = styled(Container)`
  padding: 60px 0 20px 20px;
`;

const Main = () => {
  return (
    <StyledMain>
      <MainContainer>
        14241245555

      </MainContainer>
    </StyledMain>
  );
}

export default Main;