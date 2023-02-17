//libs
import React from 'react';
//components
import BackBtn from '../../../buttons/BackBtn';

const CurrentDebt = () => {
  return (
    <div className='calculator'>
      <BackBtn prevDir='/accounting/balance-sheet' />
      Current Debt
    </div>
  );
};

export default CurrentDebt;
