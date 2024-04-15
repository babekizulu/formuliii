/*
@desc: A library of physics formulae
@author: Lwandle Babekizulu Dlamini
@date: 2024/04/15
@TODO:
- mechanics
- thermal physics
- waves & optics
- electricity & magnetism
- modern physics
** COMPLETE CHECKS
** Replace Theta variables with Angular Position
*/

class Mechanics {
  /*
  @desc: Class containing mechanics equations
  @methods:
  - velocity
  - acceleration
  - equations of motion
  - newton's 2nd law
  - weight
  - dry friction
  - centripetal acceleration
  - momentum
  - impulse
  - impulse-momentum
  - work
  - work-energy
  - kinetic energy
  - general potential energy
  ___________________________
  - gravitational potential energy
  - efficiency
  - power 
  - power-velocity
  - angular velocity
  _______________________________
  - angular acceleration
  - equations of rotation
  - torque
  - 2nd law for rotation
  - moment of inertia 
  - rotational work
  - rotational power
  - rotational kinetic energy
  - angular momentum
  - angular impulse
  - angular impulse momentum
  - universal gravitation
  - gravitational field
  - gravitational potential energy
  - gravitational potential
  - orbital speed
  - escape speed
  - hooke's law
  - spring potential energy
  - simple harmonic oscillator
  - simple pendulum
  - frequency
  - angular frequency
  - density
  - pressure
  - pressure in a fluid
  - buoyancy
  - mass flow rate
  - volume flow rate
  - mass continuity
  - volume continuity
  - bernoulli's equation
  - dynamic viscosity
  - kinematic viscosity
  - drag
  - mach number
  - reynolds number
  - froude number
  - young's modulus
  - shear modulus
  - bulk modulus
  - surface tension
  */
  //VELOCITY
  /*
  @methods: 
  - average velocity
  */
  //average velocity
  /*
 @params:
 - initial position
 - final position
 - initial time
 - final time
 */
  averageVelocity = (
    initialPosition,
    finalPosition,
    initialTime,
    finalTime,
  ) => {
    return (
      parseFloat(finalPosition - initialPosition) /
      parseFloat(finalTime - initialTime)
    ).toFixed(3);
  };
  //ACCELERATION
  // average acceleration
  /*
  @params:
  - initial velocity
  - final velocity
  - initial time
  - final time
  */
  averageAcceleration = (
    initialVelocity,
    finalVelocity,
    initialTime,
    finalTime,
  ) => {
    return (
      parseFloat(finalVelocity - initialVelocity) /
      parseFloat(finalTime - initialTime)
    ).toFixed(3);
  };
  // EQUATIONS OF MOTION
  //velocity
  /*
  @params: 
  - initial velocity
  - acceleration
  - time
  */
  velocity = (initialVelocity, acceleration, time) => {
    return (
      parseFloat(initialVelocity) +
      parseFloat(acceleration) * parseFloat(time)
    ).toFixed(3);
  };
  // NEWTON'S SECOND LAW
  //net force
  /*
  @params: 
  - mass
  - acceleration
   */
  netForce = (mass, acceleration) => {
    return (parseFloat(mass) * parseFloat(acceleration)).toFixed(3);
  };
  //WEIGHT
  //weight
  /*
  @params: 
  - mass
  - acceleration due to gravity
  */
  weight = (mass, accelerationDueToGravity) => {
    return (parseInt(mass) * parseInt(accelerationDueToGravity)).toFixed(3);
  };
  //DRY FRICTION
  //kinetic friction
  /*
  @params:
  - coefficient of kinetic friction
  - normal force
  */
  kineticFriction = (coefficientOfKineticFriction, normalForce) => {
    return (
      parseFloat(coefficientOfKineticFriction) * parseFloat(normalForce)
    ).toFixed(3);
  };
  //CENTRIPETAL ACCELERATION
  //centripetal acceleration
  /*
  @params: 
  - velocity
  - distance from center
  */
  centripetalAcceleration = (velocity, distanceFromCenter) => {
    return (parseFloat(velocity) ** 2 / parseFloat(distanceFromCenter)).toFixed(
      3,
    );
  };
  //MOMENTUM
  //momentum
  /*
  @params:
  - mass
  - velocity
  */
  momentum = (mass, velocity) => {
    return (parseFloat(mass) * parseFloat(velocity)).toFixed(3);
  };
  //IMPULSE
  //impulse
  /*
  @params:
  - average force
  - inital time
  - final time
  */
  impulse = (averageForce, initialTime, finalTime) => {
    return (
      parseFloat(averageForce) * parseFloat(finalTime - initialTime)
    ).toFixed(3);
  };
  //IMPULSE MOMENTUM
  /*
  @params: 
  - mass
  - initial velocity
  - final velocity
  */
  impulseMomentum = (mass, initialVelocity, finalVelocity) => {
    return (
      parseFloat(mass) * parseFloat(finalVelocity - initialVelocity)
    ).toFixed(3);
  };
  //WORK
  /*
  @params:
  - average force
  - initial position
  - final position
  - theta **CHECK
  */
  work = (averageForce, initialPosition, finalPosition, theta) => {
    return (
      parseFloat(averageForce) *
      parseFloat(finalPosition - initialPosition) *
      Math.cos(theta)
    ).toFixed(3);
  };
  //WORK-ENERGY
  /*
  @params:
  - initial energy
  - final energy
  */
  workEnergy = (initialEnergy, finalEnergy) => {
    return parseFloat(finalEnergy - initialEnergy).toFixed(3);
  };
  //KINETIC ENERGY
  //kinetic energy 1
  /*
  @params:
  - mass
  - velocity
  */
  kineticEnergy1 = (mass, velocity) => {
    return (0.5 * (parseFloat(mass) * parseFloat(velocity)) ** 2).toFixed(3);
  };
  //kinetic energy 2
  /*
  @params:
  - momentum
  - mass
  */
  kineticEnergy2 = (momentum, mass) => {
    return ((parseFloat(momentum) ** 2 / 2) * mass).toFixed(2);
  };
  //GENERAL POTENTIAL ENERGY
  /*
  @params:
  - initial potential energy
  - final potential energy
  */
  generalPotentialEnergy = (initialPotentialEnergy, finalPotentialEnergy) => {
    return (-parseFloat(finalPotentialEnergy - initialPotentialEnergy)).toFixed(
      3,
    );
  };
  // GRAVITATIONAL POTENTIAL ENERGY 1
  /*
  @params: 
  - mass
  - acceleration due to gravity
  - initial height
  - final height
  */
  gravitationalPotentialEnergy = (
    mass,
    accelerationDueToGravity,
    initialHeight,
    finalHeight,
  ) => {
    return (
      parseFloat(mass) *
      parseFloat(accelerationDueToGravity) *
      parseFloat(finalHeight - initialHeight)
    ).toFixed(2);
  };
  // EFFICIENCY
  /*
  @params: 
  - work output
  - energy input
  */
  efficiency = (workOutput, energyInput) => {
    return parseFloat(workOutput / energyInput).toFixed(2);
  };
  //POWER
  /*
  @params:
  - initial work
  - final work
  - initial time
  - final time
  */
  power = (initialWork, finalWork, initialTime, finalTime) => {
    return (
      parseFloat(finalWork - initialWork) / parseFloat(finalTime - initialTime)
    );
  };
  //POWER-VELOCITY
  //power-velocity 1
  /*
  @params:
  - force
  - velocity
  - angular position
  */
  powerVelocity1 = (force, velocity, angularPosition) => {
    return (
      parseFloat(force) *
      parseFloat(velocity) *
      parseFloat(Math.cos(angularPosition))
    ).toFixed(2);
  };
  //power-velocity 2
  /*
  @params:
  - force
  - velocity
  */
  powerVelocity = (force, velocity) => {
    return (parseFloat(force) * parseFloat(velocity)).toFixed(2);
  };
  //ANGULAR VELOCITY
  /*
  @params:
  - initial angular position
  - final angular position
  - initial time
  - final time
  */
  angularVelocity = (
    initialAngularPosition,
    finalAngularPosition,
    initialTime,
    finalTime,
  ) => {
    return (
      parseFloat(finalAngularPosition - initialAngularPosition) /
      parseFloat(finalTime - initialTime)
    ).toFixed(2);
  };
  //ANGULAR ACCELERATIONION
  // - equations of rotation
  // - torque
  // - 2nd law for rotation
  // - moment of inertia
  // - rotational work
  // - rotational power
  // - rotational kinetic energy
  // - angular momentum
  // - angular impulse
  // - angular impulse momentum
  // - universal gravitation
  // - gravitational field
  // - gravitational potential energy
  // - gravitational potential
  // - orbital speed
  // - escape speed
  // - hooke's law
  // - spring potential energy
  // - simple harmonic oscillator
  // - simple pendulum
  // - frequency
  // - angular frequency
  // - density
  // - pressure
  // - pressure in a fluid
  // - buoyancy
  // - mass flow rate
  // - volume flow rate
  // - mass continuity
  // - volume continuity
  // - bernoulli's equation
  // - dynamic viscosity
  // - kinematic viscosity
  // - drag
  // - mach number
  // - reynolds number
  // - froude number
  // - young's modulus
  // - shear modulus
  // - bulk modulus
  // - surface tension
}
class ThermalPhysics {}
class WavesAndOptics {}
class ElectricityAndMagnetism {}
class ModernPhysics {}

export {
  Mechanics,
  ThermalPhysics,
  WavesAndOptics,
  ElectricityAndMagnetism,
  ModernPhysics,
};
