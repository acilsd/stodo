import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import style from './style.scss';

class ModalEdit extends PureComponent {
  static propTypes = {
    editTodo: PropTypes.func.isRequired,
    hideAllModals: PropTypes.func.isRequired,
    editing: PropTypes.bool.isRequired,
    tempTodo: PropTypes.object.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const toEdit = this.collectValues();
    if (this.checkValidity(toEdit)) {
      this.props.editTodo(toEdit);
      this.props.hideAllModals();
    }
  }

  collectValues = () => {
    const { completed, id } = this.props.tempTodo;
    const box = {
      completed,
      id,
      name: this.name.value.trim(),
      note: this.note.value.trim(),
      text: this.text.value.trim(),
      time: this.time.value.trim()
    };
    return box;
  }

  checkValidity = (obj) => {
    if (!obj.name || obj.name.length === 0) return false;
    if (!obj.text || obj.text.length === 0) return false;
    return true;
  }

  reset = (e) => {
    e.preventDefault();
    this.name.value = '';
    this.note.value = '';
    this.time.value = '';
    this.text.value = '';
  }

  hide = (e) => {
    e.preventDefault();
    this.props.hideAllModals();
  }

  render() {
    const { editing, tempTodo } = this.props;
    return (
        editing

        ?

        <form onSubmit={this.handleSubmit} class='modal-edit'>
          <h3 class='modal-title'>Currently editing task: {tempTodo.name}</h3>
          <div class='edit-inputs'>
            <input
              class='edit-input'
              type='text'
              placeholder='task name'
              defaultValue={tempTodo.name}
              ref={c => this.name = c} />
            <input
              class='edit-input'
              type='text'
              placeholder='task time'
              defaultValue={tempTodo.time}
              ref={c => this.time = c} />
            <input
              class='edit-input'
              type='text'
              placeholder='task note'
              defaultValue={tempTodo.note}
              ref={c => this.note = c} />
          </div>
          <textarea class='edit-text'
            placeholder='enter your task text here'
            defaultValue={tempTodo.text}
            ref={c => this.text = c}
          />
          <div class='edit-buttons'>
            <button class='btn-edit btn-edit--pink' onClick={this.reset}>Clear all</button>
            <button class='btn-edit' type='submit'>Submit</button>
            <button class='btn-edit btn-edit--red' onClick={this.hide}>Cancel</button>
          </div>
        </form>

        :

        null
    );
  }
}

const mapStateToProps = state => ({
  editing: state.modals.editing,
  tempTodo: state.modals.tempTodo
});

export default connect(mapStateToProps, actions)(ModalEdit);
