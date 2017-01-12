import React from 'react';
import Item from '../Item';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const List = ({ todo }) =>  {
  return (
      <div>
        <h1>List</h1>
        {
          todo.map((item) => {
            return <Item key={item.id} text={item.text}/>;
          })
        }
      </div>
  );
};

const mapStateToProps = state => ({
  todo: state.todo.todos
});


export default connect(mapStateToProps, actions)(List);
