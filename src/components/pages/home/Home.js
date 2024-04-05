//libs
import React from 'react';
//components
import SignInBtn from '../../buttons/SignInBtn';
import SignUpBtn from '../../buttons/SignUpBtn';

const Home = () => {
  return (
    <div className='page'>
      <div className='auth-box'>
        <SignInBtn />
        <SignUpBtn />
      </div>
    </div>
  );
};

export default Home;
