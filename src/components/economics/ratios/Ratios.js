//libs
import React from 'react';
//components
import Link from '../../Link';
import BackBtn from '../../BackBtn';

const Ratios = () => {
    return (
        <div className="calc-set">
            <BackBtn prevUrl='/economics'/>
            <Link href='/economics/ratios/current-acc-to-gdp' className='calc-set-item'>
                Current Account to GDP Ratio Formula
            </Link>
            <Link href='/economics/ratios/gov-debt-to-gdp' className='calc-set-item'>
                Government Debt to GDP Ratio Formula
            </Link>
        </div>
    );
};

export default Ratios;