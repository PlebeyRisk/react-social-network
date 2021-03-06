import React, { useEffect } from 'react';
import Dialogs from './dialogs';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { directSEL } from '../../../../redux/direct-selectors';
import { getAllDialogs, clearMessages } from '../../../../redux/direct-reducer';
import { clearIntervalThunk, setIntervalThunk } from '../../../../redux/app-reducer';

const intervalName = 'dialogsUpdate';
let intervalId;

const DialogsContainer = props => {
  const friendId = Number(props.match.params.userId);

  const clearGettingDataThread = () => {
    props.clearIntervalThunk(intervalId, intervalName);
  };

  const startGettingDataThread = () => {
    props.clearMessages();
    props.setIntervalThunk(() => props.getAllDialogs(), 1000, intervalName);
    intervalId = props.startingIntervals.get(intervalName);
  };

  useEffect(() => {
    startGettingDataThread();

    return () => {
      clearGettingDataThread();
    };
  }, [props.match.path]);

  return (
    <Dialogs
      dialogs={props.dialogs}
      friendId={friendId}
      isGettingMessagesInProgress={props.isGettingMessagesInProgress}
    />
  );
};

let mapStateToProps = state => {
  const { getAllDialogs, getIsGettingDialogsInProgress, getIsGettingMessagesInProgress } = directSEL;
  return {
    dialogs: getAllDialogs(state),
    isGettingDialogsInProgress: getIsGettingDialogsInProgress(state),
    isGettingMessagesInProgress: getIsGettingMessagesInProgress(state),

    startingIntervals: state.app.startingIntervals,
  };
};

let mapDispatchToProps = { getAllDialogs, clearIntervalThunk, setIntervalThunk, clearMessages };

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(DialogsContainer);
