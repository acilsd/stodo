import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Item from '../Item';
import ModalDelete from '../ModalDelete';
import ModalEdit from '../ModalEdit';
import { NavLink } from '../Links';
import * as actions from '../../actions';
import styles from './style.scss';

class List extends Component {
  static propTypes = {
    todo: PropTypes.array.isRequired,
    filtered: PropTypes.bool.isRequired,
    completeTodo: PropTypes.func.isRequired,
    search: PropTypes.string,
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  makeRealContent = () => {
    const { todo, filtered, search } = this.props;
    const box = filtered
                ? todo.filter((item) => item.completed === true)
                : todo;
    return box.filter((item) => {
      return item.name.toLowerCase().indexOf(search) > -1;
    });
  }

  render() {
    const { toggleFbStatus, modalDelete, modalEdit, filtered } = this.props;
    return (
        <div class='todo-list'>
          <h1>Greetings, User</h1>

          {
            filtered
            ?
              <p class='user'>Currently displaying <b>completed</b> tasks only</p>
            :
            <p class='user'>Here is your current tasklist</p>
          }

          <NavLink class='new-task' to='/add'>New task</NavLink>

          {
            this.makeRealContent().map((item) => {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  text={item.text}
                  time={item.time}
                  note={item.note}
                  completed={item.completed}
                  toggler={toggleFbStatus}
                  deleter={modalDelete}
                  editor={modalEdit}
                />
              );
            })
          }

          <ModalDelete />
          <ModalEdit />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo.todos,
  filtered: state.todo.filtered,
  search: state.todo.search
});


export default connect(mapStateToProps, actions)(List);
