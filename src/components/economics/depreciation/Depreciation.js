//libs
import React from 'react';
//components
import Link from '../../Link';
import BackBtn from '../../BackBtn';

const Depreciation = () => {
    return (
        <div className='calc-set'>
            <BackBtn prevUrl='/economics'/>
            <Link href='/economics/depreciation/ddb' className='calc-set-item'>
                Double-Declining Balance Depreciation Formula
            </Link>
            <Link href='/economics/depreciation/straight-line' className='calc-set-item'>
                Straight Line Depreciation Formula
            </Link>
            <Link href='/economics/depreciation/sum-of-the-years' className='calc-set-item'>
                Sum of the Years Depreciation Formula
            </Link>
            <Link href='/economics/depreciation/units-of-production' className='calc-set-item'>
                Units of Production Depreciation Formula
            </Link>
        </div>
    );
};

export default Depreciation;