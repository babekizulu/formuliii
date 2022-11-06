//libs
import {React, useState} from 'react';
import { KinematicsEquations } from '../../../../../libs/PhysicsFormulae';
//components
import BackBtn from '../../../../BackBtn';
import Calculator from '../../../../CalculatorParts/Calculator';
//destructured formula
const {solveForAverageVelocityDAE} = new KinematicsEquations();

const AverageVelocityCalculator = () => {
    //state
    const [initialVelocity, setInitialVelocity] = useState('');
    const [acceleration, setAcceleration] = useState('');
    const [time, setTime] = useState('');
    const [solution, setSolution] = useState(0);
    const solutionUM = 'm/s';
    //vnames & subject tag
    const vname1 = 'Initial Velocity';
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
        solutionUM,
        'm/s²',
        'seconds'
    ];
    const stateArr = [
        initialVelocity,
        acceleration,
        time
    ];
    //handlers
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setInitialVelocity(value);
        };
        if(variableName === vname2) {
            setAcceleration(value);
        };
        if(variableName === vname3) {
            setTime(value);
        };
    }
    const solutionHandler = () => {
        const solution = solveForAverageVelocityDAE(
            initialVelocity,
            acceleration,
            time
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setInitialVelocity('');
        setAcceleration('');
        setTime('');
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

export default AverageVelocityCalculator;