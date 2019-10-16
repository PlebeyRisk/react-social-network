import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../../../theme/globalStyle';
import UsersList from '../../../users_list/users_list';

const StyledSearchUsersList = styled.div`
  position: absolute;
  left: 50%;
  bottom: -15px;
  width: 243px;
  height: 364px;
  transform: translate(-50%, 100%);
  background-color: ${colors.light};
  border-radius: 3px;
  border: 1px solid ${colors.border};
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
  overflow-y: auto;
`;

const SearchUserList = (props) => {
  const data = props.users.map( user => {
    return {
      id: user.id,
      name: user.name,
      text: user.status,
      image: user.photos.small
    }
  });

  const onMouseDown = (e) => {
    e.preventDefault();
  }

  const onScroll = (e) => {
    props.checkOnScroll(e.nativeEvent.target);
  }

  return (
    <StyledSearchUsersList onScroll={onScroll}
                           onMouseDown={onMouseDown}
                           hidden={props.hidden}>
      <UsersList data={data} elemSize="32"/>
    </StyledSearchUsersList>
  );
}

export default SearchUserList;