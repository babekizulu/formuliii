//libs
import React, { useState } from 'react';
import mechanics from '../../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../../buttons/BackBtn';
import Solution from '../../../../calculator/Solution';
import Input from '../../../../calculator/Input';
import ACBtn from '../../../../buttons/ACBtn';
import SolveBtn from '../../../../buttons/SolveBtn';

const VelocityEM = () => {
  //state management
  const [initialVelocity, setInitialVelocity] = useState('');
  const [acceleration, setAcceleration] = useState('');
  const [time, setTime] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const variableName1 = 'Initial Velocity';
  const variableName2 = 'Acceleration';
  const variableName3 = 'Time';
  const um1 = 'm/s';
  const um2 = 'm/s²';
  const um3 = 's';
  const solutionUM = 'm/s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setInitialVelocity(value);
    }
    if (variableName === variableName2) {
      setAcceleration(value);
    }
    if (variableName === variableName3) {
      setTime(value);
    }
  };
  const onACHandler = () => {
    setInitialVelocity('');
    setAcceleration('');
    setTime('');
    setSolution(0);
  };

  const onSolveHandler = () => {
    const solution = new mechanics()
      .equationsOfMotion()
      .velocityEM(initialVelocity, acceleration, time);
    setSolution(solution);
  };
  //calculator
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics/motion' />
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={initialVelocity}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={acceleration}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={time}
        onChangeHandler={onChangeHandler}
        um={um3}
        name={variableName3}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default VelocityEM;
