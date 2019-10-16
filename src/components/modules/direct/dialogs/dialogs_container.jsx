import Dialogs from './dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogs: state.direct.dialogs
  }
}

const DialogsContainer = connect(
  mapStateToProps,
  {
  })(Dialogs);

export default DialogsContainer;