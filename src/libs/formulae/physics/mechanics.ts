/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of mechanics formulae
@Date: 2023/05/29
@TODO:
- (PRIORITY) Check momentum UM's again
- equations that take angles as inputs should limit
  argument input numbers to [-360, 360]
- add all variations of UM's for use in dropdown list
- Add context feature for equations whose units vary based on context
- Consider switching output and input order on Efficiency Component
@CurrentComp: Efficiency
*/

class Mechanics {
    //velocity equation (m/s)
    /*
      @param: Change in Position
      @unit: m (meters)
      @param: Change in Time
      @unit: s (seconds)
      */
    velocity(changeInPosition:number, changeInTime:number) {
      const avV = changeInPosition / changeInTime;
      return avV.toFixed(3);
    }
  
    //acceleration equation (m/s²)
    /*
    @param: Change in Velocity
    @unit: m/s
    @param: Change in Time
    @unit: s
    */
    acceleration(changeInVelocity:number, changeInTime:number) {
      const avA = changeInVelocity / changeInTime
      return avA.toFixed(3);
    }
    //equations of motion
    //1. velocity equation (m/s)
    //2. displacement equation (m)
    //3. velocity^2 equation (m/s)
    //4. average velocity equation (m/s)
    /*
    @param: v - velocity
    @unit: m/s
    @param: initial velocity
    @unit: m/s
    @param: acceleration
    @unit: m/s²
    @param: time
    @unit: s
    @param: d0 - initial position
    @unit: m
    @param: d - displacement
    @unit: d
    */
  
    equationsOfMotion() {
      return {
        velocityEM: function (initialVelocity:number, acceleration:number, time:number) {
          const v = initialVelocity + acceleration * time;
          return v.toFixed(3);
        },
        displacementEM: function (initialPosition:number, initialVelocity:number, time:number, acceleration:number) {
          const d = initialPosition + initialVelocity * time + 0.5 * (acceleration * time) ** 2;
          return d.toFixed(3);
        },
        velocitySquaredEM: function (initialVelocity:number, acceleration:number, displacement:number, initialPosition:number) {
          const vSquared = initialVelocity ** 2 + 2 * acceleration * (displacement - initialPosition);
          return vSquared.toFixed(3);
        },
        averageVelocityEM: function (initialVelocity:number, velocity:number) {
          const av = 0.5 * (velocity + initialVelocity);
          return av.toFixed(3);
        },
      };
    }
    //net force equations (N)
    /*
    @param: m - mass
    @unit: kg
    @param: a - acceleration
    @unit: m/s²
    */
    netForce1(mass:number, acceleration:number) {
      const nf = mass* acceleration;
      return nf.toFixed(3);
    }
  
    /*
    @param: deltaP - Change in Momentum
    @unit: kg·m/s
    @param: deltaT - Change in Time
    @unit: s
    */
    netForce2(changeInMomentum:number, changeInTime:number) {
      const nf = changeInMomentum / changeInTime;
      return nf.toFixed(3);
    }
  
    //weight equation (N)
    /*
    @param: m - mass
    @unit: kg
    @param: g - gravity
    @unit: m/s²
    */
    weight(mass:number, gravity:number) {
      const w = mass * gravity;
      return w.toFixed(3);
    }
  
    //dry friction equation (μ)
    /*
    @param: mu - coefficient of friction
    @unit: no units
    @param: n - normal force
    @unit: N
    */
    dryFriction(coefficientOfFriction:number, normalForce:number) {
      const f = coefficientOfFriction * normalForce;
      return f.toFixed(3);
    }
  
    //centripetal acceleration equation (m/s²)
    /*
    @param: v - velocity
    @unit: m/s
    @param: r - radius
    @unit: m
    */
    centripetalAcceleration(velocity:number, radius:number) {
      const ac = velocity ** 2 / radius;
      return ac.toFixed(3);
    }
  
    //momentum equation (kg·m/s)
    /*
    @param: m - mass
    @unit: kg
    @param: v - velocity
    @unit: m/s
    */
    momentum(mass:number, velocity:number) {
      const p = mass * velocity;
      return p.toFixed(3);
    }
  
