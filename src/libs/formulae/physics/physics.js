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
- Check that all returned values are fixed to 2 decimal spaces
** Replace Theta variables with Angular Position
** Add default values for all constants (where applicable)
** Comment in Units of Measurement
** Test equations
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
    ).toFixed(3);
  };
  // EFFICIENCY
  /*
  @params: 
  - work output
  - energy input
  */
  efficiency = (workOutput, energyInput) => {
    return parseFloat(workOutput / energyInput).toFixed(3);
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
    ).toFixed(3);
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
    ).toFixed(3);
  };
  //power-velocity 2
  /*
  @params:
  - force
  - velocity
  */
  powerVelocity = (force, velocity) => {
    return (parseFloat(force) * parseFloat(velocity)).toFixed(3);
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
    ).toFixed(3);
  };
  //AVERAGE ANGULAR ACCELERATION
  /*
  @params: 
  - initial angular rotation
  - final angular rotation
  - initial time
  - final time
  */
  averageAngularAcceleration = (
    initialAngularRotation,
    finalAngularRotation,
    initialTime,
    finalTime,
  ) => {
    return (
      parseFloat(finalAngularRotation - initialAngularRotation) /
      parseFloat(finalTime - initialTime)
    ).toFixed(3);
  };
  //EQUATIONS OF ROTATION
  /*
  - initialAngularRotation
  - angular acceleration
  - time
  */
  equationsOfRotation = (initialAngularRotation, angularAcceleration, time) => {
    return (
      parseFloat(initialAngularRotation) +
      parseFloat(angularAcceleration * time)
    ).toFixed(3);
  };
  //TORQUE
  /*
  @params:
  - radius
  - force
  - angle between force and the lever arm
  */
  torque = (radius, force, angleBetweenForceAndTheLeverArm) => {
    return (
      parseFloat(radius) *
      parseFloat(force) *
      parseFloat(Math.sin(angleBetweenForceAndTheLeverArm))
    ).toFixed(3);
  };
  //Net Torque
  /*
  @params:
  - moment of inertia
  - angular acceleration
  */
  netTorque = (momentOfInertia, angularAcceleration) => {
    return (
      parseFloat(momentOfInertia) * parseFloat(angularAcceleration)
    ).toFixed(3);
  };
  //MOMENT OF INERTIA
  /*
  @params:
  - net mass
  - radius
  */
  momentOfInertia = (netMass, radius) => {
    return (parseFloat(netMass) * parseFloat(radius ** 2)).toFixed(3);
  };
  //ROTATIONAL WORK
  /*
  @params:
  - average torque
  - initial angular position
  - final angular position
  */
  rotationalWork = (
    averageTorque,
    initialAngularPosition,
    finalAngularPosition,
  ) => {
    return (
      parseFloat(averageTorque) *
      parseFloat(finalAngularPosition - initialAngularPosition)
    ).toFixed(3);
  };

  //ROTATIONAL POWER
  /*
  @params:
  - torque
  - angular rotation
  - rotational position
  */
  rotationalPower = (torque, angularRotation, rotationalPosition) => {
    return (
      parseFloat(torque) *
      parseFloat(angularRotation) *
      parseFloat(Math.cos(rotationalPosition))
    ).toFixed(3);
  };
  //ROTATIONAL KINETIC ENERGY
  /*
  @params:
  - moment of inertia
  - angular rotation
  */
  rotationalKineticEnergy = (momentOfInertia, angularRotation) => {
    return (
      parseFloat(0.5 * momentOfInertia) * parseFloat(angularRotation ** 2)
    ).toFixed(3);
  };
  //ANGULAR MOMENTUM
  /*
  @params:
  - mass
  - radius
  - velocity
  - rotational position
  */
  angularMomentum = (mass, radius, velocity, rotationalPosition) => {
    return (
      parseFloat(mass) *
      parseFloat(radius) *
      parseFloat(velocity) *
      parseFloat(Math.sin(rotationalPosition))
    ).toFixed(3);
  };
  //ANGULAR IMPULSE
  /*
  @params:
  - average torque
  - initial time
  - final time
  */
  angularImpulse = (averageTorque, initialTime, finalTime) => {
    return (
      parseFloat(averageTorque) * parseFloat(finalTime - initialTime)
    ).toFixed(3);
  };
  //ANGULAR IMPULSE MOMENTUM
  /*
  - mass
  - initial angular rotation
  - final angular rotation
  */
  angularImpulseMomentum = (
    mass,
    initialAngularRotation,
    finalAngularRotation,
  ) => {
    return (
      parseFloat(mass) *
      parseFloat(finalAngularRotation - initialAngularRotation)
    ).toFixed(3);
  };
  //UNIVERSAL GRAVITATION
  /*
  @params:
  - gravitational constant
  - mass1
  - mass2
  - distance between centers
  */
  universalGravitation = (
    gravitationalConstant,
    mass1,
    mass2,
    distanceBetweenCenters,
  ) => {
    return (
      parseFloat(gravitationalConstant) *
      ((parseFloat(mass1) * parseFloat(mass2)) /
        parseFloat(distanceBetweenCenters))
    ).toFixed(3);
  };
  //GRAVITATIONAL FIELD
  /*
  @params:
  - gravitational constant
  - mass
  - radius
  */
  gravitationalField = (gravitationalConstant, mass, radius) => {
    return (
      (parseFloat(gravitationalConstant) * parseFloat(mass)) /
      parseFloat(radius ** 2)
    ).toFixed(3);
  };
  //GRAVITATIONAL POTENTIAL ENERGY
  /*
  @params:
  - gravitational constant
  - mass1
  - mass2
  - radius
  */
  gravitationalPotentialEnergy2 = (
    gravitationalConstant,
    mass1,
    mass2,
    radius,
  ) => {
    return (
      parseFloat(gravitationalConstant * mass1 * mass2) / parseFloat(radius)
    ).toFixed(3);
  };
  //GRAVITATIONAL POTENTIAL
  /*
  @params:
  - gravitational constant
  - mass
  - radius
  */
  gravitationalPotential = (gravitationalConstant, mass, radius) => {
    return (
      parseFloat(gravitationalConstant * mass) / parseFloat(radius)
    ).toFixed(3);
  };
  //ORBITAL SPEED
  /*
  @params:
  - gravitational constant
  - mass
  - radius
  */
  orbitalSpeed = (gravitationalConstant, mass, radius) => {
    return parseFloat(
      Math.sqrt((gravitationalConstant * mass) / radius),
    ).toFixed(3);
  };
  //ESCAPE SPEED
  /*
  @params: 
  - gravitational constant
  - mass
  - radius
  */
  escapeSpeed = (gravitationalConstant, mass, radius) => {
    return parseFloat(
      Math.sqrt((2 * gravitationalConstant * mass) / radius),
    ).toFixed(3);
  };
  //HOOKE'S LAW
  /*
  @params: 
  - kinetic energy
  - original spring length
  - final spring length
  */
  hookesLaw = (kineticEnergy, originalSpringLength, finalSpringLength) => {
    return (
      parseFloat(kineticEnergy) *
      parseFloat(finalSpringLength - originalSpringLength)
    ).toFixed(3);
  };
  //SPRING POTENTIAL ENERGY
  /*
  @params:
  - kinetic energy
  - original spring length
  - final spring length
  */
  springPotentialEnergy = (
    kineticEnergy,
    originalSpringLength,
    finalSpringLength,
  ) => {
    return parseFloat(
      0.5 * kineticEnergy * (finalSpringLength - originalSpringLength) ** 2,
    ).toFixed(3);
  };
  //SIMPLE HARMONIC OSCILLATOR
  /*
  - amplitude
  - angular frequency
  - time
  - phase shift
  */
  simpleHarmonicOscillator = (
    amplitude,
    angularFrequency,
    time,
    phaseShift,
  ) => {
    return parseFloat(
      amplitude * Math.cos(angularFrequency * time + phaseShift),
    ).toFixed(3);
  };
  //SIMPLE PENDULUM
  /*
  - length
  - acceleration due to gravity
  */
  simplePendulum = (length, accelerationDueToGravity) => {
    return parseFloat(
      2 * Math.PI * Math.sqrt(length / accelerationDueToGravity),
    ).toFixed(3);
  };
  //FREQUENCY
  /*
  - period
  */
  frequency = (period) => {
    return parseFloat(1 / period).toFixed(3);
  };
  //ANGULAR FREQUENCY
  /*
  - frequency
  */
  angularFrequency = (frequency) => {
    return parseFloat(2 * Math.PI * frequency).toFixed(3);
  };
  //DENSITY
  /*
  - mass
  - volume
  */
  density = (mass, volume) => {
    return parseFloat(mass / volume).toFixed(3);
  };
  //PRESSURE
  /*
  - force
  - area
  */
  pressure = (force, area) => {
    return parseFloat(force / area).toFixed(3);
  };
  //PRESSURE IN A FLUID
  /*
  - initial pressure
  - density
  - acceleration due to gravity
  - depth
  */
  pressureInAFluid = (
    initialPressure,
    density,
    accelerationDueToGravity,
    depth,
  ) => {
    return parseFloat(
      initialPressure + density * accelerationDueToGravity * depth,
    ).toFixed(3);
  };
  //BUOYANCY
  /*
  @params:
  - density
  - acceleration due to gravity
  - volume displaced
  */
  buoyancy = (density, accelerationDueToGravity, volumeDisplaced) => {
    return parseFloat(
      density * accelerationDueToGravity * volumeDisplaced,
    ).toFixed(3);
  };
  //MASS FLOW RATE
  /*
  - initial mass
  - final mass
  - initial time
  - final time
  */
  massFlowRate = (initialMass, finalMass, initialTime, finalTime) => {
    return parseFloat(
      finalMass - initialMass / finalTime - initialTime,
    ).toFixed(3);
  };
  //VOLUME FLOW RATE
  /*
  @params:
  - initial volume
  - final volume
  - initial time
  - final time
  */
  volumeFlowRate = (initialVolume, finalVolume, initialTime, finalTime) => {
    return parseFloat(
      (finalVolume - initialVolume) / (finalTime - initialTime),
    ).toFixed(3);
  };
  //DYNAMIC VISCOSITY
  /*
  @params:
  - force
  - area
  - fluidLayer1Height
  - fluidLayer2Height
  - fluidLayer1Speed
  - fluidLayer2Speed
  */
  dynamicViscosity = (
    force,
    area,
    fluidLayer1Height,
    fluidLayer2Height,
    fluidLayer1Speed,
    fluidLayer2Speed,
  ) => {
    return parseFloat(
      (force / area) *
        ((fluidLayer2Height - fluidLayer1Height) /
          (fluidLayer2Speed - fluidLayer1Speed)),
    ).toFixed(3);
  };
  //KINEMATIC VISCOSITY
  /*
  @params:
  - viscosity
  - density
  */
  kinematicViscosity = (viscosity, density) => {
    return parseFloat(viscosity / density).toFixed(3);
  };
  //DRAG
  /*
  @params:
  - density
  - coefficient of drag
  - area
  - velocity
  */
  drag = (density, coefficientOfDrag, area, velocity) => {
    return parseFloat(
      0.5 * density * coefficientOfDrag * area * velocity ** 2,
    ).toFixed(3);
  };
  //MACH NUMBER
  /*
  @params:
  - velocity
  - speed of sound in fluid
  */
  machNumber = (velocity, speedOfSoundInFluid) => {
    return parseFloat(velocity / speedOfSoundInFluid).toFixed(3);
  };
  //REYNOLDS NUMBER
  /*
  @params: 
  - density
  - velocity
  - characeristic length of the system
  - dynamic viscosity of the fluid
  */
  reynoldsNumber = (
    density,
    velocity,
    characteristicLengthOfTheSystem,
    dynamicViscosityOfTheFluid,
  ) => {
    return parseFloat(
      (density * velocity * characteristicLengthOfTheSystem) /
        dynamicViscosityOfTheFluid,
    ).toFixed(3);
  };
  //FROUDE NUMBER
  /*
  @params:
  - velocity
  - acceleration due to gravity
  - characteristic length of the system
  */
  froudeNumber = (
    velocity,
    accelerationDueToGravity,
    characteristicLengthOfTheSystem,
  ) => {
    return parseFloat(
      velocity /
        Math.sqrt(accelerationDueToGravity * characteristicLengthOfTheSystem),
    ).toFixed(3);
  };
  //YOUNG'S MODULUS
  /*
  @params: 
  - energy
  - initial length of the rod
  - final length of the rod
  */
  youngsModulus = (energy, initialLengthOfTheRod, finalLengthOfTheRod) => {
    return parseFloat(
      energy *
        ((finalLengthOfTheRod - initialLengthOfTheRod) / initialLengthOfTheRod),
    ).toFixed(3);
  };
  //SHEAR MODULUS
  /*
  @params:
  - gravitational constant
  - shear strain
  */
  shearModulus = (gravitationalConstant, shearStrain) => {
    return parseFloat(gravitationalConstant * shearStrain).toFixed(3);
  };
  //BULK MODULUS
  /*
  @params:
  - initial force
  - final force
  - initial area
  - final area
  - initial volume
  - final volume
  */
  bulkModulus = (
    initialForce,
    finalForce,
    initialArea,
    finalArea,
    initialVolume,
    finalVolume,
  ) => {
    return parseFloat(
      initialForce / initialArea -
        finalForce /
          finalArea /
          ((finalVolume - initialVolume) / initialVolume),
    ).toFixed(3);
  };
  //SURFACE TENSION
  /*
  @params:
  - force
  - length
  */
  surfaceTension = (force, length) => {
    return parseFloat(force / length).toFixed(3);
  };
}
class ThermalPhysics {
  /*
  @desc: Class containing thermal physics equations
  @methods:
  - solid expansion
  - liquid expansion
  - sensible heat
  - latent heat
  - ideal gas law
  - molecular constants
  - maxwell-boltzmann
  - molecular kinetic energy
  - molecular speeds
  - heat flow rate
  - thermal conduction
  - stefan-boltzmann law
  - wien's law
  - internal energy
  - thermodynamic work
  - 1st law of thermodynamics
  - entropy
  - efficiency
  - coefficient of performance
  */
  //SOLID EXPANSION
  //solid length expansion
  /*
  @params:
  - coefficient of linear expansion
  - initial length
  - initial temperature
  - final temperature
  */
  solidLengthExpansion = (
    coefficientOfLinearExpansion,
    initialLength,
    initialTemperature,
    finalTemperature,
  ) => {
    return parseFloat(
      coefficientOfLinearExpansion *
        initialLength *
        (finalTemperature - initialTemperature),
    ).toFixed(3);
  };
  //solid area expansion
  /*
  @params: 
  - coefficient of linear expansion
  - initial area
  - initial temperature
  - final temperature
  */
  solidAreaExpansion = (
    coefficientOfLinearExpansion,
    initialArea,
    initialTemperature,
    finalTemperature,
  ) => {
    return parseFloat(
      2 *
        coefficientOfLinearExpansion *
        initialArea *
        (finalTemperature - initialTemperature),
    ).toFixed(3);
  };
  //solid volume expansion
  /*
  @params:
  - coefficient of linear expansion
  - initial volume
  - initial temperature
  - final temperature
  */
  solidVolumeExpansion = (
    coefficientOfLinearExpansion,
    initialVolume,
    initialTemperature,
    finalTemperature,
  ) => {
    return parseFloat(
      3 *
        coefficientOfLinearExpansion *
        initialVolume *
        (finalTemperature - initialTemperature),
    ).toFixed(3);
  };
  //LIQUID EXPANSION
  /*
  @params:
  - coefficient of volume expansion
  - initial volume
  - initial temperature
  - final temperature
  */
  liquidExpansion = (
    coefficientOfVolumeExpansion,
    initialVolume,
    initialTemperature,
    finalTemperature,
  ) => {
    return parseFloat(
      coefficientOfVolumeExpansion *
        initialVolume *
        (finalTemperature - initialTemperature),
    ).toFixed(3);
  };

