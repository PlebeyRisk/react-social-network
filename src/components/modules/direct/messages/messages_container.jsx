import React, { useEffect } from 'react';
import Messages from './messages';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { directSEL } from '../../../../redux/direct-selectors';
import { sendMessage, getMessages, startChatting } from '../../../../redux/direct-reducer';
import EmptyMessagesPage from './empty_messages_page';
import { clearIntervalThunk, setIntervalThunk } from '../../../../redux/app-reducer';
import Axios from 'axios';

const intervalName = 'messageUpdate';
let intervalId;
let cancelTokenSource = Axios.CancelToken.source();

const MessagesContainer = props => {
  const friendId = Number(props.match.params.userId);

  const clearGettingDataThread = () => {
    cancelTokenSource.cancel('Operation canceled by dialog change');
    props.clearIntervalThunk(intervalId, intervalName);
  };

  const startGettingDataThread = () => {
    clearGettingDataThread();

    cancelTokenSource = Axios.CancelToken.source();
    props.setIntervalThunk(() => props.getMessages(friendId, cancelTokenSource.token), 1000, intervalName);

    intervalId = props.startingIntervals.get(intervalName);
  };

  useEffect(() => {
    if (!friendId) {
      clearGettingDataThread();
      return;
    }

    startGettingDataThread();

    return () => {
      clearGettingDataThread();
    };
  }, [friendId]);

  const sendMessage = formData => {
    if (!formData.message || formData.message.trim().length === 0) return;
    props.sendMessage(friendId, formData.message);

    const isDialogsEmpty = !props.dialogs || (props.dialogs && !props.dialogs.length);
    const isFriendDialogsFirst = !isDialogsEmpty && (!friendId || (friendId && props.dialogs[0].id === friendId));

    if (!isFriendDialogsFirst && !props.isStartChattingInProgress) {
      props.startChatting(friendId);
    }
  };

  if (!friendId) return <EmptyMessagesPage />;

  const getDialogInfoById = id => {
    const filterResult = props.dialogs.filter(dialog => dialog.id === id);
    if (!filterResult) return undefined;
    return filterResult[0];
  };

  const dialogInfo = getDialogInfoById(friendId);

  if (!dialogInfo && !props.isStartChattingInProgress) {
    props.startChatting(friendId);
  }

  return (
    <Messages
      messages={props.messages}
      sendMessage={sendMessage}
      dialogInfo={dialogInfo}
      friendId={friendId}
      isSendingMessageInProgress={props.isSendingMessageInProgress}
      isGettingMessagesInProgress={props.isGettingMessagesInProgress}
      isStartChattingInProgress={props.isStartChattingInProgress}
    />
  );
};

let mapStateToProps = state => {
  const {
    getMessages,
    getAllDialogs,
    getIsSendingMessageInProgress,
    getIsStartChattingInProgress,
    getIsGettingMessagesInProgress,
  } = directSEL;
  return {
    messages: getMessages(state),
    dialogs: getAllDialogs(state),
    isStartChattingInProgress: getIsStartChattingInProgress(state),
    isSendingMessageInProgress: getIsSendingMessageInProgress(state),
    isGettingMessagesInProgress: getIsGettingMessagesInProgress(state),
    startingIntervals: state.app.startingIntervals,
  };
};

let mapDispatchToProps = {
  sendMessage,
  getMessages,
  startChatting,
  clearIntervalThunk,
  setIntervalThunk,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(MessagesContainer);
