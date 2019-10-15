import React from 'react'
import styled from 'styled-components';
import SearchCoverContainer from './cover/cover_container';
import SearchInputContainer from './input/input_container';
import { colors } from '../../../../theme/globalStyle';
import SearchUsersListContainer from './users_list/users_list_container';

const StyledSearch = styled.div`
  position: relative;
  height: 28px;
  width: 215px;
  min-width: 125px;
  background-color: ${ colors.light };
`;

const Search = () => {
  return (
    <StyledSearch>
      <SearchInputContainer/>
      <SearchCoverContainer/>
      <SearchUsersListContainer/>
    </StyledSearch>
  );
}

export default Search;