import React from 'react';
import styled from 'styled-components';
import preloaderIcon from '../../img/preloader.svg';

const StyledPreloader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;
`;

const Preloader = props => {
  return (
    <StyledPreloader size={props.size || 50}>
      <img
        src={preloaderIcon}
        alt="loading..."
        width={`${props.size || 50}px`}
        height={`${props.size || 50}px`}
      />
    </StyledPreloader>
  );
};

export default Preloader;
