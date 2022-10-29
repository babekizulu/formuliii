//libs
import React from 'react';
//components
import Link from '../Link';
import BackBtn from '../BackBtn';

const Economics = () => {
    return (
        <div className='calc-set'>
            <BackBtn prevUrl='/'/>
            <Link href='/economics/balance-of-trade' className='calc-set-item'>
                Balance of Trade Formula
            </Link>
            <Link href='/economics/current-account' className='calc-set-item'>
                Current Account Formula
            </Link>
            <Link href='/economics/depreciation' className='calc-set-item'>
                Depreciation Formulae
            </Link>
            <Link href='/economics/gdp' className='calc-set-item'>
                GDP Formulae
            </Link>
            <Link href='/economics/inflation-rate' className='calc-set-item'>
                Inflation Rate Formula
            </Link>
            <Link href='/economics/interest' className='calc-set-item'>
                Interest Formulae
            </Link>
            <Link href='/economics/net-foreign-factor-income' className='calc-set-item'>
                Net Foreign Factor Income Formula
            </Link>
            <Link href='/economics/ratios' className='calc-set-item'>
                Ratio Formulae
            </Link>
            <Link href='/economics/unemployment-rate' className='calc-set-item'>
                Unemployment Rate Formula
            </Link>
        </div>
    );
};

export default Economics;