import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Item from '../Item';
import { NavLink } from '../Links';
import LoadingSpinner from '../LoadingSpinner';
import * as actions from '../../actions';
import styles from './style.scss';

class List extends Component {
  static propTypes = {
    todo: PropTypes.array.isRequired,
    filtered: PropTypes.bool.isRequired,
    toggleFbStatus: PropTypes.func.isRequired,
    modalDelete: PropTypes.func.isRequired,
    modalEdit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    search: PropTypes.string,
    user: PropTypes.object,
  }

  componentDidMount() {
    const uid = this.props.uid;
    this.props.fetchTasks(uid);
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
    const { toggleFbStatus, modalDelete, modalEdit, filtered, loading, user } = this.props;
    const content = this.makeRealContent();
    const uid = this.props.uid;
    return (
        <div class='todo-list'>
          <div class='todo-header'>
            <img src={user.img}/>
            <h1>Greetings, {user.name}</h1>
          </div>
          {
            filtered
            ?
              <p class='user'>Currently displaying <b>completed</b> tasks only</p>
            :
            <p class='user'>Here is your current tasklist</p>
          }
          <NavLink class='new-task' to='/add'>New task</NavLink>

          <LoadingSpinner isLoading={loading}/>
          {
            content.map((item) => {
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
                  uid={uid}
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
  loading: state.todo.loading,
  user: state.user.user,
  uid: state.user.uid
});


export default connect(mapStateToProps, actions)(List);
