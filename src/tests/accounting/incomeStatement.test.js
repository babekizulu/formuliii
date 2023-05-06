/*
@Author: Lwandle Babekizulu Dlamini
@Desc: testing library for income statement formulae
@Date: 2023/02/02
*/
//libs
const IncomeStatement = require('../../libs/formulae/accounting/incomeStatement');
//income statement formulae tests
describe('Income Statement Formulae Tests', () => {
  //basic income formula (unit test)
  test('Basic Income should return: 21500.00', () => {
    expect(new IncomeStatement().basic(22000, 500)).toBe(
      parseFloat(21500).toFixed(2),
    );
  });
  //earnings before income & taxes formula (unit test)
  test('Earnings Before Income & Taxes should return: 6000.00', () => {
    expect(
      new IncomeStatement().earningsBeforeIncomeAndTaxes(10000, 4000),
    ).toBe(parseFloat(6000).toFixed(2));
  });
  //earnings before taxes formula (unit test)
  test('Earnings Before Taxes should return: 242500.00', () => {
    expect(new IncomeStatement().earningsBeforeTaxes(250000, 7500)).toBe(
      parseFloat(242500).toFixed(2),
    );
  });
  //gross profit formula (unit test)
  test('Gross Profit should return: 1800000.00', () => {
    expect(new IncomeStatement().grossProfit(2500000, 700000)).toBe(
      parseFloat(1800000).toFixed(2),
    );
  });
  //net income formula (unit test)
  test('Net Income should return: 163500', () => {
    expect(new IncomeStatement().netIncome(242500, 79000)).toBe(
      parseFloat(163500).toFixed(2),
    );
  });
  //operating expenses formula (unit test)
  test('Operating Expenses should return: 60500.00', () => {
    expect(new IncomeStatement().operatingExpenses(10000, 500, 50000)).toBe(
      parseFloat(60500).toFixed(2),
    );
  });
});
