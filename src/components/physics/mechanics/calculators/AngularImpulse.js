//libs
import React, { useState } from 'react';
import mechanics from '../../../../libs/formulae/physics/mechanics';
//components
import BackBtn from '../../../buttons/BackBtn';
import GoToInfo from '../../../buttons/GoToInfo';
import GoToGraph from '../../../buttons/GoToGraph';
import GoToNumeric from '../../../buttons/GoToNumeric';
import Solution from '../../../calculator/Solution';
import Input from '../../../calculator/Input';
import ACBtn from '../../../buttons/ACBtn';
import SolveBtn from '../../../buttons/SolveBtn';

const AngularImpulse = () => {
  //state management
  const [averageTorque, setAverageTorque] = useState('');
  const [initialTime, setInitialTime] = useState('');
  const [finalTime, setFinalTime] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const formula = 'angular-impulse';
  const variableName1 = 'Average Torque';
  const variableName2 = 'Initial Time';
  const variableName3 = 'Final Time';
  const um1 = 'N-m';
  const um2 = 's';
  const um3 = 's';
  const solutionUM = 'Nm s';
  const type = 'scientific';
  //handlers
  const onChange = (variableName, value) => {
    if (variableName === variableName1) {
      setAverageTorque(value);
    }
    if (variableName === variableName2) {
      setInitialTime(value);
    }
    if (variableName === variableName3) {
      setFinalTime(value);
    }
  };
  const onAC = () => {
    setAverageTorque('');
    setInitialTime('');
    setFinalTime('');
    setSolution(0);
  };
  const onSolve = () => {
    const changeInTime = finalTime - initialTime;
    const solution = new mechanics().angularImpulse(
      averageTorque,
      changeInTime,
    );
    setSolution(solution);
  };
  return (
    <div className='calculator'>
      <BackBtn prevDir='/physics/mechanics' />
      <div className='go-to-bar'>
        <GoToInfo formula={formula} />
        <GoToGraph formula={formula} />
        <GoToNumeric />
      </div>
      <Solution solution={solution} solutionUM={solutionUM} />
      <Input value={averageTorque} onChange={onChange} um={um1} type={type} />
      <Input value={initialTime} onChange={onChange} um={um2} type={type} />
      <Input value={finalTime} onChange={onChange} um={um3} type={type} />
      <ACBtn onAC={onAC} />
      <SolveBtn onSolve={onSolve} />
    </div>
  );
};

export default AngularImpulse;
