import React, { Component, PropTypes } from 'react';
import Item from '../Item';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class List extends Component {
  static propTypes = {
    todo: PropTypes.array.isRequired,
    filtered: PropTypes.bool.isRequired,
    completeTodo: PropTypes.func.isRequired,
    search: PropTypes.string,
  }

  makeRealContent = () => {
    const { todo, filtered, search } = this.props;
    const box = filtered
                ? todo.filter((item) => item.completed === true)
                : todo;
    return box.filter((item) => {
      return item.text.toLowerCase().indexOf(search) > -1;
    });
  }

  render() {
    const { completeTodo, deleteTodo } = this.props;
    return (
        <div>
          <h1>Todos</h1>
          {
            this.makeRealContent().map((item) => {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  completed={item.completed}
                  toggler={completeTodo}
                  deleter={deleteTodo}
                />
              );
            })
          }
        </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo.todos,
  filtered: state.todo.filtered,
  search: state.todo.search,
});


export default connect(mapStateToProps, actions)(List);
