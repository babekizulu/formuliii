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

const OrbitalSpeed = () => {
  //state management
  const [gravitationalConstant, setGravitationalConstant] =
    useState('6.67430*10**-11');
  const [mass, setMass] = useState('');
  const [
    distanceBetweenCentersOfTheMasses,
    setDistanceBetweenCentersOfTheMasses,
  ] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Gravitational Constant';
  const variableName2 = 'Mass';
  const variableName3 = 'Distance between Centers of the Masses';
  const um1 = 'N·m²/kg²';
  const um2 = 'kg';
  const um3 = 'm';
  const solutionUM = 'm/s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setGravitationalConstant(value);
    }
    if (variableName === variableName2) {
      setMass(value);
    }
    if (variableName === variableName3) {
      setDistanceBetweenCentersOfTheMasses(value);
    }
  };
  const onACHandler = () => {
    setGravitationalConstant('');
    setMass('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().orbitalSpeed(gravitationalConstant, mass);
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
        stateValue={gravitationalConstant}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={mass}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={distanceBetweenCentersOfTheMasses}
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

export default OrbitalSpeed;
