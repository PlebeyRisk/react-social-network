import React from 'react';
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

class UserStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  updateTextStatus = formData => {
    const newStatus = formData.status;
    const currentStatus = this.props.textStatus;

    this.deactivateEditMode();
    console.log(newStatus + ' ' + currentStatus);
    if (newStatus === currentStatus) return;

    this.props.setTextStatus(newStatus);
  };

  preventDefault = e => {
    e.preventDefault();
  };

  render() {
    return (
      <StyledUserStatus>
        {this.props.isUpdateStatusInProgress ? (
          <StyledPreloaderBox>
            <Preloader size="15" />
          </StyledPreloaderBox>
        ) : (
          undefined
        )}

        {!this.state.editMode ? (
          <StyledTextStatus
            onClick={this.activateEditMode}
            disabled={!this.props.isAuthUser || this.props.isUpdateStatusInProgress}
          >
            {this.props.textStatus || (this.props.isAuthUser ? 'изменить статус' : '')}
          </StyledTextStatus>
        ) : (
          <EditStatusForm
            deactivateEditMode={this.deactivateEditMode}
            onSubmit={this.updateTextStatus}
          />
        )}
      </StyledUserStatus>
    );
  }
}

export default UserStatus;
