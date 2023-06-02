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

const RotationalKineticEnergy = () => {
  //state management
  const [momentOfInertia, setMomentOfInertia] = useState('');
  const [angularVelocity, setAngularVelocity] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Moment of Inertia';
  const variableName2 = 'Angular Velocity';
  const um1 = 'kg·m²';
  const um2 = 'rad/s';
  const solutionUM = 'J';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setMomentOfInertia(value);
    }
    if (variableName === variableName2) {
      setAngularVelocity(value);
    }
  };
  const onACHandler = () => {
    setMomentOfInertia('');
    setAngularVelocity('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().rotationalKineticEnergy(
      momentOfInertia,
      angularVelocity,
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
        stateValue={momentOfInertia}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={angularVelocity}
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

export default RotationalKineticEnergy;
