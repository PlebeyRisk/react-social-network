import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { colors } from '../../../../theme/globalStyle';
import Input from '../../../common/input';
import Checkbox from '../../../common/checkbox';
import Captcha from '../../../common/captcha';
import { required, maxLength } from '../../../../utils/validators/validators';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
`;

const StyledInput = styled(Input)`
  background-color: ${colors.gray};
  width: 100%;
`;

const StyledFieldGroup = styled.div`
  margin-bottom: 6px;
  width: 100%;
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

const maxLength6 = maxLength(6);
const maxLength30 = maxLength(30);

const LoginForm = props => {
  return (
    <StyledForm onSubmit={props.handleSubmit} autoComplete noValidate>
      <StyledFieldGroup>
        <Field
          name="email"
          component={StyledInput}
          type="email"
          placeholder="Email"
          validate={[required, maxLength30]}
        />
      </StyledFieldGroup>
      <StyledFieldGroup>
        <Field
          name="password"
          component={StyledInput}
          type="password"
          placeholder="Пароль"
          validate={[required, maxLength30]}
        />
      </StyledFieldGroup>
      <StyledRememberMeGroup>
        <Field
          name="rememberMe"
          component={Checkbox}
          type="checkbox"
          placeholder="Запомнить меня"
        />
      </StyledRememberMeGroup>

      {props.captcha ? (
        <>
          <Captcha
            captcha={props.captcha}
            getCaptcha={props.getCaptcha}
            isFetchingCaptchaInProgress={props.isFetchingCaptchaInProgress}
          />
          <Field
            name="captcha"
            component={StyledInput}
            type="text"
            placeholder="Каптча"
            validate={props.captcha ? [required, maxLength6] : [maxLength6]}
          />
        </>
      ) : (
        undefined
      )}
      <StyledButton type="submit">Войти</StyledButton>
    </StyledForm>
  );
};
export default reduxForm({ form: 'login' })(LoginForm);
