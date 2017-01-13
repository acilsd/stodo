import React from 'react';

const Item = ({ text, id, completed, handler }) => {
  const handleClick = (obj) => {
    let status = !obj.completed;
    handler(obj.id, status);
  };

  return (
    <div>
      <p>{text}</p>
      <b>{completed ? 'ye' : 'no'}</b>
      <button onClick={handleClick.bind(null, {id, completed})}>Complete</button>
    </div>
  );
};

export default Item;
