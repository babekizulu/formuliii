//libs
import React from 'react';

const Input = ({ value, onChange, um, name, type }) => {
  return (
    <div className='input-container'>
      <input
        value={type === 'financial' ? `${um}${value}` : `${value}${um}`}
        type='text'
        className='input'
        onChange={() => onChange(name, value)}
        placeholder={`${name} in ${um}`}
      />
    </div>
  );
};

export default Input;
