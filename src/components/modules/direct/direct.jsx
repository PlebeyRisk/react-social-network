import React from 'react';
import styled from 'styled-components';
import Container from '../../common/container';
import MessagesContainer from './messages/messages_container';
import DialogsContainer from './dialogs/dialogs_container';

const StyledDirect = styled.main`
  padding: 0;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled(Container)`
  flex: 1 0 auto;
  display: flex;
  padding: 138px 20px 20px;
  max-height: 100vh;
`;

const Direct = () => {
  return (
    <StyledDirect>
      <MainContainer>
        {/* <DialogsContainer/> */}
        <MessagesContainer />
      </MainContainer>
    </StyledDirect>
  );
};

export default Direct;
