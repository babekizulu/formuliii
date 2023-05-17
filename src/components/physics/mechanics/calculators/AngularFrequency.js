//libs
import React, { useState } from 'react';
import mechanics from '../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../buttons/BackBtn';
import GoToInfo from '../../../buttons/GoToInfo';
import GoToGraph from '../../../buttons/GoToGraph';
import AddToSpreadsheet from '../../../buttons/AddToSpreadsheet';
import Solution from '../../../calculator/Solution';
import Input from '../../../calculator/Input';
import ACBtn from '../../../buttons/ACBtn';
import SolveBtn from '../../../buttons/SolveBtn';

const AngularFrequency = () => {
  //state management
  const [frequency, setFrequency] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const formula = 'angular-frequency';
  const variableName1 = 'Frequency';
  const um1 = 'Hz';
  const solutionUM = 'rad/s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setFrequency(value);
    }
  };
  const onACHandler = () => {
    setFrequency('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().angularFrequency(frequency);
    setSolution(solution);
  };
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics' />
      <div className='go-to-bar'>
        <GoToInfo formula={formula} />
        <GoToGraph formula={formula} />
        <AddToSpreadsheet />
      </div>
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={frequency}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default AngularFrequency;
