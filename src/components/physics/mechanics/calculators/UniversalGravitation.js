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

const UniversalGravitation = () => {
  //state management
  const [gravitationalConstant, setGravitationalConstant] =
    useState('6.67430*10**-11');
  const [mass1, setMass1] = useState('');
  const [mass2, setMass2] = useState('');
  const [
    distanceBetweenCentersOfTheMasses,
    setDistanceBetweenCentersOfTheMasses,
  ] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Gravitational Constant';
  const variableName2 = 'Mass 1';
  const variableName3 = 'Mass 2';
  const variableName4 = 'Distance between the Centers of the Masses';
  const um1 = 'N·m²/kg²';
  const um2 = 'kg';
  const um3 = 'm';
  const solutionUM = 'G';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setGravitationalConstant(value);
    }
    if (variableName === variableName2) {
      setMass1(value);
    }
    if (variableName === variableName2) {
      setMass2(value);
    }
    if (variableName === variableName2) {
      setDistanceBetweenCentersOfTheMasses(value);
    }
  };
  const onACHandler = () => {
    setGravitationalConstant('');
    setMass1('');
    setMass2('');
    setDistanceBetweenCentersOfTheMasses('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().universalGravitation(
      gravitationalConstant,
      mass1,
      mass2,
      distanceBetweenCentersOfTheMasses,
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
        stateValue={gravitationalConstant}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={mass1}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={mass2}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName3}
        type={type}
      />
      <Input
        stateValue={distanceBetweenCentersOfTheMasses}
        onChangeHandler={onChangeHandler}
        um={um3}
        name={variableName4}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default UniversalGravitation;
