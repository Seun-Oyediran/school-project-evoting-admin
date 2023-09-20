import React from 'react';

const ElectionStats = () => {
  return (
    <div className="voting__app__admin__election__stats bg-white p-4">
      <div className="d-flex flex-column justify-content-between h-100">
        <div className="title">
          <h4>Elections</h4>
        </div>

        <div className="d-flex justify-content-between stats gap-1">
          <div>
            <h1 className="active">04</h1>
            <p>Active</p>
          </div>

          <div>
            <h1 className="completed">22</h1>
            <p>Completed</p>
          </div>

          <div>
            <h1 className="uncompleted">07</h1>
            <p>Uncompleted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionStats;
