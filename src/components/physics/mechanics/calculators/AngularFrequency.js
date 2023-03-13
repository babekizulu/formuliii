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

const AngularFrequency = () => {
  //state management
  const [x, y] = useState('');
  const [changeInTime, setChangeInTime] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const formula = 'angular-acceleration';
  const variableName1 = 'Change in Angular Velocity';
  const variableName2 = 'Change in Time';
  const um1 = 'm/s';
  const um2 = 's';
  const solutionUM = 'm/s^2';
  const type = 'scientific';
  //handlers
  const onChange = (variableName, value) => {
    if (variableName === variableName1) {
      setChangeInAngularVelocity(value);
    }
    if (variableName === variableName2) {
      setChangeInTime(value);
    }
  };
  const onAC = () => {
    setChangeInAngularVelocity('');
    setChangeInTime('');
    setSolution(0);
  };
  const onSolve = () => {
    const solution = new mechanics().angularAcceleration(
      changeInAngularVelocity,
      changeInTime,
    );
    setSolution(solution);
  };
  return (
    <div className='calculator'>
      <BackBtn />
      <div className='go-to-bar'>
        <GoToInfo />
        <GoToGraph />
        <GoToNumeric />
      </div>
      <Solution />
      <Input />
      <Input />
      <ACBtn />
      <SolveBtn />
    </div>
  );
};

export default AngularFrequency;
