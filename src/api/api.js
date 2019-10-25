import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": 'd18db643-a35e-496c-b103-3f4633876335'
    // "API-KEY": '91e1747b-4ba3-47ad-99f5-398207e2c67b'
  }
});

const getUsers = (currentPage = 1, pageSize = 10, name = '') => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${name}`).then(response => response.data, (error) => console.log('error fetching getUsers(): ' + error));
}

const auth = () => {
  return instance.get(`auth/me`).then(response => response.data, (error) => console.log('error fetching auth(): ' + error));
}

const getUserInfo = (userId = 2) => {
  return instance.get(`profile/${userId}`).then(response => response.data, (error) => console.log('error fetching getUserInfo(): ' + error));
}

const isFollow = (userId = 2) => {
  return instance.get(`follow/${userId}`).then(response => response.data, (error) => console.log('error fetching isFollow(): ' + error));
}

const follow = (userId = 2) => {
  return instance.post(`follow/${userId}`).then(response => response.data, (error) => console.log('error fetching postFollow(): ' + error));
}

const unFollow = (userId = 2) => {
  return instance.delete(`follow/${userId}`).then(response => response.data, (error) => console.log('error fetching deleteFollow(): ' + error));
}

const getTextStatus = (userId = 2) => {
  return instance.get(`profile/status/${userId}`).then(response => response.data, (error) => console.log('error fetching getTextStatus(): ' + error));
}

const updateStatus = (status) => {
  return instance.put(`profile/status/`, {
    status
  }).then(response => response.data, (error) => console.log('error fetching updateStatus(): ' + error));
}

const login = (email, password, rememberMe, captcha) => {
  return instance.post(`/auth/login/`, {
    email,
    password,
    rememberMe: false,
    captcha
  }).then(response => response.data, (error) => console.log('error fetching login(): ' + error));
}

const logout = () => {
  return instance.post(`auth/logout`).then(response => response.data, (error) => console.log('error fetching logout(): ' + error));
}

const getCaptcha = () => {
  return instance.get(`security/get-captcha-url`).then(response => response.data, (error) => console.log('error fetching getCaptcha(): ' + error));
}

const startChatting = (userId) => {
  return instance.put(`dialogs/${userId}`).then(response => response.data, (error) => console.log('error fetching startChatting(): ' + error));
}

const getAllDialogs = (cancelToken) => {
  return instance.get(`dialogs`, { cancelToken }).then(response => response.data, (error) => console.log('error fetching getAllDialogs(): ' + error));
}

const getMessages = (userId, cancelToken) => {
  return instance.get(`dialogs/${userId}/messages`, { cancelToken }).then(response => response.data, (error) => console.log('error fetching getMessages(): ' + error));
}

const sendMessage = (userId, body) => {
  return instance.post(`dialogs/${userId}/messages`,{body}).then(response => response.data, (error) => console.log('error fetching sendMessage(): ' + error));
}

const getViewedMessageStatus = (messageId) => {
  return instance.get(`dialogs/messages/${messageId}/viewed`).then(response => response.data, (error) => console.log('error fetching getViewedMessageStatus(): ' + error));
}

const messageToSpam = (messageId) => {
  return instance.post(`dialogs/messages/${messageId}/spam`).then(response => response.data, (error) => console.log('error fetching messageToSpam(): ' + error));
}

const deleteMessage = (messageId) => {
  return instance.delete(`dialogs/messages/${messageId}`).then(response => response.data, (error) => console.log('error fetching deleteMessage(): ' + error));
}

const restoreMessage = (messageId) => {
  return instance.put(`dialogs/messages/${messageId}/restore`).then(response => response.data, (error) => console.log('error fetching restoreMessage(): ' + error));
}

const getMessageNewestDate = (userId, date) => {
  return instance.get(`dialogs/${userId}/messages/new?newerThen=${date}`).then(response => response.data, (error) => console.log('error fetching getMessageNewestDate(): ' + error));
}

const getNewMessageCount = () => {
  return instance.get(`dialogs/messages/new/count`).then(response => response.data, (error) => console.log('error fetching getNewMessageCount(): ' + error));
}

export const usersAPI = {
  getUsers,
};

export const profileAPI = {
  getUserInfo,
  getTextStatus,
  updateStatus
};

export const authAPI = {
  auth,
  login,
  logout,
  getCaptcha
};


export const followAPI = {
  isFollow,
  follow,
  unFollow
};

export const directAPI = {
  startChatting,
  getAllDialogs,
  getMessages,
  sendMessage,
  getViewedMessageStatus,
  messageToSpam,
  deleteMessage,
  restoreMessage,
  getMessageNewestDate,
  getNewMessageCount
};