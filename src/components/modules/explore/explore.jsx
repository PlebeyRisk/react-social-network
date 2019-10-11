import React from 'react'
import styled from 'styled-components';
import Container from '../../common/container';
import { colors } from '../../../theme/globalStyle';

const StyledExplore = styled.main`
`;

const MainContainer = styled(Container)`
  padding: 60px 0 20px 20px;
`;

const Explore = () => {
  return (
    <StyledExplore>
      <MainContainer>
        Explore

      </MainContainer>
    </StyledExplore>
  );
}

export default Explore;