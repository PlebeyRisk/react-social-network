import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../theme/globalStyle';
import { reduxForm, Field } from 'redux-form';

const StyledSendMessageForm = styled.form`
  flex: none;
  display: flex;
  margin: 5px 10px 0;
  padding: 10px 20px;
  min-height: 50px;
  border: 1px solid ${colors.border};
  border-radius: 30px;
  background-color: ${colors.light};
`;

const StyledField = styled(Field)`
  flex: 1;
  border: none;
  outline: 0;
  min-width: 100px;
  min-height: 28px;
  max-height: 200px;
  resize: none;
  overflow-y: auto;
  overflow-x: hidden;
  word-wrap: break-word;
`;

const StyledSubmit = styled.input.attrs({
  type: 'submit',
  value: 'Отправить',
})`
  flex: none;
  border: none;
  background-color: transparent;
  font-weight: 700;
  color: ${colors.secondary};
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const SendMessageForm = props => {
  console.log(props);
  return (
    <StyledSendMessageForm onSubmit={props.handleSubmit}>
      <StyledField name="message" component="textarea" />
      <StyledSubmit />
    </StyledSendMessageForm>
  );
};

export default reduxForm({ form: 'sendMessage' })(SendMessageForm);
