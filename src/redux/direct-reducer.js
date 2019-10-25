import { directAPI } from "../api/api";
import {reset, stopSubmit} from "redux-form"

const SET_DIALOGS = 'SET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_START_CHATTING_PROGRESS = 'UPDATE_START_CHATTING_PROGRESS';
const UPDATE_GETTING_DIALOGS_PROGRESS = 'UPDATE_GETTING_DIALOGS_PROGRESS';
const UPDATE_SENDING_MESSAGE_PROGRESS = 'UPDATE_SENDING_MESSAGE_PROGRESS';
const UPDATE_GETTING_MESSAGES_PROGRESS = 'UPDATE_GETTING_MESSAGES_PROGRESS';
const UPDATE_DIRECT_INITIALIZED = 'UPDATE_DIRECT_INITIALIZED';
const UPDATE_MESSAGES_INITIALIZED = 'UPDATE_MESSAGES_INITIALIZED';
const UPDATE_DIALOGS_INITIALIZED = 'UPDATE_DIALOGS_INITIALIZED';

const SET_NEW_MESSAGES_IN_DIALOGS_COUNT = 'SET_NEW_MESSAGES_IN_DIALOGS_COUNT';
const SET_NEW_MESSAGES_TOTAL_COUNT = 'SET_NEW_MESSAGES_TOTAL_COUNT';
const UPDATE_TOTAL_CHECKING_NEW_MESSAGES_IN_PROGRESS = 'UPDATE_TOTAL_CHECKING_NEW_MESSAGES_IN_PROGRESS';


const initialState = {
  dialogs: null,
  isStartChattingInProgress: false,
  isGettingDialogsInProgress: false,
  isSendingMessageInProgress: false,
  isGettingMessagesInProgress: false,
  messages: null,
  initialized: false,
  initializedMessages: false,
  initializedDialogs: false,

  newMessagesInDialogsCount: 0,
  newMessagesTotalCount: 0,
  isTotalCheckingNewMessagesInProgress: false
};

const directReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_START_CHATTING_PROGRESS:
      return {
        ...state,
        isStartChattingInProgress: action.progress,
      }
    case UPDATE_GETTING_DIALOGS_PROGRESS:
      return {
        ...state,
        isGettingDialogsInProgress: action.progress,
      }
    case UPDATE_SENDING_MESSAGE_PROGRESS:
      return {
        ...state,
        isSendingMessageInProgress: action.progress,
      }
    case UPDATE_GETTING_MESSAGES_PROGRESS:
      return {
        ...state,
        isGettingMessagesInProgress: action.progress,
      }
    case SET_DIALOGS:
      return {
        ...state,
        dialogs: [...action.dialogs],
      }
    case SET_MESSAGES:
      return {
        ...state,
        messages: [...action.messages],
      }
    case CLEAR_MESSAGES:
      return {
        ...state,
        messages: null,
      }
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message],
      }
    case UPDATE_DIRECT_INITIALIZED:
      return {
        ...state,
        initialized: true,
      }
    case UPDATE_DIALOGS_INITIALIZED:
      return {
        ...state,
        initializedDialogs: true,
      }
    case UPDATE_MESSAGES_INITIALIZED:
      return {
        ...state,
        initializedMessages: true,
      }
    case SET_NEW_MESSAGES_IN_DIALOGS_COUNT:
      return {
        ...state,
        newMessagesInDialogsCount: action.count,
      }
    case SET_NEW_MESSAGES_TOTAL_COUNT:
      return {
        ...state,
        newMessagesTotalCount: action.count,
      }
    case UPDATE_TOTAL_CHECKING_NEW_MESSAGES_IN_PROGRESS:
      return {
        ...state,
        isTotalCheckingNewMessagesInProgress: action.progress,
      }
    default:
      return state;
  };
}

