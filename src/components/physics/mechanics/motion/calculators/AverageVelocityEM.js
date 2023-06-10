//libs
import React, { useState } from 'react';
import mechanics from '../../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../../buttons/BackBtn';
import Solution from '../../../../calculator/Solution';
import Input from '../../../../calculator/Input';
import ACBtn from '../../../../buttons/ACBtn';
import SolveBtn from '../../../../buttons/SolveBtn';

const AverageVelocityEM = () => {
  //state management
  const [initialVelocity, setInitialVelocity] = useState('');
  const [velocity, setVelocity] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const variableName1 = 'Initial Velocity';
  const variableName2 = 'Final Velocity';
  const solutionUM = 'm/s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setInitialVelocity(value);
    }
    if (variableName === variableName2) {
      setVelocity(value);
    }
  };
  const onACHandler = () => {
    setInitialVelocity('');
    setVelocity('');
    setSolution(0);
  };

  const onSolveHandler = () => {
    const solution = new mechanics()
      .equationsOfMotion()
      .averageVelocityEM(initialVelocity, velocity);
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
        um={solutionUM}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={velocity}
        onChangeHandler={onChangeHandler}
        um={solutionUM}
        name={variableName2}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default AverageVelocityEM;
