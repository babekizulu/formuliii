//libs
import React, { useState } from 'react';
import mechanics from '../../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../../buttons/BackBtn';
import Solution from '../../../../calculator/Solution';
import Input from '../../../../calculator/Input';
import ACBtn from '../../../../buttons/ACBtn';
import SolveBtn from '../../../../buttons/SolveBtn';

const AverageAngularVeloictyEOR = () => {
  //state management
  const [angularVelocity, setAngularVelocity] = useState('');
  const [initialAngularVelocity, setInitialAngularVelocity] = useState('');
  const [solution, setSolution] = useState('');
  //variables
  const variableName1 = 'Angular Velocity';
  const variableName2 = 'Initial Angular Velocity';
  const um1 = 'rad/s';
  const um2 = 'rad/s';
  const solutionUM = 'rad/s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setAngularVelocity(value);
    }
    if (variableName === variableName2) {
      setInitialAngularVelocity(value);
    }
  };
  const onACHandler = () => {
    setAngularVelocity('');
    setInitialAngularVelocity('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics()
      .equationsOfRotation()
      .averageAngularVelocityEOR(angularVelocity, initialAngularVelocity);
    setSolution(solution);
  };
  //calculator
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics/rotation' />
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={angularVelocity}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={initialAngularVelocity}
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

export default AverageAngularVeloictyEOR;
