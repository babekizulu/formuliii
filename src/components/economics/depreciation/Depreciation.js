//libs
import React from 'react';
//components
import BackBtn from '../../buttons/BackBtn';
import Link from '../../Link';

const Depreciation = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/economics' />
      <div className='menu-grid'>
        <Link
          href='/economics/depreciation/straight-line'
          className='menu-item'
        >
          Straight Line Depreciation Calculator
        </Link>
        <Link
          href='/economics/depreciation/double-declining-balance'
          className='menu-item'
        >
          Double Declining Balance Depreciation Calculator
        </Link>
        <Link
          href='/economics/depreciation/units-of-production'
          className='menu-item'
        >
          Units of Production Depreciation Calculator
        </Link>
        <Link
          href='/economics/depreciation/sum-of-years-digits'
          className='menu-item'
        >
          Sum of Years Digits Depreciation Calculator
        </Link>
      </div>
    </div>
  );
};

export default Depreciation;
