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
import CashFlowStatement from './accounting/cashFlowStatement/CashFlowStatement';
//acc: cash flow statement calc sets
import FirmCashFlowStatement from './accounting/cashFlowStatement/firm/FirmCashFlowStatement';
import FinancingCashFlowStatement from './accounting/cashFlowStatement/financing/FinancingCashFlowStatement';
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
//acc: firm cash flow statement calculators
import FirmCashFlowsCalculator from './accounting/cashFlowStatement/firm/calculators/FirmCashFlowsCalculator';
import EBITDACalculator from './accounting/cashFlowStatement/firm/calculators/EBITDACalculator';
import ATCFOCalculator from './accounting/cashFlowStatement/firm/calculators/ATCFOCalculator';
import CashTaxesCalculator from './accounting/cashFlowStatement/firm/calculators/CashTaxesCalculator';
import ChangeInNOWCCalculator from './accounting/cashFlowStatement/firm/calculators/ChangeInNOWCCalculator.js';
import ChangeInLTA from './accounting/cashFlowStatement/firm/calculators/ChangeInLTA';
//acc: financial cash flow statement calculators
import FinancingCashFlowCalculator from './accounting/cashFlowStatement/financing/calculators/FinancingCashFlowCalculator';
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
//phy: dae calculators
import AverageVelocityCalculator from './physics/kinematics/dae/calculators/AverageVelocityCalculator';
import InitialVelocityCalculator from './physics/kinematics/dae/calculators/InitialVelocityCalculator';
import AccelerationCalculator from './physics/kinematics/dae/calculators/AccelerationCalculator';
import TimeCalculator from './physics/kinematics/dae/calculators/TimeCalculator';
//phy: dc calculators
import DCDisplacementCalculator from './physics/kinematics/dc/calculators/DCDisplacementCalculator';
import DCFinalPositionCalculator from './physics/kinematics/dc/calculators/DCFinalPositionCalculator';
import DCInitialPositionCalculator from './physics/kinematics/dc/calculators/DCInitialPositionCalculator';
import DCInitialVelocityCalculator from './physics/kinematics/dc/calculators/DCInitialVelocityCalculator';
import DCAccelerationCalculator from './physics/kinematics/dc/calculators/DCAccelerationCalculator';
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
            <Route path='/accounting/cash-flow-statement'>
                <CashFlowStatement/>
            </Route>
            {/*ACC: CASH FLOW STATEMENT CALC SET ROUTES*/}
            <Route path='/accounting/cash-flow-statement/firm'>
                <FirmCashFlowStatement/>
            </Route>
            <Route path='/accounting/cash-flow-statement/financing'>
                <FinancingCashFlowStatement/>
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
            {/*ACC: FIRM CASH FLOW STATEMENT CALCULATOR ROUTES*/}
            <Route path='/accounting/cash-flow-statement/firm/cash-flows'>
                <FirmCashFlowsCalculator/>
            </Route>
            <Route path='/accounting/cash-flow-statement/firm/ebitda'>
                <EBITDACalculator/>
            </Route>
            <Route path='/accounting/cash-flow-statement/firm/atcfo'>
                <ATCFOCalculator/>
            </Route>
            <Route path='/accounting/cash-flow-statement/firm/cash-taxes'>
                <CashTaxesCalculator/>
            </Route>
            <Route path='/accounting/cash-flow-statement/firm/change-in-nowc'>
                <ChangeInNOWCCalculator/>
            </Route>
            <Route path='/accounting/cash-flow-statement/firm/change-in-lta'>
                <ChangeInLTA/>
            </Route>
            {/*ACC: FINANCING CASH FLOW STATEMENT CALCULATOR ROUTES*/}
            <Route path='/accounting/cash-flow-statement/financing/cash-flows'>
                <FinancingCashFlowCalculator/>
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
            {/*PHY: Definition of Acceleration Calculator Routes*/}
            <Route 
            path='/physics/kinematics/definition-of-acceleration/average-velocity'
            >
                <AverageVelocityCalculator/>
            </Route>
            <Route 
            path='/physics/kinematics/definition-of-acceleration/initial-velocity'
            >
                <InitialVelocityCalculator/>
            </Route>
            <Route 
            path='/physics/kinematics/definition-of-acceleration/acceleration'
            >
                <AccelerationCalculator/>
            </Route>
            <Route
            path='/physics/kinematics/definition-of-acceleration/time'
            >
                <TimeCalculator/>
            </Route>
            {/*PHY: Displacement Curve Calculator Routes*/}
            <Route 
            path='/physics/kinematics/displacement-curve/displacement'
            >
                <DCDisplacementCalculator/>
            </Route>
            <Route
            path='/physics/kinematics/displacement-curve/final-position'
            >
                <DCFinalPositionCalculator/>
            </Route>
            <Route
            path='/physics/kinematics/displacement-curve/initial-position'
            >
                <DCInitialPositionCalculator/>
            </Route>
            <Route
            path='/physics/kinematics/displacement-curve/initial-velocity'
            >
                <DCInitialVelocityCalculator/>
            </Route>
            <Route
            path='/physics/kinematics/displacement-curve/acceleration'
            >
                <DCAccelerationCalculator/>
            </Route>
        </div>
    );
};

export default App;