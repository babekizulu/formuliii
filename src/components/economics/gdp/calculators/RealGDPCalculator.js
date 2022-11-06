//libs
import {React, useEffect, useState} from 'react';
import { RealGDPFormula } from '../../../../libs/EconomicsFormulae';
//components
import BackBtn from '../../../BackBtn';
import CurrencySelector from '../../../CurrencySelector';
import Calculator from '../../../CalculatorParts/Calculator';
//destructured formula
const {solve} = new RealGDPFormula();

const RealGDPCalculator = () => {
    //state
    const [selected, setSelected] = useState('rand');
    const [nominalGDP, setNominalGDP] = useState('');
    const [gdpDeflator, setGDPDeflator] = useState('');
    const [solution, setSolution] = useState(0);
    const [solutionUM, setSolutionUM] = useState('ZAR');
    //vnames & subject tag
    const vname1 = 'Nominal GDP';
    const vname2 = 'GDP Deflator';
    const subTag = 'financial';
    //arrays
    const inputNamesArr = [
        vname1,
        vname2
    ];
    const unitsOfMeasurementArr = [
        solutionUM,
        '%'
    ];
    const stateArr = [
        nominalGDP,
        gdpDeflator
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
            setNominalGDP(value);
        };
        if(variableName === vname2) {
            setGDPDeflator(value);
        };
    };
    const solutionHandler = () => {
        const solution = solve(
            nominalGDP,
            gdpDeflator
        );
        setSolution(solution);
    };
    const clearHandler = () => {
        setNominalGDP('');
        setGDPDeflator('');
        setSolution(0);
    };
    return (
        <div className="calculator-container">
            <BackBtn prevUrl='/economics/gdp'/>
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

export default RealGDPCalculator;