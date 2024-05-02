/*
@desc: A library of accounting formulae
@author: Lwandle Babekizulu Dlamini
@date: 2024/04/04
*/
//globalsth
const inputValErr = 'Error: missing input values';
class IncomeStatement {
  /*
  @desc: class containing income statement methods
  @methods:
  - gross profit
  - earnings before interest and taxes (EBIT)
  - earnings before taxes
  - net income
  */
  //1. gross profit
  /*
    @desc: gross profit equations
    @params:
    - sales revenue TYPE: float
    - cost of production TYPE: float
    */
  grossProfit = (salesRevenue = 0, costOfProduction = 0) => {
    return (parseFloat(salesRevenue) - parseFloat(costOfProduction)).toFixed(2);
  };
  //2. earnings before interest and taxes (EBIT)
  /*
  @desc: EBIT equations
  @params:
  - gross profit TYPE: float
  - marketing expenses TYPE: float
  - distribution expenses TYPE: float
  - adminstrative expenses TYPE: float
  - general expenses TYPE: float
  */
  earningsBeforeInterestAndTaxes = (
    grossProfit = 0,
    marketingExpenses = 0,
    distributionExpenses = 0,
    administrativeExpenses = 0,
    generalExpenses = 0,
  ) => {
    return (
      parseFloat(grossProfit) -
      (parseFloat(marketingExpenses) +
        parseFloat(distributionExpenses) +
        parseFloat(administrativeExpenses) +
        parseFloat(generalExpenses))
    ).toFixed(2);
  };
  //3. earnings before taxes (EBT)
  /*
  @desc: EBT Equations
  @params: 
  - operating income TYPE: float
  - interest expense on debt TYPE: float
  */
  earningsBeforeTaxes = (operatingIncome = 0, interestExpenseOnDebt = 0) => {
    return (
      parseFloat(operatingIncome) - parseFloat(interestExpenseOnDebt)
    ).toFixed(2);
  };
  //4. net income
  /*
  @desc: net income available to owners
  @params:
  - earnings before taxes TYPE: float
  - corporate taxes TYPE: float
  */
  netIncome = (earningsBeforeTaxes = 0, corporateTaxes = 0) => {
    return (
      parseFloat(earningsBeforeTaxes) - parseFloat(corporateTaxes)
    ).toFixed(2);
  };
}

class BalanceSheet {
  /*
  @desc: class containing balance sheet methods
  @methods:
  - current assets
  - fixed assets
  - other assets
  - current debt
  - long-term debt
  - debt capital
  - owners equity capital
  - total debt & equity
  */
  //ASSETS
  //1. current assets
  /*
    @desc: current assets equation
    @param: 
    - cash
    - accounts receivable
    - inventories
    - prepaid expenses
    */
  currentAssets = (
    cash = 0,
    accountsReceivable = 0,
    inventories = 0,
    prepaidExpenses = 0,
  ) => {
    return (
      parseFloat(cash) +
      parseFloat(accountsReceivable) +
      parseFloat(inventories) +
      parseFloat(prepaidExpenses)
    ).toFixed(2);
  };
  //2. fixed assets
  /*
      @desc: fixed assets equation
      @param:
      - machinery & equipment
      - buildings
      - land
      */
  fixedAssets = (machineryAndEquipment = 0, buildings = 0, land = 0) => {
    return (
      parseFloat(machineryAndEquipment) +
      parseFloat(buildings) +
      parseFloat(land)
    ).toFixed(2);
  };
  //3. other assets
  /*
      @desc: other assets equation
      @params:
      - Investments TYPE: float
      - Patents TYPE: float
      */
  otherAssets = (investments = 0, patents = 0) => {
    return (parseFloat(investments) + parseFloat(patents)).toFixed(2);
  };
  //DEBT & EQUITY
  //4. current debt
  /*
  @desc: current debt equations
  @params: 
  - accounts payable TYPE: float
  - other payables TYPE: float
  - accrued expenses TYPE: float
  - short-term notes TYPE: float
  */
  currentDebt = (
    accountsPayable = 0,
    otherPayables = 0,
    accruedExpenses = 0,
    shortTermNotes = 0,
  ) => {
    return (
      parseFloat(accountsPayable) +
      parseFloat(otherPayables) +
      parseFloat(accruedExpenses) +
      parseFloat(shortTermNotes)
    ).toFixed(2);
  };
  //5. long-term debt
  /*
  @desc: long-term debt equation
  @params: 
  - long-term notes TYPE: float
  - mortgages TYPE: float
  */
  longTermDebt = (longTermNotes = 0, mortgages = 0) => {
    return (parseFloat(longTermNotes) + parseFloat(mortgages)).toFixed(2);
  };
  //6. debt capital
  /*
  @desc: debt capital equations
  @params: 
  - current debt TYPE: float
  - long-term debt TYPE: float
  */
  debtCapital = (currentDebt = 0, longTermDebt = 0) => {
    return parseFloat(currentDebt) + parseFloat(longTermDebt);
  };
  //7. owners equity capital
  /*
  @desc: owners equity capital equations
  @params:
  - owners net worth TYPE: float 
  - partnership-equity TYPE: float
  - common stock equity TYPE: float
  */
  ownersEquityCapital = (
    ownersNetWorth = 0,
    partnershipEquity = 0,
    commonStockEquity = 0,
  ) => {
    if (ownersNetWorth) {
      return parseFloat(ownersNetWorth).toFixed(2);
    } else if (partnershipEquity) {
      return parseFloat(partnershipEquity).toFixed(2);
    } else if (commonStockEquity) {
      return parseFloat(commonStockEquity);
    } else if (ownersNetWorth && partnershipEquity && commonStockEquity) {
      return (
        parseFloat(ownersNetWorth) +
        parseFloat(partnershipEquity) +
        parseFloat(commonStockEquity)
      ).toFixed(2);
    } else {
      return inputValErr;
    }
  };
  //8. total debt & equity
  /*
  @desc: total debt & equity equation
  @params: 
  - debt capital TYPE: float
  - owners equity capital TYPE: float
  */
  totalDebtEquity = (debtCapital = 0, ownersEquityCapital = 0) => {
    return (parseFloat(debtCapital) + parseFloat(ownersEquityCapital)).toFixed(
      2,
    );
  };
}

