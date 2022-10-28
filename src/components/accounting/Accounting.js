//libs
import React from 'react';
//components
import Link from '../Link';

const Accounting = () => {
    return (
        <div className='calc-set'>
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