//libs
import {React, useState} from 'react';
import { KinematicsEquations } from '../../../../../libs/PhysicsFormulae';
//components
import BackBtn from '../../../../BackBtn';
import Calculator from '../../../../CalculatorParts/Calculator';
//destructured formula
const {solveForDisplacementDCE} = new KinematicsEquations();

const DCDisplacementCalculator = () => {
    //state management
    const [initialVelocity, setInitialVelocity] = useState('');
    const [time, setTime] = useState('');
    const [acceleration, setAcceleration] = useState('');
    const [solution, setSolution] = useState(0);
    const solutionUM = 'm'
    //vnames & subject tag
    const vname1 = 'Initial Velocity';
    const vname2 = 'Time';
    const vname3 = 'Acceleration';
    const subTag = 'physics';
    //arrays
    const inputNamesArr = [
        vname1,
        vname2,
        vname3
    ];
    const unitsOfMeasurementArr = [
        'm/s',
        'seconds',
        'm/s²'
    ];
    const stateArr = [
        initialVelocity,
        time,
        acceleration
    ]
    //handlers
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setInitialVelocity(value);
        };
        if(variableName === vname2) {
            setTime(value);
        };
        if(variableName === vname3) {
            setAcceleration(value);
        };
    };
    const solutionHandler = () => {
        const solution = solveForDisplacementDCE(
            initialVelocity,
            time,
            acceleration
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setInitialVelocity('');
        setTime('');
        setAcceleration('');
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

export default DCDisplacementCalculator;