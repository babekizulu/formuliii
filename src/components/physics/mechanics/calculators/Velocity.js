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

const Velocity = () => {
  //state management
  const [changeInPosition, setChangeInPosition] = useState('');
  const [changeInTime, setChangeInTime] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const formula = 'velocity';
  const variableName1 = 'Change in Position';
  const variableName2 = 'Change in Time';
  const um1 = 'm';
  const um2 = 's';
  const solutionUM = 'm/s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setChangeInPosition(value);
    }
    if (variableName === variableName2) {
      setChangeInTime(value);
    }
  };
  const onACHandler = () => {
    setChangeInPosition('');
    setChangeInTime('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().velocity(changeInPosition, changeInTime);
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
        stateValue={changeInPosition}
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

export default Velocity;
