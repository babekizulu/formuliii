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

const Acceleration = () => {
  //state management
  const [initialVelocity, setInitialVelocity] = useState('');
  const [finalVelocity, setFinalVelocity] = useState('');
  const [initialTime, setInitialTime] = useState('');
  const [finalTime, setFinalTime] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = 'acceleration';
  const variableName1 = 'Initial Velocity';
  const variableName2 = 'Final Velocity';
  const variableName3 = 'Initial Time';
  const variableName4 = 'Final Time';
  const um1 = 'm/s';
  const um2 = 'm/s';
  const um3 = 's';
  const um4 = 's';
  const solutionUM = 'm/s²';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setInitialVelocity(value);
    }
    if (variableName === variableName2) {
      setFinalVelocity(value);
    }
    if (variableName === variableName3) {
      setInitialTime(value);
    }
    if (variableName === variableName4) {
      setFinalTime(value);
    }
  };
  const onACHandler = () => {
    setInitialVelocity('');
    setFinalVelocity('');
    setInitialTime('');
    setFinalTime('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const changeInVelocity = finalVelocity - initialVelocity;
    const changeInTime = finalTime - initialTime;
    const solution = new mechanics().acceleration(
      changeInVelocity,
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
        stateValue={initialVelocity}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type='scientific'
      />
      <Input
        stateValue={finalVelocity}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type='scientific'
      />
      <Input
        stateValue={initialTime}
        onChangeHandler={onChangeHandler}
        um={um3}
        name={variableName3}
        type='scientific'
      />
      <Input
        stateValue={finalTime}
        onChangeHandler={onChangeHandler}
        um={um4}
        name={variableName4}
        type='scientific'
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default Acceleration;
