import React from 'react';
import styles from './styles.scss';

export const ModalDelete = ({ text, confirm, decline }) => {
  return (
    <div class='modal modal--delete'>
      <h3 class='modal__title'>Are you sure you want to delete task "{text}"?</h3>
      <button class='btn btn--red' onClick={confirm}>yes</button>
      <button class='btn' onClick={decline}>no</button>
    </div>
  );
};

export const ModalAdd = () => {
  return (
    <div class='modal modal--add'></div>
  );
};

export const ModalEdit = () => {
  return (
    <div class='modal modal--edit'>
      Edit :3
    </div>
  );
};