  //SENSIBLE HEAT
  /*
  @params:
  - mass
  - specific heat capacity
  - initial temperature
  - final temperature
  */
  sensibleHeat = (
    mass,
    specificHeatCapacity,
    initialTemperature,
    finalTemperature,
  ) => {
    return parseFloat(
      mass * specificHeatCapacity * (finalTemperature - initialTemperature),
    ).toFixed(3);
  };

  //LATENT HEAT
  //specific latent heat of a substance
  /*
  @params:
  - energy released or absorbed during phase change
  - mass
  */
  specificLatentHeat = (energyReleasedOrAbsorbedDuringPhaseChange, mass) => {
    return parseFloat(energyReleasedOrAbsorbedDuringPhaseChange / mass).toFixed(
      3,
    );
  };
  //IDEAL GAS LAW
  //constant temperature
  /*
  @params:
  - number of moles
  - gas constant (8.314)
  - absolute temperature
  */
  constantTemperature = (
    numberOfMoles,
    gasConstant = 8.314,
    absoluteTemperature,
  ) => {
    return parseFloat(
      numberOfMoles * gasConstant * absoluteTemperature,
    ).toFixed(3);
  };
  //MOLECULAR CONSTANTS
  /*
  @params:
  - number of particles
  - boltzmann constant (1.381*10**-23)
  */
  molecularConstants = (
    numberOfParticles,
    boltzmannConstant = 1.381 * 10 ** -23,
  ) => {
    return parseFloat(numberOfParticles * boltzmannConstant).toFixed(3);
  };

