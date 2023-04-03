//libs
import React from "react"
//components
import Link from "../../../Link"
import BackBtn from "../../../BackBtn"

const FinancingCashFlowStatement = () => {
    return (
        <div className="calc-set">
            <BackBtn prevUrl='/accounting/cash-flow-statement'/>
            <Link href='/accounting/cash-flow-statement/financing/cash-flows' className='calc-set-item'>
                Financing Cash Flows Formula
            </Link>
        </div>
    );
};

export default FinancingCashFlowStatement;