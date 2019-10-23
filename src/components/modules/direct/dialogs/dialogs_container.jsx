import React, { useEffect } from 'react';
import Dialogs from './dialogs';
import { connect } from 'react-redux';
import { NavLink, withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { directSEL } from '../../../../redux/direct-selectors';
import Preloader from '../../../common/preloader';

const DialogsContainer = props => {
  const friendId = Number(props.match.params.userId);

  if (!friendId && props.dialogs && props.dialogs.length !== 0) {
    return <Redirect to={'/direct/' + props.dialogs[0].id} />;
  }

  if (props.isGettingDialogsInProgress || !props.dialogs) return <Preloader />;

  return <Dialogs dialogs={props.dialogs} friendId={friendId} />;
};

let mapStateToProps = state => {
  const { getAllDialogs, getIsGettingDialogsInProgress } = directSEL;
  return {
    dialogs: getAllDialogs(state),
    isGettingDialogsInProgress: getIsGettingDialogsInProgress(state),
  };
};

let mapDispatchToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(DialogsContainer);
