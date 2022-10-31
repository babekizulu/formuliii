/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: Primary App Component
* @Date: 2022/10/03
*/
//libs
import React from 'react';
//components
import Route from './Route';
import Header from './Header';
import Explorer from './Explorer';
//calculator sets
import Economics from './economics/Economics';
import Mathematics from './mathematics/Mathematics';
import Physics from './physics/Physics';
import Accounting from './accounting/Accounting';
//economics calc sets
import Depreciation from './economics/depreciation/Depreciation';
import GDP from './economics/gdp/GDP';
import Interest from './economics/interest/Interest';
import Ratios from './economics/ratios/Ratios';
//accounting calc sets
import IncomeStatement from './accounting/incomeStatement/IncomeStatement';
import BalanceSheet from './accounting/balanceSheet/BalanceSheet';
import BasicBalanceSheetCalculator from './accounting/balanceSheet/calculators/BasicBalanceSheetCalculator';
import TotalAssetsCalculator from './accounting/balanceSheet/calculators/TotalAssetsCalculator';
import CurrentAssetsCalculator from './accounting/balanceSheet/calculators/CurrentAssetsCalculator';
import OtherAssetsCalculator from './accounting/balanceSheet/calculators/OtherAssetsCalculator';
import TotalDebtAndEquityCalculator from './accounting/balanceSheet/calculators/TotalDebtAndEquityCalculator';
import DebtCapitalCalculator from './accounting/balanceSheet/calculators/DebtCapitalCalculator';
import CurrentDebtCalculator from './accounting/balanceSheet/calculators/CurrentDebtCalculator';
import LongTermDebtCalculator from './accounting/balanceSheet/calculators/LongTermDebtCalculator';
import OwnersEquityCapitalCalculator from './accounting/balanceSheet/calculators/OwnersEquityCapitalCalculator';
//mathematics calc sets
import Algebra from './mathematics/algebra/Algebra';
//physics calc sets
import Kinematics from './physics/kinematics/Kinematics';
//physics: kinematics calc sets
import DefinitionOfAcceleration from './physics/kinematics/dae/DefinitionOfAcceleration';
import DisplacementCurve from './physics/kinematics/dc/DisplacementCurve';
//styles
import '../scss/App.scss';
import FixedAssetsCalculator from './accounting/balanceSheet/calculators/FixedAssetsCalculator';

const App = () => {
    return (
        <div className='app-container'>
            <Header/>
            <Route path='/'>
                <Explorer/>
            </Route>
            {/*MAIN CALC SET ROUTES*/}
            <Route path='/economics'>
                <Economics/>
            </Route>
            <Route path='/mathematics'>
                <Mathematics/>
            </Route>
            <Route path='/physics'>
                <Physics/>
            </Route>
            <Route path='/accounting'>
                <Accounting/>
            </Route>
            {/*ECONOMIC CALC SET ROUTES*/}
            <Route path='/economics/depreciation'>
                <Depreciation/>
            </Route>
            <Route path='/economics/gdp'>
                <GDP/>
            </Route>
            <Route path='/economics/interest'>
                <Interest/>
            </Route>
            <Route path='/economics/ratios'>
                <Ratios/>
            </Route>
            {/*ACCOUNTING CALC SET ROUTES*/}
            <Route path='/accounting/income-statement'>
                <IncomeStatement/>
            </Route>
            <Route path='/accounting/balance-sheet'>
                <BalanceSheet/>
            </Route>
            {/*MATHEMATICS CALC SET ROUTES*/}
            <Route path='/mathematics/algebra'>
                <Algebra/>
            </Route>
            {/*PHYSICS CALC SET ROUTES*/}
            <Route path='/physics/kinematics'>
                <Kinematics/>
            </Route>
            {/*PHYSICS: KINEMATIC CALC SET ROUTES*/}
            <Route path='/physics/kinematics/definition-of-acceleration'>
                <DefinitionOfAcceleration/>
            </Route>
            <Route path='/physics/kinematics/displacement-curve'>
                <DisplacementCurve/>
            </Route>
            {/*CALCULATOR COMPONENT ROUTES*/}
            <Route path='/accounting/balance-sheet/basic'>
                <BasicBalanceSheetCalculator/>
            </Route>
            <Route path='/accounting/balance-sheet/total-assets'>
                <TotalAssetsCalculator/>
            </Route>
            <Route path='/accounting/balance-sheet/current-assets'>
                <CurrentAssetsCalculator/>
            </Route>
            <Route path='/accounting/balance-sheet/fixed-assets'>
                <FixedAssetsCalculator/>
            </Route>
            <Route path='/accounting/balance-sheet/other-assets'>
                <OtherAssetsCalculator/>
            </Route>
            <Route path='/accounting/balance-sheet/total-debt-equity'>
                <TotalDebtAndEquityCalculator/>
            </Route>
            <Route path='/accounting/balance-sheet/debt-capital'>
                <DebtCapitalCalculator/>
            </Route>
            <Route path='/accounting/balance-sheet/current-debt'>
                <CurrentDebtCalculator/>
            </Route>
            <Route path='/accounting/balance-sheet/long-term-debt'>
                <LongTermDebtCalculator/>
            </Route>
            <Route path='/accounting/balance-sheet/owners-equity-capital'>
                <OwnersEquityCapitalCalculator/>
            </Route>
        </div>
    );
};

export default App;