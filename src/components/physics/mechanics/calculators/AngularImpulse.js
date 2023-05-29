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

const AngularImpulse = () => {
  //state management
  const [averageTorque, setAverageTorque] = useState('');
  const [initialTime, setInitialTime] = useState('');
  const [finalTime, setFinalTime] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = 'angular-impulse';
  const variableName1 = 'Average Torque';
  const variableName2 = 'Initial Time';
  const variableName3 = 'Final Time';
  const um1 = 'N·m';
  const um2 = 's';
  const um3 = 's';
  const solutionUM = 'N·m·s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setAverageTorque(value);
    }
    if (variableName === variableName2) {
      setInitialTime(value);
    }
    if (variableName === variableName3) {
      setFinalTime(value);
    }
  };
  const onACHandler = () => {
    setAverageTorque('');
    setInitialTime('');
    setFinalTime('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const changeInTime = finalTime - initialTime;
    const solution = new mechanics().angularImpulse(
      averageTorque,
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
        value={averageTorque}
        onChangeHandler={onChangeHandler}
        um={um1}
        type={type}
      />
      <Input
        value={initialTime}
        onChangeHandler={onChangeHandler}
        um={um2}
        type={type}
      />
      <Input
        value={finalTime}
        onChangeHandler={onChangeHandler}
        um={um3}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default AngularImpulse;
