//libs
import React from 'react';
//components
import BackBtn from '../../../buttons/BackBtn';

const BasicBalanceSheet = () => {
  return (
    <div className='calculator'>
      <BackBtn prevDir='/accounting/balance-sheet' />
      Basic Balance Sheet
    </div>
  );
};

export default BasicBalanceSheet;
