import Messages from './messages'
import { updateNewMessageActionCreator, sendMessageActionCreator } from '../../../../redux/direct-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messages: state.direct.messages,
    newMessageValue: state.direct.newMessage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (text) => {
      const action = updateNewMessageActionCreator(text);
      dispatch(action);
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;