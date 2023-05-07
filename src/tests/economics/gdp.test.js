/*
@Author: Lwandle Babekizulu Dlamini
@Desc: testing library for gdp formulae
@Date: 2023/05/06
*/
//libs
const GDP = require('../../libs/formulae/economics/gdp');

//economics: gdp formulae tests
describe('Economics: GDP Formulae Tests', () => {
  //deflator formula test (unit test)
  test('Deflator should return: 111.11', () => {
    expect(new GDP().deflator(5000000, 4500000)).toBe(
      parseFloat(111.11).toFixed(2),
    );
  });
  //expenditure approach formula test (unit test)
  test('Expenditure Approach should return: 5000000.00', () => {
    expect(
      new GDP().expenditureApproach(2000000, 500000, 1500000, 1000000),
    ).toBe(parseFloat(5000000).toFixed(2));
  });
  //income approach formula test (unit test)
  test('Income Approach should return: 6000000.00', () => {
    expect(new GDP().incomeApproach(5000000, 200000, 300000, 500000)).toBe(
      parseFloat(6000000).toFixed(2),
    );
  });
  //net exports formula test (unit test)
  test('Net Exports should return: 1000000.00', () => {
    expect(new GDP().netExports(2000000, 1000000)).toBe(
      parseFloat(1000000).toFixed(2),
    );
  });
  //real gdp formula test (unit test)
  test('Real GDP should return: 4504504.50', () => {
    expect(new GDP().realGDP(5000000, 1.11)).toBe(
      parseFloat(4504504.5).toFixed(2),
    );
  });
});
