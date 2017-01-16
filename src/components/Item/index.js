import React from 'react';
import styles from './style.scss';

const Item = ({ text, id, completed, toggler, deleter }) => {
  const handleToggle = (obj) => {
    let status = !obj.completed;
    toggler(obj.id, status);
  };
  const handleDelete = (id) => {
    deleter(id);
  };
  return (
    <div class='todo'>
      <p class='todo__text'>{text}</p>
      <div class='todo__description'>
        <span class='todo__status'>{completed ? 'done' : 'not yet'}</span>
        <span class='todo__note'>ASAP</span>
        <span class='todo__time'>21.12.1222</span>
      </div>
      <div class='todo__actions'>
        <button class='btn-td'onClick={handleToggle.bind(null, {id, completed})}>Complete?</button>
        <button class='btn-td'>Edit :3</button>
        <button class='btn-td btn--red'onClick={handleDelete.bind(null, id)}>Delete!</button>
      </div>
    </div>
  );
};

export default Item;
