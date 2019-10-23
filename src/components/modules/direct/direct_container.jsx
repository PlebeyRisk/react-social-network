import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Direct from './direct';
import Preloader from '../../common/preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { authSEL } from '../../../redux/auth-selectors';
import { startChatting, getAllDialogs } from '../../../redux/direct-reducer';
import { directSEL } from '../../../redux/direct-selectors';

const DirectContainer = props => {
  const friendId = props.match.params.userId;

  const startChatting = () => {
    if (props.isStartChattingInProgress) return;
    if (!friendId) return;
    if (props.dialogs && props.dialogs[0].id === friendId) return;

    props.startChatting(friendId);
  };

  const loadDialogs = () => {
    if (props.dialogs) return;
    if (props.isGettingDialogsInProgress) return;
    if (friendId) return;

    props.getAllDialogs();
  };

  useEffect(() => {
    startChatting();
    loadDialogs();
  });

  return <Direct {...props} />;
};

const mapStateToProps = state => {
  const { getId } = authSEL;
  const { getAllDialogs, getIsStartChattingInProgress, getIsGettingDialogsInProgress } = directSEL;
  return {
    // authUserId: getId(state),
    // dialogs: getAllDialogs(state),
    // isStartChattingInProgress: getIsStartChattingInProgress(state),
    // isGettingDialogsInProgress: getIsGettingDialogsInProgress(state),
  };
};

const mapDispatchToProps = {
  startChatting,
  getAllDialogs,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withAuthRedirect,
)(DirectContainer);
