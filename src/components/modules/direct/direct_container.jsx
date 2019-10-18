import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Direct from './direct';
import Preloader from '../../common/preloader';

class DirectContainer extends React.Component {
  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return <Preloader/>
    // return <Direct {...this.props}/>;
  }
}

let mapStateToProps = (state) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  {
  })(withRouter(DirectContainer));