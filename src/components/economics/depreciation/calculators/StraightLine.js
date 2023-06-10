//libs
import React, { useState, useEffect } from 'react';
import depreciation from '../../../../libs/formulae/economics/depreciation';
//components
import BackBtn from '../../../buttons/BackBtn';
import CurrencySelector from '../../../calculator/CurrencySelector';
import Solution from '../../../calculator/Solution';
import Input from '../../../calculator/Input';
import ACBtn from '../../../buttons/ACBtn';
import SolveBtn from '../../../buttons/SolveBtn';

const StraightLine = () => {
  //state management
  const [selected, setSelected] = useState('rand');
  const [cost, setCost] = useState('');
  const [salvageValue, setSalvageValue] = useState('');
  const [lifespan, setLifespan] = useState('');
  const [currency, setCurrency] = useState('ZAR');
  const [solution, setSolution] = useState(0);
  //variables
  const variableName1 = 'Cost';
  const variableName2 = 'Salvage Value';
  const variableName3 = 'Lifespan';
  const um3 = 'Years';
  const type = 'financial';
  //side effects
  useEffect(() => {
    if (selected === 'rands') {
      setCurrency('ZAR');
    }
    if (selected === 'pounds') {
      setCurrency('£');
    }
    if (selected === 'dollars') {
      setCurrency('$');
    }
    if (selected === 'euros') {
      setCurrency('€');
    }
    if (selected === 'yuan') {
      setCurrency('¥');
    }
    if (selected === 'ruble') {
      setCurrency('₽');
    }
    if (selected === 'algerianDinar') {
      setCurrency('DA');
    }
    if (selected === 'kwanza') {
      setCurrency('Kz');
    }
    if (selected === 'franc') {
      setCurrency('Fr');
    }
    if (selected === 'rupee') {
      setCurrency('₹');
    }
    if (selected === 'pula') {
      setCurrency('P');
    }
    if (selected === 'nakfa') {
      setCurrency('Nkf');
    }
    if (selected === 'emalangeni') {
      setCurrency('E');
    }
    if (selected === 'birr') {
      setCurrency('Br');
    }
    if (selected === 'dalasi') {
      setCurrency('D');
    }
    if (selected === 'cedi') {
      setCurrency('GH₵');
    }
    if (selected === 'shillings') {
      setCurrency('Shs');
    }
    if (selected === 'loti') {
      setCurrency('L');
    }
    if (selected === 'kwacha') {
      setCurrency('K');
    }
    if (selected === 'ariary') {
      setCurrency('Ar');
    }
    if (selected === 'ouguiya') {
      setCurrency('UM');
    }
    if (selected === 'mauritianRupee') {
      setCurrency('Rs');
    }
    if (selected === 'dirham') {
      setCurrency('DH');
    }
    if (selected === 'metical') {
      setCurrency('Mt');
    }
    if (selected === 'naira') {
      setCurrency('₦');
    }
    if (selected === 'sahrawiPeseta') {
      setCurrency('Pts');
    }
    if (selected === 'dobra') {
      setCurrency('Db');
    }
    if (selected === 'leone') {
      setCurrency('Le');
    }
    if (selected === 'sudanesePounds') {
      setCurrency('LS');
    }
    if (selected === 'paanga') {
      setCurrency('T$');
    }
    if (selected === 'tunisianDinar') {
      setCurrency('DT');
    }
    if (selected === 'libyanDinar') {
      setCurrency('LD');
    }
  }, [selected]);
  //handlers
  const selectHandler = (e) => {
    setSelected(e.target.value);
  };
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setCost(value);
    }
    if (variableName === variableName2) {
      setSalvageValue(value);
    }
    if (variableName === variableName3) {
      setLifespan(value);
    }
  };

  const onACHandler = () => {
    setCost('');
    setSalvageValue('');
    setLifespan('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const sol = new depreciation().straightLine(cost, salvageValue, lifespan);
    setSolution(sol);
  };
  return (
    <div className='calculator'>
      <BackBtn prevDir='/economics/depreciation' />
      <CurrencySelector selectHandler={selectHandler} selected={selected} />
      <Solution solution={solution} solutionUM={currency} />
      <Input
        stateValue={cost}
        onChangeHandler={onChangeHandler}
        um={currency}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={salvageValue}
        onChangeHandler={onChangeHandler}
        um={currency}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={lifespan}
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

export default StraightLine;