class CashFlowStatement {
  /*
  @desc: Class containing Cash Flow Statement methods
  @methods:
  1. earnings before interest, taxes, depreciation & amortization (EBITDA)
  2. cash tax payments
  3. after-tax cash flows from operations
  4. change in net operating working capital
  5. change in long-term assets
  6. firm cash flow
  7. financing cash flow
  */
  //FIRM
  //1. earnings before interest, taxes, depreciation & amortization (EBITDA)
  /*
    @desc: EBITDA equation
    @params:
    - operating income TYPE: float
    - depreciation TYPE: float
    */
  earningsBeforeInterestTaxesDepreciationAndAmortization = (
    operatingIncome = 0,
    depreciation = 0,
  ) => {
    return (parseFloat(operatingIncome) + parseFloat(depreciation)).toFixed(2);
  };
  //2. cash tax payments
  /*
  @desc: cash tax payments equation
  @params: 
  - income taxes reported in income statement TYPE: float
  - changes in accrued or deferred taxes reported in balance sheet TYPE: float
  */
  cashTaxPayments = (
    incomeTaxesReportedInIncomeStatement = 0,
    changesInAccruedOrDeferredTaxesReportedInBalanceSheet = 0,
  ) => {
    return (
      parseFloat(incomeTaxesReportedInIncomeStatement) -
      parseFloat(changesInAccruedOrDeferredTaxesReportedInBalanceSheet)
    ).toFixed(2);
  };
  //3. after-tax cash flows from operations
  /*
    @desc: after-tax cash flows from operations equation
    @params: 
    - earnings before interest, taxes, depreciation and amortization TYPE: float
    - cash tax payments TYPE: float
    */
  afterTaxCashFlowsFromOperations = (
    earningsBeforeInterestTaxesDepreciationAndAmortization = 0,
    cashTaxPayments = 0,
  ) => {
    return (
      parseFloat(earningsBeforeInterestTaxesDepreciationAndAmortization) -
      parseFloat(cashTaxPayments)
    ).toFixed(2);
  };
  //4. change in net operating working capital
  /*
  @desc: change in net operating working capital
  @params: 
  - change in current assets TYPE: float
  - change in non-interest-bearing current operating liabilities TYPE: float
  */
  changeInNetOperatingWorkingCapital = (
    changeInCurrentAssets = 0,
    changeInNonInterestBearingCurrentOperatingLiabilities = 0,
  ) => {
    return (
      parseFloat(changeInCurrentAssets) -
      parseFloat(changeInNonInterestBearingCurrentOperatingLiabilities)
    ).toFixed(2);
  };
  //5. change in long-term assets
  /*
  - gross purchase price of fixed assets
  - net cash used for investments
  */
  changeInLongTermAssets = (
    grossPurchasePriceOfFixedAssets = 0,
    netCashUsedForInvestments = 0,
  ) => {
    return (
      parseFloat(grossPurchasePriceOfFixedAssets) +
      parseFloat(netCashUsedForInvestments)
    ).toFixed(2);
  };
  //6. firm cash flow
  /*
  @desc: firm cash flow equation
  @params:
  - after-tax cash flows from operations TYPE: float
  - investments in net operating working capital TYPE: float
  - investments in fixed assets and other assets TYPE: float
  */
  firmCashFlow = (
    afterTaxCashFlowsFromOperations = 0,
    investmentsInNetOperatingWorkingCapital = 0,
    investmentsInFixedAssetsAndOtherAssets = 0,
  ) => {
    return (
      parseFloat(afterTaxCashFlowsFromOperations) -
      parseFloat(investmentsInNetOperatingWorkingCapital) -
      parseFloat(investmentsInFixedAssetsAndOtherAssets)
    ).toFixed(2);
  };
  //FINANCING
  //7. financing cash flow
  /*
  @desc: financing cash flow equation
  @params: 
  - interest payments to creditors TYPE: float
  - increase in debt principal (optional) TYPE: float
  - decrease in debt principal (optional) TYPE: float
  - dividends paid to stockholders TYPE: float
  - increase in stock (optional) TYPE: float
  - decrease in stock (optional) TYPE: float
  */
  financingCashFlow = (
    interestPaymentsToCreditors = 0,
    increaseInDebtPrincipal = 0,
    decreaseInDebtPrincipal = 0,
    dividendsPaidToStockholders = 0,
    increaseInStock = 0,
    decreaseInStock = 0,
  ) => {
    if (increaseInDebtPrincipal && increaseInStock) {
      return (
        parseFloat(interestPaymentsToCreditors) -
        parseFloat(increaseInDebtPrincipal) +
        parseFloat(dividendsPaidToStockholders) -
        parseFloat(increaseInStock)
      ).toFixed(2);
    } else if (decreaseInDebtPrincipal && decreaseInStock) {
      return (
        parseFloat(interestPaymentsToCreditors) +
        parseFloat(decreaseInDebtPrincipal) +
        parseFloat(dividendsPaidToStockholders) +
        parseFloat(decreaseInStock)
      ).toFixed(2);
    } else if (increaseInDebtPrincipal && decreaseInStock) {
      return (
        parseFloat(interestPaymentsToCreditors) -
        parseFloat(increaseInDebtPrincipal) +
        parseFloat(dividendsPaidToStockholders) +
        parseFloat(decreaseInStock)
      ).toFixed(2);
    } else if (decreaseInDebtPrincipal && increaseInStock) {
      return (
        parseFloat(interestPaymentsToCreditors) +
        parseFloat(decreaseInDebtPrincipal) +
        parseFloat(dividendsPaidToStockholders) -
        parseFloat(increaseInStock)
      ).toFixed(2);
    } else {
      return inputValErr;
    }
  };
}

