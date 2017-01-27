import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import styles from './style.scss';

class Login extends Component {

  render() {
    return (
      <div>
        hi
        <button>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, actions)(Login);
