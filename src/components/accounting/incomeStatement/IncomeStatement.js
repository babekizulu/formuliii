//libs
import React from 'react';
//component
import Link from '../../Link';
import BackBtn from '../../buttons/BackBtn';

const IncomeStatement = () => {
  return (
    <div className='menu'>
      <div className='menu-grid'>
        <BackBtn prevDir='/accounting' />
        <Link href='/accounting/income-statement/basic' className='menu-item'>
          Basic Income Statement Calculator
        </Link>
        <Link href='/accounting/income-statement/ebit' className='menu-item'>
          Earnings Before Income & Taxes Calculator
        </Link>
        <Link href='/accounting/income-statement/ebt' className='menu-item'>
          Earnings Before Taxes Calculator
        </Link>
        <Link
          href='/accounting/income-statement/gross-profit'
          className='menu-item'
        >
          Gross Profit Calculator
        </Link>
        <Link
          href='/accounting/income-statement/net-income'
          className='menu-item'
        >
          Net Income Calculator
        </Link>
        <Link
          href='/accounting/income-statement/operating-expenses'
          className='menu-item'
        >
          Operating Expenses Calculator
        </Link>
      </div>
    </div>
  );
};

export default IncomeStatement;
