import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../../theme/globalStyle';
import Dialog from './dialog';

const StyledDialogs = styled.div`
  flex: none;
  width: 30%;
  border-right: 1px solid ${colors.border};
  overflow-y: auto;
`;

const Dialogs = (props) => {
  const dialogs = props.dialogs.map( user =>
    <Dialog id={user.id} name={user.name} text={user.text} image={user.image}/>
  );

  return (
    <StyledDialogs>
      { dialogs }
    </StyledDialogs>
  );
}

export default Dialogs;