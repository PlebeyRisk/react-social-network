import Messages from './messages'
import { sendMessage, updateNewMessage } from '../../../../redux/direct-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messages: state.direct.messages,
    newMessageValue: state.direct.newMessage
  }
}

const MessagesContainer = connect(
  mapStateToProps,
  { updateNewMessage, sendMessage
  })(Messages);

export default MessagesContainer;