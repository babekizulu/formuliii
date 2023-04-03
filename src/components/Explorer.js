//libs
import React from 'react';
//components
import Link from './Link';

const Explorer = () => {
    return (
        <div className='explorer'>
            <Link href='/economics' className='explorer-item'>
                    Economics Calculators
            </Link>
            <Link href='/mathematics' className='explorer-item'>
                    Mathematics Calculators
            </Link>
            <Link href='/physics' className='explorer-item'>
                    Physics Calculators
            </Link>
            <Link href='/accounting' className='explorer-item'>
                    Accounting Calculators
            </Link>
        </div>
    );
};

export default Explorer;