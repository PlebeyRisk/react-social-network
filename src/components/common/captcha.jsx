import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/globalStyle';
import Preloader from './preloader';

const StyledCaptcha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  margin: 10px 0 20px;
  display: flex;
  background: ${colors.gray} url(${props => props.captcha}) center no-repeat;
  background-size: cover;
  cursor: pointer;
  pointer-events: ${props => (!props.isFetchingCaptchaInProgress ? 'auto' : 'none')};
  user-select: none;
`;

const StyledText = styled.span`
  color: ${colors.textThree};
  font-size: 20px;
`;

const Captcha = props => {
  return (
    <StyledCaptcha
      captcha={props.captcha}
      onClick={props.getCaptcha}
      isFetchingCaptchaInProgress={props.isFetchingCaptchaInProgress}
    >
      {!props.captcha && !props.isFetchingCaptchaInProgress ? (
        <StyledText>click me</StyledText>
      ) : (
        undefined
      )}
      {props.isFetchingCaptchaInProgress ? <Preloader /> : undefined}
    </StyledCaptcha>
  );
};

export default Captcha;
