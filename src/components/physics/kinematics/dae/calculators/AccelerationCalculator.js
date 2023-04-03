//libs
import {React, useState} from 'react';
import { KinematicsEquations } from '../../../../../libs/PhysicsFormulae';
//components
import BackBtn from '../../../../BackBtn';
import Calculator from '../../../../CalculatorParts/Calculator';
//destructured formula
const {solveForAccelerationDAE} = new KinematicsEquations();

const AccelerationCalculator = () => {
    //state management
    const [averageVelocity, setAverageVelocity] = useState('');
    const [initialVelocity, setInitialVelocity] = useState('');
    const [time, setTime] = useState('');
    const [solution, setSolution] = useState(0);
    const solutionUM = 'm/s²';
    //vnames & subject tag
    const vname1 = 'Average Velocity';
    const vname2 = 'Initial Velocity';
    const vname3 = 'Time';
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
        'seconds'
    ];
    const stateArr = [
        averageVelocity,
        initialVelocity,
        time
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
            setTime(value);
        };
    };
    const solutionHandler = () => {
        const solution = solveForAccelerationDAE(
            averageVelocity,
            initialVelocity,
            time
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setAverageVelocity('');
        setInitialVelocity('');
        setTime('');
        setSolution(0);
    }
    return (
        <div className="calculator-container">
            <BackBtn prevUrl='/physics/kinematics/definition-of-acceleration'/>
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

export default AccelerationCalculator;