import React from 'react';
import styled from 'styled-components';
import Dialog from './dialog';
import defaultImage from '../../../../img/users/ava-default.jpg';

const StyledDialog = styled.div`
  width: 30%;
  overflow-y: auto;
`;

const StyledDialogsList = styled.div``;

const Dialogs = props => {
  const dialogs = props.dialogs.map((dialog, index) => {
    const {
      id,
      userName,
      lastDialogActivityDate,
      lastUserActivityDate,
      hasNewMessages,
      newMessagesCount,
    } = dialog;
    return (
      <Dialog
        userId={id}
        userName={userName}
        photo={dialog.photos.small || defaultImage}
        lastDialogActivityDate={lastDialogActivityDate}
        lastUserActivityDate={lastUserActivityDate}
        hasNewMessages={hasNewMessages}
        newMessagesCount={newMessagesCount}
        friendId={props.friendId}
        key={index}
      />
    );
  });

  return (
    <StyledDialog>
      <StyledDialogsList>{dialogs}</StyledDialogsList>
    </StyledDialog>
  );
};

export default Dialogs;
