import React from 'react';
import styled from 'styled-components';
import Container from '../../common/container';
import { colors } from '../../../theme/globalStyle';
import logoTextIcon from '../../../img/logo-text.svg';
import LoginForm from './login_form/login_form';

const StyledLogin = styled.main``;

const MainContainer = styled(Container)`
  padding: 20px 0;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 40px 0;
  width: 350px;
  border: 1px solid ${colors.border};
  background-color: ${colors.light};
`;

const StyledLogoText = styled.div`
  margin-bottom: 12px;
  width: 175px;
`;

const Login = props => {
  return (
    <StyledLogin>
      <MainContainer>
        <StyledBox>
          {/* <StyledLogoText>
            <img src={logoTextIcon} alt="logo text" width="175" />
          </StyledLogoText> */}
          <LoginForm {...props} />
        </StyledBox>
      </MainContainer>
    </StyledLogin>
  );
};

export default Login;
