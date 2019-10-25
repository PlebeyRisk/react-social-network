import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Message from './message';
import Preloader from '../../../common/preloader';

const StyledMessagesBox = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const StyledMessagesWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  width: 100%;
`;

const MessagesBox = props => {
  const messagesEndRef = useRef(null);

  const messages = props.messages.map((message, index) => {
    const {
      addedAt,
      body,
      id,
      isSpam,
      recepientId,
      recepientName,
      senderId,
      senderName,
      viewed,
    } = message;
    return (
      <Message
        addedAt={addedAt}
        body={body}
        id={id}
        isSpam={isSpam}
        recepientId={recepientId}
        recepientName={recepientName}
        senderId={senderId}
        senderName={senderName}
        viewed={viewed}
        friendId={props.friendId}
        key={index}
      />
    );
  });

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [props.friendId, props.messages.length]);

  return (
    <StyledMessagesBox>
      <StyledMessagesWrapper>{messages}</StyledMessagesWrapper>
      <div ref={messagesEndRef}></div>
    </StyledMessagesBox>
  );
};

export default MessagesBox;
