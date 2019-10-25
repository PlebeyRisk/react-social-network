import React from 'react';
import styled from 'styled-components';
import Container from '../../common/container';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Redirect } from 'react-router-dom';

const StyledMain = styled.main``;

const MainContainer = styled(Container)`
  padding: 60px 0 20px 20px;
`;

const Main = () => {
  return <Redirect to="/profile" />;

  return (
    <StyledMain>
      <MainContainer>Main</MainContainer>
    </StyledMain>
  );
};
export default withAuthRedirect(Main);
