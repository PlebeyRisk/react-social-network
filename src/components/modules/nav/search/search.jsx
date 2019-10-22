import React from 'react';
import styled from 'styled-components';
import SearchCoverContainer from './cover/cover_container';
import SearchInputContainer from './input/input_container';
import { colors } from '../../../../theme/globalStyle';
import SearchUsersFormContainer from './users_form/search_users_form_container';

const StyledSearch = styled.div`
  position: relative;
  height: 28px;
  width: 215px;
  min-width: 125px;
  background-color: ${colors.light};
`;

const Search = () => {
  return (
    <StyledSearch>
      <SearchInputContainer />
      <SearchCoverContainer />
      <SearchUsersFormContainer />
    </StyledSearch>
  );
};

export default Search;
