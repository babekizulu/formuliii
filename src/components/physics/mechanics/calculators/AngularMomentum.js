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

const AngularMomentum = () => {
  //state management
  const [radius, setRadius] = useState('');
  const [momentum, setMomentum] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const formula = 'angular-momentum';
  const variableName1 = 'Radius';
  const variableName2 = 'Momentum';
  const um1 = '';
  const um2 = '';
  const solutionUM = '';
  const type = 'scientific';
  //handlers
  const onChange = (variableName, value) => {
    if (variableName === variableName1) {
      setX(value);
    }
    if (variableName === variableName2) {
      setY(value);
    }
  };
  const onAC = () => {
    setX('');
    setY('');
    setSolution(0);
  };
  const onSolve = () => {
    const solution = new mechanics();
    setSolution(solution);
  };
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics' />
      <div className='go-to-bar'>
        <GoToInfo />
        <GoToGraph />
      </div>
      <Solution />
      <Input />
      <Input />
      <ACBtn />
      <SolveBtn />
    </div>
  );
};

export default AngularMomentum;