export const updateStartChattingProgress = (progress) => ({
  type: UPDATE_START_CHATTING_PROGRESS,
  progress
});
export const updateGettingDialogsProgress = (progress) => ({
  type: UPDATE_GETTING_DIALOGS_PROGRESS,
  progress
});
export const updateSendingMessageProgress = (progress) => ({
  type: UPDATE_SENDING_MESSAGE_PROGRESS,
  progress
});
export const updateGettingMessagesProgress = (progress) => ({
  type: UPDATE_GETTING_MESSAGES_PROGRESS,
  progress
});
export const setDialogs = (dialogs) => ({
  type: SET_DIALOGS,
  dialogs
});
export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages
});
export const clearMessages = () => ({
  type: CLEAR_MESSAGES,
});
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
});
export const updateInitialized = () => ({
  type: UPDATE_DIRECT_INITIALIZED
});
export const updateDialogsInitialized = () => ({
  type: UPDATE_DIALOGS_INITIALIZED
});
export const updateMessagesInitialized = () => ({
  type: UPDATE_MESSAGES_INITIALIZED
});
export const setNewMessagesInDialogsCount = (count) => ({
  type: SET_NEW_MESSAGES_IN_DIALOGS_COUNT,
  count
});
export const setNewMessagesTotalCount = (count) => ({
  type: SET_NEW_MESSAGES_TOTAL_COUNT,
  count
});
export const updateTotalCheckingNewMessagesProgress = (progress) => ({
  type: UPDATE_TOTAL_CHECKING_NEW_MESSAGES_IN_PROGRESS,
  progress
});

export const startChatting = (userId) => async (dispatch) => {
  dispatch(updateStartChattingProgress(true));
  console.log(`start chat with `+ userId);

  const response = await directAPI.startChatting(userId);

  dispatch(updateStartChattingProgress(false));

  if (response && response.resultCode === 0) {
    dispatch(getAllDialogs());
  }
};

export const getAllDialogs = (cancelToken = null) => async (dispatch) => {
  dispatch(updateGettingDialogsProgress(true));
  console.log(`getting all dialogs`);

  const response = await directAPI.getAllDialogs(cancelToken);

  dispatch(updateGettingDialogsProgress(false));
  if (!response) return;

  dispatch(setDialogs(response));
};

export const sendMessage = (userId, message) => async (dispatch) => {
  dispatch(updateSendingMessageProgress(true));
  console.log(`sending message`);

  const response = await directAPI.sendMessage(userId, message);

  dispatch(updateSendingMessageProgress(false));

  if (response && response.resultCode === 0) {
    dispatch(reset('sendMessage'));
    dispatch(addMessage(response.data.message));
  } else {
    dispatch(stopSubmit({message: 'не удалось отправить сообщение'}));
  }
};

export const getMessages = (userId, cancelToken= null) => async (dispatch) => {
  dispatch(updateGettingMessagesProgress(true));
  console.log(`getting messages ${userId}`);

  const response = await directAPI.getMessages(userId, cancelToken);

  dispatch(updateGettingMessagesProgress(false));
  if (!response) return;

  dispatch(setMessages(response.items));
};

export const checkForTotalNewMessages = () => async (dispatch) => {
  dispatch(updateTotalCheckingNewMessagesProgress(true));
  console.log(`checking for new messages`);

  const response = await directAPI.getAllDialogs();

  dispatch(updateTotalCheckingNewMessagesProgress(false));
  if (!response) return;

  const dialogsWithNewMessages = response.filter((dialog) => dialog.hasNewMessages);

  if (dialogsWithNewMessages.length) {

    let totalCount = 0;
    dialogsWithNewMessages.forEach((dialog) => {
      totalCount += dialog.newMessagesCount;
    });

    dispatch(setNewMessagesInDialogsCount(dialogsWithNewMessages.length));
    dispatch(setNewMessagesTotalCount(totalCount));

    //console.log(`dialogsNewMessages: ${dialogsWithNewMessages.length}, totalNewMessages: ${totalCount}`);
  } else {
    dispatch(setNewMessagesInDialogsCount(0));
    dispatch(setNewMessagesTotalCount(0));
  }
}

export default directReducer;