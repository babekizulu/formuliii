//libs
import React from 'react';
//components
import Link from '../Link';

const SignUpBtn = () => {
  return (
    <div className='auth-btn-container'>
      <Link href='/sign-up' className='btn'>
        sign up
      </Link>
    </div>
  );
};

export default SignUpBtn;
