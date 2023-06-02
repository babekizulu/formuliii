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

const DryFriction = () => {
  //state management
  const [coefficientOfFriction, setCoefficientOfFriction] = useState('');
  const [normalForce, setNormalForce] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Coefficient of Friction';
  const variableName2 = 'Normal Force';
  const um1 = '';
  const um2 = 'N';
  const solutionUM = 'μ';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setCoefficientOfFriction(value);
    }
    if (variableName === variableName2) {
      setNormalForce(value);
    }
  };
  const onACHandler = () => {
    setCoefficientOfFriction('');
    setNormalForce('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().dryFriction(
      coefficientOfFriction,
      normalForce,
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
        stateValue={coefficientOfFriction}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={normalForce}
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

export default DryFriction;
