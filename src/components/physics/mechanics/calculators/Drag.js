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

const Drag = () => {
  //state management
  const [densityOfFluid, setDensityOfFluid] = useState('');
  const [speedOfObjectRelativeToFluid, setSpeedOfObjectRelativeToFluid] =
    useState('');
  const [dragCoefficient, setDragCoefficient] = useState('');
  const [crossSectionalArea, setCrossSectionalArea] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Density of Fluid';
  const variableName2 = 'Speed of Object Relative to Fluid';
  const variableName3 = 'Drag Coefficient';
  const variableName4 = 'Cross-Sectional Area';
  const um1 = 'kg/m³';
  const um2 = 'm/s';
  const um3 = '';
  const um4 = 'm²';
  const solutionUM = 'N';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setDensityOfFluid(value);
    }
    if (variableName === variableName2) {
      setSpeedOfObjectRelativeToFluid(value);
    }
    if (variableName === variableName3) {
      setDragCoefficient(value);
    }
    if (variableName === variableName4) {
      setCrossSectionalArea(value);
    }
  };
  const onACHandler = () => {
    setDensityOfFluid('');
    setSpeedOfObjectRelativeToFluid('');
    setDragCoefficient('');
    setCrossSectionalArea('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().drag(
      densityOfFluid,
      speedOfObjectRelativeToFluid,
      dragCoefficient,
      crossSectionalArea,
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
        stateValue={densityOfFluid}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={speedOfObjectRelativeToFluid}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={dragCoefficient}
        onChangeHandler={onChangeHandler}
        um={um3}
        name={variableName3}
        type={type}
      />
      <Input
        stateValue={crossSectionalArea}
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

export default Drag;
