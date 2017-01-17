import React, { Component, PropTypes } from 'react';
import styles from './style.scss';
import { ModalDelete, ModalEdit } from '../Modals';

export default class Item extends Component {
  static propTypes = {
    toggler: PropTypes.func.isRequired,
    deleter: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      deleting: false
    };
  }

  handleToggle = () => {
    const status = !this.props.completed;
    this.props.toggler(this.props.id, status);
  };
  handleDelete = () => {
    this.props.deleter(this.props.id);
  };

  toggleEdit = () => {
    const show = !this.state.editing;
    this.setState({ editing: show });
  };

  toggleModal = () => {
    const show = !this.state.deleting;
    this.setState({ deleting: show });
  }

  render() {
    const { text, time, note, completed } = this.props;
    const { editing, deleting } = this.state;

    return (
      <div class='todo'>
        <h2 class='todo__title'>Task description</h2>
        <p class='todo__text'>{text}</p>
        <div class='todo__description'>
          <span class='todo__item'><span>Current status:</span><b>{completed ? 'Done' : 'In process'}</b></span>
          <span class='todo__item'><span>Time limit:</span><b>{time || 'unlimited'}</b></span>
          <span class='todo__item'><span>Special note:</span><b>{note || 'no'}</b></span>
        </div>
        <div class='todo__actions'>
          <button class='btn-td btn--pink' onClick={this.handleToggle}>{completed ? 'Uncomplete' : 'Complete?'}</button>
          <button class='btn-td' onClick={this.toggleEdit}>Edit :3</button>
          <button class='btn-td btn--red' onClick={this.toggleModal}>Delete!</button>
        </div>
        {
          deleting ?
            <ModalDelete
              text={text}
              confirm={this.handleDelete}
              decline={this.toggleModal}
            />
          :
          null
        }
        {
          editing ?
            <ModalEdit />
          :
          null
        }
      </div>
    );
  }
}
