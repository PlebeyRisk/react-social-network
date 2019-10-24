import { directAPI } from "../api/api";
import {reset, stopSubmit} from "redux-form"

const SET_DIALOGS = 'SET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
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
        isSendingMessageInProgress: action.progress,
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
    case UPDATE_DIRECT_INITIALIZED: {
      let stateCopy = {
        ...state,
        initialized: true,
      };
      return stateCopy;
    }
    case UPDATE_DIALOGS_INITIALIZED: {
      let stateCopy = {
        ...state,
        initializedDialogs: true,
      };
      return stateCopy;
    }
    case UPDATE_MESSAGES_INITIALIZED: {
      let stateCopy = {
        ...state,
        initializedMessages: true,
      };
      return stateCopy;
    }
    case SET_NEW_MESSAGES_IN_DIALOGS_COUNT: {
      let stateCopy = {
        ...state,
        newMessagesInDialogsCount: action.count,
      };
      return stateCopy;
    }
    case SET_NEW_MESSAGES_TOTAL_COUNT: {
      let stateCopy = {
        ...state,
        newMessagesTotalCount: action.count,
      };
      return stateCopy;
    }
    case UPDATE_TOTAL_CHECKING_NEW_MESSAGES_IN_PROGRESS: {
      let stateCopy = {
        ...state,
        isTotalCheckingNewMessagesInProgress: action.progress,
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

export const startChatting = (userId) => {
  return dispatch => {
    dispatch(updateStartChattingProgress(true));
    console.log(`start chat with `+ userId);

    directAPI.startChatting(userId).then(data => {
      dispatch(updateStartChattingProgress(false));
      //console.log(data);
      if (data && data.resultCode === 0) {
        dispatch(getAllDialogs());
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
      // console.log(data);

      // const sortDialogs = data;
      // sortDialogs.sort(dialog => dialog.hasNewMessages);

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
        dispatch(reset('sendMessage'));
        dispatch(addMessage(data.data.message));
      } else {
        dispatch(stopSubmit({message: 'не удалось отправить сообщение'}));
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

export const checkForTotalNewMessages = () => {
  return dispatch => {
    dispatch(updateTotalCheckingNewMessagesProgress(true));
    // console.log(`checking for new messages`);

    directAPI.getAllDialogs().then(data => {
      dispatch(updateTotalCheckingNewMessagesProgress(false));
      if (!data) return;

      const dialogsWithNewMessages = data.filter((dialog) => dialog.hasNewMessages);

      if (dialogsWithNewMessages.length) {
        let totalCount = 0;
        dialogsWithNewMessages.forEach((dialog) => {
          totalCount += dialog.newMessagesCount;
        });

        dispatch(setNewMessagesInDialogsCount(dialogsWithNewMessages.length));
        dispatch(setNewMessagesTotalCount(totalCount));

        // console.log(`dialogsNewMessages: ${dialogsWithNewMessages.length}, totalNewMessages: ${totalCount}`);
      } else {
        dispatch(setNewMessagesInDialogsCount(0));
        dispatch(setNewMessagesTotalCount(0));
      }
    });
  };
}

export default directReducer;