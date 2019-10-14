import React from 'react'
import styled from 'styled-components';
import SendMessageForm from './send_message_form';
import MessagesBox from './messages_box';

const StyledMessages = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Messages = (props) => {
  return (
    <StyledMessages>
      <MessagesBox messages={props.messages}/>
      <SendMessageForm/>
    </StyledMessages>
  );
}

export default Messages;