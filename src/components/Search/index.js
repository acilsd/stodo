import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Search extends Component {
  static propTypes = {
    searchTodo: PropTypes.func.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchTodo();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref={c => this._text = c} />
          <input type='checkbox' ref={c => this._check = c} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, actions)(Search);
