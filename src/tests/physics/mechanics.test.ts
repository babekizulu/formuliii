/*
@Author: Lwandle Babekizulu Dlamini
@Desc: testing file for mechanics formulae
@Date: 2023/01/05
@TODO:
o	Work
o	Work-Energy
o	Kinetic Energy
o	General Potential Energy
o	Gravitational Potential Energy
o	Efficiency
*/
import Mechanics from '../../libs/formulae/physics/mechanics.ts';
const {
  velocity,
  acceleration,
  equationsOfMotion,
  netForce1,
  netForce2,
  weight,
  dryFriction,
  centripetalAcceleration,
  momentum,
  impulse,
  impulseMomentum,
} = new Mechanics();
//destructured equations of motion
const { velocityEM, displacement, velocitySquared, averageVelocity } =
  equationsOfMotion();

//mechanics unit tests
describe('Mechanics module unit tests', () => {
  //velocity equation (unit test)
  test('Velocity Equation (unit test): Should return 1.000', () => {
    expect(velocity(1, 1)).toBe((1).toFixed(3));
  });
  //acceleration equation (unit test)
  test('Acceleration Equation (unit test): Should return 1', () => {
    expect(acceleration(1, 1)).toBe((1).toFixed(3));
  });
  //equations of motion unit tests
  // - velocity (unit test)
  test('Equations of Motion - Velocity (unit test): Should return 1', () => {
    expect(velocityEM(1, 1, 1)).toBe((1).toFixed(3));
  });
  // - displacement (unit test)
  test('Equations of Motion - Displacement (unit test): Should return 1.000', () => {
    expect(displacement(1, 1, 1, 1)).toBe((1).toFixed(3));
  });
  // - velocity squared (unit test)
  test('Equations of Motion - Velocity Squared (unit test): Should return 1.000', () => {
    expect(velocitySquared(1, 1, 1, 1)).toBe((1).toFixed(3));
  });
  // - average velocity test
  test('Equations of Motion - Average Velocity (unit test): Should return 1.000', () => {
    expect(averageVelocity(1, 1)).toBe((1).toFixed(3));
  });
  //net force equation tests
  // - 1.
  test('Net Force 1 (unit test): Should return 1.000', () => {
    expect(netForce1(1, 1)).toBe((1).toFixed(3));
  });
  // - 2.
  test('Net Force 2 (unit test): Should return 1.000', () => {
    expect(netForce2(1, 1)).toBe((1).toFixed(3));
  });
  //weight equation (unit test)
  test('Weight Equation (unit test): Should return 1.000', () => {
    expect(weight(1, 1)).toBe((1).toFixed(3));
  });
  //dry friction equation (unit test)
  test('Dry Friction Equation (unit test): Should return 1.000', () => {
    expect(dryFriction(1, 1)).toBe((1).toFixed(3));
  });
  //centripetal acceleration equation (unit test)
  test('Centripetal Acceleration Equation (unit test): Should return 1.000', () => {
    expect(centripetalAcceleration(1, 1)).toBe((1).toFixed(3));
  });
  //momentum equation (unit test)
  test('Momentum Equation (unit test): Should return 1.000', () => {
    expect(momentum(1, 2)).toBe((1).toFixed(3));
  });
  //impulse equation (unit test)
  test('Impulse Equation (unit test): Should return 1.000', () => {
    expect(impulse(1, 1)).toBe((1).toFixed(3));
  });
  //impulse-momentum equation (unit test)
  test('Impulse-Momentum Equation (unit test): Should return 1.000', () => {
    expect(impulseMomentum(1, 1)).toBe((1).toFixed(3));
  });
});
