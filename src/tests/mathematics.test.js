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
    quadraticFormula,
    pythagoreanFormula,
    distanceFormula,
    midPointFormula
} = new AlgebraicFormulae();

describe('Algebraic Formulae Tests', () => {
    //quadratic formula test
    test('Should return:', () => {
        expect(quadraticFormula()).toBe();
    });
    //pythagorean formula test
    test('Should return:', () => {
        expect(pythagoreanFormula()).toBe();
    });
    //distance formula test
    test('Should return:', () => {
        expect(distanceFormula()).toBe();
    });
    //midpoint formula test
    test('Should return:', () => {
        expect(midPointFormula()).toBe();
    });
});