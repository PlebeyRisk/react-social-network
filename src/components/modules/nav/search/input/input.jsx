import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../../../theme/globalStyle';
import searchIcon from '../../../../../img/search.svg';
import searchClearIcon from '../../../../../img/search-clear.svg'
import preloaderIcon from '../../../../../img/preloader.svg'

const StyledSearchInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: solid 1px ${colors.border};
  background-color: ${colors.gray};

  height: 100%;

  input {
    padding: 3px 20px 3px 25px;
    width: 100%;
    height: 100%;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: none;
    border-radius: 3px;
  }
`;

const StyledSearchIcon = styled.img.attrs({
  src: searchIcon,
  alt: 'search',
  width: 10,
  height: 10
})`
  position: absolute;
  top: 50%;
  left: 10px;
  width: 10px;
  height: 10px;
  transform: translateY(-50%);
`;

const StyledSearchClearButton = styled.button.attrs({
  type: 'button'
})`
  position: absolute;
  top: 50%;
  right: 5px;
  padding: 0;
  width: 13px;
  height: 13px;
  transform: translateY(-50%);
  border: none;
  background: url(${props => props.image}) center no-repeat;
  background-size: cover;
  opacity: 0.4;
`;

class SearchInput extends React.Component {
  inputElem = React.createRef();

  inputOnChange = (e) => {
    this.props.updateInputValue(e.currentTarget.value);
  }

  inputOnFocus = () => {
    this.props.updateInputFocus(true);
  }

  inputOnBlur = () => {
    this.props.updateInputValue('');
    this.props.updateInputFocus(false);
    this.props.updateCoverHidden(false);
    this.props.updateUsersListHidden(true);
  }

  onMouseDown = (e) => {
    e.preventDefault();
  }

  componentDidUpdate() {
    (this.props.focus) ? this.inputElem.current.focus() : this.inputElem.current.blur();
  }

  render() {
    return (
      <StyledSearchInput>
        <StyledSearchIcon onMouseDown={this.onMouseDown}/>
        <input type="text"
               ref={this.inputElem}
               onChange={this.inputOnChange}
               onFocus={this.inputOnFocus}
               onBlur={this.inputOnBlur}
               value={this.props.value}/>
        <StyledSearchClearButton image={this.props.usersisFetching ? preloaderIcon : searchClearIcon}/>
      </StyledSearchInput>
    );
  }
}

export default SearchInput;