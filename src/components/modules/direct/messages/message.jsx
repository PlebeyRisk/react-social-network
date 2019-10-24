import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../theme/globalStyle';

const StyledMessage = styled.div`
  padding: 10px 20px;
  border-radius: 30px;
`;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  background-color: ${props => (!props.viewed ? 'rgba(0,0,0, 0.02)' : 'transparent')};
`;

const StyledSentMessage = styled(StyledMessage)`
  align-self: flex-end;
  background-color: rgba(0, 0, 0, 0.05);
`;

const StyledReceivedMessage = styled(StyledMessage)`
  align-self: flex-start;
  border: 1px solid ${colors.border};
  background-color: ${colors.light};
`;

const Message = props => {
  const isSentMessage = props.friendId !== props.senderId;

  return (
    <StyledWrap viewed={props.viewed}>
      {isSentMessage ? (
        <StyledSentMessage>{props.body}</StyledSentMessage>
      ) : (
        <StyledReceivedMessage>{props.body}</StyledReceivedMessage>
      )}
    </StyledWrap>
  );
};

export default Message;
