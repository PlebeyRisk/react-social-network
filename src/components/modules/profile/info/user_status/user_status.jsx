import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../theme/globalStyle';
import Preloader from '../../../../common/preloader';
import EditStatusForm from './edit_status_form';

const StyledUserStatus = styled.span`
  position: relative;
`;

const StyledTextStatus = styled.span`
  color: ${colors.textThree};
  cursor: pointer;
  pointer-events: ${props => (!props.disabled ? 'auto' : 'none')};
`;

const StyledPreloaderBox = styled.div`
  position: absolute;
  top: 3px;
  left: -25px;
  width: 15px;
  height: 15px;
`;

const UserStatus = props => {
  let [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };

  const updateTextStatus = formData => {
    const newStatus = formData.status;
    const currentStatus = props.textStatus;

    deactivateEditMode();
    if (newStatus === currentStatus) return;

    props.setTextStatus(newStatus);
  };

  const preventDefault = e => {
    e.preventDefault();
  };

  return (
    <StyledUserStatus>
      {props.isUpdateStatusInProgress ? (
        <StyledPreloaderBox>
          <Preloader size="15" />
        </StyledPreloaderBox>
      ) : (
        undefined
      )}

      {!editMode ? (
        <StyledTextStatus
          onClick={activateEditMode}
          disabled={!props.isAuthUser || props.isUpdateStatusInProgress}
        >
          {props.textStatus || (props.isAuthUser ? 'изменить статус' : '')}
        </StyledTextStatus>
      ) : (
        <EditStatusForm deactivateEditMode={deactivateEditMode} onSubmit={updateTextStatus} />
      )}
    </StyledUserStatus>
  );
};

export default UserStatus;
