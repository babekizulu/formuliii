//libs
import React from 'react';
//components
import Link from '../../Link';
import BackBtn from '../../buttons/BackBtn';

const CashFlowStatement = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/accounting' />
      <div className='menu-grid'>
        {/* <Link
          href='/accounting/cash-flow-statement/financing'
          className='menu-item'
        >
          Financing Cash Flow
        </Link> */}
        <Link href='/accounting/cash-flow-statement/firm' className='menu-item'>
          Firm Cash Flow
        </Link>
      </div>
    </div>
  );
};

export default CashFlowStatement;
