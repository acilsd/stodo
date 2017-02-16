import React from 'react';

import List from '../List';
import ModalDelete from '../ModalDelete';
import ModalEdit from '../ModalEdit';
import NavBar from '../NavBar';

const Main = () => {
  return (
    <div>
      <NavBar />
      <List />
      <ModalDelete />
      <ModalEdit />
    </div>
  );
};

export default Main;
