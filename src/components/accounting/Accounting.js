//libs
import React from 'react';
//components
import BackBtn from '../buttons/BackBtn';
import Link from '../Link';

const Accounting = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/' />
      <div className='menu-grid'>
        <Link href='/accounting/balance-sheet' className='menu-item'>
          Balance Sheet
        </Link>
        <Link href='/accounting/cash-flow-statement' className='menu-item'>
          Cash Flow Statement
        </Link>
        <Link href='/accounting/income-statement' className='menu-item'>
          Income Statement
        </Link>
      </div>
    </div>
  );
};

export default Accounting;
