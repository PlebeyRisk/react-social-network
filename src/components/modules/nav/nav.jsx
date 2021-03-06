import React from 'react';
import styled from 'styled-components';
import Container from '../../common/container';
import { colors } from '../../../theme/globalStyle';
import Logo from './logo';
import Search from './search/search';
import NavButtonsContainer from './buttons/nav_buttons_container';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.light};
  border-bottom: 1px solid ${colors.border};
  z-index: 2;
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
        <Logo />
        <Search />
        <NavButtonsContainer />
      </NavContainer>
    </StyledNav>
  );
};

export default Nav;
