//libs
import React from 'react';

const ACBtn = ({ onAC }) => {
  return (
    <div className='btn-container'>
      <button className='btn' onClick={() => onAC()}>
        AC
      </button>
    </div>
  );
};

export default ACBtn;
