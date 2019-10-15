import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../../../theme/globalStyle';
import UsersList from '../../../users_list/users_list';
import * as axios from 'axios';

const StyledSearchUsersList = styled.div`
  position: absolute;
  left: 50%;
  bottom: -15px;
  width: 243px;
  height: 364px;
  transform: translate(-50%, 100%);
  background-color: ${colors.light};
  border-radius: 3px;
  border: 1px solid ${colors.border};
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
  overflow-y: auto;
`;

class SearchUsersList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  getUsers() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalCount(response.data.totalCount);
    });
  }

  onMouseDown = (e) => {
    e.preventDefault();
  }

  onScroll = (e) => {
    const numberLastPage = Math.ceil(this.props.totalCount / this.props.pageSize);
    if (this.props.currentPage === numberLastPage) return;

    const target = e.nativeEvent.target;
    const endScrollY = target.scrollHeight - target.clientHeight;
    const currentScrollY = Math.ceil(target.scrollTop);

    if (endScrollY === currentScrollY) {
      const newCurrentPage = this.props.currentPage + 1;
      this.props.setCurrentPage(newCurrentPage);
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  componentDidUpdate() {
    if ( this.props.currentPage * this.props.pageSize - this.props.users.length >= this.props.pageSize) {
      this.getUsers();
    }
  }

  render() {
    const data = this.props.users.map( user => {
      return {
        id: user.id,
        name: user.name,
        text: user.status,
        image: user.photos.small
      }
    });

    return (
      <StyledSearchUsersList onScroll={this.onScroll} onMouseDown={this.onMouseDown} hidden={this.props.hidden}>
        <UsersList data={data} elemSize="32"/>
      </StyledSearchUsersList>
    );
  }

}

export default SearchUsersList;