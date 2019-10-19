import React from 'react';
import styled from 'styled-components';
import User from './user';
import defaultImage from '../../../img/users/ava-default.jpg';

const StyledUsersList = styled.div`
  flex: none;
  width: 100%;
`;

const UsersList = props => {
  const users = props.data.map(user => (
    <User
      id={user.id}
      name={user.name}
      text={user.text || ''}
      image={user.image || defaultImage}
      size={props.elemSize}
    />
  ));

  return <StyledUsersList>{users}</StyledUsersList>;
};

export default UsersList;
