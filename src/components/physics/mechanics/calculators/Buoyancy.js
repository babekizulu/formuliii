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

const Buoyancy = () => {
  //state management
  const [density, setDensity] = useState('');
  const [accelerationDueToGravity, setAccelerationDueToGravity] = useState('');
  const [volumeDisplaced, setVolumeDisplaced] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Density';
  const variableName2 = 'Acceleration Due to Gravity';
  const variableName3 = 'Volume Displaced';
  const um1 = 'kg/m³';
  const um2 = 'm/s²';
  const um3 = 'm³';
  const solutionUM = 'N';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setDensity(value);
    }
    if (variableName === variableName2) {
      setAccelerationDueToGravity(value);
    }
    if (variableName === variableName3) {
      setVolumeDisplaced(value);
    }
  };
  const onACHandler = () => {
    setDensity('');
    setAccelerationDueToGravity('');
    setVolumeDisplaced('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().buoyancy(
      density,
      accelerationDueToGravity,
      volumeDisplaced,
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
        stateValue={density}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={accelerationDueToGravity}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={volumeDisplaced}
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

export default Buoyancy;
