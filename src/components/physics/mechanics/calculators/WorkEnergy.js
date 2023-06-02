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

const WorkEnergy = () => {
  //state management
  const [initialKineticEnergy, setInitialKineticEnergy] = useState('');
  const [finalKineticEnergy, setFinalKineticEnergy] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Initial Kinetic Energy';
  const variableName2 = 'Final Kinetic Energy';
  const solutionUM = 'J';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setInitialKineticEnergy(value);
    }
    if (variableName === variableName2) {
      setFinalKineticEnergy(value);
    }
  };
  const onACHandler = () => {
    setInitialKineticEnergy('');
    setFinalKineticEnergy('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().workEnergy(
      initialKineticEnergy,
      finalKineticEnergy,
    );
    setSolution(solution);
  };
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics' />
      {/* <div className='go-to-bar'>
        <GoToInfo />
        <GoToGraph />
        <GoToNumeric />
      </div> */}
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={initialKineticEnergy}
        onChangeHandler={onChangeHandler}
        um={solutionUM}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={finalKineticEnergy}
        onChangeHandler={onChangeHandler}
        um={solutionUM}
        name={variableName2}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default WorkEnergy;
