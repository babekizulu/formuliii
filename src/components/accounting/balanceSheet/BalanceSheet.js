//libs
import React from "react";
//components
import Link from "../../Link";
import BackBtn from "../../BackBtn";

const BalanceSheet = () => {
    return (
        <div className="calc-set">
            <BackBtn prevUrl='/accounting'/>
            <Link href='/accounting/balance-sheet/basic' className='calc-set-item'>
                Basic Balance Sheet Formula
            </Link>
            <Link href='/accounting/balance-sheet/total-assets' className='calc-set-item'>
                Total Assets Formula
            </Link>
            <Link href='/accounting/balance-sheet/current-assets' className='calc-set-item'>
                Current Assets Formula
            </Link>
            <Link href='/accounting/balance-sheet/fixed-assets' className='calc-set-item'>
                Fixed Assets Formula
            </Link>
            <Link href='/accounting/balance-sheet/other-assets' className='calc-set-item'>
                Other Assets Formula
            </Link>
            <Link href='/accounting/balance-sheet/total-debt-equity' className='calc-set-item'>
                Total Debt & Equity Formula
            </Link>
            <Link href='/accounting/balance-sheet/debt-capital' className='calc-set-item'>
                Debt Capital Formula
            </Link>
            <Link href='/accounting/balance-sheet/current-debt' className='calc-set-item'>
                Current Debt Formula
            </Link>
            <Link href='/accounting/balance-sheet/long-term-debt' className='calc-set-item'>
                Long-Term Debt Formula
            </Link>
            <Link href='/accounting/balance-sheet/owners-equity-capital' className='calc-set-item'>
                Owners Equity Capital Formula
            </Link>
        </div>
    );
};

export default BalanceSheet;