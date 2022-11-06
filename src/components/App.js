/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: Primary App Component
* @Date: 2022/11/01
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
//eco: calculators
import BalanceOfTradeCalculator from './economics/calculators/BalanceOfTradeCalculator';
import CurrentAccountCalculator from './economics/calculators/CurrentAccountCalculator';
import InflationRateCalculator from './economics/calculators/InflationRateCalculator';
import NFFICalculator from './economics/calculators/NFFICalculator';
import UnemploymentRateCalculator from './economics/calculators/UnemploymentRateCalculator';
import DDBDepreciationCalculator from './economics/depreciation/calculators/DDBDepreciationCalculator';
import SLDepreciationCalculator from './economics/depreciation/calculators/SLDepreciationCalculator';
import SOYDepreciationCalculator from './economics/depreciation/calculators/SOYDepreciationCalculator';
import UOPDepreciationCalculator from './economics/depreciation/calculators/UOPDepreciationCalculator';
import GDPDeflatorCalculator from './economics/gdp/calculators/GDPDeflatorCalculator';
import GDPExpApproachCalculator from './economics/gdp/calculators/GDPExpApproachCalculator';
import GDPIncomeApproachCalculator from './economics/gdp/calculators/GDPIncomeApproachCalculator';
import NetExportsCalculator from './economics/gdp/calculators/NetExportsCalculator.js';
import RealGDPCalculator from './economics/gdp/calculators/RealGDPCalculator';
import SimpleInterestRateCalculator from './economics/interest/calculators/SimpleInterestRateCalculator';
import CompoundInterestRateCalculator from './economics/interest/calculators/CompoundInterestRateCalculator';
import CAGDPRatioCalculator from './economics/ratios/calculators/CAGDPRatioCalculator';
import GDGDPRatioCalculator from './economics/ratios/calculators/GDGDPRatioCalculator';
//accounting calc sets
import IncomeStatement from './accounting/incomeStatement/IncomeStatement';
import BalanceSheet from './accounting/balanceSheet/BalanceSheet';
//acc: balance sheet calculators
import BasicBalanceSheetCalculator from './accounting/balanceSheet/calculators/BasicBalanceSheetCalculator';
import TotalAssetsCalculator from './accounting/balanceSheet/calculators/TotalAssetsCalculator';
import CurrentAssetsCalculator from './accounting/balanceSheet/calculators/CurrentAssetsCalculator';
import OtherAssetsCalculator from './accounting/balanceSheet/calculators/OtherAssetsCalculator';
import TotalDebtAndEquityCalculator from './accounting/balanceSheet/calculators/TotalDebtAndEquityCalculator';
import DebtCapitalCalculator from './accounting/balanceSheet/calculators/DebtCapitalCalculator';
import CurrentDebtCalculator from './accounting/balanceSheet/calculators/CurrentDebtCalculator';
import LongTermDebtCalculator from './accounting/balanceSheet/calculators/LongTermDebtCalculator';
import OwnersEquityCapitalCalculator from './accounting/balanceSheet/calculators/OwnersEquityCapitalCalculator';
import FixedAssetsCalculator from './accounting/balanceSheet/calculators/FixedAssetsCalculator';
//acc:income statement calculators
import BasicIncomeCalculator from './accounting/incomeStatement/calculators/BasicIncomeCalculator';
import EarningsBITCalculator from './accounting/incomeStatement/calculators/EarningsBITCalculator';
import GrossProfitCalculator from './accounting/incomeStatement/calculators/GrossProfitCalculator';
import OperatingExpensesCalculator from './accounting/incomeStatement/calculators/OperatingExpensesCalculator';
import EarningsBTCalculator from './accounting/incomeStatement/calculators/EarningsBTCalculator';
import NetIncomeCalculator from './accounting/incomeStatement/calculators/NetIncomeCalculator';
//mathematics calc sets
import Algebra from './mathematics/algebra/Algebra';
//math: algebraic calculators
import PythagoreanCalculator from './mathematics/algebra/calculators/PythagoreanCalculator';
import DistanceCalculator from './mathematics/algebra/calculators/DistanceCalculator';
import MidpointCalculator from './mathematics/algebra/calculators/MidpointCalculator';
//physics calc sets
import Kinematics from './physics/kinematics/Kinematics';
//physics: kinematics calc sets
import DefinitionOfAcceleration from './physics/kinematics/dae/DefinitionOfAcceleration';
import DisplacementCurve from './physics/kinematics/dc/DisplacementCurve';
//styles
import '../scss/App.scss';


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
            {/*ACC: BALANCE SHEET CALCULATOR ROUTES*/}
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
            {/*ACC: INCOME STATEMENT CALCULATOR ROUTES*/}
            <Route path='/accounting/income-statement/basic-income'>
                <BasicIncomeCalculator/>
            </Route>
            <Route path='/accounting/income-statement/earnings-bit'>
                <EarningsBITCalculator/>
            </Route>
            <Route path='/accounting/income-statement/gross-profit'>
                <GrossProfitCalculator/>
            </Route>
            <Route path='/accounting/income-statement/operating-expenses'>
                <OperatingExpensesCalculator/>
            </Route>
            <Route path='/accounting/income-statement/earnings-bt'>
                <EarningsBTCalculator/>
            </Route>
            <Route path='/accounting/income-statement/net-income'>
                <NetIncomeCalculator/>
            </Route>
            {/*ECO: Calculator Routes*/}
            <Route path='/economics/balance-of-trade'>
                <BalanceOfTradeCalculator/>
            </Route>
            <Route path='/economics/current-account'>
                <CurrentAccountCalculator/>
            </Route>
            <Route path='/economics/inflation-rate'>
                <InflationRateCalculator/>
            </Route>
            <Route path='/economics/net-foreign-factor-income'>
                <NFFICalculator/>
            </Route>
            <Route path='/economics/unemployment-rate'>
                <UnemploymentRateCalculator/>
            </Route>
            <Route path='/economics/depreciation/ddb'>
                <DDBDepreciationCalculator/>
            </Route>
            <Route path='/economics/depreciation/straight-line'>
                <SLDepreciationCalculator/>
            </Route>
            <Route path='/economics/depreciation/sum-of-the-years'>
                <SOYDepreciationCalculator/>
            </Route>
            <Route path='/economics/depreciation/units-of-production'>
                <UOPDepreciationCalculator/>
            </Route>
            <Route path='/economics/gdp/deflator'>
                <GDPDeflatorCalculator/>
            </Route>
            <Route path='/economics/gdp/exp-approach'>
                <GDPExpApproachCalculator/>
            </Route>
            <Route path='/economics/gdp/income-approach'>
                <GDPIncomeApproachCalculator/>
            </Route>
            <Route path='/economics/gdp/net-exports'>
                <NetExportsCalculator/>
            </Route>
            <Route path='/economics/gdp/real'>
                <RealGDPCalculator/>
            </Route>
            <Route path='/economics/interest/simple'>
                <SimpleInterestRateCalculator/>
            </Route>
            <Route path='/economics/interest/compound'>
                <CompoundInterestRateCalculator/>
            </Route>
            <Route path='/economics/ratios/current-acc-to-gdp'>
                <CAGDPRatioCalculator/>
            </Route>
            <Route path='/economics/ratios/gov-debt-to-gdp'>
                <GDGDPRatioCalculator/>
            </Route>
            {/*MATH: Algebraic Calculator Routes*/}
            <Route path='/mathematics/algebra/pythagorean'>
                <PythagoreanCalculator/>
            </Route>
            <Route path='/mathematics/algebra/distance'>
                <DistanceCalculator/>
            </Route>
            <Route path='/mathematics/algebra/midpoint'>
                <MidpointCalculator/>
            </Route>
        </div>
    );
};

export default App;