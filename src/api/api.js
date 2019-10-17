import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { "API-KEY": 'd18db643-a35e-496c-b103-3f4633876335' }
});

const getUsers = (currentPage = 1, pageSize = 10, name = '') => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${name}`).then(response => response.data, () => console.log('error fetching getUsers()'));
}

const auth = () => {
  return instance.get(`auth/me`).then(response => response.data, () => console.log('error fetching auth()'));
}

const getUserInfo = (userId = 2) => {
  return instance.get(`profile/${userId}`).then(response => response.data, () => console.log('error fetching getUserInfo()'));
}

const isFollow = (userId = 2) => {
  return instance.get(`follow/${userId}`).then(response => response.data, () => console.log('error fetching isFollow()'));
}

const postFollow = (userId = 2) => {
  return instance.post(`follow/${userId}`).then(response => response.data, () => console.log('error fetching postFollow()'));
}

const deleteFollow = (userId = 2) => {
  return instance.delete(`follow/${userId}`).then(response => response.data, () => console.log('error fetching deleteFollow()'));
}

const API = {
  getUsers, auth, getUserInfo, isFollow, postFollow, deleteFollow
};

export default API;