import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div class='navbar'>
      <Link to='/'>Main Page</Link>
      <Link to='/main'>Tasks</Link>
      <Link to='/add'>Add</Link>
      <Link to='/test'>Test!</Link>
    </div>
  );
};

export default NavBar;