  //maxwell-boltzmann
  /*
  - velocity
  - mass
  - boltzmann constant (1.381*10**-23)
  - temperature
  */
  maxwellBoltzmann = (velocity, mass, boltzmannConstant, temperature) => {
    return parseFloat(
      ((4 * velocity ** 2) / Math.sqrt(Math.PI)) *
        ((mass / 2) * boltzmannConstant * temperature) ** (3 / 2) *
        Math.E **
          (((-mass * velocity ** 2) / 2) * boltzmannConstant * temperature),
    ).toFixed(3);
  };
  //MOLECULAR KINETIC ENERGY
  /*
  @params:
  - boltzmann constant
  - temperature
  */
  molecularKineticEnergy = (boltzmannConstant, temperature) => {
    return parseFloat((3 / 2) * boltzmannConstant * temperature).toFixed(3);
  };
  //MOLECULAR SPEEDS
  //most probable speed
  /*
  @params:
  - boltzmann constant
  - temperature
  - mass
  */
  mostProbableSpeed = (boltzmannConstant, temperature, mass) => {
    return parseFloat(
      Math.sqrt((2 * boltzmannConstant * temperature) / mass),
    ).toFixed(3);
  };
  //mean speed
  /*
  @params:
  - boltzmann constant
  - temperature
  - mass
  */
  meanSpeed = (boltzmannConstant, temperature, mass) => {
    return parseFloat(
      Math.sqrt(((8 * boltzmannConstant * temperature) / Math.PI) * mass),
    ).toFixed(3);
  };

