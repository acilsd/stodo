import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styles from './style.scss';

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

    const data = {
      name: this.name.value.trim(),
      text: this.text.value.trim(),
      time: this.time.value.trim(),
      note: this.note.value.trim(),
    };

    if (this.checkValidity(data)) {
      this.props.addTodo(data);
      this.context.router.push(`/`);
    }
  };

  checkValidity = (obj) => {
    if (!obj.name || obj.name.length === 0) return false;
    if (!obj.text || obj.text.length === 0) return false;

    return true;
  }

  revert = (e) => {
    e.preventDefault();
    this.context.router.push(`/`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class='modal-form'>
        <h1>Adding new task...</h1>
        <p>Please fill in this form :3</p>
        <div class='inputs'>
          <input class='modal-input' type='text' ref={c => this.name = c} placeholder='task name'/>
          <input class='modal-input' type='text' ref={c => this.time = c} placeholder='time limit'/>
          <input class='modal-input' type='text' ref={c => this.note = c} placeholder='special notes'/>
        </div>
        <textarea class='modal-text' ref={c => this.text = c} placeholder='enter your task text here'></textarea>
        <div class='buttons'>
          <button class='btn' type='submit'>Submit</button>
          <button class='btn btn--red' onClick={this.revert}>Cancel</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo.todos
});

export default connect(mapStateToProps, actions)(Add);
