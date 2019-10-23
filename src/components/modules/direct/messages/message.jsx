import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../theme/globalStyle';

const StyledMessage = styled.div`
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 30px;
`;

const StyledSentMessage = styled(StyledMessage)`
  align-self: flex-end;
  border: 1px solid ${colors.border};
  background-color: ${colors.light};
`;

const StyledReceivedMessage = styled(StyledMessage)`
  align-self: flex-start;
  background-color: ${colors.stillGray};
`;

const Message = props => {
  const isSentMessage = props.friendId !== props.senderId;
  return isSentMessage ? (
    <StyledSentMessage>{props.body}</StyledSentMessage>
  ) : (
    <StyledReceivedMessage>{props.body}</StyledReceivedMessage>
  );
};

export default Message;
