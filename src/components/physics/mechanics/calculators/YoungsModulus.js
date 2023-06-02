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

const YoungsModulus = () => {
  //state management
  const [uniaxialStress, setUniaxialStress] = useState('');
  const [strainOrProportionalDeformation, setStrainOrProportionalDeformation] =
    useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Uniaxial Stress';
  const variableName2 = 'Strain or Proportional Deformation';
  const um1 = 'Pa';
  const um2 = '';
  const solutionUM = 'Pa';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setUniaxialStress(value);
    }
    if (variableName === variableName2) {
      setStrainOrProportionalDeformation(value);
    }
  };
  const onACHandler = () => {
    setUniaxialStress('');
    setStrainOrProportionalDeformation('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().youngsModulus(
      uniaxialStress,
      strainOrProportionalDeformation,
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
        stateValue={uniaxialStress}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={strainOrProportionalDeformation}
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

export default YoungsModulus;
