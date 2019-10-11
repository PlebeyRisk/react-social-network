import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../../theme/globalStyle';

const StyledUsers = styled.div`
  width: 300px;
  border-right: 1px solid ${colors.border};
`;

const StyledUser = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  width: 100%;
  text-decoration: none;

  &:hover{
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const StyledUserAvatar = styled.div`
  flex: 0 0 50px;
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledTextWrap = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledTextOverflow = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledUserName = styled(StyledTextOverflow)`
  color: ${colors.textPrimary};
`;

const StyledUserText = styled(StyledTextOverflow)`
  color: ${colors.textThree};
`;

const UserAvatar = (props) => {
  return (
    <StyledUserAvatar>
      <img src={props.image} alt="user avatar" width="50" height="50"/>
    </StyledUserAvatar>
  );
}

const User = (props) => {
  return (
    <StyledUser>
      <UserAvatar image={props.image}/>
      <StyledTextWrap>
        <StyledUserName>{props.name}</StyledUserName>
        <StyledUserText>{props.text}</StyledUserText>
      </StyledTextWrap>
    </StyledUser>
  );
}

const Users = () => {
  return (
    <StyledUsers>
      <User name="aleksey_tyapkin" text="Привет. Давно не виделись!" image="https://scontent-arn2-1.cdninstagram.com/vp/40e1d7be5cf9c1f4b12f8d265d3922b4/5E237A92/t51.2885-19/s150x150/59940972_303625300547579_7420448145856790528_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com"/>
      <User name="aleksey_tyapkin" text="Привет. Давно не виделись!" image="https://scontent-arn2-1.cdninstagram.com/vp/40e1d7be5cf9c1f4b12f8d265d3922b4/5E237A92/t51.2885-19/s150x150/59940972_303625300547579_7420448145856790528_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com"/>
      <User name="aleksey_tyapkin" text="Привет. Давно не виделись!" image="https://scontent-arn2-1.cdninstagram.com/vp/40e1d7be5cf9c1f4b12f8d265d3922b4/5E237A92/t51.2885-19/s150x150/59940972_303625300547579_7420448145856790528_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com"/>
      <User name="aleksey_tyapkin" text="Привет. Давно не виделись!" image="https://scontent-arn2-1.cdninstagram.com/vp/40e1d7be5cf9c1f4b12f8d265d3922b4/5E237A92/t51.2885-19/s150x150/59940972_303625300547579_7420448145856790528_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com"/>
    </StyledUsers>
  );
}

export default Users;