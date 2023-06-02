//libs
import React, { useState } from 'react';
import mechanics from '../../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../../buttons/BackBtn';
import Solution from '../../../../calculator/Solution';
import Input from '../../../../calculator/Input';
import ACBtn from '../../../../buttons/ACBtn';
import SolveBtn from '../../../../buttons/SolveBtn';

const DisplacementEM = () => {
  //state management
  const [initialPosition, setInitialPosition] = useState('');
  const [initialVelocity, setInitialVelocity] = useState('');
  const [time, setTime] = useState('');
  const [acceleration, setAcceleration] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const variableName1 = 'Initial Position';
  const variableName2 = 'Initial Velocity';
  const variableName3 = 'Time';
  const variableName4 = 'Acceleration';
  const um1 = 'm';
  const um2 = 'm/s';
  const um3 = 's';
  const um4 = 'm/s²';
  const solutionUM = um1;
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setInitialPosition(value);
    }
    if (variableName === variableName2) {
      setInitialVelocity(value);
    }
    if (variableName === variableName3) {
      setTime(value);
    }
    if (variableName === variableName4) {
      setAcceleration(value);
    }
  };
  const onACHandler = () => {
    setInitialPosition('');
    setInitialVelocity('');
    setTime('');
    setAcceleration('');
    setSolution(0);
  };

  const onSolveHandler = () => {
    const solution = new mechanics()
      .equationsOfMotion()
      .displacementEM(initialPosition, initialVelocity, time, acceleration);
    setSolution(solution);
  };
  //calculator
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics/motion' />
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={initialPosition}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={initialVelocity}
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
      <Input
        stateValue={acceleration}
        onChangeHandler={onChangeHandler}
        um={um4}
        name={variableName4}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default DisplacementEM;
