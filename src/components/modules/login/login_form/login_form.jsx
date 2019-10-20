import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { colors } from '../../../../theme/globalStyle';
import Input from '../../../common/input';
import Checkbox from '../../../common/checkbox';
import Captcha from '../../../common/captcha';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 6px;
  width: 100%;
  background-color: ${colors.gray};
`;

const StyledRememberMeGroup = styled.div`
  align-self: flex-start;
  padding: 4px 0 10px;
`;

const StyledButton = styled.button`
  margin-top: 15px;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: ${colors.secondary};
  font-weight: 600;
  color: ${colors.light};
`;

const LoginForm = props => {
  return (
    <StyledForm onSubmit={props.handleSubmit} autocomplete>
      <Field name="email" component={StyledInput} type="email" placeholder="Email" required />
      <Field
        name="password"
        component={StyledInput}
        type="password"
        placeholder="Пароль"
        required
      />
      <StyledRememberMeGroup>
        <Field
          name="rememberMe"
          component={Checkbox}
          type="checkbox"
          placeholder="Запомнить меня"
        />
      </StyledRememberMeGroup>
      <Captcha
        captcha={props.captcha}
        getCaptcha={props.getCaptcha}
        isFetchingCaptchaInProgress={props.isFetchingCaptchaInProgress}
      />
      <Field name="captcha" component={StyledInput} type="text" placeholder="Каптча" required />
      <StyledButton type="submit">Войти</StyledButton>
    </StyledForm>
  );
};
export default reduxForm({ form: 'login' })(LoginForm);
