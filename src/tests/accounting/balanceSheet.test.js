/*
@Author: Lwandle Babekizulu Dlamini
@Desc: testing library for balance sheet formulae
@Date: 2023/02/02
*/
//libs
const BalanceSheet = require('../../libs/formulae/accounting/balanceSheet');
//balance sheet formulae tests
describe('Balance Sheet Formulae Tests', () => {
  //basic balance sheet formula (unit test)
  test('Basic should return: 6000.00', () => {
    expect(new BalanceSheet().basic(1000, 5000)).toBe(
      parseFloat(6000).toFixed(2),
    );
  });
  //current assets formula (unit test)
  test('Current Assets should return: 15500.00', () => {
    expect(new BalanceSheet().currentAssets(500, 2500, 10000, 2500)).toBe(
      parseFloat(15500).toFixed(2),
    );
  });
  //current debt formula (unit test)
  test('Current Debt should return: 16500.00', () => {
    expect(new BalanceSheet().currentDebt(1000, 2500, 3000, 10000)).toBe(
      parseFloat(16500).toFixed(2),
    );
  });
  //debt capital formula (unit test)
  test('Debt Capital should return: 36500.00', () => {
    expect(new BalanceSheet().debtCapital(16500, 20000)).toBe(
      parseFloat(36500).toFixed(2),
    );
  });
  //fixed assets formula (unit test)
  test('Fixed Assets should return: 320000.00', () => {
    expect(new BalanceSheet().fixedAssets(20000, 100000, 200000)).toBe(
      parseFloat(320000).toFixed(2),
    );
  });
  //long-term debt formula (unit test)
  test('Long-Term Debt should return: 60000.00', () => {
    expect(new BalanceSheet().longTermDebt(50000, 10000)).toBe(
      parseFloat(60000).toFixed(2),
    );
  });
  //other assets formula (unit test)
  test('Other Assets should return: 3500000.00', () => {
    expect(new BalanceSheet().otherAssets(2000000, 1500000)).toBe(
      parseFloat(3500000).toFixed(2),
    );
  });
  //owners equity capital formula (unit test)
  test('Owners Equity Capital should return: 112500.00', () => {
    expect(new BalanceSheet().ownersEquityCapital(10000, 100000, 2500)).toBe(
      parseFloat(112500).toFixed(2),
    );
  });
  //total assets formula (unit test)
  test('Total Assets should return: 3800000.00', () => {
    expect(new BalanceSheet().totalAssets(50000, 250000, 3500000)).toBe(
      parseFloat(3800000).toFixed(2),
    );
  });
  //total debt & equity formula (unit test)
  test('Total Debt & Equity should return: 162500.00', () => {
    expect(new BalanceSheet().totalDebtEquity(50000, 112500)).toBe(
      parseFloat(162500).toFixed(2),
    );
  });
});
