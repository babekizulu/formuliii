//libs
import React, { useState } from 'react';
import mechanics from '../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../buttons/BackBtn';
import GoToInfo from '../../../buttons/GoToInfo';
import GoToGraph from '../../../buttons/GoToGraph';
import GoToNumeric from '../../../buttons/GoToNumeric';
import Solution from '../../../calculator/Solution';
import Input from '../../../calculator/Input';
import ACBtn from '../../../buttons/ACBtn';
import SolveBtn from '../../../buttons/SolveBtn';

const Acceleration = () => {
  //state management
  const [changeInVelocity, setChangeInVelocity] = useState('');
  const [changeInTime, setChangeInTime] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const formula = 'acceleration';
  const variableName1 = 'Change in Velocity';
  const variableName2 = 'Change in Time';
  const um1 = 'm/s';
  const um2 = 's';
  const solutionUM = 'm/s^2';
  //handlers
  const onChange = (variableName, value) => {
    if (variableName === variableName1) {
      setChangeInVelocity(value);
    }
    if (variableName === variableName2) {
      setChangeInTime(value);
    }
  };
  const onAC = () => {
    setChangeInVelocity('');
    setChangeInTime('');
    setSolution(0);
  };
  const onSolve = () => {
    const solution = new mechanics().acceleration(
      changeInVelocity,
      changeInTime,
    );
    setSolution(solution);
  };
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics' />
      <div className='go-to-bar'>
        <GoToInfo formula={formula} />
        <GoToGraph formula={formula} />
        <GoToNumeric />
      </div>
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        value={changeInVelocity}
        onChange={onChange}
        um={um1}
        name={variableName1}
        type='scientific'
      />
      <Input
        value={changeInTime}
        onChange={onChange}
        um={um2}
        name={variableName2}
        type='scientific'
      />
      <ACBtn onAC={onAC} />
      <SolveBtn onSolve={onSolve} />
    </div>
  );
};

export default Acceleration;
