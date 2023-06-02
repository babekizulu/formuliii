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

const MassFlowRate = () => {
  //state management
  const [changeInMass, setChangeInMass] = useState('');
  const [changeInTime, setChangeInTime] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Change in Mass';
  const variableName2 = 'Change in Time';
  const um1 = 'kg';
  const um2 = 's';
  const solutionUM = 'kg/s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setChangeInMass(value);
    }
    if (variableName === variableName2) {
      setChangeInTime(value);
    }
  };
  const onACHandler = () => {
    setChangeInMass('');
    setChangeInTime('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().massFlowRate(changeInMass, changeInTime);
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
        stateValue={changeInMass}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={changeInTime}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default MassFlowRate;