class Forecasting {
  /*
  @desc: Class containing Forecasting methods
  @params:
  1. projected cost of goods sold
  2. projected total operating expenses
  3. projected operating profits
  4. projected earnings before tax
  5. projected net income
  */
  //1. projected cost of goods sold
  /*
  @desc: projected cost of goods sold equation
  @params: 
  - fixed costs TYPE: float
  - variable costs TYPE: float
  */
  projectedCostOfGoodsSold = (fixedCosts = 0, variableCosts = 0) => {
    return (parseFloat(fixedCosts) + parseFloat(variableCosts)).toFixed(2);
  };
  //2. projected total operating expenses
  /*
  @desc: projected total operating expenses equation
  @params: 
  - fixed expenses TYPE: float
  - variable expenses TYPE: float
  */
  projectedTotalOperatingExpenses = (
    fixedExpenses = 0,
    variableExpenses = 0,
  ) => {
    return (parseFloat(fixedExpenses) + parseFloat(variableExpenses)).toFixed(
      2,
    );
  };
  //3. projected operating profits
  /*
  @desc: projected operating profits equation
  @params:
  - sales projections TYPE: float
  - projected cost of goods sold TYPE: float
  - projected total operating expenses TYPE: float
  */
  projectedOperatingProfits = (
    salesProjections = 0,
    projectedCostOfGoodsSold = 0,
    projectedTotalOperatingExpenses = 0,
  ) => {
    return (
      parseFloat(salesProjections) -
      (parseFloat(projectedCostOfGoodsSold) +
        parseFloat(projectedTotalOperatingExpenses))
    );
  };
  //4. projected earnings before tax
  /*
  @desc: projected earnings before tax equation
  @params: 
  - projected operating profits TYPE: float
  - interest expense TYPE: float
  */
  projectedEarningsBeforeTax = (
    projectedOperatingProfits = 0,
    interestExpense = 0,
  ) => {
    return (
      parseFloat(projectedOperatingProfits) - parseFloat(interestExpense)
    ).toFixed(2);
  };
  //5. projected net income
  /*
  @desc: projected net income equation
  @params:
  - projected earnings before tax TYPE: float
  - estimated income taxes TYPE: float
  */
  projectedNetIncome = (
    projectedEarningsBeforeTax = 0,
    estimatedIncomeTaxes = 0,
  ) => {
    return (
      parseFloat(projectedEarningsBeforeTax) - parseFloat(estimatedIncomeTaxes)
    ).toFixed(2);
  };
}

export { IncomeStatement, BalanceSheet, CashFlowStatement, Forecasting };