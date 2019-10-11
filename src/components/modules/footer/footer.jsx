import React from 'react'
import styled from 'styled-components';
import Container from '../../common/container';

const StyledFooter = styled.footer`
  height: 50px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        Footer
      </Container>
    </StyledFooter>
  );
}

export default Footer;