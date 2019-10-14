import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../../theme/globalStyle';

const StyledMessage = styled.div`
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 30px;
`;

const StyledSentMessage = styled(StyledMessage)`
  align-self: flex-end;
  border: 1px solid ${colors.border};
  background-color: ${colors.light};
`;

const StyledReceivedMessage = styled(StyledMessage)`
  align-self: flex-start;
  background-color: ${colors.stillGray};
`;

const Message = (props) => {
  if (props.type === 'sent') {
    return (
      <StyledSentMessage>
        {props.text}
      </StyledSentMessage>
    );
  }

  return (
    <StyledReceivedMessage>
      {props.text}
    </StyledReceivedMessage>
  );
}

export default Message;