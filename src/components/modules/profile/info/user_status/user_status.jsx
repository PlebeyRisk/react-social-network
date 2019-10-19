import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../theme/globalStyle';
import TextInput from '../../../../common/textinput';
import Preloader from '../../../../common/preloader';

const StyledUserStatus = styled.span`
  position: relative;
`;

const StyledTextStatus = styled.span`
  color: ${colors.textThree};
  cursor: pointer;
  pointer-events: ${props => (!props.disabled ? 'auto' : 'none')};
`;

const StyledEditForm = styled.div`
  display: flex;
`;

const StyledTextInput = styled(TextInput).attrs({
  type: 'text',
  autoFocus: true,
})``;

const StyledButton = styled.button.attrs({
  type: 'button',
})`
  background-color: transparent;
  border: none;
  font-weight: 600;
  color: ${colors.secondary};
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
    inputValue: this.props.textStatus,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
    this.changeInputValue(this.props.textStatus);
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  changeInputValue = value => {
    this.setState({
      inputValue: value,
    });
  };

  updateTextStatus = () => {
    this.changeInputValue('');
    this.deactivateEditMode();
    if (this.state.inputValue === this.props.textStatus) return;
    this.props.setTextStatus(this.state.inputValue);
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
          <StyledEditForm>
            <StyledTextInput
              onBlur={this.deactivateEditMode}
              value={this.state.inputValue}
              onChange={e => this.changeInputValue(e.currentTarget.value)}
            />
            <StyledButton onMouseDown={this.preventDefault} onClick={this.updateTextStatus}>
              Сохранить
            </StyledButton>
          </StyledEditForm>
        )}
      </StyledUserStatus>
    );
  }
}

export default UserStatus;