    //impulse equation (N·s)
    /*
    @param: f - applied force
    @unit: N
    @param: deltaT - change in time
    @unit: s
    */
    impulse(appliedForce:number, changeInTime:number) {
      const deltaP = appliedForce * changeInTime;
      return deltaP.toFixed(3);
    }
  
    //impulse momentum equation (kg·m/s)
    /*
    @param: m - mass
    @unit: kg
    @param: deltaV - change in velocity
    @unit: m/s
    */
    impulseMomentum(mass:number, changeInVelocity:number) {
      const im = mass * changeInVelocity;
      return im.toFixed(3);
    }
  
    //work equation (J)
    /*
    @param: f - force
    @unit: N
    @param: d - displacement
    @unit: m
    */
    work(force:number, displacement:number) {
      const w = force * displacement;
      return w.toFixed(3);
    }
  
    //work-energy equation (J)
    /*
    @param: KA - initial kinetic energy
    @unit: J
    @param: KB - final kinetic energy
    @unit: J
    */
    workEnergy(initialKineticEnergy:number, finalKineticEnergy:number) {
      const wNet = finalKineticEnergy - initialKineticEnergy;
      return wNet.toFixed(3);
    }
  
    //kinetic energy equation (J)
    /*
    @param: m - mass
    @unit: kg
    @param: v - velocity
    @unit: m/s
     */
    kineticEnergy(mass:number, velocity:number) {
      const K = 0.5 * (mass * (velocity ** 2));
      return K.toFixed(3);
    }
  
    //general potential energy equation (J)
    /*
    @param: f - force
    @unit: N
    @param: d - displacement
    @unit: m
    */
    generalPotentialEnergy(force:number, displacement:number) {
      const U = -force * displacement;
      return U.toFixed(3);
    }
  
    //gravitational potential energy equation (J)
    /*
    @param: m - mass
    @unit: kg
    @param: g - gravitational field
    @unit: N/kg
    @param: h - height
    @unit: m
     */
    gravitationalPotentialEnergy(mass:number, gravitationalField:number, height:number) {
      const U = mass * gravitationalField * height;
      return U.toFixed(3);
    }
  
    //efficiency equation (no units)
    /*
    @param: eo - energy output
    @unit: J
    @param: ei - energy input
    @unit: J
    */
    efficiency(energyOutput:number, energyInput:number) {
      const eta = energyOutput / energyInput;
      return eta.toFixed(3);
    }

    //power equation (W)
    /*
    @param: deltaW - change in work
    @unit: J
    @param: deltaT - change in time
    @unit: s
    */
   power(changeInWork:number, changeInTime:number) {
    const P = changeInWork/changeInTime;
    return P.toFixed(3);
   }
   
   //power-velocity equation (W)
   /*
   @param: F - force
   @unit: N
   @param: v - velocity
   @unit: m/s
   */
   powerVelocity(force:number, velocity:number) {
    const P = force*velocity;
    return P.toFixed(3);
   }

   //angular velocity equation (rad/s)
   /*
   @param: deltaTheta - change in angular rotation
   @unit: rad
   @param: deltaT - change in time
   @unit: s
   */
  angularVelocity(changeInAngularRotation:number, changeInTime:number) {
    const omega = changeInAngularRotation/changeInTime;
    return omega.toFixed(3);
  }

  //angular acceleration equation (rad/s²))
  /*
  @param: deltaOmega - change in angular velocity
  @unit: rad/s
  @param: deltaT - change in time
  @unit: s
  */
  angularAcceleration(changeInAngularVelocity:number, changeInTime:number) {
    const a = changeInAngularVelocity/changeInTime;
    return a.toFixed(3);
  }

