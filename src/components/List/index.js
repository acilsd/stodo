import React, { Component, PropTypes } from 'react';
import Item from '../Item';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class List extends Component {
  render() {
    const { todo, completeTodo } = this.props;
    return (
        <div>
          <h1>List</h1>
          {
            todo.map((item) => {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  completed={item.completed}
                  handler={completeTodo}
                />
              );
            })
          }
        </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo.todos
});


export default connect(mapStateToProps, actions)(List);
