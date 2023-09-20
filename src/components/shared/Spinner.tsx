import React from 'react';

const Spinner = () => {
  return (
    <div className="text-center my-2">
      <div className="spinner-border voting__app__spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
