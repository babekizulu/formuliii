/*
@desc: A library of physics formulae
@author: Lwandle Babekizulu Dlamini
@date: 2024/04/08
@TODO:
- mechanics
- thermal physics
- waves & optics
- electricity & magnetism
- modern physics
** COMPLETE CHECKS
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
   ____________________
  - work-energy
  - kinetic energy
  - general potential energy
  - gravitational potential energy
  - efficiency
  - power 
  - power-velocity
  - angular velocity
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
  workEnergy = () => {};
  // - kinetic energy
  // - general potential energy
  // - gravitational potential energy
  // - efficiency
  // - power
  // - power-velocity
  // - angular velocity
  // - angular acceleration
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
