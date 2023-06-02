//libs
import React, { useState } from 'react';
import mechanics from '../../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../../buttons/BackBtn';
import Solution from '../../../../calculator/Solution';
import Input from '../../../../calculator/Input';
import ACBtn from '../../../../buttons/ACBtn';
import SolveBtn from '../../../../buttons/SolveBtn';

const NetForce2 = () => {
  //state management
  const [changeInMomentum, setChangeInMomentum] = useState('');
  const [changeInTime, setChangeInTime] = useState('');
  const [solution, setSolution] = useState('');
  //variables
  const variableName1 = 'Change in Momentum';
  const variableName2 = 'Change in Time';
  const um1 = 'kg·m/s';
  const um2 = 's';
  const solutionUM = 'N';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setChangeInMomentum(value);
    }
    if (variableName === variableName2) {
      setChangeInTime(value);
    }
  };
  const onACHandler = () => {
    setChangeInMomentum('');
    setChangeInTime('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().netForce2(changeInMomentum, changeInTime);
    setSolution(solution);
  };
  //calculator
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics/net-force' />
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={changeInMomentum}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={changeInTime}
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

export default NetForce2;
