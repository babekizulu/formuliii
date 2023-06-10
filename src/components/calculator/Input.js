//libs
import React from 'react';

const Input = ({ stateValue, onChangeHandler, um, name }) => {
  return (
    <div className='input-container'>
      <label>
        {name} {um ? `(${um})` : ''}
      </label>
      <input
        value={stateValue}
        type='number'
        onChange={(event) => onChangeHandler(name, event.target.value)}
        placeholder={name}
      />
    </div>
  );
};

export default Input;
