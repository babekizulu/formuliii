//libs
import React from 'react';
//component
import SolutionDisplay from './SolutionDisplay';
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
            key={index}
            />
        );
    });
    return (
        <div className='calculator'>
            <SolutionDisplay 
            solution={solution} 
            solutionUM={solutionUM}
            subjectTag={subjectTag}
            />
            {renderedInputs}
            <SolveBtn solutionHandler={solutionHandler}/>
            <ClearBtn clearHandler={clearHandler}/>
        </div>
    );
};

export default Calculator;