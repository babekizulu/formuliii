//libs
import React from 'react';
//components
import Link from '../../Link';
import BackBtn from '../../BackBtn';

const GDP = () => {
    return (
        <div className="calc-set">
            <BackBtn prevUrl='/economics'/>
            <Link href='/economics/gdp/deflator' className='calc-set-item'>
                GDP Deflator Formula 
            </Link>
            <Link href='/economics/gdp/exp-approach' className='calc-set-item'>
                GDP Expenditure Approach Formula 
            </Link>
            <Link href='/economics/gdp/income-approach' className='calc-set-item'>
                GDP Income Approach Formula 
            </Link>
            <Link href='/economics/gdp/net-exports' className='calc-set-item'>
                Net Exports Formula
            </Link>
            <Link href='/economics/gdp/real' className='calc-set-item'>
                Real GDP Formula 
            </Link>
        </div>
    );
};

export default GDP;