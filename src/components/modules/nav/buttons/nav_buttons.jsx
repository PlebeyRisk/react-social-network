import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import exploreIcon from '../../../../img/explore.svg';
import heartIcon from '../../../../img/heart.svg';
import profileIcon from '../../../../img/profile.svg';
import directIcon from '../../../../img/direct.svg';
import { colors } from '../../../../theme/globalStyle';

const StyledNavButtons = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledButtons = styled.div`
  display: flex;
  padding-left: 24px;
`;

const StyledButton = styled.div`
  &:not(:first-child) {
    margin-left: 30px;
  }

  &:active {
    opacity: 0.6;
  }
`;

const StyledSpan = styled.span`
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  background: url(${props => props.src}) center no-repeat;
  background-size: cover;

  &::before {
    content: '${props => (!props.newMessagesCount ? '' : props.newMessagesCount)}';
    display: ${props => (!props.newMessagesCount ? 'none' : 'block')};
    position: absolute;
    top: -5px;
    right: -5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red;
    color: ${colors.light};
    font-size: 6px;
    line-height: 12px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const Button = props => {
  return (
    <StyledButton>
      <Link to={props.to}>
        <StyledSpan src={props.src} newMessagesCount={props.newMessagesCount} />
      </Link>
    </StyledButton>
  );
};

const NavButtons = props => {
  let newMessagesCount = props.newMessagesTotalCount;
  if (newMessagesCount > 99) {
    newMessagesCount = '99+';
  }
  return (
    <StyledNavButtons>
      <StyledButtons>
        {/* <Button to="/explore/" src={exploreIcon}/> */}
        {/* <Button to="#" src={heartIcon}/> */}
        <Button to="/direct/" src={directIcon} newMessagesCount={newMessagesCount} />
        <Button to="/profile/" src={profileIcon} />
      </StyledButtons>
    </StyledNavButtons>
  );
};

export default NavButtons;
