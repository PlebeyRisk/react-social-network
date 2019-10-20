import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../theme/globalStyle';
import Input from '../../../../common/input';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

const StyledEditForm = styled.form`
  display: flex;
`;

const StyledTextInput = styled(Input).attrs({
  type: 'text',
  autoFocus: true,
})``;

const StyledButton = styled.button.attrs({
  type: 'submit',
})`
  background-color: transparent;
  border: none;
  font-weight: 600;
  color: ${colors.secondary};
`;

const EditStatusForm = props => {
  const preventDefault = e => {
    e.preventDefault();
  };

  return (
    <StyledEditForm onSubmit={props.handleSubmit}>
      <Field
        name="status"
        component={StyledTextInput}
        type="text"
        onBlur={props.deactivateEditMode}
      />
      <StyledButton onMouseDown={preventDefault}>Сохранить</StyledButton>
    </StyledEditForm>
  );
};

const mapStateToProps = state => ({
  initialValues: { status: state.profile.textStatus },
});

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: 'editStatus', enableReinitialize: true }),
)(EditStatusForm);
