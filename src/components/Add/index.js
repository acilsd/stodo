import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Add extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    failure: PropTypes.func.isRequired,
    todo: PropTypes.array.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this._input.value.trim();

    if (data && data.length > 0) {
      this.props.addTodo(data);
      this.context.router.push(`/`);
    }
    if (!data || data.length < 0) {
      this.props.failure('empty');
      this.context.router.push(`/`);
    }
  };

  render() {
    return (
      <div class='main'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref={c => this._input = c} placeholder='enter your task text...'/>
          <input type='text' placeholder='time limit'/>
          <input type='text' placeholder='any special notes?'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo.todos
});

export default connect(mapStateToProps, actions)(Add);
