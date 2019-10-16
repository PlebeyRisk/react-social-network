import React from 'react'
import styled from 'styled-components'
import defaultImage from '../../../../img/users/ava-default.jpg'
import optionsIcon from '../../../../img/options.svg'
import { colors } from '../../../../theme/globalStyle';

const StyledProfileInfo = styled.header`
  display: flex;
  width: 100%;
`;

const StyledUserAvatar = styled.div`
  margin: 0 80px 0 110px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const StyledInfoSection = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledName = styled.span`
  margin-right: 20px;
  font-size: 28px;
  line-height: 32px;
  font-weight: 300;
`;

const StyledEditProfileBtn = styled.button.attrs({
  type: 'button'
})`
  margin-right: 10px;
  padding: 5px 9px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid ${colors.border};
  font-weight: 600;
`;

const StyledOptionsBtn = styled.button.attrs({
  type: 'button'
})`
  background-color: transparent;
  border: none;
`;

const StyledSubscribeBtn = styled.button.attrs({
  type: 'button'
})`
  padding: 0 24px;
  background-color: ${colors.secondary};
  border: none;
  border-radius: 4px;
  font-weight: 700;
  color: ${colors.light};
`;

const StyledOptionsBtnIcon = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  background: url(${optionsIcon}) center no-repeat;
  background-size: cover;
`;

const StyledNumber= styled.span`
  margin-right: 5px;
  font-weight: 600;
`;
const UserAvatar = (props) => {
  console.log(defaultImage);
  return (
    <StyledUserAvatar>
      <img src={props.image} alt="user avatar" width="150" height="150"/>
    </StyledUserAvatar>
  );
}

const UserInfo = (props) => {
  return (
    <StyledUserInfo>
      <StyledInfoSection>
        <StyledName>{props.name}</StyledName>
        <StyledSubscribeBtn>Подписаться</StyledSubscribeBtn>
        {/* <StyledEditProfileBtn>Редактировать профиль</StyledEditProfileBtn>
        <StyledOptionsBtn>
          <StyledOptionsBtnIcon/>
        </StyledOptionsBtn> */}
      </StyledInfoSection>
      <StyledInfoSection>
        {/* <StyledNumber>20</StyledNumber> подписок */}
      </StyledInfoSection>
      <StyledInfoSection>{props.aboutMe}</StyledInfoSection>
    </StyledUserInfo>
  );
}

const ProfileInfo = (props) => {
  return (
    <StyledProfileInfo>
      <UserAvatar image={props.photos ? (props.photos.large ? props.photos.large : defaultImage) : defaultImage}/>
      <UserInfo name={props.fullName} aboutMe={props.aboutMe}/>
    </StyledProfileInfo>
  );
};

export default ProfileInfo;