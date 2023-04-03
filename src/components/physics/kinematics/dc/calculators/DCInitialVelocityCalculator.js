//libs
import {React, useState} from 'react';
import { KinematicsEquations } from '../../../../../libs/PhysicsFormulae';
//components
import BackBtn from '../../../../BackBtn';
import Calculator from '../../../../CalculatorParts/Calculator';
//destructured formula
const {solveForInitialVelocityDCE} = new KinematicsEquations();

const DCInitialVelocityCalculator = () => {
    //state management
    const [displacement, setDisplacement] = useState('');
    const [acceleration, setAcceleration] = useState('');
    const [time, setTime] = useState('');
    const [solution, setSolution] = useState(0);
    const solutionUM = 'm/s';
    //vnames & subject tags
    const vname1 = 'Displacement';
    const vname2 = 'Acceleration';
    const vname3 = 'Time';
    const subTag = 'physics';
    //arrays
    const inputNamesArr = [
        vname1,
        vname2,
        vname3
    ];
    const unitsOfMeasurementArr = [
        'm',
        'm/s²',
        'seconds'
    ];
    const stateArr = [
        displacement,
        acceleration,
        time
    ];
    //handlers
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setDisplacement(value);
        };
        if(variableName === vname2) {
            setAcceleration(value);
        };
        if(variableName === vname3) {
            setTime(value);
        };
    };
    const solutionHandler = () => {
        const solution = solveForInitialVelocityDCE(
            displacement,
            acceleration,
            time
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setDisplacement('');
        setAcceleration('');
        setTime('');
        setSolution(0);
    };
    return (
        <div className="calculator-container">
            <BackBtn
            prevUrl='/physics/kinematics/displacement-curve'
            />
            <Calculator
            inputNames={inputNamesArr}
            unitsOfMeasurementArr={unitsOfMeasurementArr}
            solutionHandler={solutionHandler}
            clearHandler={clearHandler}
            solution={solution}
            solutionUM={solutionUM}
            stateArr={stateArr}
            onChangeHandler={onChangeHandler}
            subjectTag={subTag}
            />
        </div>
    );
};

export default DCInitialVelocityCalculator;