/*
* @Desc: Testing file for Mathematics Formulae
* @Author: Lwandle Babekizulu Dlamini
* @Date: 2022/10/26
*/
//libs
const MathematicsFormulae = require('../libs/MathematicsFormulae');

//ALGEBRAIC FORMULAE TESTS
const {AlgebraicFormulae} = MathematicsFormulae;
const {
    pythagoreanFormula,
    distanceFormula,
    midPointFormula
} = new AlgebraicFormulae();

describe('Algebraic Formulae Tests', () => {
    //pythagorean formula test
    test('Hypotenuse should equal: 5', () => {
        expect(pythagoreanFormula(4, 3)).toBe(parseFloat(5));
    });
    //distance formula test
    test('Distance should equal: 5', () => {
        expect(distanceFormula(3, 7, 2, 5)).toBe(parseFloat(5));
    });
    //midpoint formula test
    test('Midpoint Coordinates should equal: [5, 3.5]', () => {
        expect(midPointFormula(3, 7, 2, 5)).toStrictEqual([parseFloat(5), parseFloat(7/2)]);
    });
});