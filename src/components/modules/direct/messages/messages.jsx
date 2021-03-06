import React from 'react';
import styled from 'styled-components';
import SendMessageForm from './send_message_form';
import MessagesBox from './messages_box';
import { colors } from '../../../../theme/globalStyle';
import Preloader from '../../../common/preloader';
import MessagesHeader from './header/messages_header';

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
      {props.dialogInfo ? <MessagesHeader dialogInfo={props.dialogInfo} /> : undefined}

      <MessagesBox
        messages={props.messages}
        friendId={props.friendId}
        isGettingMessagesInProgress={props.isGettingMessagesInProgress}
      />

      <SendMessageForm onSubmit={props.sendMessage} isSendingMessageInProgress={props.isSendingMessageInProgress} />
    </StyledMessages>
  );
};

export default Messages;
