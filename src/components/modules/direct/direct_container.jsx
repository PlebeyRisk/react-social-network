import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Direct from './direct';
import Preloader from '../../common/preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class DirectContainer extends React.Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return <Preloader />;
    // return <Direct {...this.props}/>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withAuthRedirect,
)(DirectContainer);
