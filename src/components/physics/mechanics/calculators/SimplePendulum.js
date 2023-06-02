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

const SimplePendulum = () => {
  //state management
  const [pendulumLength, setPendulumLength] = useState('');
  const [accelerationDueToGravity, setAccelerationDueToGravity] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const variableName1 = 'Pendulum Length';
  const variableName2 = 'Acceleration due to Gravity';
  const um1 = 'm';
  const um2 = 'm/s²';
  const solutionUM = '';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setPendulumLength(value);
    }
    if (variableName === variableName2) {
      setAccelerationDueToGravity(value);
    }
  };
  const onACHandler = () => {
    setPendulumLength('');
    setAccelerationDueToGravity('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().simplePendulum(
      pendulumLength,
      accelerationDueToGravity,
    );
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
        stateValue={pendulumLength}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={accelerationDueToGravity}
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

export default SimplePendulum;
