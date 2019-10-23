import React from 'react';
import styled from 'styled-components';
import SendMessageForm from './send_message_form';
import MessagesBox from './messages_box';
import { colors } from '../../../../theme/globalStyle';

const StyledMessages = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: 70%;
  border-left: 1px solid ${colors.border};
`;

const Messages = props => {
  return (
    <StyledMessages>
      <MessagesBox messages={props.messages} friendId={props.friendId} />
      <SendMessageForm
        onSubmit={props.sendMessage}
        isSendingMessagesInProgress={props.isSendingMessagesInProgress}
      />
    </StyledMessages>
  );
};

export default Messages;