  //equations of rotation
  /*
  @methods:
  - angularVelocityEOR()
  @unit: rad/s
  - angularRotationEOR()
  @unit: rad
  - angularVelocitySquaredEOR()
  @unit: rad/s
  - averageAngularVelocityEOR()
  @unit: rad/s
  @params:
    @param: omega - angular velocity
    @unit: rad/s
    @param: omega0 -  initial angular velocity
    @unit: rad/s
    @param: a - acceleration
    @unit: m/s²
    @param: t - time
    @unit: s
    @param: theta - angular rotation
    @unit: rad
    @param: theta0 - initial angular rotation
    @unit: rad
  */
 equationsOfRotation() {
  return {
    angularVelocityEOR: (
      initialAngularVelocity:number, 
      acceleration:number, 
      time:number
      ) => {
      const omega = initialAngularVelocity + (acceleration*time);
      return omega.toFixed(3);
    },
    angularRotationEOR: (
      intialAngularRotation:number, 
      initialAngularVelocity:number, 
      time:number, 
      acceleration:number
      ) => {
      const theta = intialAngularRotation + (initialAngularVelocity*time) + (0.5* ((acceleration*time)**2));
      return theta.toFixed(3);
    },
    angularVelocitySquaredEOR: (
      initialAngularVelocity:number, 
      acceleration:number, 
      angularRotation:number, 
      initialAngularRotation:number) => {
      const omegaSquared = initialAngularVelocity**2 + (2*acceleration*(angularRotation- initialAngularRotation));
      return omegaSquared.toFixed(3);
    },
    averageAngularVelocity(angularVelocity:number, initialAngularVelocity:number) {
      const avOmega = 0.5*(angularVelocity + initialAngularVelocity);
      return avOmega.toFixed(3);
    }
  }
 }
 //torque equation (N·m)
  /*
  @param: r - radius
  @unit: m
  @param: F - force
  @unit: N
  */
  torque(radius:number, force:number){
    const tau = radius*force;
    return tau.toFixed(3);
  }

  //Net Torque Equations (N·m)

  // 1.
  /*
  @param: I - moment of inertia
  @unit: kg·m²
  @param: a - angular acceleration
  @unit: rad/s²
  */
 netTorque1(momentOfInertia:number, angularAcceleration:number) {
  const sigmaTau = momentOfInertia*angularAcceleration;
  return sigmaTau.toFixed(3);
 }

