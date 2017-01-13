import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref={c => this._text = c} />
          <input
            onChange={this.handleCheck}
            type='checkbox'
            ref={c => this._check = c}
          />
        </form>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filtered: state.todo.filtered
});

export default connect(mapStateToProps, actions)(Search);
