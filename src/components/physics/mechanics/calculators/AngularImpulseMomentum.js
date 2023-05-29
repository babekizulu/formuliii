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

const AngularImpulseMomentum = () => {
  //@TODO: Set solutionUM value
  //state management
  const [mass, setMass] = useState('');
  const [changeInAngularVelocity, setChangeInAngularVelocity] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = 'angular-impulse-momentum';
  const variableName1 = 'Mass';
  const variableName2 = 'Change in Angular Velocity';
  const um1 = 'kg';
  const um2 = 'm/s';
  const solutionUM = '';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setMass(value);
    }
    if (variableName === variableName2) {
      setChangeInAngularVelocity(value);
    }
  };
  const onACHandler = () => {
    setMass('');
    setChangeInAngularVelocity('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().angularImpulseMomentum(
      mass,
      changeInAngularVelocity,
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
        stateValue={mass}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={changeInAngularVelocity}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName1}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default AngularImpulseMomentum;
