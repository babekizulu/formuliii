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

const DynamicViscosity = () => {
  //state management
  const [shearingStress, setShearingStress] = useState('');
  const [shearRate, setShearRate] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Shearing Stress';
  const variableName2 = 'Shear Rate';
  const um1 = 'Pa';
  const um2 = 's⁻¹';
  const solutionUM = 'Pa·s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setShearingStress(value);
    }
    if (variableName === variableName2) {
      setShearRate(value);
    }
  };
  const onACHandler = () => {
    setShearingStress('');
    setShearRate('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().dynamicViscosity();
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
        stateValue={shearingStress}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={shearRate}
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

export default DynamicViscosity;
