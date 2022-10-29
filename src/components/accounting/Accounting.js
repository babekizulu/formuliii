//libs
import React from 'react';
//components
import Link from '../Link';
import BackBtn from '../BackBtn';

const Accounting = () => {
    return (
        <div className='calc-set'>
            <BackBtn prevUrl='/'/>
            <Link href='/accounting/income-statement' className='calc-set-item'>
                Income Statement Formulae
            </Link>
            <Link href='/accounting/balance-sheet' className='calc-set-item'>
                Balance Sheet Formulae
            </Link>
        </div>
    );
};

export default Accounting;