export const getAllDialogs = (state) => {
  return state.direct.dialogs;
}
export const getMessages = (state) => {
  return state.direct.messages;
}
export const getIsStartChattingInProgress = (state) => {
  return state.direct.isStartChattingInProgress;
}
export const getIsGettingDialogsInProgress = (state) => {
  return state.direct.isGettingDialogsInProgress;
}
export const getIsSendingMessagesInProgress = (state) => {
  return state.direct.isSendingMessagesInProgress;
}

export const directSEL = {
  getAllDialogs,
  getMessages,
  getIsStartChattingInProgress,
  getIsGettingDialogsInProgress,
  getIsSendingMessagesInProgress
};