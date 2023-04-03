//libs
import {React, useState} from 'react';
import { AlgebraicFormulae } from '../../../../libs/MathematicsFormulae';
//components
import BackBtn from '../../../BackBtn';
import Calculator from '../../../CalculatorParts/Calculator';
//destructured formula
const {midPointFormula} = new AlgebraicFormulae();

const MidpointCalculator = () => {
    //state
    const [endpointX1, setEndpointX1] = useState('');
    const [endpointX2, setEndpointX2] = useState('');
    const [endpointY1, setEndpointY1] = useState('');
    const [endpointY2, setEndpointY2] = useState('');
    const [solution, setSolution] = useState(`x:${0} y:${0}`);
    const solutionUM = 'midpoint coordinates:';
    //vnames & subject tag
    const vname1 = 'Endpoint X1';
    const vname2 = 'Endpoint X2';
    const vname3 = 'Endpoint Y1';
    const vname4 = 'Endpoint Y2';
    const subTag = 'mathematics';
    //arrays
    const inputNamesArr = [
        vname1,
        vname2,
        vname3,
        vname4
    ];
    const unitsOfMeasurementArr = [
        '',
        '',
        '',
        ''
    ];
    const stateArr = [
        endpointX1,
        endpointX2,
        endpointY1,
        endpointY2
    ];
    //handlers
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setEndpointX1(value);
        };
        if(variableName === vname2) {
            setEndpointX2(value);
        };
        if(variableName === vname3) {
            setEndpointY1(value);
        };
        if(variableName === vname4) {
            setEndpointY2(value);
        };
    };
    const solutionHandler = () => {
        const solution = midPointFormula(
            endpointX1,
            endpointX2,
            endpointY1,
            endpointY2
        );
        setSolution(`x:${solution[0]} y:${solution[1]}`);
    };
    const clearHandler = () => {
        setEndpointX1('');
        setEndpointX2('');
        setEndpointY1('');
        setEndpointY2('');
        setSolution(`x:${0} y:${0}`);
    };
    return (
        <div className="calculator-container">
            <BackBtn prevUrl='/mathematics/algebra'/>
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

export default MidpointCalculator;