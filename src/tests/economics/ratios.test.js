/*
@Author: Lwandle Babekizulu Dlamini
@Desc: testing library ratio formulae
@Date: 2023/05/06
*/
//libs
const Ratios = require('../../libs/formulae/economics/ratios');

//economics ratio formulae testing
describe('Economics: Ratio Formulae Testing', () => {
  //current account to gdp ratio formula (unit test)
  test('Current Account to GDP Ratio should return: 200.00', () => {
    expect(new Ratios().currentAccountToGDP(10000000, 5000000)).toBe(
      parseFloat(200).toFixed(2),
    );
  });
  //government debt to gdp ratio formula (unit test)
  test('Government Debt to GDP Ratio should return: 200.00', () => {
    expect(new Ratios().governmentDebtToGDP(10000000, 5000000)).toBe(
      parseFloat(200).toFixed(2),
    );
  });
});
