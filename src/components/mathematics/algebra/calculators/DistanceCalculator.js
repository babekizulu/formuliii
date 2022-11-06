//libs
import {React, useState} from 'react';
import {AlgebraicFormulae} from '../../../../libs/MathematicsFormulae';
//components
import BackBtn from '../../../BackBtn';
import Calculator from '../../../CalculatorParts/Calculator';
//destructured formula
const {distanceFormula} = new AlgebraicFormulae();

const DistanceCalculator = () => {
    //state
    const [xCoord1, setXCoord1] = useState('');
    const [xCoord2, setXCoord2] = useState('');
    const [yCoord1, setYCoord1] = useState('');
    const [yCoord2, setYCoord2] = useState('');
    const [solution, setSolution] = useState(0);
    const solutionUM = 'd:';
    //vnames & subject tag
    const vname1 = 'X Coordinate 1';
    const vname2 = 'X Coordinate 2';
    const vname3 = 'Y Coordinate 1';
    const vname4 = 'Y Coordinate 2';
    const subTag = 'mathematics'
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
        xCoord1,
        xCoord2,
        yCoord1,
        yCoord2
    ];
    //handlers
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setXCoord1(value);
        };
        if(variableName === vname2) {
            setXCoord2(value);
        };
        if(variableName === vname3) {
            setYCoord1(value);
        };
        if(variableName === vname4) {
            setYCoord2(value);
        };
    };
    const solutionHandler = () => {
        const solution = distanceFormula(
            xCoord1,
            xCoord2,
            yCoord1,
            yCoord2
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setXCoord1('');
        setXCoord2('');
        setYCoord1('');
        setYCoord2('');
        setSolution(0);
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

export default DistanceCalculator;