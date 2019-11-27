import React from 'react';
import UsersList from '../../../users_form/users_list';

const UsersFormContainer = props => {
  const data = props.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      text: user.status,
      image: user.photos.small,
      followed: user.followed,
    };
  });

  return (
    <UsersList
      data={data}
      elemSize="32"
      updateFollow={props.updateFollow}
      isFollowingInProgress={props.isFollowingInProgress}
      isFollowing
    />
  );
};

export default UsersFormContainer;
