import React from 'react';
import UsersForm from '../../../users_form/users_form';
import styled from 'styled-components';
import { colors } from '../../../../../theme/globalStyle';

const StyledSearchUsersForm = styled.div`
  position: absolute;
  left: 50%;
  bottom: -15px;
  width: 243px;
  height: 364px;
  transform: translate(-50%, 100%);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  background-color: ${colors.light};
  border-radius: 3px;
  border: 1px solid ${colors.border};
`;

const SearchUsersForm = props => {
  return (
    <StyledSearchUsersForm hidden={props.hidden} onMouseDown={e => e.preventDefault()}>
      <UsersForm {...props} />
    </StyledSearchUsersForm>
  );
};

export default SearchUsersForm;
