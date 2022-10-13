/*
* @Desc: Testing file for Physics Formulae
* @Author: Lwandle Babekizulu Dlamini
* @Date: 2022/10/13
*/
//libs
const PhysicsFormulae = require('../libs/PhysicsFormulae');
const {KinematicsEquations} = PhysicsFormulae;
//Kinematics Equation Tests
//solve for average velocity (unit test)
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
    test('Average Velocity should equal 14', () => {
        expect(solveForAverageVelocityDAE(2, 3, 4)).toBe(14);
    });
    //tests initial velocity equation
    test('Initial Velocity should equal 2', () => {
        expect(solveForInitialVelocityDAE(14, 3, 4)).toBe(2);
    });
    //tests acceleration equation
    test('Acceleration should equal 3', () => {
        expect(solveForAccelerationDAE(14, 2, 4)).toBe(3);
    });
    //tests time equation
    test('Time should equal 4', () => {
        expect(solveForTimeDAE(14, 2, 3)).toBe(4);
    });
});
//Displacement Curve Equation Tests
describe('Kinematic Equations Tests: Displacement Curve', () => {
    //tests displacement equation
    test('Displacement should equal 150', () => {
        expect(solveForDisplacementDCE(5, 10, 2)).toBe(150);
    });
    //tests final position equation
    test('Final Position should equal 150', () => {
        expect(solveForFinalPositionDCE(5, 10, 2, 0)).toBe(150);
    });
    //tests initial position equation
    test('Initial Position should equal 0', () => {
        expect(solveForInitialPositionDCE(150, 5, 10, 2)).toBe(0);
    });
    //tests initial velocity equation
    test('Initial Velocity should equal 5', () => {
        expect(solveForInitialVelocityDCE(150, 2, 10)).toBe(5);
    });
    //tests acceleration equation
    test('Acceleration should equal 2', () => {
        expect(solveForAccelerationDCE(150, 5, 10)).toBe(2);
    });
});
