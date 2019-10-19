import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/globalStyle';

const TextInput = styled.input.attrs({
  type: 'text',
})`
  padding: 9px;
  border-radius: 4px;
  border: 1px solid ${colors.border};
  background-color: ${colors.light};
`;

export default TextInput;
