import React from 'react';
import { connect } from 'react-redux';
import NavButtons from './nav_buttons';
import { directSEL } from '../../../../redux/direct-selectors';

const NavButtonsContainer = props => {
  return (
    <NavButtons
      newMessagesInDialogsCount={props.newMessagesInDialogsCount}
      newMessagesTotalCount={props.newMessagesTotalCount}
      isTotalCheckingNewMessagesInProgress={props.isTotalCheckingNewMessagesInProgress}
    />
  );
};

let mapStateToProps = state => {
  const {
    getNewMessagesInDialogsCount,
    getNewMessagesTotalCount,
    getIsTotalCheckingNewMessagesProgress,
  } = directSEL;
  return {
    newMessagesInDialogsCount: getNewMessagesInDialogsCount(state),
    newMessagesTotalCount: getNewMessagesTotalCount(state),
    isTotalCheckingNewMessagesInProgress: getIsTotalCheckingNewMessagesProgress(state),
  };
};

export default connect(mapStateToProps)(NavButtonsContainer);
