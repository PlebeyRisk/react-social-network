export const getId = (state) => {
  return state.auth.userId;
}
export const getEmail = (state) => {
  return state.auth.email;
}
export const getLogin = (state) => {
  return state.auth.login;
}
export const getIsFetching = (state) => {
  return state.auth.isFetching;
}
export const getIsAuth = (state) => {
  return state.auth.isAuth;
}
export const getCaptcha= (state) => {
  return state.auth.captcha;
}
export const getIsFetchingCaptchaInProgress = (state) => {
  return state.auth.isFetchingCaptchaInProgress;
}

export const authSEL = {
  getId,
  getEmail,
  getLogin,
  getIsFetching,
  getIsAuth,
  getCaptcha,
  getIsFetchingCaptchaInProgress
};