  //root mean square speed
  /*
  @params:
  - boltzmann constant
  - temperature
  - mass
  */
  rootMeanSquareSpeed = (boltzmannConstant, temperature, mass) => {
    return parseFloat(
      Math.sqrt((3 * boltzmannConstant * temperature) / mass),
    ).toFixed(3);
  };
  //HEAT FLOW RATE
  //average heat flow rate
  /*
  @params:
  - initial heat abosrbed
  - initial heat released
  - final heat absorbed
  - final heat released
  - initial time
  - final time
  */
  averageHeatFlowRate = (
    initialHeatAbsorbed,
    initialHeatReleased,
    finalHeatAbsorbed,
    finalHeatReleased,
    initialTime,
    finalTime,
  ) => {
    return parseFloat(
      (finalHeatAbsorbed -
        finalHeatReleased -
        (initialHeatAbsorbed - initialHeatReleased)) /
        (finalTime - initialTime),
    ).toFixed(3);
  };
  //THERMAL CONDUCTION
  /*
  @params:
  - boltzmann constant
  - area
  - initial temperature
  - final temperature
  - length
  */
  thermalConduction = (
    boltzmannConstant,
    area,
    initialTemperature,
    finalTemperature,
    length,
  ) => {
    return parseFloat(
      (boltzmannConstant * area * (finalTemperature - initialTemperature)) /
        length,
    ).toFixed(3);
  };
  //STEFAN-BOLTZMANN LAW
  /*
  - emissivity
  - stefan's constant (5.670*(10**(-8)))
  - surface area
  - absolute temperature of the object
  - absolute temperature of the environment
  */
  stefanBoltzmannLaw = (
    emissivity,
    stefansConstant,
    surfaceArea,
    absoluteTemperatureOfTheObject,
    absoluteTemperatureOfTheEnvironment,
  ) => {
    return parseFloat(
      emissivity *
        stefansConstant *
        surfaceArea *
        (absoluteTemperatureOfTheObject ** 4 -
          absoluteTemperatureOfTheEnvironment ** 4),
    ).toFixed(3);
  };
  //WIEN'S LAW
  //peak wavelength
  /*
  @params:
  - wien's displacement constant
  - absolute surface temperature
  */
  peakWavelength = (wiensDisplacementConstant, absoluteSurfaceTemperature) => {
    return parseFloat(
      wiensDisplacementConstant / absoluteSurfaceTemperature,
    ).toFixed(3);
  };
  //peak frequency
  /*
  @params:
  - wien's frequency displacement constant
  - absolute surface temperature
  */
  peakFrequency = (
    wiensFrequencyDisplacementConstant,
    absoluteSurfaceTemperature,
  ) => {
    return parseFloat(
      wiensFrequencyDisplacementConstant * absoluteSurfaceTemperature,
    ).toFixed(3);
  };
  //INTERNAL ENERGY
  //internal energy 1
  /*
  @params:
  - number of moles
  - gas constant
  - initial absolute temperature
  - final absolute temperature
  */
  internalEnergy1 = (
    numberOfMoles,
    gasConstant,
    initialAbsoluteTemperature,
    finalAbsoluteTemperature,
  ) => {
    return parseFloat(
      1.5 *
        numberOfMoles *
        gasConstant *
        (finalAbsoluteTemperature - initialAbsoluteTemperature),
    ).toFixed(3);
  };
  //internal energy 2
  /*
 @params:
 - number of molecules
 - boltzmanns constant
 - initial absolute temperature
 - final absolute temperature
 */
  internalEnergy2 = (
    numberOfMolecules,
    boltzmannsConstant,
    initialAbsoluteTemperature,
    finalAbsoluteTemperature,
  ) => {
    return parseFloat(
      1.5 *
        numberOfMolecules *
        boltzmannsConstant *
        (finalAbsoluteTemperature - initialAbsoluteTemperature),
    ).toFixed(3);
  };
  //THERMODYNAMIC WORK (TODO)
  //1ST LAW OF THERMODYNAMICS
  //internal energy 3
  /*
  @params:
  - heat absorbed
  - heat released
  - work
  */
  internalEnergy3 = (heatAbsorbed, heatReleased, work) => {
    return parseFloat(heatAbsorbed - heatReleased + work).toFixed(3);
  };
  //ENTROPY
  /*
  - initial heat absorbed
  - initial heat released
  - final heat absorbed
  - final heat released
  - absolute temperature
  */
  entropy = (
    initialHeatAbsorbed,
    initialHeatReleased,
    finalHeatAbsorbed,
    finalHeatReleased,
    absoluteTemperature,
  ) => {
    return parseFloat(
      (initialHeatAbsorbed -
        initialHeatReleased -
        (finalHeatAbsorbed - finalHeatReleased)) /
        absoluteTemperature,
    ).toFixed(3);
  };
  //EFFICIENCY
  //real efficiency
  /*
  - cold heat absorbed
  - cold heat released
  - hot heat absorbed
  - hot heat released
  */
  realEfficiency = (
    coldHeatAbsorbed,
    coldHeatReleased,
    hotHeatAbsorbed,
    hotHeatReleased,
  ) => {
    return parseFloat(
      1 -
        (coldHeatAbsorbed - coldHeatReleased) /
          (hotHeatAbsorbed - hotHeatReleased),
    ).toFixed(3);
  };
  //ideal efficiency
  /*
@params:
- cold absolute temperature
- hot absolute temperature
 */
  idealEfficiency = (coldAbsoluteTemperature, hotAbsoluteTemperature) => {
    return parseFloat(
      1 - coldAbsoluteTemperature / hotAbsoluteTemperature,
    ).toFixed(3);
  };
  //COEFFICIENT OF PERFORMANCE
  //real coefficient of performance
  /*
  @params:
  - cold heat absorbed
  - cold heat released
  - hot heat absorbed 
  - hot heat released
  */
  realCoefficientOfPerformance = (
    coldHeatAbsorbed,
    coldHeatReleased,
    hotHeatAbsorbed,
    hotHeatReleased,
  ) => {
    return parseFloat(
      (coldHeatAbsorbed - coldHeatReleased) /
        (hotHeatAbsorbed - hotHeatReleased) -
        (coldHeatAbsorbed - coldHeatReleased),
    ).toFixed(3);
  };
}
class WavesAndOptics {
  /*
  @desc: Class containing equations for waves and optics
  @methods:
  - PERIODIC WAVES
  - FREQUENCY
  - BEAT FREQUENCY
  - INTENSITY
  - INTENSITY LEVEL
  - PRESSURE LEVEL
  - DOPPLER EFFECT
  - MACH ANGLE
  - CERENKOV ANGLE
  - INTERFERENCE FRINGES
  - INDEX OF REFRACTION
  - SNELL'S LAW
  - CRITICAL ANGLE
  - IMAGE LOCATION
  - IMAGE SIZE
  - SPHERICAL MIRRORS
  */
  // - PERIODIC WAVES
  // - FREQUENCY
  // - BEAT FREQUENCY
  // - INTENSITY
  // - INTENSITY LEVEL
  // - PRESSURE LEVEL
  // - DOPPLER EFFECT
  // - MACH ANGLE
  // - CERENKOV ANGLE
  // - INTERFERENCE FRINGES
  // - INDEX OF REFRACTION
  // - SNELL'S LAW
  // - CRITICAL ANGLE
  // - IMAGE LOCATION
  // - IMAGE SIZE
  // - SPHERICAL MIRRORS
}
class ElectricityAndMagnetism {}
class ModernPhysics {}

export {
  Mechanics,
  ThermalPhysics,
  WavesAndOptics,
  ElectricityAndMagnetism,
  ModernPhysics,
};
