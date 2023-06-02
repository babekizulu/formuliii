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

const ShearModulus = () => {
  //state management
  const [
    shearStressOrPressureInXYDirection,
    setShearStressOrPressureInXYDirection,
  ] = useState('');
  const [shearStrain, setShearStrain] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Shear Stress or Pressure in XY Direction';
  const variableName2 = 'Shear Strain';
  const um1 = 'Pa';
  const um2 = '';
  const solutionUM = 'Pa';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setShearStressOrPressureInXYDirection(value);
    }
    if (variableName === variableName2) {
      setShearStrain(value);
    }
  };
  const onACHandler = () => {
    setShearStressOrPressureInXYDirection('');
    setShearStrain('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().shearModulus(
      shearStressOrPressureInXYDirection,
      shearStrain,
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
        stateValue={shearStressOrPressureInXYDirection}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={shearStrain}
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

export default ShearModulus;
