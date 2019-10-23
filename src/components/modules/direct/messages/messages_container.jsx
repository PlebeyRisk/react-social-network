import React, { useEffect } from 'react';
import Messages from './messages';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { directSEL } from '../../../../redux/direct-selectors';
import Preloader from '../../../common/preloader';
import { sendMessage } from '../../../../redux/direct-reducer';

const MessagesContainer = props => {
  const friendId = props.match.params.userId;

  const sendMessage = formData => {
    if (!formData.message || formData.message.trim().length === 0) return;
    props.sendMessage(friendId, formData.message);
  };

  if (props.isStartChattingInProgress || !props.messages) return <Preloader />;
  return (
    <Messages
      messages={props.messages}
      sendMessage={sendMessage}
      friendId={friendId}
      isSendingMessagesInProgress={props.isSendingMessagesInProgress}
    />
  );
};

let mapStateToProps = state => {
  const { getMessages, getIsSendingMessagesInProgress, getIsStartChattingInProgress } = directSEL;
  return {
    messages: getMessages(state),
    isStartChattingInProgress: getIsStartChattingInProgress(state),
    isSendingMessagesInProgress: getIsSendingMessagesInProgress(state),
  };
};

let mapDispatchToProps = {
  sendMessage,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(MessagesContainer);
