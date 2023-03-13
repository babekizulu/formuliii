//libs
import React from 'react';

const SolveBtn = ({ onSolve }) => {
  return (
    <div className='btn-container'>
      <button className='btn' onClick={() => onSolve()}>
        =
      </button>
    </div>
  );
};

export default SolveBtn;
