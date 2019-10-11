import React from 'react'
import styled from 'styled-components';
import logoIcon from '../../img/logo.svg';
import logoTextIcon from '../../img/logo-text.svg';
import { colors } from '../../theme/globalStyle';

const StyledLogo = styled.a.attrs((props) => ({
  href: props.href
}))`
  flex-grow: 1;
  display: flex;
  align-items: center;
  min-width: 40px;

  &:active {
    opacity: 0.6;
  }
`;

const StyledSeparate = styled.div`
  margin: 0 16px;
  width: 2px;
  height: 28px;
  background-color: ${ colors.primary };
`;

const StyledLogoImg = styled.img.attrs({
  src: logoIcon,
  width: 24,
  height: 24,
  alt: 'logo'
})`
  width: 24px;
  height: 24px;
`;

const StyledLogoText = styled.img.attrs({
  src: logoTextIcon,
  alt: 'logo text'
})`
  margin-top: 7px;
  max-width: 100%;
  max-height: 29px;
`;

const Logo = () => {
  return (
    <StyledLogo href="#">
      <StyledLogoImg/>
      <StyledSeparate/>
      <StyledLogoText/>
    </StyledLogo>
  );
}

export default Logo;