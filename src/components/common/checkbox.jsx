import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/globalStyle';

const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledLabelMark = styled.label`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${colors.border};
  background-color: ${colors.gray};
  text-align: center;

  &::before {
    content: '✔';
    display: ${props => (props.checked ? 'inline' : 'none')};
    line-height: 20px;
    color: ${colors.secondary};
  }
`;

const StyledLabelText = styled.label`
  margin-left: 5px;
  background-color: transparent;
  text-align: left;
  color: ${colors.textTwo};
`;

const Checkbox = props => {
  const id = `toggle_${Math.random()
    .toString()
    .replace(/0\./, '')}`;

  return (
    <StyledCheckBox>
      <input {...props.input} id={id} type="checkbox" hidden />
      <StyledLabelMark
        onMouseDown={props.input.onFocus}
        onMouseUp={props.input.onBlur}
        htmlFor={id}
        checked={props.input.checked}
      />
      <StyledLabelText
        onMouseDown={props.input.onFocus}
        onMouseUp={props.input.onBlur}
        htmlFor={id}
      >
        {props.placeholder}
      </StyledLabelText>
    </StyledCheckBox>
  );
};

export default Checkbox;
