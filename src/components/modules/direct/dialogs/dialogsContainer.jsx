import Dialogs from './dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogs: state.direct.dialogs
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;