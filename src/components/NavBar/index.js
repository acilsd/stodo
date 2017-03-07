import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { MenuLink } from '../Links';

import * as actions from '../../actions';
import styles from './style.scss';

class NavBar extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  }

  static defauldProps = {
    isLoggedIn: false
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
          <MenuLink activeOnlyWhenExact={true} to='/' label="Main Page"/>
          <MenuLink activeOnlyWhenExact={true} to='/main' label="Task list"/>
          <MenuLink activeOnlyWhenExact={true} to='/add' label="Add new task"/>
          <MenuLink activeOnlyWhenExact={true} to='/thisroutdoesnotexist' label="Error page"/>
        </div>
        {
          this.props.isLoggedIn
            ? <button onClick={this.handleLogOut} class='lgt'>Logout</button>
            : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.loggedIn
});

export default connect(mapStateToProps, actions)(NavBar);
