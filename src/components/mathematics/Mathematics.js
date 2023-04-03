//libs
import React from 'react';
//components
import Link from '../Link';
import BackBtn from '../BackBtn';

const Mathematics = () => {
    return (
        <div className='calc-set'>
            <BackBtn prevUrl='/'/>
            <Link href='/mathematics/algebra' className='calc-set-item'>
                Algebraic Formulae
            </Link>
        </div>
    );
};

export default Mathematics;