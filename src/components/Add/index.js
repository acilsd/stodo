import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Add extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    failure: PropTypes.func.isRequired,
    todo: PropTypes.array.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this._input.value.trim();
    const nullify = () => {
      this._input.value = '';
      this._input.focus();
    };

    if (data && data.length > 0) {
      this.props.addTodo(data);
      nullify();
    }
    if (!data || data.length < 0) {
      this.props.failure('empty');
      nullify();
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref={c => this._input = c} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps, actions)(Add);
