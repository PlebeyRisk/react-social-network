import React from 'react'
import styled from 'styled-components';
import Message from './message';

const StyledMessagesBox = styled.div`
  flex: 1;
  overflow-y: auto;
`

const StyledMessagesWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  padding: 15px;
`;

const MessagesBox = (props) => {
  const messages = props.messages.map(({senderId, receiverId, message}) => {
    console.log(`${senderId} - ${receiverId}`);
    if (senderId === 0) {
      return <Message type='sent' text={message}/>
    }
    if (receiverId === 0) {
      return <Message type='received' text={message}/>
    }
  });

  return (
    <StyledMessagesBox>
      <StyledMessagesWrapper>
        {messages}
      </StyledMessagesWrapper>
    </StyledMessagesBox>
  );
}

export default MessagesBox;
