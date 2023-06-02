//libs
import React, { useState } from 'react';
import mechanics from '../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../buttons/BackBtn';
// import GoToInfo from '../../../buttons/GoToInfo';
// import GoToGraph from '../../../buttons/GoToGraph';
import Solution from '../../../calculator/Solution';
import Input from '../../../calculator/Input';
import ACBtn from '../../../buttons/ACBtn';
import SolveBtn from '../../../buttons/SolveBtn';

const Efficiency = () => {
  //state management
  const [energyOutput, setEnergyOutput] = useState('');
  const [energyInput, setEnergyInput] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Energy Output';
  const variableName2 = 'Energy Input';
  const um = 'J';
  const solutionUM = '';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setEnergyOutput(value);
    }
    if (variableName === variableName2) {
      setEnergyInput(value);
    }
  };
  const onACHandler = () => {
    setEnergyOutput('');
    setEnergyInput('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().efficiency(energyOutput, energyInput);
    setSolution(solution);
  };
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics' />
      {/* <div className='go-to-bar'>
        <GoToInfo />
        <GoToGraph />
      </div> */}
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={energyOutput}
        onChangeHandler={onChangeHandler}
        um={um}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={energyInput}
        onChangeHandler={onChangeHandler}
        um={um}
        name={variableName2}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default Efficiency;
