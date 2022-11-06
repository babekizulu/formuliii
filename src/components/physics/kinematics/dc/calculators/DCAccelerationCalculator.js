//libs
import {React, useState} from 'react';
import { KinematicsEquations } from '../../../../../libs/PhysicsFormulae';
//components
import BackBtn from '../../../../BackBtn';
import Calculator from '../../../../CalculatorParts/Calculator';
//destructured formula
const {solveForAccelerationDCE} = new KinematicsEquations();

const DCAccelerationCalculator = () => {
    //state management
    const [displacement, setDisplacement] = useState('');
    const [initialVelocity, setInitialVelocity] = useState('');
    const [time, setTime] = useState('');
    const [solution, setSolution] = useState(0);
    const solutionUM = 'm/s²';
    //vnames & subject tags
    const vname1 = 'Displacement';
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
        'm',
        'm/s',
        'seconds'
    ];
    const stateArr = [
        displacement,
        initialVelocity,
        time
    ];
    //handlers
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setDisplacement(value);
        };
        if(variableName === vname2) {
            setInitialVelocity(value);
        };
        if(variableName === vname3) {
            setTime(value);
        };
    };
    const solutionHandler = () => {
        const solution = solveForAccelerationDCE(
            displacement,
            initialVelocity,
            time
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setDisplacement('');
        setInitialVelocity('');
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

export default DCAccelerationCalculator;
