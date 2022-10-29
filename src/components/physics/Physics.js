//libs
import React from 'react';
//component
import Link from '../Link';
import BackBtn from '../BackBtn';

const Physics = () => {
    return (
        <div className='calc-set'>
            <BackBtn prevUrl='/'/>
            <Link href='/physics/kinematics' className='calc-set-item'>
                Kinematics Formulae
            </Link>
        </div>
    );
};

export default Physics;