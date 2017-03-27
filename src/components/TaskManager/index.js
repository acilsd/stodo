import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { NavLink } from '../Links';
import Heading from '../Heading/';
import * as actions from '../../actions';
import styles from './style.scss';

class TaskManager extends Component {
  static propTypes = {
    searchTodo: PropTypes.func.isRequired,
    filterDone: PropTypes.func.isRequired
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const searchText = this._text.value.trim().toLowerCase();
    this.props.searchTodo(searchText);
  };

  handleCheck = (e) => {
    const checked = this._check.checked;
    this.props.filterDone(checked);
  }

  reset = (e) => {
    this._text.value = '';
    this._text.focus();
    this.props.searchTodo('');
  }


  render() {
    const { filtered, user } = this.props;
    const text = filtered ? 'completed' : 'all';

    return (
      <div class='top'>
        <Heading text={text} user={user}/>

        <form onSubmit={this.handleSubmit} class='search-form'>

          <input type='text' ref={c => this._text = c}
            placeholder='search task by name'
            class='search-form__input'/>
          <div class='search-form__actions'>
            <button onClick={this.handleSubmit} class='btn'>Submit</button>
            <button onClick={this.reset} class='btn btn--red'>Reset</button>
          </div>

          <input type='checkbox' ref={c => this._check = c}
            onChange={this.handleCheck}
            class='search-form__check'
            id='check'
          />

          <label for='check' class='search-form__label'>
            Filter by status: <b>{`${text}`}</b>
          </label>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filtered: state.todo.filtered,
  isLoggedIn: state.user.loggedIn,
  user: state.user.user
});

export default connect(mapStateToProps, actions)(TaskManager);
