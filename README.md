# FORMULiii Users Manual

### @desc: A manual providing detailed instructions on how to use the FORMULiii library

### @authors:

- Lwandle Babekizulu Dlamini

### @date: 2024/04/04

# Table of Contents

1. Accounting
2. Economics
3. Physics
4. Mathematics

# Accounting

## INCOME STATEMENT

## Instantiating the Income Statement Class:

`new IncomeStatement()`

## Methods:

- gross profit
- earnings before interest and taxes (EBIT)
- earnings before taxes
- net income

## Gross Profit

### Parameters:

1. sales revenue TYPE: float
2. cost of production TYPE: float

### Method:

`new IncomeStatement().grossProfit(param1, param2)`

## Earnings Before Interest and Taxes (EBIT)

### Parameters:

1. gross profit TYPE: float
2. marketing expenses TYPE: float
3. distribution expenses TYPE: float
4. adminstrative expenses TYPE: float
5. general expenses TYPE: float

### Method:

`new IncomeStatement().earningsBeforeInterestAndTaxes(param1, param2, param3, param4, param5)`

## Earnings Before Taxes (EBT)

### Parameters:

1. operating income TYPE: float
2. interest expense on debt TYPE: float

### Method:

`new IncomeStatement().earningsBeforeTaxes(param1, param2)`

## Net Income

### Parameters:

1. earnings before taxes TYPE: float
2. corporate taxes TYPE: float

### Method:

`new IncomeStatement().netIncome(param1, param2)`

## BALANCE SHEET

## Instantiating the Balance Sheet Class:

`new BalanceSheet()`

## Methods:

- current assets
- fixed assets
- other assets
- current debt
- long-term debt
- debt capital
- owners equity capital
- total debt & equity

## Current Assets

### Parameters

1. cash
2. accounts receivable
3. inventories
4. prepaid expenses

### Method

`new BalanceSheet().currentAssets(param1, param2, param3, param4)`

## Fixed Assets

### Parameters

1. machinery & equipment
2. buildings
3. land

### Method

`new BalanceSheet().fixedAssets(param1, param2, param3)`

## Other Assets

### Parameters

1. Investments TYPE: float
2. Patents TYPE: float

### Method

`new BalanceSheet().otherAssets(param1, param2)`

## CurrentDebt

### Parameters

- accounts payable TYPE: float
- other payables TYPE: float
- accrued expenses TYPE: float
- short-term notes TYPE: float

### Method

`new BalanceSheet().currentDebt(param1, param2, param3, param4)`

## Long-Term Debt

### Parameters

1. long-term notes TYPE: float
2. mortgages TYPE: float

### Method

`new BalanceSheet().longTermDebt(param1, param2)`

## Debt Capital

### Parameters

1. current debt TYPE: float
2. long-term debt TYPE: float

### Method

`new BalanceSheet().debtCapital(param1, param2)`

## Owners Equity Capital

### Parameters

1. owners net worth TYPE: float
2. partnership-equity TYPE: float
3. common stock equity TYPE: float

### Method

`new BalanceSheet().ownersEquityCapital(param1, param2, param3)`

## Total Debt Equity

### Parameters

1. debt capital TYPE: float
2. owners equity capital TYPE: float

### Method

`new BalanceSheet().totalDebtEquity(param1, param2)`

## CASH FLOW STATEMENT

## Instantiating the Cash Flow Statement Class:

`new CashFlowStatement()`

## Methods:

1. earnings before interest, taxes, depreciation & amortization (EBITDA)
2. cash tax payments
3. after-tax cash flows from operations
4. change in net operating working capital
5. change in long-term assets
6. firm cash flow
7. financing cash flow

## Earnings Before Interest, Taxes, Depreciation & Amortization (EBITDA)

### Parameters:

1. operating income TYPE: float
2. depreciation TYPE: float

### Method:

`new CashFlowStatement().earningsBeforeInterestTaxesDepreciationAndAmortization(param1, param2)`

## Cash Tax Payments

### Parameters:

1. income taxes reported in income statement TYPE: float
2. changes in accrued or deferred taxes reported in balance sheet TYPE: float

### Method:

`new CashFlowStatement().cashTaxPayments(param1, param2)`

## After-Tax Cash Flows from Operations

### Parameters:

1. earnings before interest, taxes, depreciation and amortization TYPE: float
2. cash tax payments TYPE: float

### Method:

`new CashFlowStatement().earningsBeforeInterestTaxesDepreciationAndAmortization(param1, param2)`

## Change in Net Operating Working Capital

### Parameters:

1. change in current assets TYPE: float
2. change in non-interest-bearing current operating liabilities TYPE: float

### Method:

`new CashFlowStatement().changeInNetOperatingWorkingCapital(param1, param2)`

## Change in Long-Term Assets

### Parameters:

1. gross purchase price of fixed assets
2. net cash used for investments

### Method:

`new CashFlowStatement().changeInLongTermAssets(param1, param2)`

## Firm Cash Flow

### Parameters:

1. after-tax cash flows from operations TYPE: float
2. investments in net operating working capital TYPE: float
3. investments in fixed assets and other assets TYPE: float

### Method:

`new CashFlowStatement().firmCashFlow(param1, param2, param3)`

## Financing Cash Flow

### Parameters:

1. interest payments to creditors TYPE: float
2. increase in debt principal (optional) TYPE: float
3. decrease in debt principal (optional) TYPE: float
4. dividends paid to stockholders TYPE: float
5. increase in stock (optional) TYPE: float
6. decrease in stock (optional) TYPE: float

### Method:

`new CashFlowStatement().interestPaymentsToCreditors(param1, param2(optional), param3(optional), param4, param5(optional), param6(optional))`

### Optional Parameters (For Increasing vs Decreasing variants)

- When dealing with the optional parameters in this method, provide a value for the
  variant which is the most appropriate for your use-case:
  example: interestPaymentsToCreditors(10000,5000,null, 5000, null, 1500)
- But do not leave both variants null, since a value for at least one of each variant
  is required.
  example: interestPaymentsToCreditors(1000, null, null, 5000, null, null)
- This will produce an Input Value Error:
  example: `Error: missing input values`

## FORECASTING

## Instantiating the Forecasting Class

`new Forecasting()`

## Methods

1. Projected Cost of Goods Sold
2. Projected Total Operating Expenses
3. Projected Operating Profits
4. Projected Earnings Before Tax
5. Projected Net Income

## Projected Cost of Goods Sold

### Parameters:

1. fixed costs TYPE: float
2. variable costs TYPE: float

### Method:

`new Forecasting().fixedCosts(param1, param2)`

## Projected Total Operating Expenses

### Parameters:

1. fixed expenses TYPE: float
2. variable expenses TYPE: float

### Method:

`new Forecasting().fixedExpenses(param1, param2)`

## Projected Operating Profits

### Parameters:

1. sales projections TYPE: float
2. projected cost of goods sold TYPE: float
3. projected total operating expenses TYPE: float

### Method:

`new Forecasting().salesProjections(param1, param2, param3)`

## Projected Earnings Before Tax

### Parameters:

1. projected operating profits TYPE: float
2. interest expense TYPE: float

### Method:

`new Forecasting().projectedEarningsBeforeTax(param1, param2)`

## Projected Net Income

### Parameters:

1. projected earnings before tax TYPE: float
2. estimated income taxes TYPE: float

### Method:

`new Forecasting().projectedNetIncome(param1, param2)`
