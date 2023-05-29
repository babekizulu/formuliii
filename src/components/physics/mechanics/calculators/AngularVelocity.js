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

const AngularVelocity = () => {
  //state management
  const [changeInAngularRotation, setChangeInAngularRotation] = useState('');
  const [changeInTime, setChangeInTime] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Change in Angular Rotation';
  const variableName2 = 'Change in Time';
  const um1 = 'rad';
  const um2 = 's';
  const solutionUM = 'rad/s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setChangeInAngularRotation(value);
    }
    if (variableName === variableName2) {
      setChangeInTime(value);
    }
  };
  const onACHandler = () => {
    setChangeInAngularRotation('');
    setChangeInTime('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics();
    setSolution(solution);
  };
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics'/>
      {/* <div className='go-to-bar'>
        <GoToInfo />
        <GoToGraph />
      </div> */}
      <Solution />
      <Input />
      <Input />
      <ACBtn />
      <SolveBtn />
    </div>
  );
};

export default AngularVelocity;
