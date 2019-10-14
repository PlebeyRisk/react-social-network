import React from 'react'
import styled from 'styled-components';
import Container from '../../common/container';
import { colors } from '../../../theme/globalStyle';
import Logo from './logo';
import Search from './search';
import NavButtons from './nav_buttons';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${ colors.light };
  border-bottom: 1px solid ${ colors.border };
`;

const NavContainer = styled(Container)`
  max-width: 1010px;
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