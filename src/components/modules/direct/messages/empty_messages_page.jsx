import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../theme/globalStyle';
import dialogsIcon from '../../../../img/dialogs.svg';

const StyledEmptyMessagesPage = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${colors.border};
  font-size: 16px;
  color: ${colors.textThree};
`;

const StyledDialogsIcon = styled.div`
  width: 100px;
  height: 100px;
  background: url(${dialogsIcon}) center no-repeat;
  background-size: cover;
  opacity: 0.5;
`;

const EmptyMessagesPage = () => {
  return (
    <StyledEmptyMessagesPage>
      <StyledDialogsIcon />
      Пожалуйста, выберите беседу
    </StyledEmptyMessagesPage>
  );
};

export default memo(EmptyMessagesPage);
