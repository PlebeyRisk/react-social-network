import React from 'react';
import styled from 'styled-components';
import Container from '../../common/container';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { colors } from '../../../theme/globalStyle';
import { NavLink } from 'react-router-dom';
import searchImg from '../../../img/main/search.png';
import profileImg from '../../../img/main/profile.png';
import directImg from '../../../img/main/direct.png';
import directBtnImg from '../../../img/main/direct-button.png';
import dialogImg from '../../../img/main/dialog.png';
import profileMyImg from '../../../img/main/my-profile.png';
import statusEditImg from '../../../img/main/status-edit.png';
import followingFormImg from '../../../img/main/following-form.png';

const StyledMain = styled.main``;

const MainContainer = styled(Container)`
  max-width: 600px;
  padding: 60px 0 20px 20px;
  font-size: 16px;
  white-space: pre-line;

  p {
  }

  a {
    color: ${colors.secondary};
  }

  img {
    border: 1px solid ${colors.border};
  }
`;
const Main = () => {
  return (
    <StyledMain>
      <MainContainer>
        <p>{'Привет. \n Вы попали на приложение, которое я написал, пока знакомился с React.'}</p>

        <p>
          {
            'Оно похоже на приложения социальных сетей, а конкретно в данном случае на инстаграм, даже внешний вид я позаимствовал оттуда. \n Его единственное предназначение - это моя практика в разработке, и дать Вам большее представление о моих навыках.'
          }
        </p>

        <p>Ну, пожалуй, начнем о возможностях приложения:</p>

        <p>
          работает с REST API, которое можно глянуть{' '}
          <a href="https://social-network.samuraijs.com" target="_blank">
            вот здесь
          </a>
        </p>

        <p>
          Строка поиска пользователя:
          <ul>
            <li>ничего не введено - показывает новых пользователей</li>
            <li>листаете вниз - подгружает с сервера еще пользователей</li>
            <li>вводите ник - ищет пользователей, у которых в нике присутствует введенная строка</li>
          </ul>
        </p>

        <img src={searchImg} alt="строка пользователя" width="561" />

        <p>
          {'Например, мой ник в данной сети - '}
          <NavLink to="/profile/4899">PlebeyRisk</NavLink>
          {'\n Вводите его, находите меня, кликаете на ник, переходите на мой профиль'}
        </p>

        <img src={profileImg} alt="профиль пользователя" width="561" />

        <p>
          {'Что на этой странице есть:'}
          <ul>
            <li>аватар - у меня он не загружен, так что вместо него показана заглушка.</li>
            <li>никнейм</li>
            <li>статус (мой статус - 'done')</li>
            <li>кнопка 'Подписаться'/'Отписаться' (на подобии инстаграма)</li>
            <li>кнопка 'Написать сообщение'</li>
          </ul>
        </p>

        <p>
          {
            'Нажав на "Написать сообщение", перекинет на Ваш директ, создав диалог с этим пользователем, если Вы с ним еще не переписывались, либо просто откроет уже имеющийся с ним диалог'
          }
          <div>
            <img src={directImg} alt="директ" width="561" />
          </div>
        </p>

        <p>
          {'слева - диалоги \n справа - переписка с открытым диалогом \n\n  Если появились новые сообщения:'}
          <ul>
            <li>
              во-первых иконка директа в хэдэре покажет это
              <div>
                <img src={directBtnImg} alt="кнопка директа" width="128" />
              </div>
            </li>
            <li>
              во-вторых, если Вы сейчас уже в директе, но на другом диалоге, у диалога так же высветится кол-во новых
              сообщений
              <div>
                <img src={dialogImg} alt="диалог" width="263" />
              </div>
            </li>
          </ul>
        </p>

        <p>{'Нажав на кнопку с человечком рядом с кнопкой директа - попадете на свой профиль'}</p>
        <div>
          <img src={profileMyImg} alt="мой профиль" width="561" />
        </div>

        <p>
          {'Что на этой странице есть:'}
          <ul>
            <li>аватар</li>
            <li>никнейм</li>
            <li>кнопка 'редактировать профиль' (пока не реализовано)</li>
            <li>кнопка выхода</li>
            <li>
              статус (если по нему кликнуть, то можно сменить)
              <div>
                <img src={statusEditImg} alt="редактирование статуса" width="326" />
              </div>
            </li>
            <li>
              подписки (если кликнуть, откроется форма работы с подписками)
              <div>
                <img src={followingFormImg} alt="форма подписок" width="400" />
              </div>
            </li>
          </ul>
        </p>

        <p>
          {
            'Собственно, вот пока что и весь функционал приложения. \n Будет время - буду туда добавлять новые возможности, по мере их появления в API.'
          }
        </p>

        <p>
          {
            'Сейчас API позволяет еще реализовать смену аватара, редактирования профиля, кое-какие манипуляции с сообщениями в директере (удаление/восстановление/спам).'
          }
        </p>

        <p>{'Но, пока решил потратить свободное время на подготовку к собеседованию.'}</p>
      </MainContainer>
    </StyledMain>
  );
};
export default withAuthRedirect(Main);
