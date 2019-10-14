import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../../../theme/globalStyle';

const StyledDialog = styled(NavLink).attrs((props) => ({
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
  flex: 0 0 50px;
  margin-right: 10px;
  width: 50px;
  height: 50px;
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
`;

const StyledUserText = styled(StyledTextOverflow)`
  color: ${colors.textThree};
`;

const UserAvatar = (props) => {
  return (
    <StyledUserAvatar>
      <img src={props.image} alt="user avatar" width="50" height="50"/>
    </StyledUserAvatar>
  );
}

const Dialog = (props) => {
  return (
    <StyledDialog link={props.name}>
      <UserAvatar image={props.image}/>
      <StyledTextWrap>
        <StyledUserName>{props.name}</StyledUserName>
        <StyledUserText>{props.text}</StyledUserText>
      </StyledTextWrap>
    </StyledDialog>
  );
}

export default Dialog;