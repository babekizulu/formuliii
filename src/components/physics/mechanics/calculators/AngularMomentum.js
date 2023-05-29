//libs
import React, { useState } from 'react';
import mechanics from '../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../buttons/BackBtn';
// import GoToInfo from '../../../buttons/GoToInfo';
// import GoToGraph from '../../../buttons/GoToGraph';
// import AddToSpreadsheet from '../../../buttons/AddToSpreadsheet';
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
  // const formula = 'angular-momentum';
  const variableName1 = 'Radius';
  const variableName2 = 'Momentum';
  const um1 = 'm';
  const um2 = 'kg·m²/s';
  const solutionUM = '';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setRadius(value);
    }
    if (variableName === variableName2) {
      setMomentum(value);
    }
  };
  const onACHandler = () => {
    setRadius('');
    setMomentum('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics();
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
        stateValue={radius}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={momentum}
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

export default AngularMomentum;
