//libs
import React, { useState } from 'react';
import mechanics from '../../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../../buttons/BackBtn';
import Solution from '../../../../calculator/Solution';
import Input from '../../../../calculator/Input';
import ACBtn from '../../../../buttons/ACBtn';
import SolveBtn from '../../../../buttons/SolveBtn';

const NetForce1 = () => {
  //state management
  const [mass, setMass] = useState('');
  const [acceleration, setAcceleration] = useState('');
  const [solution, setSolution] = useState('');
  //variables
  const variableName1 = 'Mass';
  const variableName2 = 'Acceleration';
  const um1 = 'kg';
  const um2 = 'm/s²';
  const solutionUM = 'N';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setMass(value);
    }
    if (variableName === variableName2) {
      setAcceleration(value);
    }
  };
  const onACHandler = () => {
    setMass('');
    setAcceleration('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().netForce1(mass, acceleration);
    setSolution(solution);
  };
  //calculator
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics/net-force' />
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={mass}
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
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default NetForce1;
