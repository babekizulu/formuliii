//libs
import React from 'react';
//components
import BackBtn from '../button/BackBtn';
import Link from '../Link';

const Economics = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/' />
      <div className='menu-grid'>
        <Link href='/economics/depreciation' className='menu-item'>
          Depreciation Calculators
        </Link>
        <Link href='/economics/gdp' className='menu-item'>
          GDP Calculators
        </Link>
        <Link href='/economics/interest' className='menu-item'>
          Interest Calculators
        </Link>
        <Link href='/economics/ratios' className='menu-item'>
          Ratio Calculators
        </Link>
      </div>
    </div>
  );
};

export default Economics;
