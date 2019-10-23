import React from 'react';
import styled from 'styled-components';
import User from './user';
import defaultImage from '../../../img/users/ava-default.jpg';
import FollowingUser from '../profile/info/following/following_user';

const StyledUsersList = styled.div`
  flex: none;
  width: 100%;
`;

const UsersList = props => {
  const users = props.data.map((user, index) =>
    props.isFollowing ? (
      <FollowingUser
        id={user.id}
        name={user.name}
        text={user.text || ''}
        image={user.image || defaultImage}
        size={props.elemSize}
        followed={user.followed}
        follow={props.follow}
        unfollow={props.unfollow}
        isFollow={props.isFollow}
        isFollowingInProgress={props.isFollowingInProgress}
        key={index}
      />
    ) : (
      <User
        id={user.id}
        name={user.name}
        text={user.text || ''}
        image={user.image || defaultImage}
        size={props.elemSize}
        key={index}
      />
    ),
  );

  return <StyledUsersList>{users}</StyledUsersList>;
};

export default UsersList;
