//libs
import React from 'react';
//component
import Header from './Header';
import Explorer from './Explorer';
import Route from './Route';
//calculator sets
import Economics from './economics/Economics';
import Physics from './physics/Physics';
import Mathematics from './mathematics/Mathematics';
import Accounting from './accounting/Accounting';
//accounting sets
import BalanceSheet from './accounting/balanceSheet/BalanceSheet';
import CashFlowStatement from './accounting/cashFlowStatement/CashFlowStatement';
import IncomeStatement from './accounting/incomeStatement/IncomeStatement';
//accounting: balance sheet calculators
import BasicBalanceSheet from './accounting/balanceSheet/calculators/BasicBalanceSheet';
import CurrentAssets from './accounting/balanceSheet/calculators/CurrentAssets';
import CurrentDebt from './accounting/balanceSheet/calculators/CurrentDebt';
import DebtCapital from './accounting/balanceSheet/calculators/DebtCapital';
import FixedAssets from './accounting/balanceSheet/calculators/FixedAssets';
import LongTermDebt from './accounting/balanceSheet/calculators/LongTermDebt';
import OtherAssets from './accounting/balanceSheet/calculators/OtherAssets';
import OwnersEquityCapital from './accounting/balanceSheet/calculators/OwnersEquityCapital';
import TotalAssets from './accounting/balanceSheet/calculators/TotalAssets';
import TotalDebtEquity from './accounting/balanceSheet/calculators/TotalDebtEquity';
//accounting: cash flow statement sets
import FirmCashFlow from './accounting/cashFlowStatement/firm/FirmCashFlow';
import FinancingCashFlow from './accounting/cashFlowStatement/financing/FinancingCashFlow';
//accounting: firm cash flow calculators
import CashFlowFirm from './accounting/cashFlowStatement/firm/calculators/CashFlowFirm';
import EBITDA from './accounting/cashFlowStatement/firm/calculators/EBITDA';
import ATCFO from './accounting/cashFlowStatement/firm/calculators/ATCFO';
import CashTaxes from './accounting/cashFlowStatement/firm/calculators/CashTaxes';
import DeltaNOWC from './accounting/cashFlowStatement/firm/calculators/DeltaNOWC';
import DeltaLTA from './accounting/cashFlowStatement/firm/calculators/DeltaLTA';
//accounting: financing cash flow calculators
import CashFlowFinancing from './accounting/cashFlowStatement/financing/calculators/CashFlowFinancing';
//accounting: income statement calculators
import BasicIncomeStatement from './accounting/incomeStatement/calculators/BasicIncomeStatement';
import EBIT from './accounting/incomeStatement/calculators/EBIT';
import EBT from './accounting/incomeStatement/calculators/EBT';
import GrossProfit from './accounting/incomeStatement/calculators/GrossProfit';
import NetIncome from './accounting/incomeStatement/calculators/NetIncome';
import OperatingExpenses from './accounting/incomeStatement/calculators/OperatingExpenses';
const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Route path='/'>
        <Explorer />
      </Route>
      {/* CALCULATOR SETS */}
      <Route path='/economics'>
        <Economics />
      </Route>
      <Route path='/physics'>
        <Physics />
      </Route>
      <Route path='/mathematics'>
        <Mathematics />
      </Route>
      <Route path='/accounting'>
        <Accounting />
      </Route>
      {/*ACCOUNTING SETS*/}
      <Route path='/accounting/balance-sheet'>
        <BalanceSheet />
      </Route>
      <Route path='/accounting/cash-flow-statement'>
        <CashFlowStatement />
      </Route>
      <Route path='/accounting/income-statement'>
        <IncomeStatement />
      </Route>
      {/*BALANCE SHEET CALCULATORS*/}
      <Route path='/accounting/balance-sheet/basic'>
        <BasicBalanceSheet />
      </Route>
      <Route path='/accounting/balance-sheet/current-assets'>
        <CurrentAssets />
      </Route>
      <Route path='/accounting/balance-sheet/current-debt'>
        <CurrentDebt />
      </Route>
      <Route path='/accounting/balance-sheet/debt-capital'>
        <DebtCapital />
      </Route>
      <Route path='/accounting/balance-sheet/fixed-assets'>
        <FixedAssets />
      </Route>
      <Route path='/accounting/balance-sheet/long-term-debt'>
        <LongTermDebt />
      </Route>
      <Route path='/accounting/balance-sheet/other-assets'>
        <OtherAssets />
      </Route>
      <Route path='/accounting/balance-sheet/owners-equity-capital'>
        <OwnersEquityCapital />
      </Route>
      <Route path='/accounting/balance-sheet/total-assets'>
        <TotalAssets />
      </Route>
      <Route path='/accounting/balance-sheet/total-debt-equity'>
        <TotalDebtEquity />
      </Route>
      {/* ACCOUNTING: CASH FLOW SETS*/}
      <Route path='/accounting/cash-flow-statement/firm'>
        <FirmCashFlow />
      </Route>
      <Route path='/accounting/cash-flow-statement/financing'>
        <FinancingCashFlow />
      </Route>
      {/* ACCOUNTING: FIRM CASH FLOW CALCULATORS*/}
      <Route path='/accounting/cash-flow-statement/firm/cash-flow'>
        <CashFlowFirm />
      </Route>
      <Route path='/accounting/cash-flow-statement/firm/ebitda'>
        <EBITDA />
      </Route>
      <Route path='/accounting/cash-flow-statement/firm/atcfo'>
        <ATCFO />
      </Route>
      <Route path='/accounting/cash-flow-statement/firm/cash-taxes'>
        <CashTaxes />
      </Route>
      <Route path='/accounting/cash-flow-statement/firm/deltaNOWC'>
        <DeltaNOWC />
      </Route>
      <Route path='/accounting/cash-flow-statement/firm/deltaLTA'>
        <DeltaLTA />
      </Route>
      {/* ACCOUNTING: FINANCING CASH FLOW CALCULATORS*/}
      <Route path='/accounting/cash-flow-statement/financing/cash-flow'>
        <CashFlowFinancing />
      </Route>
      {/* ACCOUNTING: INCOME STATEMENT CALCULATORS*/}
      <Route path='/accounting/income-statement/basic'>
        <BasicIncomeStatement />
      </Route>
      <Route path='/accounting/income-statement/ebit'>
        <EBIT />
      </Route>
      <Route path='/accounting/income-statement/ebt'>
        <EBT />
      </Route>
      <Route path='/accounting/income-statement/gross-profit'>
        <GrossProfit />
      </Route>
      <Route path='/accounting/income-statement/net-income'>
        <NetIncome />
      </Route>
      <Route path='/accounting/income-statement/operating-expenses'>
        <OperatingExpenses />
      </Route>
    </div>
  );
};

export default App;
