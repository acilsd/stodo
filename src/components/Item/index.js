import React from 'react';

const Item = ({ text, id, completed, toggler, deleter }) => {
  const handleToggle = (obj) => {
    let status = !obj.completed;
    toggler(obj.id, status);
  };
  const handleDelete = (id) => {
    deleter(id);
  };
  return (
    <div>
      <p>{text}</p>
      <b>{completed ? 'ye' : 'no'}</b>
      <button onClick={handleToggle.bind(null, {id, completed})}>Complete</button>
      <button onClick={handleDelete.bind(null, id)}>Delete</button>
    </div>
  );
};

export default Item;
