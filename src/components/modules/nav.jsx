import React from 'react'
import styled from 'styled-components';
import Container from '../common/container';
import { colors } from '../../theme/globalStyle';
import Logo from '../common/logo';
import Search from '../common/search';
import NavButtons from './nav_buttons';

const StyledNav = styled.nav`
  background-color: ${ colors.light };
`;

const NavContainer = styled(Container)`
  width: 1010px;
  display: flex;
  align-items: center;
  padding: 26px 20px;
  height: 77px;
`;

const Nav = () => {
  return (
    <StyledNav>
      <NavContainer>
        <Logo/>
        <Search/>
        <NavButtons/>
      </NavContainer>
    </StyledNav>
  );
}

export default Nav;