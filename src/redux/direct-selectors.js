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
export const getIsSendingMessageInProgress = (state) => {
  return state.direct.isSendingMessageInProgress;
}
export const getIsGettingMessagesInProgress = (state) => {
  return state.direct.isGettingMessagesInProgress;
}
export const getInitialized = (state) => {
  return state.direct.initialized;
}
export const getInitializedMessages = (state) => {
  return state.direct.initializedMessages;
}
export const getInitializedDialogs = (state) => {
  return state.direct.initializedDialogs;
}
export const getNewMessagesInDialogsCount = (state) => {
  return state.direct.newMessagesInDialogsCount;
}
export const getNewMessagesTotalCount = (state) => {
  return state.direct.newMessagesTotalCount;
}
export const getIsTotalCheckingNewMessagesProgress = (state) => {
  return state.direct.isTotalCheckingNewMessagesInProgress;
}

export const directSEL = {
  getAllDialogs,
  getMessages,
  getIsStartChattingInProgress,
  getIsGettingDialogsInProgress,
  getIsSendingMessageInProgress,
  getIsGettingMessagesInProgress,
  getInitialized,
  getInitializedMessages,
  getInitializedDialogs,
  
  getNewMessagesInDialogsCount,
  getNewMessagesTotalCount,
  getIsTotalCheckingNewMessagesProgress
};