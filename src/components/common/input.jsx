import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/globalStyle';
import errorIcon from '../../img/validation-error.svg';

const StyledInput = styled.input`
  padding: 9px;
  padding-right: 30px;
  border-radius: 4px;
  border: 1px solid ${props => (props.hasError ? colors.errorBorder : colors.border)};
  background-color: ${colors.light};
`;

const StyledBox = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  border-radius: 4px;

  &::before {
    content: '${props => props.error}';
    display: ${props => (props.error ? 'block' : 'none')};
    position: absolute;
    padding: 5px 10px;
    top: 50%;
    left: ${props => (props.active ? '-20px' : '-9999px')};
    opacity: ${props => (props.active ? '1' : '0')};
    width: 200px;
    transform: translate(-100%, -50%);
    border-radius: 2px;
    background-color: ${colors.error};
    box-shadow: 0 0 0 1px ${colors.errorShadow}, 0 1px 10px rgba(0, 0, 0, .35);
    color: ${colors.light};
    transition: opacity 0.3s ease-in-out;
  }

  &::after {
    content: '';
    display: ${props => (props.hasError ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    right: 10px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    background: url(${errorIcon}) center no-repeat;
    background-size: cover;
  }
`;

const Input = ({ meta, input, ...props }) => {
  const { error, active, visited, submitFailed } = meta;
  const hasError = error && !active && (visited || submitFailed);
  console.log(meta);
  return (
    <StyledBox error={error} active={active} hasError={hasError}>
      <StyledInput {...props} {...input} hasError={hasError} />
    </StyledBox>
  );
};

export default Input;
