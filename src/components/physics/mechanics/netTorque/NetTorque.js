//libs
import React from 'react';
//components
import BackBtn from '../../../buttons/BackBtn';
import Link from '../../../Link';

const NetTorque = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/physics/mechanics' />
      <div className='menu-grid'>
        <Link href='/physics/mechanics/net-torque/1' className='menu-item'>
          Net Torque 1
        </Link>
        <Link href='/physics/mechanics/net-torque/2' className='menu-item'>
          Net Torque 2
        </Link>
      </div>
    </div>
  );
};

export default NetTorque;
