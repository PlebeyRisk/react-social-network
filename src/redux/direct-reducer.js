import { directAPI } from "../api/api";
import {stopSubmit} from "redux-form"

const SET_DIALOGS = 'SET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_START_CHATTING_PROGRESS = 'UPDATE_START_CHATTING_PROGRESS';
const UPDATE_GETTING_DIALOGS_PROGRESS = 'UPDATE_GETTING_DIALOGS_PROGRESS';
const UPDATE_SENDING_MESSAGE_PROGRESS = 'UPDATE_SENDING_MESSAGE_PROGRESS';
const UPDATE_GETTING_MESSAGES_PROGRESS = 'UPDATE_GETTING_MESSAGES_PROGRESS';


const initialState = {
  dialogs: null,
  isStartChattingInProgress: false,
  isGettingDialogsInProgress: false,
  isSendingMessagesInProgress: false,
  messages: null
};

const directReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_START_CHATTING_PROGRESS: {
      let stateCopy = {
        ...state,
        isStartChattingInProgress: action.progress,
      };
      return stateCopy;
    }
    case UPDATE_GETTING_DIALOGS_PROGRESS: {
      let stateCopy = {
        ...state,
        isGettingDialogsInProgress: action.progress,
      };
      return stateCopy;
    }
    case UPDATE_SENDING_MESSAGE_PROGRESS: {
      let stateCopy = {
        ...state,
        isSendingMessagesInProgress: action.progress,
      };
      return stateCopy;
    }
    case UPDATE_GETTING_MESSAGES_PROGRESS: {
      let stateCopy = {
        ...state,
        isGettingMessagesInProgress: action.progress,
      };
      return stateCopy;
    }
    case SET_DIALOGS: {
      let stateCopy = {
        ...state,
        dialogs: [...action.dialogs],
      };
      return stateCopy;
    }
    case SET_MESSAGES: {
      let stateCopy = {
        ...state,
        messages: [...action.messages],
      };
      return stateCopy;
    }
    case ADD_MESSAGE: {
      let stateCopy = {
        ...state,
        messages: [...state.messages, action.message],
      };
      return stateCopy;
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
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
});

export const startChatting = (userId) => {
  return dispatch => {
    dispatch(updateStartChattingProgress(true));
    console.log(`start chat with `+ userId);

    directAPI.startChatting(userId).then(data => {
      dispatch(updateStartChattingProgress(false));
      //console.log(data);
      if (data && data.resultCode === 0) {
        dispatch(getAllDialogs());
        dispatch(getMessages(userId));
      }
    });
  };
};

export const getAllDialogs = () => {
  return dispatch => {
    dispatch(updateGettingDialogsProgress(true));
    console.log(`getting all dialogs`);

    directAPI.getAllDialogs().then(data => {
      dispatch(updateGettingDialogsProgress(false));
      if (!data) return;
      //console.log(data);
      dispatch(setDialogs(data));
    });
  };
};

export const sendMessage = (userId, message) => {
  return dispatch => {
    dispatch(updateSendingMessageProgress(true));
    console.log(`sending message`);

    directAPI.sendMessage(userId, message).then(data => {
      dispatch(updateSendingMessageProgress(false));
      if (data && data.resultCode === 0) {
        dispatch(addMessage(data.data.message));
      }
    });
  };
};

export const getMessages = (userId) => {
  return dispatch => {
    dispatch(updateGettingMessagesProgress(true));
    console.log(`getting messages`);

    directAPI.getMessages(userId).then(data => {
      dispatch(updateGettingMessagesProgress(false));
      if (!data) return;
      dispatch(setMessages(data.items));
    });
  };
};

export default directReducer;