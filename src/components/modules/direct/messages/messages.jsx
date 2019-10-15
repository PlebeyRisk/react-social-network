import React from 'react'
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

const Messages = (props) => {
  const newMessageElem = React.createRef();

  const onSendMessage = () => {
    props.sendMessage();
  };

  const onMessageChange = (value) => {
    props.updateNewMessage(value);
  };

  return (
    <StyledMessages>
      <MessagesBox messages={props.messages} />
      <SendMessageForm onMessageChange={onMessageChange}
                       newMessageRef={newMessageElem}
                       newMessageValue={props.newMessageValue}
                       sendMessage={onSendMessage}/>
    </StyledMessages>
  );
}

export default Messages;