//libs
import React from 'react';
//component
import ResultDisplay from './SolutionDisplay';
import Input from './Input';
import SolveBtn from './SolveBtn';
import ClearBtn from './ClearBtn';

const Calculator = ({
    inputNames, 
    unitsOfMeasurementArr, 
    solutionHandler, 
    clearHandler, 
    solution, 
    solutionUM,
    stateArr,
    onChangeHandler,
    subjectTag
}) => {
    const renderedInputs = inputNames.map((name, index) => {
        return (
            <Input 
            name={name} 
            unitOfMeasurement={unitsOfMeasurementArr[index]}
            stateValue={stateArr[index]}
            onChangeHandler={onChangeHandler}
            subjectTag={subjectTag}
            />
        );
    });
    return (
        <div className='calculator'>
            <ResultDisplay solution={solution} solutionUM={solutionUM}/>
            {renderedInputs}
            <SolveBtn solutionHandler={solutionHandler}/>
            <ClearBtn clearHandler={clearHandler}/>
        </div>
    );
};

export default Calculator;