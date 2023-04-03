//libs
import React from "react";
//components
import Link from "../../Link";
import BackBtn from "../../BackBtn";

const CashFlowStatement = () => {
    return (
        <div className="calc-set">
            <BackBtn prevUrl='/accounting'/>
            <Link href='/accounting/cash-flow-statement/firm' className='calc-set-item'>
                Firm Cash Flow Statement Formulae
            </Link>
            <Link href='/accounting/cash-flow-statement/financing' className='calc-set-item'>
                Financing Flow Statement Formulae
            </Link>
        </div>
    );
};

export default CashFlowStatement;