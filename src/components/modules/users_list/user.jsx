import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../../theme/globalStyle';

const StyledUser = styled(NavLink).attrs((props) => ({
  to: props.link
}))`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  width: 100%;
  text-decoration: none;

  &:hover{
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

const UserAvatar = (props) => {
  return (
    <StyledUserAvatar size={props.size}>
      <img src={props.image} alt="user avatar" width={props.size} height={props.size}/>
    </StyledUserAvatar>
  );
}

const User = (props) => {
  return (
    <StyledUser link={`/profile/` + props.id}>
      <UserAvatar image={props.image} size={props.size || 50}/>
      <StyledTextWrap>
        <StyledUserName>{props.name}</StyledUserName>
        <StyledUserText>{props.text}</StyledUserText>
      </StyledTextWrap>
    </StyledUser>
  );
}

export default User;