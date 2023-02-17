//libs
import React from 'react';
//components
import Link from '../Link';

const BackBtn = ({ prevDir }) => {
  return (
    <Link href={prevDir} className='back-btn'>
      back
    </Link>
  );
};

export default BackBtn;
