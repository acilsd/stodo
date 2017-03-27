import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

import Item from '../Item';
import LoadingSpinner from '../LoadingSpinner';

import * as actions from '../../actions';
import searchSelector from '../../selectors/search-selector';
import { getFilteredTasks } from '../../selectors/complete-selector';

import styles from './style.scss';

class List extends PureComponent {
  static propTypes = {
    todo: PropTypes.array.isRequired,
    completed: PropTypes.array.isRequired,
    filtered: PropTypes.bool.isRequired,
    toggleFbStatus: PropTypes.func.isRequired,
    modalDelete: PropTypes.func.isRequired,
    modalEdit: PropTypes.func.isRequired,
    search: PropTypes.string,
    user: PropTypes.object,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    const uid = this.props.uid;
    this.props.fetchTasks(uid);
  }

  makeRealContent = arr => {
    const { toggleFbStatus, modalDelete, modalEdit, uid, search } = this.props;
    return arr.map((item) => {
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
    });
  }

  render() {
    const { todo, completed, filtered, loading } = this.props;
    return (
        <div class='todo-list'>
          <LoadingSpinner isLoading={loading}/>
          {
            filtered
            ? this.makeRealContent(completed)
            : this.makeRealContent(todo)
          }
        </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: searchSelector(state),
  completed: getFilteredTasks(state),
  filtered: state.todo.filtered,
  search: state.todo.search,
  uid: state.user.uid,
  loading: state.todo.loading
});

export default connect(mapStateToProps, actions)(List);
