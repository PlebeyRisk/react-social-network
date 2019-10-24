import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../../../theme/globalStyle';

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  width: 100%;
  text-decoration: none;
  background-color: ${props => (props.active ? 'rgba(0, 0, 0, 0.07)' : undefined)};
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  width: 100%;
  text-decoration: none;
  background-color: ${props => (props.active ? 'rgba(0, 0, 0, 0.07)' : undefined)};

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const StyledDialogAvatar = styled.div`
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
  justify-content: space-between;
  overflow: hidden;
`;

const StyledTextOverflow = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledDialogName = styled(StyledTextOverflow)`
  color: ${colors.textPrimary};
  font-weight: 600;
`;

const StyledDialogText = styled(StyledTextOverflow)`
  color: ${colors.textThree};
`;

const StyledNewMessageCountMark = styled.span`
  position: absolute;
  bottom: 6px;
  right: 18px;
  width: 28px;
  height: 18px;
  border-radius: 45%;
  background-color: ${colors.secondary};
  color: ${colors.light};
  font-size: 10px;
  line-height: 18px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
`;

const UserAvatar = props => {
  return (
    <StyledDialogAvatar size={props.size}>
      <img src={props.photo} alt="user avatar" width={props.size} height={props.size} />
    </StyledDialogAvatar>
  );
};

const Dialog = props => {
  const isActiveV = props.friendId === props.userId;

  const lastDialogActivityDate = new Date(Date.parse(props.lastDialogActivityDate));
  const dateFormatter = new Intl.DateTimeFormat('ru', {
    day: 'numeric',
    month: 'short',
  });
  const lastDialogActivityDateText = dateFormatter.format(lastDialogActivityDate);

  const newMessagesCount = props.newMessagesCount > 99 ? '99+' : props.newMessagesCount;

  const StyledDialog = props.isGettingMessagesInProgress ? StyledDiv : StyledNavLink;

  return (
    <StyledDialog
      to={`/direct/` + props.userId}
      active={isActiveV}
      // disabled={props.isGettingMessagesInProgress}
    >
      <UserAvatar photo={props.photo} size={props.size || 50} />
      <StyledTextWrap>
        <StyledDialogName>{props.userName}</StyledDialogName>
        <StyledDialogText>{lastDialogActivityDateText}</StyledDialogText>
      </StyledTextWrap>
      {newMessagesCount !== 0 ? (
        <StyledNewMessageCountMark>{newMessagesCount}</StyledNewMessageCountMark>
      ) : (
        undefined
      )}
    </StyledDialog>
  );
};

export default Dialog;
