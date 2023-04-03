//libs
import {React, useState} from 'react';
import { KinematicsEquations } from '../../../../../libs/PhysicsFormulae';
//components
import BackBtn from '../../../../BackBtn';
import Calculator from '../../../../CalculatorParts/Calculator';
//destructured formula
const {solveForFinalPositionDCE} = new KinematicsEquations();

const DCFinalPositionCalculator = () => {
    //state management
    const [initialVelocity, setInitialVelocity] = useState('');
    const [time, setTime] = useState('');
    const [acceleration, setAcceleration] = useState('');
    const [initialPosition, setInitialPosition] = useState('');
    const [solution, setSolution] = useState(0);
    const solutionUM = 'm';
    //vnames & subject tags
    const vname1 = 'Initial Velocity';
    const vname2 = 'Time';
    const vname3 = 'Acceleration';
    const vname4 = 'Initial Position';
    const subTag = 'physics';
    //arrays
    const inputNamesArr = [
        vname1,
        vname2,
        vname3,
        vname4
    ];
    const unitsOfMeasurementArr = [
        'm/s',
        'seconds',
        'm/s²',
        solutionUM
    ];
    const stateArr = [
        initialVelocity,
        time,
        acceleration,
        initialPosition
    ];
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
        if(variableName === vname4) {
            setInitialPosition(value);
        };
    };
    const solutionHandler = () => {
        const solution = solveForFinalPositionDCE(
            initialVelocity,
            time,
            acceleration,
            initialPosition
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setInitialVelocity('');
        setTime('');
        setAcceleration('');
        setInitialPosition('');
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

export default DCFinalPositionCalculator;