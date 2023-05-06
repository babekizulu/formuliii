//libs
import React from 'react';

const ACBtn = ({ onACHandler }) => {
  return (
    <div className='ac-btn-container'>
      <button className='ac-btn' onClick={() => onACHandler()}>
        AC
      </button>
    </div>
  );
};

export default ACBtn;
