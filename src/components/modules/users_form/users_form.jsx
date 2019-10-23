import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme/globalStyle';
import UsersList from './users_list';

const StyledSearchUsersList = styled.div`
  background-color: ${colors.light};
  height: 100%;
  overflow-y: auto;
`;

const UsersForm = props => {
  if (!props.users) return <></>;

  const data = props.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      text: user.status,
      image: user.photos.small,
      followed: user.followed,
    };
  });

  const onScroll = e => {
    const target = e.nativeEvent.target;
    const { isFetching, totalCount, pageSize, currentPage } = props;

    if (isFetching) return;

    const numberLastPage = Math.ceil(totalCount / pageSize);
    if (currentPage === numberLastPage) return;

    const endScrollY = target.scrollHeight - target.clientHeight;
    const currentScrollY = Math.ceil(target.scrollTop);

    if (endScrollY === currentScrollY) {
      const newCurrentPage = currentPage + 1;
      props.setCurrentPage(newCurrentPage);
    }
  };

  return (
    <StyledSearchUsersList onScroll={onScroll}>
      <UsersList
        data={data}
        elemSize="32"
        isFollowing={props.isFollowing}
        follow={props.follow}
        unfollow={props.unfollow}
        isFollow={props.isFollow}
        isFollowingInProgress={props.isFollowingInProgress}
      />
    </StyledSearchUsersList>
  );
};

export default memo(UsersForm);
