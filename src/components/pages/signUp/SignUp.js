//libs
import React, { useState } from 'react';
//components
import BackBtn from '../../buttons/BackBtn';

const SignUp = () => {
  //state management
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickname, setNickname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  //variables
  const vname1 = 'firstName';
  const vname2 = 'lastName';
  const vname3 = 'nickname';
  const vname4 = 'dateOfBirth';
  const vname5 = 'email';
  //life cycle methods
  //handlers
  const onChangeHandler = (inputName, val) => {
    if (inputName === vname1) {
      setFirstName(val);
    }
    if (inputName === vname2) {
      setLastName(val);
    }
    if (inputName === vname3) {
      setNickname(val);
    }
    if (inputName === vname4) {
      setDateOfBirth(val);
    }
    if (inputName === vname5) {
      setEmail(val);
    }
  };
  return (
    <div className='page'>
      <BackBtn prevDir='/' />
      <div className='auth-container'>
        <div className='auth-header-container'>
          <header className='auth-header'>
            <h1>sign up</h1>
          </header>
        </div>
        <input
          className='auth-input'
          placeholder='first name'
          value={firstName}
          onChange={(e) => onChangeHandler(vname1, e.target.value)}
          type='text'
        />
        <input
          className='auth-input'
          placeholder='last name'
          value={lastName}
          onChange={(e) => onChangeHandler(vname2, e.target.value)}
          type='text'
        />
        <input
          className='auth-input'
          placeholder='nickname'
          value={nickname}
          onChange={(e) => onChangeHandler(vname3, e.target.value)}
          type='text'
        />
        <input
          className='auth-input'
          placeholder='date of birth'
          value={dateOfBirth}
          onChange={(e) => onChangeHandler(vname4, e.target.value)}
          type='date'
        />
        <input
          className='auth-input'
          placeholder='email'
          value={email}
          onChange={(e) => onChangeHandler(vname5, e.target.value)}
          type='email'
        />
        <button className='btn'>sign up</button>
      </div>
    </div>
  );
};

export default SignUp;
