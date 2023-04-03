/*
* @Desc: Testing file for Physics Formulae
* @Author: Lwandle Babekizulu Dlamini
* @Date: 2022/11/06
*/
//libs
const PhysicsFormulae = require('../libs/PhysicsFormulae');
const {KinematicsEquations} = PhysicsFormulae;
//Kinematics Equation Tests
const {
    solveForAverageVelocityDAE, 
    solveForInitialVelocityDAE,
    solveForAccelerationDAE,
    solveForTimeDAE,
    solveForDisplacementDCE,
    solveForFinalPositionDCE,
    solveForInitialPositionDCE,
    solveForInitialVelocityDCE,
    solveForAccelerationDCE
} = new KinematicsEquations();
//Definition of Acceleration Equation Tests
describe('Kinematic Equations Tests: Definition of Acceleration', () => {
    //tests average velocity equation (unit test)
    test('Average Velocity should equal 14.000', () => {
        expect(solveForAverageVelocityDAE(2, 3, 4)).toBe(parseFloat(14).toFixed(3));
    });
    //tests initial velocity equation
    test('Initial Velocity should equal 2.000', () => {
        expect(solveForInitialVelocityDAE(14, 3, 4)).toBe(parseFloat(2).toFixed(3));
    });
    //tests acceleration equation
    test('Acceleration should equal 3.000', () => {
        expect(solveForAccelerationDAE(14, 2, 4)).toBe(parseFloat(3).toFixed(3));
    });
    //tests time equation
    test('Time should equal 4.000', () => {
        expect(solveForTimeDAE(14, 2, 3)).toBe(parseFloat(4).toFixed(3));
    });
});
//Displacement Curve Equation Tests
describe('Kinematic Equations Tests: Displacement Curve', () => {
    //tests displacement equation
    test('Displacement should equal 150.000', () => {
        expect(solveForDisplacementDCE(5, 10, 2)).toBe(parseFloat(150).toFixed(3));
    });
    //tests final position equation
    test('Final Position should equal 150.000', () => {
        expect(solveForFinalPositionDCE(5, 10, 2, 0)).toBe(parseFloat(150).toFixed(3));
    });
    //tests initial position equation
    test('Initial Position should equal 0.000', () => {
        expect(solveForInitialPositionDCE(150, 5, 10, 2)).toBe(parseFloat(0).toFixed(3));
    });
    //tests initial velocity equation
    test('Initial Velocity should equal 5.000', () => {
        expect(solveForInitialVelocityDCE(150, 2, 10)).toBe(parseFloat(5).toFixed(3));
    });
    //tests acceleration equation
    test('Acceleration should equal 2.000', () => {
        expect(solveForAccelerationDCE(150, 5, 10)).toBe(parseFloat(2).toFixed(3));
    });
});