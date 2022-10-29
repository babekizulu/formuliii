//libs
import React from 'react';
//components
import Link from '../../Link';
import BackBtn from '../../BackBtn';

const Algebra = () => {
    return (
        <div className='calc-set'>
            <BackBtn prevUrl='/mathematics'/>
            <Link href='/mathematics/algebra/pythagorean' className='calc-set-item'>
                Pythagorean Formula
            </Link>
            <Link href='/mathematics/algebra/distance' className='calc-set-item'>
                Distance Formula
            </Link>
            <Link href='/mathematics/algebra/midpoint' className='calc-set-item'>
                Midpoint Formula
            </Link>
        </div>
    );
};

export default Algebra;