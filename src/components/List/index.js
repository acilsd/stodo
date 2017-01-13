import React, { Component, PropTypes } from 'react';
import Item from '../Item';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class List extends Component {
  static propTypes = {
    todo: PropTypes.array.isRequired,
    done: PropTypes.array.isRequired,
    filtered: PropTypes.bool.isRequired,
    completeTodo: PropTypes.func.isRequired,
    search: PropTypes.string,
  }

  makeRealContent = () => {
    const { todo, done, filtered, search } = this.props;
    const todobox = filtered ? done : todo;
    return todobox.filter((item) => {
      return item.text.toLowerCase().indexOf(search) > -1;
    });
  }

  render() {
    const { completeTodo } = this.props;
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
  todo: state.todo.todos,
  done: state.todo.done,
  filtered: state.todo.filtered,
  search: state.todo.search,
});


export default connect(mapStateToProps, actions)(List);
