//libs
import React, { useState } from 'react';
import mechanics from '../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../buttons/BackBtn';
// import GoToInfo from '../../../buttons/GoToInfo';
// import GoToGraph from '../../../buttons/GoToGraph';
// import GoToNumeric from '../../../buttons/GoToNumeric';
import Solution from '../../../calculator/Solution';
import Input from '../../../calculator/Input';
import ACBtn from '../../../buttons/ACBtn';
import SolveBtn from '../../../buttons/SolveBtn';

const FroudeNumber = () => {
  //state management
  const [flowSpeed, setFlowSpeed] = useState('');
  const [gravitationalAcceleration, setGravitationalAcceleration] =
    useState('');
  const [depthOfFlow, setDepthOfFlow] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Flow Speed';
  const variableName2 = 'Gravitational Acceleration';
  const variableName3 = 'Depth of Flow';
  const um1 = 'm/s';
  const um2 = 'm/s²';
  const um3 = 'm';
  const solutionUM = '';
  const type = 'scientific';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setFlowSpeed(value);
    }
    if (variableName === variableName2) {
      setGravitationalAcceleration(value);
    }
    if (variableName === variableName3) {
      setDepthOfFlow(value);
    }
  };
  const onACHandler = () => {
    setFlowSpeed('');
    setGravitationalAcceleration('');
    setDepthOfFlow('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().froudeNumber(
      flowSpeed,
      gravitationalAcceleration,
      depthOfFlow,
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
        stateValue={flowSpeed}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={gravitationalAcceleration}
        onChangeHandler={onChangeHandler}
        um={um2}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={depthOfFlow}
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

export default FroudeNumber;
