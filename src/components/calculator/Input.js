//libs
import React from 'react';
//components
import PasteBtn from '../buttons/PasteBtn';

const Input = ({ stateValue, onChangeHandler, um, name }) => {
  const pasteHandler = () => {
    navigator.clipboard.readText().then(
      (clipText) => onChangeHandler(name, clipText),
      (err) => console.log(err),
    );
  };
  return (
    <div className='input-container'>
      <label>
        {name} ({um})
      </label>
      <input
        value={stateValue}
        type='number'
        onChange={(event) => onChangeHandler(name, event.target.value)}
        placeholder={`${name} in ${um}`}
      />
      <PasteBtn pasteHandler={pasteHandler} />
    </div>
  );
};

export default Input;
