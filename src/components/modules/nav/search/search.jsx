import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../../theme/globalStyle';
import SearchCoverContainer from './search_coverContainer';
import SearchInputContainer from './search_inputContainer';

const StyledSearch = styled.div`
  position: relative;
  height: 28px;
  width: 215px;
  min-width: 125px;
  background-color: ${ colors.light };
`;

const Search = () => {
  const inputRef = React.createRef();

  return (
    <StyledSearch>
      <SearchInputContainer inputRef={inputRef}/>
      <SearchCoverContainer inputElem={inputRef}/>
    </StyledSearch>
  );
}

export default Search;