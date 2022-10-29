//libs
import {React, useState} from "react";
import { BalanceSheetFormulae } from "../../../../libs/AccountingFormulae";
//components
import BackBtn from '../../../BackBtn';
import CurrencySelector from "../../../CurrencySelector";
import Calculator from '../../../CalculatorParts/Calculator';
//destructured formulas
const {basicBalanceSheetFormula} = new BalanceSheetFormulae();

const BasicBalanceSheetCalculator = () => {
    const [selected, setSelected] = useState('rand');
    const [outstandingDebt, setOutstandingDebt] = useState('');
    const [ownersEquity, setOwnersEquity] = useState('');
    const [solution, setSolution] = useState(0);
    const vname1 = 'Outstanding Debt';
    const vname2 = `Owner's Equity`;
    const inputNamesArr = [
        vname1,
        vname2
    ];
    const stateArr = [
        outstandingDebt,
        ownersEquity
    ];
    let unitsOfMeasurementArr = [];
    //select currency handler
    const selectHandler = e => {
        setSelected(e.target.value);
        //choose units of measurement array based on currency
        if(selected === 'rands') {
            unitsOfMeasurementArr.push('ZAR', 'ZAR');
        }
        if(selected === 'pounds') {
            unitsOfMeasurementArr.push('£', '£');
        }
        if(selected === 'dollars') {
            unitsOfMeasurementArr.push('$', '$');
        }
        if(selected === 'euros') {
            unitsOfMeasurementArr.push('€', '€');
        }
        if(selected === 'yuan') {
            unitsOfMeasurementArr.push('¥', '¥');
        }
        if(selected === 'ruble') {
            unitsOfMeasurementArr.push('₽', '₽');
        }
        if(selected === 'algerianDinar') {
            unitsOfMeasurementArr.push('DA', 'DA');
        }
        if(selected === 'kwanza') {
            unitsOfMeasurementArr.push('Kz', 'Kz');
        }
        if(selected === 'franc') {
            unitsOfMeasurementArr.push('Fr', 'Fr');
        }
        if(selected === 'rupee') {
            unitsOfMeasurementArr.push('₹', '₹');
        }
        if(selected === 'pula') {
            unitsOfMeasurementArr.push('P', 'P');
        }
        if(selected === 'nakfa') {
            unitsOfMeasurementArr.push('Nkf', 'Nkf');
        }
        if(selected === 'emalangeni') {
            unitsOfMeasurementArr.push('E', 'E');
        }
        if(selected === 'birr') {
            unitsOfMeasurementArr.push('Br', 'Br');
        }
        if(selected === 'dalasi') {
            unitsOfMeasurementArr.push('D', 'D');
        }
        if(selected === 'cedi') {
            unitsOfMeasurementArr.push('GH₵', 'GH₵');
        }
        if(selected === 'shillings') {
            unitsOfMeasurementArr.push('Shs', 'Shs');
        }
        if(selected === 'loti') {
            unitsOfMeasurementArr.push('L', 'L');
        }
        if(selected === 'kwacha') {
            unitsOfMeasurementArr.push('K', 'K');
        }
        if(selected === 'ariary') {
            unitsOfMeasurementArr.push('Ar', 'Ar');
        }
        if(selected === 'ouguiya') {
            unitsOfMeasurementArr.push('UM', 'UM');
        }
        if(selected === 'mauritianRupee') {
            unitsOfMeasurementArr.push('Rs', 'Rs');
        }
        if(selected === 'dirham') {
            unitsOfMeasurementArr.push('DH', 'DH');
        }
        if(selected === 'metical') {
            unitsOfMeasurementArr.push('Mt', 'Mt');
        }
        if(selected === 'naira') {
            unitsOfMeasurementArr.push('₦', '₦');
        }
        if(selected === 'sahrawiPeseta') {
            unitsOfMeasurementArr.push('Pts', 'Pts');
        }
        if(selected === 'dobra') {
            unitsOfMeasurementArr.push('Db', 'Db');
        }
        if(selected === 'leone') {
            unitsOfMeasurementArr.push('Le', 'Le');
        }
        if(selected === 'sudanesePounds') {
            unitsOfMeasurementArr.push('LS', 'LS');
        }
        if(selected === 'paanga') {
            unitsOfMeasurementArr.push('T$', 'T$');
        }
        if(selected === 'tunisianDinar') {
            unitsOfMeasurementArr.push('DT', 'DT');
        }
        if(selected === 'libyanDinar') {
            unitsOfMeasurementArr.push('LD', 'LD');
        }
    }
    //onChangeHandler
    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setOutstandingDebt(value);
        }
        if (variableName === vname2) {
            setOwnersEquity(value);
        }
    }
    //solution handler
    const solutionHandler = () => {
        const solution = basicBalanceSheetFormula(outstandingDebt, ownersEquity);
        setSolution(solution);
    }
    
    return (
        <div className="calculator-container">
            <BackBtn/>
            <CurrencySelector selectHandler={selectHandler} selected={selected}/>
            <Calculator 
            inputNames={inputNamesArr} 
            unitsOfMeasurementArr={unitsOfMeasurementArr}
            solutionHandler={solutionHandler}
            solution={solution}
            solutionUM='R'
            stateArr={stateArr}
            onChangeHandler={onChangeHandler}
            subjectTag='financial'
            />
        </div>
    );
};

export default BasicBalanceSheetCalculator;