import React from 'react'
import styled from 'styled-components';
import Container from '../../common/container';
import { colors } from '../../../theme/globalStyle';

const StyledMain = styled.main`
`;

const MainContainer = styled(Container)`
  padding: 60px 0 20px 20px;
`;

const Main = () => {
  return (
    <StyledMain>
      <MainContainer>
        Main

      </MainContainer>
    </StyledMain>
  );
}

export default Main;