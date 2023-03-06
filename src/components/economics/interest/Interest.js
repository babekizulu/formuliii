//libs
import React from 'react';
//components
import BackBtn from '../../buttons/BackBtn';
import Link from '../../Link';

const Interest = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/economics' />
      <div className='menu-grid'>
        <Link href='/economics/interest/simple' className='menu-item'>
          Simple Interest Calculator
        </Link>
        <Link href='/economics/interest/compound' className='menu-item'>
          Compound Interest Calculator
        </Link>
      </div>
    </div>
  );
};

export default Interest;
