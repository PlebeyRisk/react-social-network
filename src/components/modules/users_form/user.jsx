import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../../theme/globalStyle';

const StyledUser = styled(NavLink).attrs(props => ({
  to: props.link,
}))`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  width: 100%;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const StyledUserAvatar = styled.div`
  flex: 0 0 ${props => props.size}px;
  margin-right: 10px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledTextWrap = styled.div`
  ${props => (props.isFollowing ? 'padding-right: 140px' : undefined)}
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledTextOverflow = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledUserName = styled(StyledTextOverflow)`
  color: ${colors.textPrimary};
  font-weight: 600;
`;

const StyledUserText = styled(StyledTextOverflow)`
  color: ${colors.textThree};
`;

const StyledSubscribeBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  padding: 5px;
  background-color: ${props => (!props.isUnsub ? colors.secondary : colors.light)};
  border: ${props => (!props.isUnsub ? 'none' : '1px solid' + colors.border)};
  border-radius: 4px;
  font-weight: 700;
  color: ${props => (!props.isUnsub ? colors.light : colors.textPrimary)};
`;

const UserAvatar = props => {
  return (
    <StyledUserAvatar size={props.size}>
      <img src={props.image} alt="user avatar" width={props.size} height={props.size} />
    </StyledUserAvatar>
  );
};

const User = props => {
  const follow = e => {
    e.preventDefault();
    props.follow(props.id);
  };

  const unfollow = e => {
    e.preventDefault();
    props.unfollow(props.id);
  };

  return (
    <StyledUser link={`/profile/` + props.id}>
      <UserAvatar image={props.image} size={props.size || 50} />
      <StyledTextWrap isFollowing={props.isFollowing}>
        <StyledUserName>{props.name}</StyledUserName>
        <StyledUserText>{props.text}</StyledUserText>
      </StyledTextWrap>
      {props.isFollowing ? (
        props.followed ? (
          <StyledSubscribeBtn onClick={unfollow} isUnsub>
            Отписаться
          </StyledSubscribeBtn>
        ) : (
          <StyledSubscribeBtn onClick={follow}>Подписаться</StyledSubscribeBtn>
        )
      ) : (
        undefined
      )}
    </StyledUser>
  );
};

export default User;
