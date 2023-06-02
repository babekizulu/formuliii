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

const ReynoldsNumber = () => {
  //state management
  const [density, setDensity] = useState('');
  const [flowSpeed, setFlowSpeed] = useState('');
  const [characteristicLinearDimension, setCharacteristicLinearDimension] =
    useState('');
  const [dynamicViscosity, setDynamicViscosity] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Density';
  const variableName2 = 'Flow Speed';
  const variableName3 = 'Characteristic Linear Dimension';
  const variableName4 = 'Dynamic Viscosity';
  const um1 = 'kg/m³';
  const um2 = 'm/s';
  const um3 = 'm';
  const um4 = 'm/s';
  const solutionUM = 'Pa·s';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setDensity(value);
    }
    if (variableName === variableName2) {
      setFlowSpeed(value);
    }
    if (variableName === variableName3) {
      setCharacteristicLinearDimension(value);
    }
    if (variableName === variableName4) {
      setDynamicViscosity(value);
    }
  };
  const onACHandler = () => {
    setDensity('');
    setFlowSpeed('');
    setCharacteristicLinearDimension('');
    setDynamicViscosity('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().reynoldsNumber(
      density,
      flowSpeed,
      characteristicLinearDimension,
      dynamicViscosity,
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
        stateValue={flowSpeed}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={characteristicLinearDimension}
        onChangeHandler={onChangeHandler}
        um={um3}
        name={variableName3}
        type={type}
      />
      <Input
        stateValue={dynamicViscosity}
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

export default ReynoldsNumber;
