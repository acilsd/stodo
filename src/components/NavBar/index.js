import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { MenuLink } from '../Links';

import * as actions from '../../actions';
import styles from './style.scss';

class NavBar extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleLogOut = (e) => {
    e.preventDefault();
    this.props.logout().then(() => {
      this.context.router.push('/');
    });
  }

  render() {
    return (
      <div class='navbar'>
        <div class='navbar__links'>
          <MenuLink activeOnlyWhenExact={true} to='/main' label="Home"/>
          <MenuLink activeOnlyWhenExact={true} to='/add' label="Add new task"/>
        </div>
        <button onClick={this.handleLogOut} class='lgt'>Logout</button>
      </div>
    );
  }
}

export default connect(null, actions)(NavBar);