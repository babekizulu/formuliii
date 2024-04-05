//libs
import React from 'react';
//components
import Link from '../Link';

const BackBtn = ({ prevDir }) => {
  return (
    <div className='back-btn-container'>
      <Link href={prevDir} className='btn'>
        back
      </Link>
    </div>
  );
};

export default BackBtn;
