//libs
import React, { useState } from 'react';
import mechanics from '../../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../../buttons/BackBtn';
import Solution from '../../../../calculator/Solution';
import Input from '../../../../calculator/Input';
import ACBtn from '../../../../buttons/ACBtn';
import SolveBtn from '../../../../buttons/SolveBtn';

const AngularRotationEOR = () => {
  //state management
  const [initialAngularRotation, setInitialAngularRotation] = useState('');
  const [initialAngularVelocity, setInitialAngularVelocity] = useState('');
  const [time, setTime] = useState('');
  const [acceleration, setAcceleration] = useState('');
  const [solution, setSolution] = useState('');
  //variables
  const variableName1 = 'Initial Angular Rotation';
  const variableName2 = 'Initial Angular Velocity';
  const variableName3 = 'Time';
  const variableName4 = 'Acceleration';
  const um1 = 'rad';
  const um2 = 'rad/s';
  const um3 = 's';
  const um4 = 'm/s²';
  const solutionUM = 'rad';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setInitialAngularRotation(value);
    }
    if (variableName === variableName2) {
      setInitialAngularVelocity(value);
    }
    if (variableName === variableName3) {
      setTime(value);
    }
    if (variableName === variableName4) {
      setAcceleration(value);
    }
  };
  const onACHandler = () => {
    setInitialAngularRotation('');
    setInitialAngularVelocity('');
    setTime('');
    setAcceleration('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics()
      .equationsOfRotation()
      .angularRotationEOR(
        initialAngularRotation,
        initialAngularVelocity,
        time,
        acceleration,
      );
    setSolution(solution);
  };
  //calculator
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics/rotation' />
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={initialAngularRotation}
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

export default AngularRotationEOR;
