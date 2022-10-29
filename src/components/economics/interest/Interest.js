//libs
import React from "react";
//components
import Link from "../../Link";
import BackBtn from "../../BackBtn";

const Interest = () => {
    return (
        <div className="calc-set">
            <BackBtn prevUrl='/economics'/>
            <Link href='/economics/interest/simple' className='calc-set-item'>
                Simple Interest Rate Formula
            </Link>
            <Link href='/economics/interest/compound' className='calc-set-item'>
                Compound Interest Rate Formula
            </Link>
        </div>
    );
};

export default Interest;