const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

const initialState = {

};

const directReducer = (state = initialState, action) => {

  switch (action.type) {
    // case SEND_MESSAGE: {
    //   if (state.newMessage.trim() === '') {
    //     let stateCopy = {...state};
    //     stateCopy.newMessage = '';
    //     return stateCopy;
    //   }
    //   let stateCopy = {
    //     ...state,
    //     messages: [...state.messages]
    //   };
    //   const newMessage = {
    //     senderId: 0,
    //     receiverId: 24,
    //     message: state.newMessage
    //   }
    //   stateCopy.messages.push(newMessage);
    //   stateCopy.newMessage = '';
    //   return stateCopy;
    // }
    // case UPDATE_NEW_MESSAGE: {
    //   let stateCopy = {
    //     ...state
    //   };
    //   stateCopy.newMessage = action.newMessage;
    //   return stateCopy;
    // }
    default:
      return state;
  };
}

export const addNewMessage = () => ({
  type: ADD_NEW_MESSAGE
});

export default directReducer;