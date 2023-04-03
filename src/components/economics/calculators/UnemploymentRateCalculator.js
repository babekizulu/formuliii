//libs
import {React, useState} from 'react';
import { UnemploymentRateFormula } from '../../../libs/EconomicsFormulae';
//components
import BackBtn from '../../BackBtn';
import Calculator from '../../CalculatorParts/Calculator';
//destructured formula
const {solve} = new UnemploymentRateFormula();

const UnemploymentRateCalculator = () => {
    //state
    const [numberOfUnemployedPeople, setNumberOfUnemployedPeople] = useState('');
    const [labourForce, setLabourForce] = useState('');
    const [solution, setSolution] = useState(0);
    //vname & subject tag
    const vname1 = 'Number of Unemployed People';
    const vname2 = 'Labour Force';
    const subTag = 'financial';
    //arrays
    const inputNamesArr = [
        vname1,
        vname2
    ];
    const unitsOfMeasurementArr = [
        'population units',
        'population units'
    ];
    const stateArr = [
        numberOfUnemployedPeople,
        labourForce
    ];
    
    //handlers
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setNumberOfUnemployedPeople(value);
        };
        if(variableName === vname2) {
            setLabourForce(value);
        };
    };
    const solutionHandler = () => {
        const solution = solve(numberOfUnemployedPeople, labourForce);
        setSolution(solution);
    };
    const clearHandler = () => {
        setNumberOfUnemployedPeople('');
        setLabourForce('');
        setSolution(0);
    };
    return (
        <div className="calculator-container">
            <BackBtn prevUrl='/economics'/>
            <Calculator
            inputNames={inputNamesArr}
            unitsOfMeasurementArr={unitsOfMeasurementArr}
            solutionHandler={solutionHandler}
            clearHandler={clearHandler}
            solution={solution}
            solutionUM='%'
            stateArr={stateArr}
            onChangeHandler={onChangeHandler}
            subjectTag={subTag}
            />
        </div>
    );
};

export default UnemploymentRateCalculator;