import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/globalStyle';

const StyledInput = styled.input`
  padding: 9px;
  border-radius: 4px;
  border: 1px solid ${colors.border};
  background-color: ${colors.light};
`;

const Input = props => {
  return <StyledInput {...props} {...props.input} />;
};

export default Input;
