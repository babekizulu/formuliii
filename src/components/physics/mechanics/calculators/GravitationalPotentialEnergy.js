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

const GravitationalPotentialEnergy = () => {
  //state management
  const [mass, setMass] = useState('');
  const [gravitationalField, setGravitationalField] = useState('');
  const [height, setHeight] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Mass';
  const variableName2 = 'Gravitational Field';
  const variableName3 = 'Height';
  const um1 = 'kg';
  const um2 = 'N/kg';
  const um3 = 'm';
  const solutionUM = 'J';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setMass(value);
    }
    if (variableName === variableName2) {
      setGravitationalField(value);
    }
    if (variableName === variableName3) {
      setHeight(value);
    }
  };
  const onACHandler = () => {
    setMass('');
    setGravitationalField('');
    setHeight('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().gravitationalPotentialEnergy(
      mass,
      gravitationalField,
      height,
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
        stateValue={mass}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={gravitationalField}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={height}
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

export default GravitationalPotentialEnergy;
