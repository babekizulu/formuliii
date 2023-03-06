//libs
import React from 'react';
//components
import Link from './Link';
//icons
import EconomicsIcon from './EconomicsIcon';
import PhysicsIcon from './PhysicsIcon';
import MathematicsIcon from './MathematicsIcon';
import AccountingIcon from './AccountingIcon';

const Explorer = () => {
  return (
    <div className='explorer'>
      <Link href='/economics' className='explorer-item'>
        <EconomicsIcon />
      </Link>
      <Link href='/physics' className='explorer-item'>
        <PhysicsIcon />
      </Link>
      <Link href='/mathematics' className='explorer-item'>
        <MathematicsIcon />
      </Link>
      <Link href='/accounting' className='explorer-item'>
        <AccountingIcon />
      </Link>
    </div>
  );
};

export default Explorer;
