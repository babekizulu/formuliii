//libs
import React from 'react';
//components
import BackBtn from '../../buttons/BackBtn';
import Link from '../../Link';

const GDP = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/economics' />
      <div className='menu-grid'>
        <Link href='/economics/gdp/deflator' className='menu-item'>
          Deflator Calculator
        </Link>
        <Link href='/economics/gdp/expenditure-approach' className='menu-item'>
          Expenditure Approach Calculator
        </Link>
        <Link href='/economics/gdp/income-approach' className='menu-item'>
          Income Approach Calculator
        </Link>
        <Link href='/economics/gdp/net-exports' className='menu-item'>
          Net Exports Calculator
        </Link>
        <Link href='/economics/gdp/real-gdp' className='menu-item'>
          Real GDP Calculator
        </Link>
      </div>
    </div>
  );
};

export default GDP;
