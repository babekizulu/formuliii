//libs
import React, { useState } from 'react';
import mechanics from '../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../buttons/BackBtn';
// import GoToInfo from '../../../buttons/GoToInfo';
// import GoToGraph from '../../../buttons/GoToGraph';
// import AddToSpreadsheet from '../../../buttons/AddToSpreadsheet';
import Solution from '../../../calculator/Solution';
import Input from '../../../calculator/Input';
import ACBtn from '../../../buttons/ACBtn';
import SolveBtn from '../../../buttons/SolveBtn';

const AngularAcceleration = () => {
  //state management
  const [initialAngularVelocity, setInitialAngularVelocity] = useState('');
  const [finalAngularVelocity, setFinalAngularVelocity] = useState('');
  const [initialTime, setInitialTime] = useState('');
  const [finalTime, setFinalTime] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = 'angular-acceleration';
  const variableName1 = 'Initial Angular Velocity';
  const variableName2 = 'Final Angular Velocity';
  const variableName3 = 'Initial Time';
  const variableName4 = 'Final Time';
  const um1 = 'rad/s';
  const um2 = 'rad/s';
  const um3 = 's';
  const um4 = 's';
  const solutionUM = 'rad/s²';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      initialAngularVelocity(value);
    }
    if (variableName === variableName2) {
      setFinalAngularVelocity(value);
    }
    if (variableName === variableName3) {
      setInitialTime(value);
    }
    if (variableName === variableName4) {
      setFinalTime(value);
    }
  };
  const onACHandler = () => {
    setInitialAngularVelocity('');
    setFinalAngularVelocity('');
    setInitialTime('');
    setFinalTime('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const changeInAngularVelocity =
      initialAngularVelocity - finalAngularVelocity;
    const changeInTime = initialTime - finalTime;
    const solution = new mechanics().angularAcceleration(
      changeInAngularVelocity,
      changeInTime,
    );
    setSolution(solution);
  };
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics' />
      {/* <div className='go-to-bar'>
        <GoToInfo formula={formula} />
        <GoToGraph formula={formula} />
        <AddToSpreadsheet />
      </div> */}
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        value={initialAngularVelocity}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        value={finalAngularVelocity}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <Input
        value={initialTime}
        onChangeHandler={onChangeHandler}
        um={um3}
        name={variableName3}
        type={type}
      />
      <Input
        value={finalTime}
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

export default AngularAcceleration;
