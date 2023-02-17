//libs
import React from 'react';
//components
import Link from '../../Link';

const CashFlowStatement = () => {
  return (
    <div className='menu'>
      <Link
        href='/accounting/cash-flow-statement/financing'
        className='menu-item'
      >
        Financing Cash Flow
      </Link>
      <Link href='/accounting/cash-flow-statement/firm' className='menu-item'>
        Firm Cash Flow
      </Link>
    </div>
  );
};

export default CashFlowStatement;
