import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import styles from './style.scss';

class Login extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,

  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentDidMount() {
  
  }

  handleLogIn = (e) => {
    e.preventDefault();
    this.props.login().then(() => {
      const status = this.props.isLoggedIn;
      if (status) this.context.router.transitionTo('/main');
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLogIn}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.loggedIn
});

export default connect(mapStateToProps, actions)(Login);
