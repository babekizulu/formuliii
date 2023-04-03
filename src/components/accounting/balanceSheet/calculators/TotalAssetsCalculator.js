//libs
import {React, useState, useEffect} from 'react';
import {BalanceSheetFormulae} from '../../../../libs/AccountingFormulae';
//components
import BackBtn from '../../../BackBtn';
import CurrencySelector from '../../../CurrencySelector';
import Calculator from '../../../CalculatorParts/Calculator';
//destructured formula
const {totalAssetsFormula} = new BalanceSheetFormulae();

const TotalAssetsCalculator = () => {
    const [selected, setSelected] = useState('rand');
    const [currentAssets, setCurrentAssets] = useState('');
    const [fixedAssets, setFixedAssets] = useState('');
    const [otherAssets, setOtherAssets] = useState('');
    const [solution, setSolution] = useState(0);
    const [solutionUM, setSolutionUM] = useState('ZAR');
    //variable names & subject tag
    const vname1 = 'Current Assets';
    const vname2 = 'Fixed Assets';
    const vname3 = 'Other Assets';
    const subTag = 'financial';
    //arrays
    const inputNamesArr = [
        vname1,
        vname2,
        vname3,
    ];
    const unitsOfMeasurementArr = [
        solutionUM,
        solutionUM,
        solutionUM
    ];
    const stateArr = [
        currentAssets, 
        fixedAssets,
        otherAssets
    ];
    //selectHandler 
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
            setCurrentAssets(value);
        }
        if(variableName === vname2) {
            setFixedAssets(value);
        }
        if(variableName === vname3) {
            setOtherAssets(value);
        };
    };
    //solution handler
    const solutionHandler = () => {
        const solution = totalAssetsFormula(currentAssets, fixedAssets, otherAssets);
        setSolution(solution);
    };
    //clear handler
    const clearHandler = () => {
        setCurrentAssets('');
        setFixedAssets('');
        setOtherAssets('');
        setSolution(0);
    };

    return (
        <div className='calculator-container'>
            <BackBtn prevUrl='/accounting/balance-sheet'/>
            <CurrencySelector 
            selectHandler={selectHandler} 
            selected={selected}
            />
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

export default TotalAssetsCalculator;