import React from 'react'
import styled from 'styled-components';
import Container from '../../common/container';
import { colors } from '../../../theme/globalStyle';
import Users from './users';
import Messages from './messages';

const StyledDirect = styled.main`

`;

const MainContainer = styled(Container)`
  display: flex;
  min-height: 100%;
  padding: 60px 0 20px 20px;
`;

const Direct = () => {
  return (
    <StyledDirect>
      <MainContainer>
        <Users/>
        <Messages/>
      </MainContainer>
    </StyledDirect>
  );
}

export default Direct;