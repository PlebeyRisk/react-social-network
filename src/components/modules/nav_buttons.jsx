import React from 'react'
import styled from 'styled-components';
import exploreIcon from '../../img/explore.svg';
import heartIcon from '../../img/heart.svg';
import profileIcon from '../../img/profile.svg';

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

  &:active{
    opacity: 0.6;
  }
`;

const StyledSpan= styled.span`
  display: block;
  width: 24px;
  height: 24px;
  background: url(${props => props.src}) center no-repeat;
  background-size: cover;
`;

const Button = (props) => {
  return (
    <StyledButton>
      <a href={props.href}>
        <StyledSpan src={props.src}/>
      </a>
    </StyledButton>
  );
}

const NavButtons = () => {
  return (
    <StyledNavButtons>
      <StyledButtons>
        <Button href="#" src={exploreIcon}/>
        <Button href="#" src={heartIcon}/>
        <Button href="#" src={profileIcon}/>
      </StyledButtons>
    </StyledNavButtons>
  );
}

export default NavButtons;