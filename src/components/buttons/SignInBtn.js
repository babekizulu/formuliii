//libs
import React from 'react';
//components
import Link from '../Link';

const SignInBtn = () => {
  return (
    <div className='auth-btn-container'>
      <Link href='/sign-in' className='btn'>
        sign in
      </Link>
    </div>
  );
};

export default SignInBtn;
