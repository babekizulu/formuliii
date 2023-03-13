//libs
import React from 'react';
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

const DynamicViscosity = () => {
  //state management
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [solution, setSolution] = useState(0);
  //variables
  const formula = '';
  const variableName1 = '';
  const variableName2 = '';
  const um1 = '';
  const um2 = '';
  const solutionUM = '';
  const type = 'scientific';
  //handlers
  const onChange = (variableName, value) => {
    if (variableName === variableName1) {
      setX(value);
    }
    if (variableName === variableName2) {
      setY(value);
    }
  };
  const onAC = () => {
    setX('');
    setY('');
    setSolution(0);
  };
  const onSolve = () => {
    const solution = new mechanics();
    setSolution(solution);
  };
  return (
    <div className='calculator'>
      <BackBtn />
      <div className='go-to-bar'>
        <GoToInfo />
        <GoToGraph />
        <GoToNumeric />
      </div>
      <Solution />
      <Input />
      <Input />
      <ACBtn />
      <SolveBtn />
    </div>
  );
};

export default DynamicViscosity;
