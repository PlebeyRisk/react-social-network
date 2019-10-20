import styled from 'styled-components';
import { colors } from '../../theme/globalStyle';
import { Field } from 'redux-form';

const Input = styled.input`
  padding: 9px;
  border-radius: 4px;
  border: 1px solid ${colors.border};
  background-color: ${colors.light};
`;

export default Input;
