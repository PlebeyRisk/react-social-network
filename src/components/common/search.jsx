import React from 'react'
import styled from 'styled-components';
import { colors } from '../../theme/globalStyle';
import searchIcon from '../../img/search_icon.svg';

const StyledSearch = styled.div`
  position: relative;
  height: 28px;
  width: 215px;
  min-width: 125px;
  background-color: ${ colors.light };

  input {
    border: none
  }
`;

const StyledSearchButton = styled.div.attrs({
  role: "button",
  tabIndex: 0
})`
  position: absolute;
  top: 0;
  left: 0;
  padding: 7px;
  width: 100%;
  height: 100%;
  cursor: text;
  border-radius: 3px;
  border: solid 1px ${colors.border};
  background-color: ${colors.gray};
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  line-height: 0;
  color: ${colors.textSecondary};
  z-index: 2;
`;

const StyledSearchIcon = styled.img.attrs({
  src: searchIcon,
  alt: 'search',
  width: 10,
  height: 10
})`
  width: 10px;
  height: 10px;
  margin-right: 6px;
`;

const Search = () => {
  return (
    <StyledSearch>
      <input type="text"/>
      <StyledSearchButton>
        <StyledSearchIcon/>
        Поиск
      </StyledSearchButton>
    </StyledSearch>
  );
}

export default Search;