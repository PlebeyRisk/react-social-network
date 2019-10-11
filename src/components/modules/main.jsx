import React from 'react'
import styled from 'styled-components';
import Container from '../common/container';
import { colors } from '../../theme/globalStyle';

const StyledMain = styled.main`
  flex-grow: 1;
  border-top: 1px solid ${ colors.border };
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