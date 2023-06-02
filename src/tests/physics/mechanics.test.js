/*
@Author: Lwandle Babekizulu Dlamini 
@Desc: testing library for mechanics formulae
@Date: 2023/05/06
*/
const Mechanics = require('../../libs/formulae/physics/mechanics');

//mechanics formulae tests
describe('Mechanics Formulae Tests', () => {
  //velocity equation (unit test)
  test('Velocity Equation should return: 100.000', () => {
    expect(new Mechanics().velocity(1000, 10)).toBe(parseFloat(100).toFixed(3));
  });
  //acceleration equation (unit test)
  test('Acceleration Equation should return: 10.000', () => {
    expect(new Mechanics().velocity(100, 10)).toBe(parseFloat(10).toFixed(3));
  });
  //equations of motion (unit tests)
  /*
  1. velocityEM
  2. displacement
  3. velocitySquared
  4. averageVelocity
  */
  //1.
  test('Equations of Motion - velocityEM should return: 100.000', () => {
    expect(new Mechanics().equationsOfMotion().velocityEM(0, 10, 10)).toBe(
      parseFloat(100).toFixed(3),
    );
  });
  //2.
  test('Equations of Motion - displacement should return: 5000.000', () => {
    expect(
      new Mechanics().equationsOfMotion().displacementEM(0, 0, 10, 10),
    ).toBe(parseFloat(5000).toFixed(3));
  });
  //3.
  test('Equations of Motion - velocitySquared should return: 100000.000', () => {
    expect(
      new Mechanics().equationsOfMotion().velocitySquaredEM(0, 10, 5000, 0),
    ).toBe(parseFloat(100000).toFixed(3));
  });
  //4.
  test('Equations of Motion - averageVelocity should return: 50.000', () => {
    expect(new Mechanics().equationsOfMotion().averageVelocityEM(100, 0)).toBe(
      parseFloat(50).toFixed(3),
    );
  });
  //net force equations (unit tests)
  //1.
  test('Net Force Equations - netForce1 should return: 4000000.000', () => {
    expect(new Mechanics().netForce1(20000, 200)).toBe(
      parseFloat(4000000).toFixed(3),
    );
  });
  //2.
  test('Net Force Equations - netForce2 should return: 661.200', () => {
    expect(new Mechanics().netForce2(3.306, 5 * 10 ** -3)).toBe(
      parseFloat(661.2).toFixed(3),
    );
  });
  //weight equation (unit test)
  test('Weight should return: 490.350', () => {
    expect(new Mechanics().weight(50, 9.807)).toBe(
      parseFloat(490.35).toFixed(3),
    );
  });
  //dry friction equation (unit test)
  test('Dry Friction should return: 343.245', () => {
    expect(new Mechanics().dryFriction(0.7, 490.35)).toBe(
      parseFloat(343.245).toFixed(3),
    );
  });
  //centripetal acceleration equation (unit test)
  test('Centripetal Acceleration should return: 0.630', () => {
    expect(new Mechanics().centripetalAcceleration(2000, 6378000)).toBe(
      parseFloat(0.627).toFixed(3),
    );
  });
  //momentum equation (unit test)
  test('Momentum should return: 5000.000', () => {
    expect(new Mechanics().momentum(50, 100)).toBe(parseFloat(5000).toFixed(3));
  });
  //impulse equation (unit test)
  test('Impulse should return: 50000.000', () => {
    expect(new Mechanics().impulse(5000, 10)).toBe(
      parseFloat(50000).toFixed(3),
    );
  });
  //impulse-momentum equation (unit test)
  test('Impulse-Momentum should return: 5000.000', () => {
    expect(new Mechanics().impulseMomentum(50, 100)).toBe(
      parseFloat(5000).toFixed(3),
    );
  });
  //work equation (unit test)
  test('Work should return: 500000.000', () => {
    expect(new Mechanics().work(5000, 100)).toBe(parseFloat(500000).toFixed(3));
  });
  //work energy (unit test)
  test('Work-Energy should return: 500000.000', () => {
    expect(new Mechanics().workEnergy(0, 500000)).toBe(
      parseFloat(500000).toFixed(3),
    );
  });
  //kinetic energy (unit test)
  test('Kinetic Energy should return: 250000.000', () => {
    expect(new Mechanics().kineticEnergy(50, 100)).toBe(
      parseFloat(250000).toFixed(3),
    );
  });
  //general potential energy (unit test)
  test('General Potential Energy should return: -500000.000', () => {
    expect(new Mechanics().generalPotentialEnergy(5000, 100)).toBe(
      parseFloat(-500000).toFixed(3),
    );
  });
  //gravitational potential energy (unit test)
  test('Gravitational Potential Energy should return: 1059156000000.000', () => {
    expect(
      new Mechanics().gravitationalPotentialEnergy(1350000, 9.807, 80000),
    ).toBe(parseFloat(1059156000000).toFixed(3));
  });
  //efficiency equation (unit test)
  test('Efficiency should return: 2.232', () => {
    expect(new Mechanics().efficiency(7590, 3400)).toBe(
      parseFloat(2.232).toFixed(3),
    );
  });
  //power equation (unit test)
  test('Power should return: 50000.000', () => {
    expect(new Mechanics().power(500000, 10)).toBe(
      parseFloat(50000).toFixed(3),
    );
  });
  //power-velocity equation (unit test)
  test('Power-Velocity should return: 500000.000', () => {
    expect(new Mechanics().powerVelocity(5000, 100)).toBe(
      parseFloat(500000).toFixed(3),
    );
  });
  //angular velocity equation (unit test)
  test('Angular Velocity should return: 0.079', () => {
    expect(new Mechanics().angularVelocity(0.79, 10)).toBe(
      parseFloat(0.079).toFixed(3),
    );
  });
  //angular acceleration equation (unit test)
  test('Angular Acceleration should return: 0.080', () => {
    expect(new Mechanics().angularAcceleration(0.079, 10)).toBe(
      parseFloat(0.0079).toFixed(3),
    );
  });
  //equations of rotation (unit tests)
  /*
  1. angular velocity equation
  2. angular rotation equation
  3. angular velocity squared
  4. average angular velocity
  */
  //1.
  test('Angular Velocity EOR should return: 0.079', () => {
    expect(
      new Mechanics().equationsOfRotation().angularVelocityEOR(0, 0.0079, 10),
    ).toBe(parseFloat(0.079).toFixed(3));
  });
  //2.
  test('Angular Rotation should return: 203.140', () => {
    expect(
      new Mechanics().equationsOfRotation().angularRotationEOR(3.14, 0, 10, 2),
    ).toBe(parseFloat(203.14).toFixed(3));
  });
  //3.
  test('Angular Velocity Squared should return: 800.000', () => {
    expect(
      new Mechanics()
        .equationsOfRotation()
        .angularVelocitySquaredEOR(0, 2, 203.14, 3.14),
    ).toBe(parseFloat(800).toFixed(3));
  });
  //4.
  test('Average Angular Velocity should return: 10.000', () => {
    expect(
      new Mechanics().equationsOfRotation().averageAngularVelocity(20, 0),
    ).toBe(parseFloat(10).toFixed(3));
  });
  //torque equation (unit test)
  test('Torque should return: 30.000', () => {
    expect(new Mechanics().torque(0.15, 200)).toBe(parseFloat(30).toFixed(3));
  });
  //net torque equations (unit tests)
  /*
  1. Net Torque 1
  2. Net Torque 2
  */
  //1.
  test('Net Torque 1 should return: 0.336', () => {
    expect(new Mechanics().netTorque1(0.168, 2)).toBe(
      parseFloat(0.336).toFixed(3),
    );
  });
  //2.
  test('Net Torque 2 should return: 0.075', () => {
    expect(new Mechanics().netTorque2(0.3, 4)).toBe(
      parseFloat(0.075).toFixed(3),
    );
  });
  //moment of inertia equation (unit test)
  test('Moment of Inertia should return: 45000.000', () => {
    expect(new Mechanics().momentOfInertia(50, 30)).toBe(
      parseFloat(45000).toFixed(3),
    );
  });
  //rotational work (unit test)
  test('Rotational Work should return: 94.200', () => {
    expect(new Mechanics().rotationalWork(30, 3.14)).toBe(
      parseFloat(94.2).toFixed(3),
    );
  });
  //rotational power (unit test)
  test('Rotational Power should return: 94.200', () => {
    expect(new Mechanics().rotationalPower(30, 3.14)).toBe(
      parseFloat(94.2).toFixed(3),
    );
  });
  //rotational kinetic energy (unit test)
  test('Rotational Kinetic Energy should return: 9982845000.000', () => {
    expect(new Mechanics().rotationalKineticEnergy(45000, 3.14)).toBe(
      parseFloat(9982845000).toFixed(3),
    );
  });
  //angular momentum (unit test)
  test('Angular Momentum should return: 2000.000', () => {
    expect(new Mechanics().angularMomentum(40, 50)).toBe(
      parseFloat(2000).toFixed(3),
    );
  });
  //angular impulse (unit test)
  test('Angular Impulse should return: 720.000', () => {
    expect(new Mechanics().angularImpulse(30, 24)).toBe(
      parseFloat(720).toFixed(3),
    );
  });
  //angular impulse momentum (unit test)
  test('Angular Impulse Momentum should return: 157.000', () => {
    expect(new Mechanics().angularImpulseMomentum(50, 3.14)).toBe(
      parseFloat(157).toFixed(3),
    );
  });
  //universal gravitation equation (unit test)
  test('Universal Gravitation returns: 0.157', () => {
    expect(new Mechanics().universalGravitation(9.8, 10, 400, 500)).toBe(
      parseFloat(0.157).toFixed(3),
    );
  });
  //gravitational field equation (unit test)
  test('Gravitational Field should return: -0.005', () => {
    expect(new Mechanics().gravitationalFieldEquation(9.8, 42, 300)).toBe(
      parseFloat(-0.00457).toFixed(3),
    );
  });
  //gravitational potential energy 2 (unit test)
  test('Gravitational Potential Energy 2 should return: -196.000', () => {
    expect(
      new Mechanics().gravitationalPotentialEnergy2(9.8, 100, 42, 210),
    ).toBe(parseFloat(-196).toFixed(3));
  });
  //gravitational potential (unit test)
  test('Gravitational Potential should return: -2.058', () => {
    expect(new Mechanics().gravitationalPotential(9.8, 42, 200)).toBe(
      parseFloat(-2.058).toFixed(3),
    );
  });
  //orbital speed equation (unit test)
  test('Orbital Speed should return: 1.435', () => {
    expect(new Mechanics().orbitalSpeedEquation(9.8, 42, 200)).toBe(
      parseFloat(1.43457).toFixed(3),
    );
  });
  //escape speed equation (unit test)
  test('Escape Speed should return: 2.029', () => {
    expect(new Mechanics().escapeSpeed(9.8, 42, 200)).toBe(
      parseFloat(2.029).toFixed(3),
    );
  });
  //hookes law (unit test)
  test("Hooke's Law should return: -2.000", () => {
    expect(new Mechanics().hookesLaw(2.5, 0.8)).toBe(parseFloat(-2).toFixed(3));
  });
  //spring potential energy equation (unit test)
  test('Spring Potential Energy should return: 37.500', () => {
    expect(new Mechanics().springPotentialEnergy(3, 5)).toBe(
      parseFloat(37.5).toFixed(3),
    );
  });
  //simple harmonic oscillator equation (unit test)
  test('Simple Harmonic Oscillator should return: 5.130', () => {
    expect(new Mechanics().simpleHarmonicOscillator(20, 30)).toBe(
      parseFloat(5.13).toFixed(3),
    );
  });
  //simple pendulum equation (unit test)
  test('Simple Pendulum Equation should return: 4.488', () => {
    expect(new Mechanics().simplePendulum(5, 9.8)).toBe(
      parseFloat((10 / 7) * Math.PI).toFixed(3),
    );
  });
  //frequency equation (unit test)
  test('Frequency should return: 0.223', () => {
    expect(new Mechanics().frequency((10 / 7) * Math.PI)).toBe(
      parseFloat(0.2228).toFixed(3),
    );
  });
  //angular frequency equation (unit test)
  test('Angular Frequency should return: 1.400', () => {
    expect(new Mechanics().angularFrequency(0.2228)).toBe(
      parseFloat(1.3999).toFixed(3),
    );
  });
  //density equation (unit test)
  test('Density should return: 0.168', () => {
    expect(new Mechanics().density(42, 250)).toBe(parseFloat(0.168).toFixed(3));
  });
  //pressure equation (unit test)
  test('Pressure should return: 10.000', () => {
    expect(new Mechanics().pressure(20, 2)).toBe(parseFloat(10).toFixed(3));
  });
  //fluid pressure equation (unit test)
  test('Fluid Pressure should return: 3.270', () => {
    expect(new Mechanics().fluidPressure(0.8, 0.168, 9.8, 1.5)).toBe(
      parseFloat(3.2696).toFixed(3),
    );
  });
  //buoyancy equation (unit test)
  test('Buoyancy should return: 411.600', () => {
    expect(new Mechanics().buoyancy(0.168, 9.8, 250)).toBe(
      parseFloat(411.6).toFixed(3),
    );
  });
  //mass flow rate equation (unit test)
  test('Mass Flow Rate should return: 1.25', () => {
    expect(new Mechanics().massFlowRate(30, 24)).toBe(
      parseFloat(1.25).toFixed(3),
    );
  });
  //volume flow rate equation (unit test)
  test('Volume Flow Rate should return: 1.875', () => {
    expect(new Mechanics().volumeFlowRate(45, 24)).toBe(
      parseFloat(1.875).toFixed(3),
    );
  });
  //dynamic viscosity equation (unit test)
  test('Dynamic Viscosity should return: 11.429', () => {
    expect(new Mechanics().dynamicViscosityEquation(40, 3.5)).toBe(
      parseFloat(11.42857).toFixed(3),
    );
  });
  //kinematic viscosity equation (unit test)
  test('Kinematic Viscosity should return: 2.000', () => {
    expect(new Mechanics().kinematicViscosity(10, 5)).toBe(
      parseFloat(2).toFixed(3),
    );
  });
  //drag equation (unit test)
  test('Drag should return: 8.000', () => {
    expect(new Mechanics().drag(5, 2, 0.2, 4)).toBe(parseFloat(8).toFixed(3));
  });
  //mach number (unit test)
  test('Mach Number should return: 1.312', () => {
    expect(new Mechanics().machNumber(450, 343)).toBe(
      parseFloat(1.31195).toFixed(3),
    );
  });
  //reynolds number (unit test)
  test('Reynolds Number should return: 31.250', () => {
    expect(new Mechanics().reynoldsNumber(1, 25, 15, 12)).toBe(
      parseFloat(31.25).toFixed(3),
    );
  });
  //froude number (unit test)
  test('Froude Number should return: 3.571', () => {
    expect(new Mechanics().froudeNumber(25, 9.8, 5)).toBe(
      parseFloat(3.571).toFixed(3),
    );
  });
  //youngs modulus (unit test)
  test("Young's Modulus should return: 15.000", () => {
    expect(new Mechanics().youngsModulus(30, 2)).toBe(
      parseFloat(15).toFixed(3),
    );
  });
  //shear modulus (unit test)
  test('Shear Modulus should return: 20.000', () => {
    expect(new Mechanics().shearModulus(40, 2)).toBe(parseFloat(20).toFixed(3));
  });
  //bulk modulus (unit test)
  test('Bulk Modulus should return: -12.750', () => {
    expect(new Mechanics().bulkModulus(30, 40, 17)).toBe(
      parseFloat(-12.75).toFixed(3),
    );
  });
  //surface tension (unit test)
  test('Surface Tension should return: 1.250', () => {
    expect(new Mechanics().surfaceTension(25, 10)).toBe(
      parseFloat(1.25).toFixed(3),
    );
  });
});