 // 2.
 /*
 @param: deltaL - change in length
 @unit: m
 @param: deltaT - change in time
 @unit: s
 */
netTorque2(changeInLength:number, changeInTime:number){
  const sigmaTau = changeInLength/changeInTime;
  return sigmaTau.toFixed(3);
}

//moment of inertia equation (kg·m²)
/*
@param: sigmaM - net mass
@unit: kg
@param: r - radius
@unit: m
*/
momentOfInertia(netMass:number, radius:number) {
  const I = netMass*(radius**2);
  return I.toFixed(3);
}

//rotational work equation (N·m)
/*
@param: avTau - average torque
@unit: N·m
@param: deltaTheta - change in angular rotation
@unit: rad
*/
rotationalWork(averageTorque:number, changeInAngularRotation:number) {
  const W = averageTorque*changeInAngularRotation;
  return W.toFixed(3);
}

//rotational power equation (W)
/*
@param: tau - torque
@unit: N·m
@param: omega - angularVelocity
@unit: rad/s
*/
rotationalPower(torque:number, angularVelocity:number){
  const P = torque*angularVelocity;
  return P.toFixed(3);
}

//rotational kinetic energy equation (J)
/*
@param: I - moment of inertia
@unit: kg·m²
@param: omega - angular velocity
@unit: rad/s
*/
rotationalKineticEnergy(momentOfInertia:number, angularVelocity:number){
  const K = 0.5*((momentOfInertia*angularVelocity)**2);
  return K.toFixed(3);
}

//angular momentum equation (kg·m²/s)
/*
@param: r - radius
@unit: m
@param: p - momentum
@unit: kg·m²/s
*/
angularMomentum(radius:number, momentum:number) {
  const L = radius * momentum;
  return L.toFixed(3);
}

//angular impulse equation (N·m·s)
/*
@param: avTau - average torque
@unit: N·m
@param: deltaT - change in time
@unit: s
*/
angularImpulse(averageTorque:number, changeInTime:number) {
  const H = averageTorque * changeInTime;
  return H.toFixed(3);
}

//angular impulse momentum equation (kg·m²/s)
/*
@param: m - mass 
@unit: kg
@param: deltaOmega - change in angular velocity
@unit: rad/s
*/
angularImpulseMomentum(mass:number, changeInAngularVelocity:number) {
  const angIM = mass*changeInAngularVelocity;
  return angIM.toFixed(3);
}

//universal gravitation equation (G)
/*
@param: G - gravitational constant
@unit: N·m²/kg²
@param: m1 - mass 1
@param: m2 - mass 2
@unit: kg
@param: r - distance between centers of the masses
@unit: m
*/
universalGravitation(
  gravitationalConstant:number=6.67430*10**-11, 
  mass1:number, 
  mass2:number, 
  distanceBetweenCentersOfTheMasses:number
  ){
  const Fg = gravitationalConstant*mass1*mass2/distanceBetweenCentersOfTheMasses**2;
  return Fg.toFixed(3);
}

//gravitational field equation (N/kg)
/*
@param: G - gravitational constant
@unit: N·m²/kg²
@param: m - mass 
@unitL kg
@param: r - distance between centers of the masses
@unit: m (@TODO: ADD ALTERNATIVES TO FUTURE UPDATES - km, mi, AU (astronomical units), ly (light years) )
*/
gravitationalFieldEquation(
  gravitationalConstant:number=6.67430*10**-11, 
  mass:number, 
  distanceBetweenCentersOfTheMasses:number
  ) {
  const g = -((gravitationalConstant*mass)/distanceBetweenCentersOfTheMasses**2);
  return g.toFixed(3);
}

//gravitational potential energy equation (J)
/*
@param: G - gravitational constant
@unit: N·m²/kg²
@param: m1 - mass 1
@param: m2 - mass 2 
@unit: kg
@param: r - distance between centers of the masses
@unit: m (@TODO: Refer to previous)
*/
gravitationalPotentialEnergy2(
  gravitationalConstant:number=6.67430*10**-11, 
  mass1:number, 
  mass2:number, 
  distanceBetweenCentersOfTheMasses:number
  ) {
  const Ug = -((gravitationalConstant*mass1*mass2)/distanceBetweenCentersOfTheMasses);
  return Ug.toFixed(3);
}
//gravitational potential equation (J/kg)
/*
@param: G - gravitational constant
@unit: N·m²/kg²
@param: m - mass
@unit: kg
@param: r - distance between centers of the masses
@unit: m
*/
gravitationalPotential(
  gravitationalConstant:number=6.67430*10**-11, 
  mass:number, 
  distanceBetweenCentersOfTheMasses:number
  ) {
  const Vg = -((gravitationalConstant*mass)/distanceBetweenCentersOfTheMasses);
  return Vg.toFixed(3);
}

//orbital speed equation (m/s)
/*
@param: G - gravitational constant
@unit: N·m²/kg²
@param: m - mass
@unit: kg
@param: r - distance between centers of the masses
@unit: m
*/
orbitalSpeedEquation(
  gravitationalConstant:number=6.67430*10**-11, 
  mass:number, 
  distanceBetweenCentersOfTheMasses:number
  ) {
  const v = Math.sqrt((gravitationalConstant*mass)/distanceBetweenCentersOfTheMasses);
  return v.toFixed(3);
}

//escape speed equation (m/s)
/*
@param: G - gravitational constant
@unit: N·m²/kg²
@param: m - mass
@unit: kg
@param: r - distance between centers of the masses
@unit: m (@TODO: Refer to previous)
*/
escapeSpeed(
  gravitationalConstant:number=6.67430*10**-11, 
  mass:number, 
  distanceBetweenCentersOfTheMasses:number
  ) {
  const v = Math.sqrt((2*gravitationalConstant*mass)/distanceBetweenCentersOfTheMasses);
  return v.toFixed(3);
}
//hooke's law (N)
/*
@param: k - spring constant
@unit: N/m
@param: deltaX - spring stretch or compression
@unit: m
*/
hookesLaw(springConstant:number, springStretchOrCompression:number) {
  const Fs = -(springConstant*springStretchOrCompression);
  return Fs.toFixed(3);
}

//spring potential energy equation (J)
/*
@param: k - spring constant
@unit: N/m
@param: deltaX - spring stretch or compression
@unit: m
*/
springPotentialEnergy(
  springConstant:number, 
  springStretchOrCompression:number
  ) {
  const Us = 0.5*(springConstant*(springStretchOrCompression)**2);
  return Us.toFixed(3);
}

//simple harmonic oscillator equation (varies based on context)
/*
@param: m - mass
@unit: kg
@param: k - positive constant
@unit: N/m
*/
simpleHarmonicOscillator(mass:number, positiveConstant:number) {
  const T = (2*Math.PI)*(Math.sqrt(mass/positiveConstant));
  return T.toFixed(3);
}

//simple pendulum equation (varies based on context)
/*
@param: L - pendulum length
@unit: m
@param: g - acceleration due to gravity
@unit: m/s²
*/
simplePendulum(
  pendulumLength:number, 
  accelerationDueToGravity:number=9.80665
  ) {
  const T = (2*Math.PI)*(Math.sqrt(pendulumLength/accelerationDueToGravity));
  return T.toFixed(3);
}

//frequency equation (Hz)
/*
@param: T - period
@unit: s
*/
frequency(period:number) {
  const f = 1/period;
  return f.toFixed(3);
}

//angular frequency equation (rad/s)
/*
@param: f - frequency
@unit: Hz
*/
angularFrequency(frequency:number) {
  const omega = 2*Math.PI*frequency;
  return omega.toFixed(3);
}

//density equation (kg/m³)
/*
@param: m - mass
@unit: kg
@param: V - volume
@unit: m³
*/
density(mass:number, volume:number) {
  const rho = mass/volume;
  return rho.toFixed(3);
}

//pressure equation (Pa)
/*
@param: F - force
@unit: N
@param: A - area
@unit: m²
*/
pressure(force:number, area:number) {
  const P = force/area;
  return P.toFixed(3);
}

//fluid pressure equation (Pa)
/*
@param: p0 - initial pressure
@unit: Pa
@param: rho - density
@unit: kg/m³
@param: g - acceleration due to gravity
@unit: m/s²
@param: h - fluid depth
@unit: m
*/
fluidPressure(
  initialPressure:number, 
  density:number, 
  accelerationDueToGravity:number=9.80665, 
  fluidDepth:number
  ) {
  const P = initialPressure + (density*accelerationDueToGravity*fluidDepth);
  return P.toFixed(3);
}

//buoyancy equation (N)
/*
@param: rho - density
@unit: kg/m³
@param: g - acceleration due to gravity
@unit: m/s²
@param: V - volume displaced
@unit: m³
*/
buoyancy(
  density:number, 
  accelerationDueToGravity:number=9.80665, 
  volumeDisplaced:number
  ) {
  const B = density*accelerationDueToGravity*volumeDisplaced;
  return B.toFixed(3);
}

//mass flow rate equation (kg/s)
/*
@param: deltaM - change in mass
@unit: kg
@param: deltaT - change in time
@unit: s
*/
massFlowRate(changeInMass:number, changeInTime:number) {
  const avqm = changeInMass/changeInTime;
  return avqm.toFixed(3);
}

//volume flow rate equation (m³/s)
/*
@param: deltaVol - change in volume
@unit: m³
@param: deltaT - change in time
@unit: s
*/
volumeFlowRate(changeInVolume:number, changeInTime:number) {
  const avqv = changeInVolume/changeInTime;
  return avqv.toFixed(3);
}

//dynamic viscosity equation (Pa·s)
/*
@param: T - shearing stress
@unit: Pa
@param: gamma - shear rate
@unit: s⁻¹
*/
dynamicViscosityEquation(shearingStress:number, shearRate:number) {
  const eta = shearingStress/shearRate;
  return eta.toFixed(3);
}

//kinematic viscosity equation (m²/s)
/*
@param: eta - dynamic viscosity
@unit: Pa·s
@param: rho - density
@unit: kg/m³
*/
kinematicViscosity(dynamicViscosty:number, density:number) {
  const v = dynamicViscosty/density;
  return v.toFixed(3);
}

//drag equation (N)
/*
@param: rho - density of fluid
@unit: kg/m³
@param: v - speed of the object relative to the fluid
@unit: m/s
@param: Cd - drag coefficient
@unit: no units
@param: A - cross sectional area
@unit: m²
*/
drag(
  density:number, 
  speedOfTheObjectRelativeToTheFluid:number, 
  dragCoefficient:number, 
  crossSectionalArea:number
  )  {
  const FD = 0.5*(density*(speedOfTheObjectRelativeToTheFluid**2)*dragCoefficient*crossSectionalArea);
  return FD.toFixed(3);
}

//mach number equation (mach)
/*
@TODO: Remember to have Mach before the number on the output UI
@param: u - local flow velocity
@unit: m/s
@param: c - speed of sound in the medium
@unit: m/s
*/
machNumber(localFlowVelocity:number, speedOfSoundTheMedium:number) {
  const Ma = localFlowVelocity/speedOfSoundTheMedium;
  return Ma.toFixed(3);
}

//reynolds number equation (no units)
/*
@param: rho - density
@unit: kg/m³
@param: u - flow speed
@unit: m/s
@param: L - characteristic linear dimension
@unit: m
@param: eta - dynamic viscosity
@unit: Pa·s
*/
reynoldsNumber(
  density:number, 
  flowSpeed:number, 
  characteristicLinearDimension:number, 
  dynamicViscosity:number
  ) {
  const Re = (density*flowSpeed*characteristicLinearDimension)/dynamicViscosity;
  return Re.toFixed(3);
}

//froude number equation (no units)
/*
@param: u - flow speed
@unit: m/s
@param: g - gravitational acceleration
@unit: m/s²
@param: d - depth of flow
@unit: m
*/
froudeNumber(
  flowSpeed:number, 
  gravitationalConstant:number=9.80665, 
  depthOfFlow:number
  ) {
  const Fr = flowSpeed/Math.sqrt(gravitationalConstant*depthOfFlow);
  return Fr.toFixed(3);
}

//young's modulus (Pa)
/*
@param: sigma - uniaxial stress (or uniaxial force per unit surface)
@unit: Pa
@param: epsilon - strain, or proportional deformation
@unit: no units
*/
youngsModulus(
  uniaxialStressOrUniaxialForcePerUnitSurface:number, 
  strainOrProportionalDeformation:number
  ) {
  const E = uniaxialStressOrUniaxialForcePerUnitSurface/strainOrProportionalDeformation;
  return E.toFixed(3);
}

//shear modulus (Pa)
/*
@param: tauXY - shear stress or pressure in xy direction
@unit: Pa
@param: gammaXY - shear strain
@unit: no units
*/
shearModulus(
  shearStressOrPressureInXYDirection:number, 
  shearStrain:number
  ) {
  const G = shearStressOrPressureInXYDirection/shearStrain;
  return G.toFixed(3);
}

//bulk modulus (Pa)
/*
@param: V0 - initial volume of the substance
@unit: m³
@param: deltaV - change in volume
@unit: m³
@param: deltaP - change in pressure
@unit: Pa
*/
bulkModulus(initialVolumeOfTheSubstance:number, changeInVolume:number, changeInPressure:number) {
  const k = -(initialVolumeOfTheSubstance*(changeInPressure/changeInVolume));
  return k.toFixed(3);
}

//surface tension equation (N/m)
/*
@param: F - force
@unit: N
@param: L - length
@unit: m
*/
surfaceTension(force:number, length:number) {
  const gamma = 0.5*(force/length);
  return gamma.toFixed(3);
}

}

module.exports = Mechanics;