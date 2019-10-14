import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../../theme/globalStyle';
import User from './dialog';

const StyledUsers = styled.div`
  flex: none;
  width: 30%;
  border-right: 1px solid ${colors.border};
  overflow-y: auto;
`;

const Users = (props) => {
  const users = props.usersData.map( user =>
    <User id={user.id} name={user.name} text={user.text} image={user.image}/>
  );

  return (
    <StyledUsers>
      { users }
    </StyledUsers>
  );
}

export default Users;