import React from 'react';
import styled from 'styled-components';
import defaultImage from '../../../../img/users/ava-default.jpg';
import optionsIcon from '../../../../img/options.svg';
import { colors } from '../../../../theme/globalStyle';
import UserStatus from './user_status/user_status';
import Following from './following/following';
import { NavLink } from 'react-router-dom';

const StyledProfileInfo = styled.header`
  display: flex;
  width: 100%;
`;

const StyledUserAvatar = styled.div`
  flex: none;
  margin: 0 80px 0 110px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledUserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const StyledInfoSection = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledName = styled.span`
  margin-right: 20px;
  font-size: 28px;
  line-height: 32px;
  font-weight: 300;
`;

const StyledEditProfileBtn = styled.button.attrs({
  type: 'button',
})`
  margin-right: 10px;
  padding: 5px 9px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid ${colors.border};
  font-weight: 600;
`;

const StyledOptionsBtn = styled.button.attrs({
  type: 'button',
})`
  background-color: transparent;
  border: none;
`;

const StyledSubscribeBtn = styled.button.attrs({
  type: 'button',
})`
  margin-right: 20px;
  padding: 0 24px;
  background-color: ${colors.secondary};
  border: none;
  border-radius: 4px;
  font-weight: 700;
  color: ${colors.light};
`;

const StyledOptionsBtnIcon = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  background: url(${optionsIcon}) center no-repeat;
  background-size: cover;
`;

const StyledSendMessageBtnIcon = styled.span`
  display: block;
  width: 24px;
  height: 24px;
`;

const StyledSendMessageBtn = styled(NavLink)`
  padding: 0 10px;
  background-color: transparent;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
`;

const UserAvatar = props => {
  return (
    <StyledUserAvatar>
      <img src={props.image} alt="user avatar" width="150" height="150" />
    </StyledUserAvatar>
  );
};

const UserInfo = props => {
  const { fullName, aboutMe, userId } = props.userInfo;
  const isAuthUser = props.authUserId === userId;
  return (
    <StyledUserInfo>
      <StyledInfoSection>
        <StyledName>{fullName}</StyledName>
        {!isAuthUser ? (
          !props.isFollow ? (
            <StyledSubscribeBtn
              onClick={() => props.follow(userId)}
              disabled={props.isFollowingInProgress}
            >
              Подписаться
            </StyledSubscribeBtn>
          ) : (
            <StyledSubscribeBtn
              onClick={() => props.unfollow(userId)}
              disabled={props.isFollowingInProgress}
            >
              Отписаться
            </StyledSubscribeBtn>
          )
        ) : (
          <>
            <StyledEditProfileBtn>Редактировать профиль</StyledEditProfileBtn>
            <StyledOptionsBtn onClick={props.logout}>
              <StyledOptionsBtnIcon />
            </StyledOptionsBtn>
          </>
        )}
        {!isAuthUser ? (
          <StyledSendMessageBtn to={'/direct/' + userId}>Написать сообщение</StyledSendMessageBtn>
        ) : (
          undefined
        )}
      </StyledInfoSection>
      <StyledInfoSection>
        <UserStatus
          textStatus={props.textStatus}
          isAuthUser={props.authUserId === props.userInfo.userId}
          setTextStatus={props.setTextStatus}
          isUpdateStatusInProgress={props.isUpdateStatusInProgress}
        />
      </StyledInfoSection>
      <StyledInfoSection>
        {isAuthUser ? (
          <Following
            followingUsers={props.followingUsers}
            isLoadFollowingUsersInProgress={props.isLoadFollowingUsersInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
            isFollow={props.isFollow}
            isFollowingInProgress={props.isFollowingInProgress}
            updateFollowingUsers={props.updateFollowingUsers}
          />
        ) : (
          undefined
        )}
      </StyledInfoSection>
      <StyledInfoSection>{aboutMe}</StyledInfoSection>
    </StyledUserInfo>
  );
};

const ProfileInfo = props => {
  const { photos } = props.userInfo;
  return (
    <StyledProfileInfo>
      <UserAvatar image={photos ? (photos.large ? photos.large : defaultImage) : defaultImage} />
      <UserInfo {...props} />
    </StyledProfileInfo>
  );
};

export default ProfileInfo;
