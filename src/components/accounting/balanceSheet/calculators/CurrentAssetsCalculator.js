//libs
import {React, useState, useEffect} from 'react';
import {BalanceSheetFormulae} from '../../../../libs/AccountingFormulae';
//components
import BackBtn from '../../../BackBtn';
import CurrencySelector from '../../../CurrencySelector';
import Calculator from '../../../CalculatorParts/Calculator';
//destructured formula
const {currentAssetsFormula} = new BalanceSheetFormulae();

const CurrentAssetsCalculator = () => {
    const [selected, setSelected] = useState('rand');
    const [solutionUM, setSolutionUM] = useState('ZAR');
    const [cash, setCash] = useState('');
    const [accountsReceivable, setAccountsReceivable] = useState('');
    const [inventories, setInventories] = useState('');
    const [prepaidExpenses, setPrepaidExpenses] = useState('');
    const [solution, setSolution] = useState(0);
    //variable names and subject tag
    const vname1 = 'Cash';
    const vname2 = 'Accounts Receivable';
    const vname3 = 'Inventories';
    const vname4 = 'Prepaid Expenses';
    const subTag = 'financial';
    //arrays
    const inputNamesArr = [
        vname1,
        vname2,
        vname3,
        vname4
    ];
    const unitsOfMeasurementArr = [
        solutionUM,
        solutionUM,
        solutionUM,
        solutionUM
    ];
    const stateArr = [
        cash,
        accountsReceivable,
        inventories,
        prepaidExpenses
    ];
    //select handler
    const selectHandler = e => {
        setSelected(e.target.value);
    };
    //choose unit of measurement based on selected currency
    useEffect(() => {
        
        if(selected === 'rands') {
            setSolutionUM('ZAR')
        }
        if(selected === 'pounds') {
            setSolutionUM('£')
        }
        if(selected === 'dollars') {
            setSolutionUM('$')
        }
        if(selected === 'euros') {
            setSolutionUM('€')
        }
        if(selected === 'yuan') {
            setSolutionUM('¥')
        }
        if(selected === 'ruble') {
            setSolutionUM('₽')
        }
        if(selected === 'algerianDinar') {
            setSolutionUM('DA')
        }
        if(selected === 'kwanza') {
            setSolutionUM('Kz')
        }
        if(selected === 'franc') {
            setSolutionUM('Fr')
        }
        if(selected === 'rupee') {
            setSolutionUM('₹')
        }
        if(selected === 'pula') {
            setSolutionUM('P')
        }
        if(selected === 'nakfa') {
            setSolutionUM('Nkf')
        }
        if(selected === 'emalangeni') {
            setSolutionUM('E')
        }
        if(selected === 'birr') {
            setSolutionUM('Br')
        }
        if(selected === 'dalasi') {
            setSolutionUM('D')
        }
        if(selected === 'cedi') {
            setSolutionUM('GH₵')
        }
        if(selected === 'shillings') {
            setSolutionUM('Shs')
        }
        if(selected === 'loti') {
            setSolutionUM('L')
        }
        if(selected === 'kwacha') {
            setSolutionUM('K')
        }
        if(selected === 'ariary') {
            setSolutionUM('Ar')
        }
        if(selected === 'ouguiya') {
            setSolutionUM('UM')
        }
        if(selected === 'mauritianRupee') {
            setSolutionUM('Rs')
        }
        if(selected === 'dirham') {
            setSolutionUM('DH')
        }
        if(selected === 'metical') {
            setSolutionUM('Mt')
        }
        if(selected === 'naira') {
            setSolutionUM('₦')
        }
        if(selected === 'sahrawiPeseta') {
            setSolutionUM('Pts')
        }
        if(selected === 'dobra') {
            setSolutionUM('Db')
        }
        if(selected === 'leone') {
            setSolutionUM('Le')
        }
        if(selected === 'sudanesePounds') {
            setSolutionUM('LS')
        }
        if(selected === 'paanga') {
            setSolutionUM('T$')
        }
        if(selected === 'tunisianDinar') {
            setSolutionUM('DT')
        }
        if(selected === 'libyanDinar') {
            setSolutionUM('LD')
        };
    }, [selected]);
    //on change handler
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setCash(value);
        }
        if(variableName === vname2) {
            setAccountsReceivable(value);
        }
        if(variableName === vname3) {
            setInventories(value);
        }
        if(variableName === vname4) {
            setPrepaidExpenses(value);
        };
    };
    //solution handler
    const solutionHandler = () => {
        const solution = currentAssetsFormula(
            cash,
            accountsReceivable,
            inventories,
            prepaidExpenses
        );
        setSolution(solution);
    };
    //clear handler
    const clearHandler = () => {
        setCash('');
        setAccountsReceivable('');
        setInventories('');
        setPrepaidExpenses('');
        setSolution(0);
    };
    return (
        <div className='calculator-container'>
            <BackBtn prevUrl='/accounting/balance-sheet'/>
            <CurrencySelector selectHandler={selectHandler} selected={selected}/>
            <Calculator
            inputNames={inputNamesArr}
            unitsOfMeasurementArr={unitsOfMeasurementArr}
            solutionHandler={solutionHandler}
            clearHandler={clearHandler}
            solution={solution}
            solutionUM={solutionUM}
            stateArr={stateArr}
            onChangeHandler={onChangeHandler}
            subjectTag={subTag}
            />
        </div>
    );
};

export default CurrentAssetsCalculator;