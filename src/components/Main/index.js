import React from 'react';

import List from '../List';
import ModalDelete from '../ModalDelete';
import ModalEdit from '../ModalEdit';

const Main = () => {
  return (
    <div>
      <List />
      <ModalDelete />
      <ModalEdit />
    </div>
  );
};

export default Main;
