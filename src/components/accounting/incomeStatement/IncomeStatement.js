//libs
import React from 'react';
//components
import Link from '../../Link';
import BackBtn from '../../BackBtn';

const IncomeStatement = () => {
    return (
        <div className='calc-set'>
            <BackBtn prevUrl='/accounting'/>
            <Link href='/accounting/income-statement/basic-income' className='calc-set-item'>
                Basic Income Formula
            </Link>
            <Link href='/accounting/income-statement/earnings-bit' className='calc-set-item'>
                Earnings Before Income & Taxes Formula
            </Link>
            <Link href='/accounting/income-statement/gross-profit' className='calc-set-item'>
                Gross Profit Formula
            </Link>
            <Link href='/accounting/income-statement/operating-expenses' className='calc-set-item'>
                Operating Expenses Formula
            </Link>
            <Link href='/accounting/income-statement/earnings-bt' className='calc-set-item'>
                Earnings Before Taxes Formula
            </Link>
            <Link href='/accounting/income-statement/net-income' className='calc-set-item'>
                Net Income Formula
            </Link>
        </div>
    );
};

export default IncomeStatement;