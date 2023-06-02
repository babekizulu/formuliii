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

const BulkModulus = () => {
  //state management
  const [initialVolumeOfSubstance, setInitialVolumeOfSubstance] = useState('');
  const [changeInVolume, setChangeInVolume] = useState('');
  const [changeInPressure, setChangeInPressure] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Initial Volume of Substance';
  const variableName2 = 'Change in Volume';
  const variableName3 = 'Change in Pressure';
  const um1 = 'm³';
  const um2 = 'm³';
  const um3 = 'Pa';
  const solutionUM = 'Pa';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setInitialVolumeOfSubstance(value);
    }
    if (variableName === variableName2) {
      setChangeInVolume(value);
    }
    if (variableName === variableName3) {
      setChangeInPressure(value);
    }
  };
  const onACHandler = () => {
    setInitialVolumeOfSubstance('');
    setChangeInVolume('');
    setChangeInPressure('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().bulkModulus(
      initialVolumeOfSubstance,
      changeInVolume,
      changeInPressure,
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
        stateValue={initialVolumeOfSubstance}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={changeInVolume}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={changeInPressure}
        onChangeHandler={onChangeHandler}
        um={um3}
        name={variableName3}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default BulkModulus;
