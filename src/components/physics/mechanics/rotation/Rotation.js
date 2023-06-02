//libs
import React from 'react';
//component
import BackBtn from '../../../buttons/BackBtn';
import Link from '../../../Link';

const Rotation = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/physics/mechanics' />
      <div className='menu-grid'>
        <Link
          href='/physics/mechanics/rotation/angular-velocity'
          className='menu-item'
        >
          Angular Velocity
        </Link>
        <Link
          href='/physics/mechanics/rotation/angular-rotation'
          className='menu-item'
        >
          Angular Rotation
        </Link>
        <Link
          href='/physics/mechanics/rotation/angular-velocity-squared'
          className='menu-item'
        >
          Angular Velocity Squared
        </Link>
        <Link
          href='/physics/mechanics/rotation/average-angular-velocity'
          className='menu-item'
        >
          Average Angular Velocity
        </Link>
      </div>
    </div>
  );
};

export default Rotation;
