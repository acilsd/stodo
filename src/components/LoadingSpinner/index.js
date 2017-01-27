import React from 'react';
import styles from './style.scss';

const LoadingSpinner = ({ isLoading }) => {
  if (!isLoading) { return null; }

  return (
    <div className="loading-spinner">
      <i className="fa fa-spinner fa-spin"></i>
    </div>
  );
};

LoadingSpinner.propTypes = {
  isLoading: React.PropTypes.bool.isRequired
};

export default LoadingSpinner;
