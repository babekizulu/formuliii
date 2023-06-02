//libs
import React from 'react';
//components
import BackBtn from '../../../buttons/BackBtn';
import Link from '../../../Link';

const NetForce = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/physics/mechanics' />
      <div className='menu-grid'>
        <Link href='/physics/mechanics/net-force/1' className='menu-item'>
          Net Force 1
        </Link>
        <Link href='/physics/mechanics/net-force/2' className='menu-item'>
          Net Force 2
        </Link>
      </div>
    </div>
  );
};

export default NetForce;
