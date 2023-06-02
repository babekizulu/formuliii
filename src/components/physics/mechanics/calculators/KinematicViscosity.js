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

const KinematicViscosity = () => {
  //state management
  const [dynamicViscosity, setDynamicViscosity] = useState('');
  const [density, setDensity] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Dynamic Viscosity';
  const variableName2 = 'Density';
  const um1 = 'Pa·s';
  const um2 = 'kg/m³';
  const solutionUM = 'm²/s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setDynamicViscosity(value);
    }
    if (variableName === variableName2) {
      setDensity(value);
    }
  };
  const onACHandler = () => {
    setDynamicViscosity('');
    setDensity('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().kinematicViscosity(
      dynamicViscosity,
      density,
    );
    setSolution(solution);
  };
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics' />
      {/* <div className='go-to-bar'>
        <GoToInfo />
        <GoToGraph />
        <GoToNumeric />
      </div> */}
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input
        stateValue={dynamicViscosity}
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
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default KinematicViscosity;
