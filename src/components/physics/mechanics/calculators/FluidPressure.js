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

const FluidPressure = () => {
  //state management
  const [initialPressure, setInitialPressure] = useState('');
  const [density, setDensity] = useState('');
  const [accelerationDueToGravity, setAccelerationDueToGravity] = useState('');
  const [fluidDepth, setFluidDepth] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Initial Pressure';
  const variableName2 = 'Density';
  const variableName3 = 'Acceleration Due to Gravity';
  const variableName4 = 'Fluid Depth';
  const um1 = 'Pa';
  const um2 = 'kg/m³';
  const um3 = 'm/s²';
  const um4 = 'm';
  const solutionUM = '';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setInitialPressure(value);
    }
    if (variableName === variableName2) {
      setDensity(value);
    }
    if (variableName === variableName2) {
      setAccelerationDueToGravity(value);
    }
    if (variableName === variableName2) {
      setFluidDepth(value);
    }
  };
  const onACHandler = () => {
    setInitialPressure('');
    setDensity('');
    setAccelerationDueToGravity('');
    setFluidDepth('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().fluidPressure(
      initialPressure,
      density,
      accelerationDueToGravity,
      fluidDepth,
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
        stateValue={initialPressure}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={density}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={accelerationDueToGravity}
        onChangeHandler={onChangeHandler}
        um={um3}
        name={variableName3}
        type={type}
      />
      <Input
        stateValue={fluidDepth}
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

export default FluidPressure;
