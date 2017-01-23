import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavLink } from '../Links';
import * as actions from '../../actions';
import styles from './style.scss';

class Search extends Component {
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
    let text = this.props.filtered ? 'completed' : 'all';
    return (
      <div class='top'>
        <form onSubmit={this.handleSubmit} class='search-form'>
          <div class='top__left'>
            <div class='search-group'>
              <input
                type='text'
                ref={c => this._text = c}
                placeholder='search by name'
                class='search-form__input'/>
              <div class='search-group__actions'>
                <button onClick={this.handleSubmit} class='btn'>Submit</button>
                <button onClick={this.reset} class='btn btn--red'>Reset</button>
              </div>
            </div>
            <input
              onChange={this.handleCheck}
              type='checkbox'
              ref={c => this._check = c}
              class='search-form__check'
              id='check'
            />
            <label for='check' class='search-form__label'>
              Filter by status: <b>{`${text}`}</b>
            </label>
          </div>

          <div class='top__right'>
            <NavLink class='btn btn--new' to='/add'>New task</NavLink>
            <button class='btn btn--lgt'>Logout</button>
          </div>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filtered: state.todo.filtered
});

export default connect(mapStateToProps, actions)(Search);
