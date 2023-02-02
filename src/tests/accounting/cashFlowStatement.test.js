/*
@Author: Lwandle Babekizulu Dlamini (https://github.com/babekizulu)
@Desc: testing library for cash flow statement formulae
@Date: 2023/02/02
*/
//libs
const CashFlowStatement = require('../../libs/formulae/accounting/cashFlowStatement');
//cash flow statement formulae tests
describe('Cash Flow Statement Formulae Tests', () => {
  //financing cash flow formula (unit test)
  test('Financing Cash Flow should return: 40000.00', () => {
    expect(new CashFlowStatement().financing(5000, 15000, 0, 20000)).toBe(
      parseFloat(40000).toFixed(2),
    );
  });
  //firm cash flows formula (unit test)
  test('Firm Cash Flows should return: 175000.00', () => {
    expect(
      new CashFlowStatement().firmCashFlow().cashFlows(240000, 50000, 15000),
    ).toBe(parseFloat(175000).toFixed(2));
  });
  //earnings before income, taxes, depreciation & amortization formula (unit test)
  test('EBITDA should return: 290000.00', () => {
    expect(new CashFlowStatement().firmCashFlow().ebitda(500000, -210000)).toBe(
      parseFloat(290000).toFixed(2),
    );
  });
  //after-tax cash flows from operations formula (unit test)
  test('ATCFO should return: 261000.00', () => {
    expect(new CashFlowStatement().firmCashFlow().atcfo(290000, 29000)).toBe(
      parseFloat(261000).toFixed(2),
    );
  });
  //cash taxes formula (unit test)
  test('Cash Taxes should return: 24000.00', () => {
    expect(new CashFlowStatement().firmCashFlow().cashTaxes(29000, 5000)).toBe(
      parseFloat(24000).toFixed(2),
    );
  });
  //change in net operating working capital formula (unit test)
  test('Delta NOWC should return: 120000.00', () => {
    expect(
      new CashFlowStatement().firmCashFlow().deltaNOWC(150000, 30000),
    ).toBe(parseFloat(120000).toFixed(2));
  });
  //change in long-term assets
  test('Delta LTA should return: 72000.00', () => {
    expect(new CashFlowStatement().firmCashFlow().deltaLTA(50000, 22000)).toBe(
      parseFloat(72000).toFixed(2),
    );
  });
});
