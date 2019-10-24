import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Direct from './direct';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { directSEL } from '../../../redux/direct-selectors';
import {
  updateInitialized,
  getAllDialogs,
  getMessages,
  updateDialogsInitialized,
  updateMessagesInitialized,
} from '../../../redux/direct-reducer';

const DirectContainer = props => {
  const friendId = props.match.params.userId;

  useEffect(() => {
    if (!props.isGettingMessagesInProgress && friendId !== null && friendId !== undefined) {
      props.getMessages(friendId);
    }

    if (!props.isGettingDialogsInProgress && !props.dialogs) {
      props.getAllDialogs();
    }
  }, [friendId]);

  if (!props.initializedDialogs && props.dialogs !== null && props.dialogs !== undefined) {
    props.updateDialogsInitialized();
  }

  if (
    !props.initializedMessages &&
    (!friendId || (props.messages !== null && props.messages !== undefined))
  ) {
    props.updateMessagesInitialized();
  }

  if (!props.initialized && props.initializedMessages && props.initializedDialogs) {
    props.updateInitialized();
  }

  return <Direct initialized={props.initialized} />;
};

const mapStateToProps = state => {
  const {
    getInitializedMessages,
    getInitializedDialogs,
    getInitialized,
    getIsGettingMessagesInProgress,
    getIsGettingDialogsInProgress,
    getMessages,
    getAllDialogs,
  } = directSEL;
  return {
    initializedMessages: getInitializedMessages(state),
    initializedDialogs: getInitializedDialogs(state),
    initialized: getInitialized(state),
    isGettingMessagesInProgress: getIsGettingMessagesInProgress(state),
    isGettingDialogsInProgress: getIsGettingDialogsInProgress(state),
    messages: getMessages(state),
    dialogs: getAllDialogs(state),
    initializedMessages: getInitializedMessages(state),
    initializedDialogs: getInitializedDialogs(state),
  };
};

const mapDispatchToProps = {
  updateInitialized,
  updateDialogsInitialized,
  updateMessagesInitialized,
  getAllDialogs,
  getMessages,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withAuthRedirect,
)(DirectContainer);
