//libs
import React from 'react';
//components
import Link from '../../../Link';
import BackBtn from '../../../BackBtn';

const DisplacementCurve = () => {
    return (
        <div className="calc-set">
            <BackBtn prevUrl='/physics/kinematics'/>
            <Link 
            href='/physics/kinematics/displacement-curve/displacement'
            className='calc-set-item'
            >
                Displacement Formula
            </Link>
            <Link
            href='/physics/kinematics/displacement-curve/final-position'
            className='calc-set-item'
            >
                Final Position Formula
            </Link>
            <Link
            href='/physics/kinematics/displacement-curve/initial-position'
            className='calc-set-item'
            >
                Initial Position Formula
            </Link>
            <Link
            href='/physics/kinematics/displacement-curve/initial-velocity'
            className='calc-set-item'
            >
                Initial Velocity Formula
            </Link>
            <Link
            href='/physics/kinematics/displacement-curve/acceleration'
            className='calc-set-item'
            >
                Acceleration Formula
            </Link>
        </div>
    );
};

export default DisplacementCurve;