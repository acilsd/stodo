import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DatePicker from 'react-datepicker';
import moment from 'moment/moment';
import 'react-datepicker/dist/react-datepicker.css';

class DateInput extends Component {
  static propTypes = {
    setTaskTime: PropTypes.func.isRequired,
    time: PropTypes.any.isRequired,
    startDate: PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate
    };
  }

  handleChange = (date) => {
    this.props.setTaskTime(date);
    this.setState({
      startDate: date
    });
  }

  componentWillMount() {
    const defaultDate = moment();
    this.props.setTaskTime(defaultDate);
  }

  render() {
    return (
      <DatePicker
        placeholderText="Time limit"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  time: state.todo.time
});

export default connect(mapStateToProps, actions)(DateInput);
