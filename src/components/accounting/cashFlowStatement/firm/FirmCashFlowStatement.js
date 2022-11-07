//libs
import React from "react"
//components
import Link from "../../../Link"
import BackBtn from "../../../BackBtn"

const FirmCashFlowStatement = () => {
    return (
        <div className="calc-set">
            <BackBtn prevUrl='/accounting/cash-flow-statement'/>
            <Link href='/accounting/cash-flow-statement/firm/cash-flows' className='calc-set-item'>
                Firm Cash Flows Formula
            </Link>
            <Link href='/accounting/cash-flow-statement/firm/ebitda' className='calc-set-item'>
                Earnings Before Interest, Taxes, Depreciation & Amortization Formula
            </Link>
            <Link href='/accounting/cash-flow-statement/firm/atcfo' className='calc-set-item'>
                After-Tax Cash Flows from Operations Formula
            </Link>
            <Link href='/accounting/cash-flow-statement/firm/cash-taxes' className='calc-set-item'>
                Cash Taxes Formula
            </Link>
            <Link href='/accounting/cash-flow-statement/firm/change-in-nowc' className='calc-set-item'>
                Change in Net Operating Working Capital Formula
            </Link>
            <Link href='/accounting/cash-flow-statement/firm/change-in-lta' className='calc-set-item'>
                Change in Long-Term Assets Formula
            </Link>
        </div>
    );
};

export default FirmCashFlowStatement;