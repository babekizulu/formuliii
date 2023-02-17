//libs
import React from 'react';
//components
import BackBtn from '../../../buttons/BackBtn';

const CurrentAssets = () => {
  return (
    <div className='calculator'>
      <BackBtn prevDir='/accounting/balance-sheet' />
      Current Assets
    </div>
  );
};

export default CurrentAssets;
