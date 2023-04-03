//libs
import {React, useState} from 'react';
import { KinematicsEquations } from '../../../../../libs/PhysicsFormulae';
//components
import BackBtn from '../../../../BackBtn';
import Calculator from '../../../../CalculatorParts/Calculator';
//destructured formula
const {solveForTimeDAE} = new KinematicsEquations();

const TimeCalculator = () => {
    //state management
    const [averageVelocity, setAverageVelocity] = useState('');
    const [initialVelocity, setInitialVelocity] = useState('');
    const [acceleration, setAcceleration] = useState('');
    const [solution, setSolution] = useState(0);
    const solutionUM = 's';
    //vnames & subject tag
    const vname1 = 'Average Velocity';
    const vname2 = 'Initial Velocity';
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
        'm/s',
        'm/s²'
    ];
    const stateArr = [
        averageVelocity,
        initialVelocity,
        acceleration
    ];
    //handlers
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setAverageVelocity(value);
        };
        if(variableName === vname2) {
            setInitialVelocity(value);
        };
        if(variableName === vname3) {
            setAcceleration(value);
        };
    };
    const solutionHandler = () => {
        const solution = solveForTimeDAE(
            averageVelocity,
            initialVelocity,
            acceleration
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setAverageVelocity('');
        setInitialVelocity('');
        setAcceleration('');
        setSolution(0);
    };

    return (
        <div className="calculator-container">
            <BackBtn
            prevUrl='/physics/kinematics/definition-of-acceleration'
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

export default TimeCalculator;