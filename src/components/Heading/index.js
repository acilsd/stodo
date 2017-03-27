import React from 'react';

const Heading = ({ text, user }) => {
  return(
    <div class='todo-header'>
      <img src={user.img}/>
      <h1>Greetings, {user.name}</h1>
      <p class='user'>
        currently displaying <b>{text}</b> tasks
      </p>
    </div>
  );
};

Heading.propTypes = {
  text: React.PropTypes.string
};

export default Heading;
