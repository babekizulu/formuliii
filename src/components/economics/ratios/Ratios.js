//libs
import React from 'react';
//components
import BackBtn from '../../buttons/BackBtn';
import Link from '../../Link';

const Ratios = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/economics' />
      <div className='menu-grid'>
        <Link
          href='/economics/ratios/current-account-to-gdp'
          className='menu-item'
        >
          Current Account to GDP Ratio Calculator
        </Link>
        <Link
          href='/economics/ratios/government-debt-to-gdp'
          className='menu-item'
        >
          Government Debt to GDP Ratio Calculator
        </Link>
      </div>
    </div>
  );
};

export default Ratios;
