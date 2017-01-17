import React from 'react';
import styles from './style.scss';

const Item = ({ text, id, completed, toggler, deleter }) => {

  const handleToggle = () => {
    const status = !completed;
    toggler(id, status);
  };

  const handleDelete = () => {
    deleter(id);
  };

  const handleEdit = () => {

  };

  return (
    <div class='todo'>
      <h2 class='todo__title'>Task description</h2>
      <p class='todo__text'>{text}</p>
      <div class='todo__description'>
        <span class='todo__item'><span>Current status:</span><b>{completed ? 'Done' : 'In process'}</b></span>
        <span class='todo__item'><span>Time limit:</span><b>21.12.1222</b></span>
        <span class='todo__item'><span>Special note:</span><b>adfawflawhflkawhf awljkfgawlkfgaASAP</b></span>
      </div>
      <div class='todo__actions'>
        <button class='btn-td btn--pink' onClick={handleToggle}>{completed ? 'Uncomplete' : 'Complete?'}</button>
        <button class='btn-td' onClick={handleEdit}>Edit :3</button>
        <button class='btn-td btn--red' onClick={handleDelete}>Delete!</button>
      </div>
    </div>
  );
};

export default Item;
