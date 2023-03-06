//libs
import React from 'react';
//components
import Link from '../../../Link';
import BackBtn from '../../../buttons/BackBtn';

const Financial = () => {
  <div className='menu'>
    <BackBtn prevDir='/accounting/cash-flow-statement' />
    <div className='menu-grid'>
      <Link
        href='/accounting/cash-flow-statement/financial/cash-flow'
        className='menu-item'
      >
        Cash Flow Calculator
      </Link>
    </div>
  </div>;
};

export default Financial;
