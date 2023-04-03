//libs
import { React, useState, useEffect } from 'react';
import {BalanceSheetFormulae} from '../../../../libs/AccountingFormulae'
//components
import BackBtn from '../../../BackBtn';
import CurrencySelector from '../../../CurrencySelector';
import Calculator from '../../../CalculatorParts/Calculator';
//destructured formulas
const { basicBalanceSheetFormula } = new BalanceSheetFormulae();

const BasicBalanceSheetCalculator = () => {
  const [selected, setSelected] = useState('rand');
  const [outstandingDebt, setOutstandingDebt] = useState('');
  const [ownersEquity, setOwnersEquity] = useState('');
  const [solution, setSolution] = useState(0);
  const [solutionUM, setSolutionUM] = useState('ZAR');
  const vname1 = 'Outstanding Debt';
  const vname2 = `Owner's Equity`;
  const inputNamesArr = [vname1, vname2];
  const stateArr = [outstandingDebt, ownersEquity];
  const unitsOfMeasurementArr = [solutionUM, solutionUM];
  //select currency handler
  const selectHandler = (e) => {
    setSelected(e.target.value);
  };

  //choose unit of measurement based on selected currency
  useEffect(() => {
    if (selected === 'rands') {
      setSolutionUM('ZAR');
    }
    if (selected === 'pounds') {
      setSolutionUM('£');
    }
    if (selected === 'dollars') {
      setSolutionUM('$');
    }
    if (selected === 'euros') {
      setSolutionUM('€');
    }
    if (selected === 'yuan') {
      setSolutionUM('¥');
    }
    if (selected === 'ruble') {
      setSolutionUM('₽');
    }
    if (selected === 'algerianDinar') {
      setSolutionUM('DA');
    }
    if (selected === 'kwanza') {
      setSolutionUM('Kz');
    }
    if (selected === 'franc') {
      setSolutionUM('Fr');
    }
    if (selected === 'rupee') {
      setSolutionUM('₹');
    }
    if (selected === 'pula') {
      setSolutionUM('P');
    }
    if (selected === 'nakfa') {
      setSolutionUM('Nkf');
    }
    if (selected === 'emalangeni') {
      setSolutionUM('E');
    }
    if (selected === 'birr') {
      setSolutionUM('Br');
    }
    if (selected === 'dalasi') {
      setSolutionUM('D');
    }
    if (selected === 'cedi') {
      setSolutionUM('GH₵');
    }
    if (selected === 'shillings') {
      setSolutionUM('Shs');
    }
    if (selected === 'loti') {
      setSolutionUM('L');
    }
    if (selected === 'kwacha') {
      setSolutionUM('K');
    }
    if (selected === 'ariary') {
      setSolutionUM('Ar');
    }
    if (selected === 'ouguiya') {
      setSolutionUM('UM');
    }
    if (selected === 'mauritianRupee') {
      setSolutionUM('Rs');
    }
    if (selected === 'dirham') {
      setSolutionUM('DH');
    }
    if (selected === 'metical') {
      setSolutionUM('Mt');
    }
    if (selected === 'naira') {
      setSolutionUM('₦');
    }
    if (selected === 'sahrawiPeseta') {
      setSolutionUM('Pts');
    }
    if (selected === 'dobra') {
      setSolutionUM('Db');
    }
    if (selected === 'leone') {
      setSolutionUM('Le');
    }
    if (selected === 'sudanesePounds') {
      setSolutionUM('LS');
    }
    if (selected === 'paanga') {
      setSolutionUM('T$');
    }
    if (selected === 'tunisianDinar') {
      setSolutionUM('DT');
    }
    if (selected === 'libyanDinar') {
      setSolutionUM('LD');
    }
  }, [selected]);
  //onChangeHandler
  const onChangeHandler = (variableName, value) => {
    if (variableName === vname1) {
      setOutstandingDebt(value);
    }
    if (variableName === vname2) {
      setOwnersEquity(value);
    }
  };
  //solution handler
  const solutionHandler = () => {
    const solution = basicBalanceSheetFormula(outstandingDebt, ownersEquity);
    setSolution(solution);
  };

  //clear handler
  const clearHandler = () => {
    setOutstandingDebt('');
    setOwnersEquity('');
    setSolution(0);
  };

  return (
    <div className='calculator-container'>
      <BackBtn prevUrl='/accounting/balance-sheet' />
      <CurrencySelector selectHandler={selectHandler} selected={selected} />
      <Calculator
        inputNames={inputNamesArr}
        unitsOfMeasurementArr={unitsOfMeasurementArr}
        solutionHandler={solutionHandler}
        solution={solution}
        solutionUM={solutionUM}
        stateArr={stateArr}
        onChangeHandler={onChangeHandler}
        subjectTag='financial'
        clearHandler={clearHandler}
      />
    </div>
  );
};

export default BasicBalanceSheetCalculator;
