/*
@Author: Lwandle Babekizulu Dlamini
@Desc: testing library interest formulae
@Date: 2023/05/06
*/
//libs
const Interest = require('../../libs/formulae/economics/interest');

//economics: interest formulae testing
describe('Economics: Interest Formulae Testing', () => {
  //compound interest formula (unit test)
  test('Compound Interest should return: 431902.81', () => {
    expect(new Interest().compound(5000, 45, 1, 12)).toBe(
      parseFloat(431902.81).toFixed(2),
    );
  });
  //simple interest formula (unit test)
  test('Simple Interest should return: 27000.00', () => {
    expect(new Interest().simple(45, 5000, 12)).toBe(
      parseFloat(27000).toFixed(2),
    );
  });
});
