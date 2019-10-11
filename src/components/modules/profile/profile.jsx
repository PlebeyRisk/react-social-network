import React from 'react'
import styled from 'styled-components';
import Container from '../../common/container';
import { colors } from '../../../theme/globalStyle';

const StyledProfile = styled.main`
`;

const MainContainer = styled(Container)`
  padding: 60px 0 20px 20px;
`;

const Profile = () => {
  return (
    <StyledProfile>
      <MainContainer>
        Profile

      </MainContainer>
    </StyledProfile>
  );
}

export default Profile;