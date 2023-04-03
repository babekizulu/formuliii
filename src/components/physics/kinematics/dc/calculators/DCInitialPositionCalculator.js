//libs
import {React, useState} from 'react';
import { KinematicsEquations } from '../../../../../libs/PhysicsFormulae';
//components
import BackBtn from '../../../../BackBtn';
import Calculator from '../../../../CalculatorParts/Calculator';
//destructured formula
const {solveForInitialPositionDCE} = new KinematicsEquations();

const DCInitialPositionCalculator = () => {
    //state management
    const [finalPosition, setFinalPosition] = useState('');
    const [initialVelocity, setInitialVelocity] = useState('');
    const [time, setTime] = useState('');
    const [acceleration, setAcceleration] = useState('');
    const [solution, setSolution] = useState(0);
    const solutionUM = 'm';
    //vnames & subject tags
    const vname1 = 'Final Position';
    const vname2 = 'Initial Velocity';
    const vname3 = 'Time';
    const vname4 = 'Acceleration';
    const subTag = 'physics';
    //arrays
    const inputNamesArr = [
        vname1,
        vname2,
        vname3,
        vname4
    ];
    const unitsOfMeasurementArr = [
        'm',
        'm/s',
        'seconds',
        'm/s²'
    ];
    const stateArr = [
        finalPosition,
        initialVelocity,
        time,
        acceleration
    ];
    //handlers
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setFinalPosition(value);
        };
        if(variableName === vname2) {
            setInitialVelocity(value);
        };
        if(variableName === vname3) {
            setTime(value);
        };
        if(variableName === vname4) {
            setAcceleration(value);
        };
    };
    const solutionHandler = () => {
        const solution = solveForInitialPositionDCE(
            finalPosition,
            initialVelocity,
            time,
            acceleration
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setFinalPosition('');
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

export default DCInitialPositionCalculator;