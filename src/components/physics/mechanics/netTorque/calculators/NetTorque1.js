//libs
import React, { useState } from 'react';
import mechanics from '../../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../../buttons/BackBtn';
import Solution from '../../../../calculator/Solution';
import Input from '../../../../calculator/Input';
import ACBtn from '../../../../buttons/ACBtn';
import SolveBtn from '../../../../buttons/SolveBtn';

const NetTorque1 = () => {
  //state management
  const [momentOfInertia, setMomentOfInertia] = useState('');
  const [angularAcceleration, setAngularAcceleration] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const variableName1 = 'Moment of Inertia';
  const variableName2 = 'Angular Acceleration';
  const um1 = 'kg·m²';
  const um2 = 'rad/s²';
  const solutionUM = 'N·m';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setMomentOfInertia(value);
    }
    if (variableName === variableName2) {
      setAngularAcceleration(value);
    }
  };
  const onACHandler = () => {
    setMomentOfInertia('');
    setAngularAcceleration('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().netTorque1(
      momentOfInertia,
      angularAcceleration,
    );
    setSolution(solution);
  };
  //calculator
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics/net-torque' />
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={momentOfInertia}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={angularAcceleration}
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

export default NetTorque1;
