import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": 'd18db643-a35e-496c-b103-3f4633876335'
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

const postFollow = (userId = 2) => {
  return instance.post(`follow/${userId}`).then(response => response.data, (error) => console.log('error fetching postFollow(): ' + error));
}

const deleteFollow = (userId = 2) => {
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
  postFollow,
  deleteFollow
};