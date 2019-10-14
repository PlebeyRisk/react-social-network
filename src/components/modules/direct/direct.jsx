import React from 'react'
import styled from 'styled-components';
import Container from '../../common/container';
import { colors } from '../../../theme/globalStyle';
import Dialogs from './dialogs/dialogs';
import Messages from './messages/messages';

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

const Direct = (props) => {
  return (
    <StyledDirect>
      <MainContainer>
        <Dialogs dialogs={props.state.dialogs}/>
        <Messages messages={props.state.messages}/>
      </MainContainer>
    </StyledDirect>
  );
}

export default Direct;