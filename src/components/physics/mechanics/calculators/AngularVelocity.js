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

const AngularVelocity = () => {
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

export default AngularVelocity;
