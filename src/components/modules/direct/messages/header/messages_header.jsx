import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../theme/globalStyle';
import defaultAvatar from '../../../../../img/users/ava-default.jpg';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid ${colors.border};
`;

const StyledDialogName = styled.span`
  margin-right: 15px;
  font-size: 18px;
  font-weight: 600;
`;

const StyledLastActivity = styled.span`
  color: ${colors.textThree};
`;

const StyledUserAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledGroup = styled.div`
  display: flex;
  align-items: center;
`;

const MessagesHeader = props => {
  const { id, userName, photos, lastUserActivityDate } = props.dialogInfo;

  const lastDialogActivityDate = new Date(Date.parse(lastUserActivityDate));
  const dateFormatter = new Intl.DateTimeFormat('ru', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  const lastUserActivityDateText = dateFormatter.format(lastDialogActivityDate);

  return (
    <StyledHeader>
      <StyledGroup>
        <NavLink to={'/profile/' + id}>
          <StyledDialogName>{userName}</StyledDialogName>
        </NavLink>
        <StyledLastActivity>{'быв в сети ' + lastUserActivityDateText}</StyledLastActivity>
      </StyledGroup>

      <StyledGroup>
        <NavLink to={'/profile/' + id}>
          <StyledUserAvatar>
            <img src={photos.small || defaultAvatar} alt="user avatar" width="30" height="30" />
          </StyledUserAvatar>
        </NavLink>
      </StyledGroup>
    </StyledHeader>
  );
};

export default MessagesHeader;
