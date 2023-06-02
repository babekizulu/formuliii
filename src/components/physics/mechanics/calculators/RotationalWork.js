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

const RotationalWork = () => {
  //state management
  const [averageTorque, setAverageTorque] = useState('');
  const [changeInAngularRotation, setChangeInAngularRotation] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Average Torque';
  const variableName2 = 'Change in Angular Rotation';
  const um1 = 'N·m';
  const um2 = 'rad';
  const solutionUM = 'N·m';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setAverageTorque(value);
    }
    if (variableName === variableName2) {
      setChangeInAngularRotation(value);
    }
  };
  const onACHandler = () => {
    setAverageTorque('');
    setChangeInAngularRotation('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().rotationalWork(
      averageTorque,
      changeInAngularRotation,
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
        stateValue={averageTorque}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={changeInAngularRotation}
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

export default RotationalWork;
