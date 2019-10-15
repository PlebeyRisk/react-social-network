import React from 'react'
import styled from 'styled-components';
import UsersList from '../../users_list/users_list';

const StyledDialog = styled.div`
  width: 30%;
  overflow-y: auto;
`;

const Dialogs = (props) => {
  const data = props.dialogs.map( user => {
    return {
      id: user.id,
      name: user.name,
      text: user.text,
      image: user.image
    }
  });

  return (
    <StyledDialog>
      <UsersList data = {data}/>
    </StyledDialog>
  )
}

export default Dialogs;