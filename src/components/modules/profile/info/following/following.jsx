import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-awesome-modal';
import { colors } from '../../../../../theme/globalStyle';
import Preloader from '../../../../common/preloader';
import closeIcon from '../../../../../img/close.svg';
import UsersFormContainer from './following_container';
import { getObjectsOfArrayByProperty } from '../../../../../utils/helpers/object-helpers';

const StyledFollowing = styled.div``;

const StyledNumber = styled.span`
  margin-right: 5px;
  font-weight: 600;
`;

const StyledDiv = styled.div`
  cursor: pointer;

  &:active {
    opacity: 0.6;
  }
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  width: 25px;
  height: 25px;
  background: url(${closeIcon}) center no-repeat;
  background-size: cover;
  border-radius: 20px;
`;

const StyledHeader = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${colors.border};
  text-align: center;
  font-weight: 600;
`;

const StyledBody = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 355px;
  overflow-y: auto;
`;

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 15px;
`;

const Following = props => {
  const [visibleModalMode, setVisibleModalMode] = useState(false);

  const clearUnfollowingUsers = () => {
    props.setFollowingUsers([...getObjectsOfArrayByProperty(props.followingUsers, false, 'followed', 'out')]);
  };

  const openModal = () => {
    setVisibleModalMode(true);
  };

  const closeModal = () => {
    clearUnfollowingUsers();
    setVisibleModalMode(false);
  };

  const updateFollow = (userId, status) => {
    status ? props.follow(userId, true) : props.unfollow(userId, true);
  };

  return (
    <StyledFollowing>
      {props.isLoadFollowingUsersInProgress ? (
        <Preloader size="20" />
      ) : (
        <StyledDiv onClick={openModal}>
          <StyledNumber>{props.followingUsers.length}</StyledNumber>подписок
        </StyledDiv>
      )}
      <Modal visible={visibleModalMode} width="400" height="400" effect="fadeInUp" onClickAway={closeModal}>
        <StyledContent>
          <StyledCloseButton onClick={closeModal} />
          <StyledHeader>Ваши подписки</StyledHeader>
          <StyledBody>
            <UsersFormContainer
              users={props.followingUsers}
              updateFollow={updateFollow}
              isFollowingInProgress={props.isFollowingInProgress}
            />
          </StyledBody>
        </StyledContent>
      </Modal>
    </StyledFollowing>
  );
};

export default Following;
