import React from 'react';

import List from '../List';
import TaskManager from '../TaskManager/';
import ModalDelete from '../ModalDelete';
import ModalEdit from '../ModalEdit';

const Main = () => {
  return (
    <div>
      <TaskManager />
      <List />
      <ModalDelete />
      <ModalEdit />
    </div>
  );
};

export default Main;
