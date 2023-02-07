/*
@Author: Lwandle Babekizulu Dlamini (https://github.com/babekizulu)
@Desc: testing library depreciation formulae
@Date: 2023/02/07
*/
//libs
const Depreciation = require('../../libs/formulae/economics/depreciation');

//depreciation formulae tests
describe('Depreciation Formulae Tests', () => {
  //straight line depreciation formula (unit test)
  test('Straight Line Depreciation should return: 2000.00', () => {
    expect(new Depreciation().sl(20000, 12000, 4)).toBe(
      parseFloat(2000).toFixed(2),
    );
  });
  //double-declining balance depreciation formula (unit test)
  test(`Double-Declining Balance Depreciation should return: 5800.00`, () => {
    expect(new Depreciation().ddb(5, 12000, 5000)).toBe(
      parseFloat(5800).toFixed(2),
    );
  });

  //units of production depreciation formula (unit test)
  test('Units of Production Depreciation should return: 3375.00', () => {
    expect(new Depreciation().up(7000, 2500, 20000, 15000)).toBe(
      parseFloat(3375).toFixed(2),
    );
  });

  //sum of years digits depreciation formula (unit test)
  test('Sum of Years Digits Depreciation should return: 1636.36', () => {
    expect(new Depreciation().syd(10, 20000, 11000)).toBe(
      parseFloat(1636.36).toFixed(2),
    );
  });
});
