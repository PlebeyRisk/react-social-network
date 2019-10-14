import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../../theme/globalStyle';

const StyledSendMessageForm = styled.div`
  flex: none;
  display: flex;
  margin: 5px 10px 0;
  padding: 10px 20px;
  min-height: 50px;
  border: 1px solid ${colors.border};
  border-radius: 30px;
  background-color: ${colors.light};
`;

const StyledTextArea = styled.div.attrs(props => ({
  contentEditable: "true",
  role: "textbox",
  ariaMultiline: "true"
}))`
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

const StyledSubmit= styled.input.attrs(props => ({
  type: "button",
  value: "Отправить"
}))`
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

const SendMessageForm = () => {
  return (
    <StyledSendMessageForm>
      <StyledTextArea> </StyledTextArea>
      <StyledSubmit/>
    </StyledSendMessageForm>
  );
}

export default SendMessageForm;