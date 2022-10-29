//libs
import React from "react";
//components
import Link from "../../../Link";
import BackBtn from "../../../BackBtn";

const DefinitionOfAcceleration = () => {
    return (
        <div className="calc-set">
            <BackBtn prevUrl='/physics/kinematics'/>
            <Link 
            href='/physics/kinematics/definition-of-acceleration/average-velocity'
            className='calc-set-item'
            >
                Average Velocity Formula
            </Link>
            <Link
            href='/physics/kinematics/definition-of-acceleration/initial-velocity'
            className='calc-set-item'
            >
                Initial Velocity Formula
            </Link>
            <Link
            href='/physics/kinematics/definition-of-acceleration/acceleration'
            className='calc-set-item'
            >
                Acceleration Formula
            </Link>
            <Link
            href='/physics/kinematics/definition-of-acceleration/time'
            className='calc-set-item'
            >
                Time Formula
            </Link>
        </div>
    );
};

export default DefinitionOfAcceleration;