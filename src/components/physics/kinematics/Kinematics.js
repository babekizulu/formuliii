//libs
import React from "react";
//component
import Link from "../../Link";
import BackBtn from "../../BackBtn";

const Kinematics = () => {
    return (
        <div className="calc-set">
            <BackBtn prevUrl='/physics'/>
            <Link href='/physics/kinematics/definition-of-acceleration' className='calc-set-item'>
               Definition of Acceleration Formulae
            </Link>
            <Link href='/physics/kinematics/displacement-curve' className='calc-set-item'>
                Displacement Curve Formulae
            </Link>
        </div>
    );
};

export default Kinematics;