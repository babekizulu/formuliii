//libs
import React from 'react';
//components
import Link from '../../Link';
import BackBtn from '../../buttons/BackBtn';

const BalanceSheet = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/accounting' />
      <div className='menu-grid'>
        <Link href='/accounting/balance-sheet/basic' className='menu-item'>
          Basic Balance Sheet Calculator
        </Link>
        <Link
          href='/accounting/balance-sheet/current-assets'
          className='menu-item'
        >
          Current Assets Calculator
        </Link>
        <Link
          href='/accounting/balance-sheet/current-debt'
          className='menu-item'
        >
          Current Debt Calculator
        </Link>
        <Link
          href='/accounting/balance-sheet/debt-capital'
          className='menu-item'
        >
          Debt Capital Calculator
        </Link>
        <Link
          href='/accounting/balance-sheet/fixed-assets'
          className='menu-item'
        >
          Fixed Assets Calculator
        </Link>
        <Link
          href='/accounting/balance-sheet/long-term-debt'
          className='menu-item'
        >
          Long-Term Debt Calculator
        </Link>
        <Link
          href='/accounting/balance-sheet/other-assets'
          className='menu-item'
        >
          Other Assets Calculator
        </Link>
        <Link
          href='/accounting/balance-sheet/owners-equity-capital'
          className='menu-item'
        >
          Owners Equity Capital Calculator
        </Link>
        <Link
          href='/accounting/balance-sheet/total-assets'
          className='menu-item'
        >
          Total Assets Calculator
        </Link>
        <Link
          href='/accounting/balance-sheet/total-debt-equity'
          className='menu-item'
        >
          Total Debt Equity Calculator
        </Link>
      </div>
    </div>
  );
};

export default BalanceSheet;
