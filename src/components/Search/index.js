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
    const searchTest = this._text.value.trim().toLowerCase();
    this.props.searchTodo(searchTest);
  };

  handleCheck = (e) => {
    const checked = this._check.checked;
    this.props.filterDone();
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
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, actions)(Search);
