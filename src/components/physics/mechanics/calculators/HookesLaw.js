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

const HookesLaw = () => {
  //state management
  const [springConstant, setSpringConstant] = useState('');
  const [springStretchOrCompression, setSpringStretchOrCompression] =
    useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Spring Constant';
  const variableName2 = 'Spring Stretch or Compression';
  const um1 = 'N/m';
  const um2 = 'm';
  const solutionUM = 'N';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setSpringConstant(value);
    }
    if (variableName === variableName2) {
      setSpringStretchOrCompression(value);
    }
  };
  const onACHandler = () => {
    setSpringConstant('');
    setSpringStretchOrCompression('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().hookesLaw(
      springConstant,
      springStretchOrCompression,
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
        stateValue={springConstant}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={springStretchOrCompression}
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

export default HookesLaw;
