import React from 'react';
import styled from 'styled-components';
import Message from './message';

const StyledMessagesBox = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const StyledMessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
`;

const MessagesBox = props => {
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
      />
    );
  });

  return (
    <StyledMessagesBox>
      <StyledMessagesWrapper>{messages}</StyledMessagesWrapper>
    </StyledMessagesBox>
  );
};

export default MessagesBox;
