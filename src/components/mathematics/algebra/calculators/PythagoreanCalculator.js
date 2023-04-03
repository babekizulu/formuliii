//libs
import {React, useState} from 'react';
import {AlgebraicFormulae} from '../../../../libs/MathematicsFormulae';
//components
import BackBtn from '../../../BackBtn';
import Calculator from '../../../CalculatorParts/Calculator';
//destructured formula
const {pythagoreanFormula} = new AlgebraicFormulae()

const PythagoreanCalculator = () => {
    //state
    const [horizontalSideValue, setHorizontalSideValue] = useState('');
    const [verticalSideValue, setVerticalSideValue] = useState('');
    const [solution, setSolution] = useState(0);
    const solutionUM = 'Hyp:';
    //vnames & subject tag
    const vname1 = 'Vertical Side Value';
    const vname2 = 'Horizontal Side Value';
    const subTag = 'mathematics';
    //arrays
    const inputNamesArr = [
        vname1,
        vname2
    ];
    const unitsOfMeasurementArr = [
        '',
        ''
    ];
    const stateArr = [
        horizontalSideValue,
        verticalSideValue
    ]
    //handlers
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setHorizontalSideValue(value);
        };
        if(variableName === vname2) {
            setVerticalSideValue(value);
        };
    };
    const solutionHandler = () => {
        const solution = pythagoreanFormula(
            horizontalSideValue,
            verticalSideValue
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setHorizontalSideValue('');
        setVerticalSideValue('');
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

export default PythagoreanCalculator;