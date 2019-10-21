import Messages from './messages';
import { connect } from 'react-redux';

let mapStateToProps = state => {
  return {};
};

const MessagesContainer = connect(
  mapStateToProps,
  {},
)(Messages);

export default MessagesContainer;
