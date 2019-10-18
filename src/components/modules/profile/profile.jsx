import React from 'react'
import styled from 'styled-components';
import Container from '../../common/container';
import ProfileInfo from './info/profile_info';
import Preloader from '../../common/preloader';

const StyledProfile = styled.main`
`;

const MainContainer = styled(Container)`
  padding: 60px 20px 0 20px;
`;

const Profile = (props) => {
  if (!props.userInfo || props.isFetching) {
    return <Preloader/>;
  }

  return (
    <StyledProfile>
      <MainContainer>
        <ProfileInfo {...props}/>
      </MainContainer>
    </StyledProfile>
  );
}

export default Profile;