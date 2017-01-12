import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Item = ({ text }) => {
  return (
    <div>
      {text}
    </div>
  );
};

export default Item;
