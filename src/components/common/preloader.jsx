import React from 'react';
import styled from 'styled-components';
import preloaderIcon from '../../img/preloader.svg';

const StyledPreloader = styled.div`
  width: ${props => props.size || 50}px;
  height: ${props => props.size || 50}px;
  margin: 0 auto;
`

const Preloader = (props) => {
  return (
    <StyledPreloader>
      <img src={preloaderIcon} alt="loading..." width={`${props.size || 50}px`} height={`${props.size || 50}px`}/>
    </StyledPreloader>
  );
}

export default Preloader;