//libs
import React from 'react';

const SolveBtn = ({ onSolveHandler }) => {
  return (
    <div className='solve-btn-container'>
      <button className='solve-btn' onClick={() => onSolveHandler()}>
        =
      </button>
    </div>
  );
};

export default SolveBtn;
