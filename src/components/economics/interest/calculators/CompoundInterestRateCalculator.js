//libs
import {React, useEffect, useState} from 'react';
import { CompoundInterestRateFormula } from '../../../../libs/EconomicsFormulae';
//compound
import BackBtn from '../../../BackBtn';
import CurrencySelector from '../../../CurrencySelector';
import Calculator from '../../../CalculatorParts/Calculator';
//destructured formula
const {solve} = new CompoundInterestRateFormula();

const CompoundInterestRateCalculator = () => {
    //state
    const [selected, setSelected] = useState('rand');
    const [principalAmount, setPrincipalAmount] = useState('');
    const [rateOfInterest, setRateOfInterest] = useState('');
    const [numberOfTimesCompounded, setNumberOfTimesCompounded] = useState('');
    const [timePeriod, setTimePeriod] = useState('');
    const [solution, setSolution] = useState(0);
    const [solutionUM, setSolutionUM] = useState('ZAR');
    //vnames & subject tag
    const vname1 = 'Principal Amount';
    const vname2 = 'Rate of Interest';
    const vname3 = 'Number of Times Compounded';
    const vname4 = 'Time Period';
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
        '%',
        'n',
        'Years'
    ];
    const stateArr = [
        principalAmount,
        rateOfInterest,
        numberOfTimesCompounded,
        timePeriod
    ];
    //currency selection
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
    //handlers
    const selectHandler = e => {
        setSelected(e.target.value);
    };
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setPrincipalAmount(value);
        };
        if(variableName === vname2) {
            setRateOfInterest(value);
        };
        if(variableName === vname3) {
            setNumberOfTimesCompounded(value);
        };
        if(variableName === vname4) {
            setTimePeriod(value);
        };
    };
    const solutionHandler = () => {
        const solution = solve(
            principalAmount,
            rateOfInterest,
            numberOfTimesCompounded,
            timePeriod
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setPrincipalAmount('');
        setRateOfInterest('');
        setNumberOfTimesCompounded('');
        setTimePeriod('');
        setSolution(0);
    }
    return (
        <div className="calculator-container">
            <BackBtn prevUrl='/economics/interest'/>
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

export default CompoundInterestRateCalculator;