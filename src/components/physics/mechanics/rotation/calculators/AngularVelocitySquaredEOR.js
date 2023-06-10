//libs
import React, { useState } from 'react';
import mechanics from '../../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../../buttons/BackBtn';
import Solution from '../../../../calculator/Solution';
import Input from '../../../../calculator/Input';
import ACBtn from '../../../../buttons/ACBtn';
import SolveBtn from '../../../../buttons/SolveBtn';

const AngularVelocitySquaredEOR = () => {
  //state management
  const [initialAngularVelocity, setInitialAngularVelocity] = useState('');
  const [acceleration, setAcceleration] = useState('');
  const [angularRotation, setAngularRotation] = useState('');
  const [initialAngularRotation, setInitialAngularRotation] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const variableName1 = 'Initial Angular Velocity';
  const variableName2 = 'Acceleration';
  const variableName3 = 'Final Angular Rotation';
  const variableName4 = 'Initial Angular Rotation';
  const um1 = 'rad/s';
  const um2 = 'm/s²';
  const um3 = 'rad';
  const solutionUM = 'rad/s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setInitialAngularVelocity(value);
    }
    if (variableName === variableName2) {
      setAcceleration(value);
    }
    if (variableName === variableName3) {
      setAngularRotation(value);
    }
    if (variableName === variableName4) {
      setInitialAngularRotation(value);
    }
  };
  const onACHandler = () => {
    setInitialAngularVelocity('');
    setAcceleration('');
    setAngularRotation('');
    setInitialAngularRotation('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics()
      .equationsOfRotation()
      .angularVelocitySquaredEOR(
        initialAngularRotation,
        acceleration,
        angularRotation,
        initialAngularRotation,
      );
    setSolution(solution);
  };
  //calculator
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics/rotation' />
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={initialAngularVelocity}
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
        stateValue={angularRotation}
        onChangeHandler={onChangeHandler}
        um={um3}
        name={variableName3}
        type={type}
      />
      <Input
        stateValue={initialAngularRotation}
        onChangeHandler={onChangeHandler}
        um={um3}
        name={variableName4}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default AngularVelocitySquaredEOR;
