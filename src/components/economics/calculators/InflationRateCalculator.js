//libs
import {React, useState} from 'react';
import { InflationRateFormula } from '../../../libs/EconomicsFormulae';
//components
import BackBtn from '../../BackBtn';
import Calculator from '../../CalculatorParts/Calculator';
//destructured formula
const {solve} = new InflationRateFormula()

const InflationRateCalculator = () => {
    //state
    const [pastConsumerPriceIndex, setPastConsumerPriceIndex] = useState('');
    const [currentConsumerPriceIndex, setCurrentConsumerPriceIndex] = useState('');
    const [solution, setSolution] = useState(0);
    //vnames & subject tag
    const vname1 = 'Past Consumer Price Index';
    const vname2 = 'Current Consumer Price Index';
    const subTag = '';
    //arrays
    const inputNamesArr = [
        vname1,
        vname2
    ];
    const unitsOfMeasurementArr = [
        '%',
        '%'
    ];
    const stateArr = [
        pastConsumerPriceIndex,
        currentConsumerPriceIndex
    ];
    //handlers
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setPastConsumerPriceIndex(value);
        };
        if(variableName === vname2) {
            setCurrentConsumerPriceIndex(value);
        };
    };
    const solutionHandler = () => {
        const solution = solve(
            pastConsumerPriceIndex,
            currentConsumerPriceIndex
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setPastConsumerPriceIndex('');
        setCurrentConsumerPriceIndex('');
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

export default InflationRateCalculator;