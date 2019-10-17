import React from 'react'
import styled from 'styled-components';
import Container from '../../common/container';
import { colors } from '../../../theme/globalStyle';
import logoTextIcon from '../../../img/logo-text.svg'

const StyledAuth = styled.main`
`;

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
`

const StyledLogoText = styled.div`
  margin-bottom: 12px;
  width: 175px;

`
const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
`
const StyledInput = styled.input`
  margin-bottom: 6px;
  padding: 9px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${colors.border};
  background-color: ${colors.gray};
`

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 6px;
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: ${colors.secondary};
  font-weight: 600;
  color: ${colors.light};
`


const Auth = (props) => {
  return (
    <StyledAuth>
      <MainContainer>
        <StyledBox>
          <StyledLogoText>
            <img src={logoTextIcon} alt="logo text" width="175"/>
          </StyledLogoText>
          <StyledForm>
            <StyledInput type="email" placeholder="Email"/>
            <StyledInput type="password" placeholder="Пароль"/>
            <StyledButton>Войти</StyledButton>
          </StyledForm>
        </StyledBox>
      </MainContainer>
    </StyledAuth>
  );
}

export default Auth;