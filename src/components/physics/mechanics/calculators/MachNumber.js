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

const MachNumber = () => {
  //state management
  const [localFlowVelocity, setLocalFlowVelocity] = useState('');
  const [speedOfSoundInTheMedium, setSpeedOfSoundInTheMedium] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  // const formula = '';
  const variableName1 = 'Local Flow Velocity';
  const variableName2 = 'Speed of Sound in the Medium';
  const um1 = 'm/s';
  const um2 = 'm/s';
  const solutionUM = 'mach';
  const type = 'scientificAlt';
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setLocalFlowVelocity(value);
    }
    if (variableName === variableName2) {
      setSpeedOfSoundInTheMedium(value);
    }
  };
  const onACHandler = () => {
    setLocalFlowVelocity('');
    setSpeedOfSoundInTheMedium('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new mechanics().machNumber(
      localFlowVelocity,
      speedOfSoundInTheMedium,
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
        stateValue={localFlowVelocity}
        onChangeHandler={onChangeHandler}
        um={um1}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={speedOfSoundInTheMedium}
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

export default MachNumber;
