//libs
import React from 'react';
//components
import Link from '../../../Link';
import BackBtn from '../../../buttons/BackBtn';

const Firm = () => {
  return (
    <div className='menu'>
      <div className='menu-grid'>
        <BackBtn prevDir='/accounting/cash-flow-statement' />
        <Link
          href='/accounting/cash-flow-statement/firm/cash-flow'
          className='menu-item'
        >
          Cash Flow Calculator
        </Link>
        <Link
          href='/accounting/cash-flow-statement/firm/ebitda'
          className='menu-item'
        >
          Earnings Before Interest, Taxes, Depreciation & Amortization
          Calculator
        </Link>
        <Link
          href='/accounting/cash-flow-statement/firm/atcfo'
          className='menu-item'
        >
          After-Tax Cash Flows from Operations Calculator
        </Link>
        <Link
          href='/accounting/cash-flow-statement/firm/cash-taxes'
          className='menu-item'
        >
          Cash Taxes Calculator
        </Link>
        <Link
          href='/accounting/cash-flow-statement/firm/deltaNOWC'
          className='menu-item'
        >
          Change in Net Operating Working Capital Calculator
        </Link>
        <Link
          href='/accounting/cash-flow-statement/firm/deltaLTA'
          className='menu-item'
        >
          Change in Long-Term Assets Calculator
        </Link>
      </div>
    </div>
  );
};

export default Firm;
