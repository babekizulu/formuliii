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
var Mechanics = /** @class */ (function () {
    function Mechanics() {
    }
    //velocity equation (m/s)
    /*
      @param: Change in Position
      @unit: m (meters)
      @param: Change in Time
      @unit: s (seconds)
      */
    Mechanics.prototype.velocity = function (changeInPosition, changeInTime) {
        var avV = changeInPosition / changeInTime;
        return avV.toFixed(3);
    };
    //acceleration equation (m/s²)
    /*
    @param: Change in Velocity
    @unit: m/s
    @param: Change in Time
    @unit: s
    */
    Mechanics.prototype.acceleration = function (changeInVelocity, changeInTime) {
        var avA = changeInVelocity / changeInTime;
        return avA.toFixed(3);
    };
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
    Mechanics.prototype.equationsOfMotion = function () {
        return {
            velocityEM: function (initialVelocity, acceleration, time) {
                var v = initialVelocity + acceleration * time;
                return v.toFixed(3);
            },
            displacementEM: function (initialPosition, initialVelocity, time, acceleration) {
                var d = initialPosition + initialVelocity * time + 0.5 * Math.pow((acceleration * time), 2);
                return d.toFixed(3);
            },
            velocitySquaredEM: function (initialVelocity, acceleration, displacement, initialPosition) {
                var vSquared = Math.pow(initialVelocity, 2) + 2 * acceleration * (displacement - initialPosition);
                return vSquared.toFixed(3);
            },
            averageVelocityEM: function (initialVelocity, velocity) {
                var av = 0.5 * (velocity + initialVelocity);
                return av.toFixed(3);
            }
        };
    };
    //net force equations (N)
    /*
    @param: m - mass
    @unit: kg
    @param: a - acceleration
    @unit: m/s²
    */
    Mechanics.prototype.netForce1 = function (mass, acceleration) {
        var nf = mass * acceleration;
        return nf.toFixed(3);
    };
    /*
    @param: deltaP - Change in Momentum
    @unit: kg·m/s
    @param: deltaT - Change in Time
    @unit: s
    */
    Mechanics.prototype.netForce2 = function (changeInMomentum, changeInTime) {
        var nf = changeInMomentum / changeInTime;
        return nf.toFixed(3);
    };
    //weight equation (N)
    /*
    @param: m - mass
    @unit: kg
    @param: g - gravity
    @unit: m/s²
    */
    Mechanics.prototype.weight = function (mass, gravity) {
        var w = mass * gravity;
        return w.toFixed(3);
    };
    //dry friction equation (μ)
    /*
    @param: mu - coefficient of friction
    @unit: no units
    @param: n - normal force
    @unit: N
    */
    Mechanics.prototype.dryFriction = function (coefficientOfFriction, normalForce) {
        var f = coefficientOfFriction * normalForce;
        return f.toFixed(3);
    };
    //centripetal acceleration equation (m/s²)
    /*
    @param: v - velocity
    @unit: m/s
    @param: r - radius
    @unit: m
    */
    Mechanics.prototype.centripetalAcceleration = function (velocity, radius) {
        var ac = Math.pow(velocity, 2) / radius;
        return ac.toFixed(3);
    };
    //momentum equation (kg·m/s)
    /*
    @param: m - mass
    @unit: kg
    @param: v - velocity
    @unit: m/s
    */
    Mechanics.prototype.momentum = function (mass, velocity) {
        var p = mass * velocity;
        return p.toFixed(3);
    };
    //impulse equation (N·s)
    /*
    @param: f - applied force
    @unit: N
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.impulse = function (appliedForce, changeInTime) {
        var deltaP = appliedForce * changeInTime;
        return deltaP.toFixed(3);
    };
    //impulse momentum equation (kg·m/s)
    /*
    @param: m - mass
    @unit: kg
    @param: deltaV - change in velocity
    @unit: m/s
    */
    Mechanics.prototype.impulseMomentum = function (mass, changeInVelocity) {
        var im = mass * changeInVelocity;
        return im.toFixed(3);
    };
    //work equation (J)
    /*
    @param: f - force
    @unit: N
    @param: d - displacement
    @unit: m
    */
    Mechanics.prototype.work = function (force, displacement) {
        var w = force * displacement;
        return w.toFixed(3);
    };
    //work-energy equation (J)
    /*
    @param: KA - initial kinetic energy
    @unit: J
    @param: KB - final kinetic energy
    @unit: J
    */
    Mechanics.prototype.workEnergy = function (initialKineticEnergy, finalKineticEnergy) {
        var wNet = finalKineticEnergy - initialKineticEnergy;
        return wNet.toFixed(3);
    };
    //kinetic energy equation (J)
    /*
    @param: m - mass
    @unit: kg
    @param: v - velocity
    @unit: m/s
     */
    Mechanics.prototype.kineticEnergy = function (mass, velocity) {
        var K = 0.5 * (mass * (Math.pow(velocity, 2)));
        return K.toFixed(3);
    };
    //general potential energy equation (J)
    /*
    @param: f - force
    @unit: N
    @param: d - displacement
    @unit: m
    */
    Mechanics.prototype.generalPotentialEnergy = function (force, displacement) {
        var U = -force * displacement;
        return U.toFixed(3);
    };
    //gravitational potential energy equation (J)
    /*
    @param: m - mass
    @unit: kg
    @param: g - gravitational field
    @unit: N/kg
    @param: h - height
    @unit: m
     */
    Mechanics.prototype.gravitationalPotentialEnergy = function (mass, gravitationalField, height) {
        var U = mass * gravitationalField * height;
        return U.toFixed(3);
    };
    //efficiency equation (no units)
    /*
    @param: eo - energy output
    @unit: J
    @param: ei - energy input
    @unit: J
    */
    Mechanics.prototype.efficiency = function (energyOutput, energyInput) {
        var eta = energyOutput / energyInput;
        return eta.toFixed(3);
    };
    //power equation (W)
    /*
    @param: deltaW - change in work
    @unit: J
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.power = function (changeInWork, changeInTime) {
        var P = changeInWork / changeInTime;
        return P.toFixed(3);
    };
    //power-velocity equation (W)
    /*
    @param: F - force
    @unit: N
    @param: v - velocity
    @unit: m/s
    */
    Mechanics.prototype.powerVelocity = function (force, velocity) {
        var P = force * velocity;
        return P.toFixed(3);
    };
    //angular velocity equation (rad/s)
    /*
    @param: deltaTheta - change in angular rotation
    @unit: rad
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.angularVelocity = function (changeInAngularRotation, changeInTime) {
        var omega = changeInAngularRotation / changeInTime;
        return omega.toFixed(3);
    };
    //angular acceleration equation (rad/s²))
    /*
    @param: deltaOmega - change in angular velocity
    @unit: rad/s
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.angularAcceleration = function (changeInAngularVelocity, changeInTime) {
        var a = changeInAngularVelocity / changeInTime;
        return a.toFixed(3);
    };
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
    Mechanics.prototype.equationsOfRotation = function () {
        return {
            angularVelocityEOR: function (initialAngularVelocity, acceleration, time) {
                var omega = initialAngularVelocity + (acceleration * time);
                return omega.toFixed(3);
            },
            angularRotationEOR: function (intialAngularRotation, initialAngularVelocity, time, acceleration) {
                var theta = intialAngularRotation + (initialAngularVelocity * time) + (0.5 * (Math.pow((acceleration * time), 2)));
                return theta.toFixed(3);
            },
            angularVelocitySquaredEOR: function (initialAngularVelocity, acceleration, angularRotation, initialAngularRotation) {
                var omegaSquared = Math.pow(initialAngularVelocity, 2) + (2 * acceleration * (angularRotation - initialAngularRotation));
                return omegaSquared.toFixed(3);
            },
            averageAngularVelocity: function (angularVelocity, initialAngularVelocity) {
                var avOmega = 0.5 * (angularVelocity + initialAngularVelocity);
                return avOmega.toFixed(3);
            }
        };
    };
    //torque equation (N·m)
    /*
    @param: r - radius
    @unit: m
    @param: F - force
    @unit: N
    */
    Mechanics.prototype.torque = function (radius, force) {
        var tau = radius * force;
        return tau.toFixed(3);
    };
    //Net Torque Equations (N·m)
    // 1.
    /*
    @param: I - moment of inertia
    @unit: kg·m²
    @param: a - angular acceleration
    @unit: rad/s²
    */
    Mechanics.prototype.netTorque1 = function (momentOfInertia, angularAcceleration) {
        var sigmaTau = momentOfInertia * angularAcceleration;
        return sigmaTau.toFixed(3);
    };
    // 2.
    /*
    @param: deltaL - change in length
    @unit: m
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.netTorque2 = function (changeInLength, changeInTime) {
        var sigmaTau = changeInLength / changeInTime;
        return sigmaTau.toFixed(3);
    };
    //moment of inertia equation (kg·m²)
    /*
    @param: sigmaM - net mass
    @unit: kg
    @param: r - radius
    @unit: m
    */
    Mechanics.prototype.momentOfInertia = function (netMass, radius) {
        var I = netMass * (Math.pow(radius, 2));
        return I.toFixed(3);
    };
    //rotational work equation (N·m)
    /*
    @param: avTau - average torque
    @unit: N·m
    @param: deltaTheta - change in angular rotation
    @unit: rad
    */
    Mechanics.prototype.rotationalWork = function (averageTorque, changeInAngularRotation) {
        var W = averageTorque * changeInAngularRotation;
        return W.toFixed(3);
    };
    //rotational power equation (W)
    /*
    @param: tau - torque
    @unit: N·m
    @param: omega - angularVelocity
    @unit: rad/s
    */
    Mechanics.prototype.rotationalPower = function (torque, angularVelocity) {
        var P = torque * angularVelocity;
        return P.toFixed(3);
    };
    //rotational kinetic energy equation (J)
    /*
    @param: I - moment of inertia
    @unit: kg·m²
    @param: omega - angular velocity
    @unit: rad/s
    */
    Mechanics.prototype.rotationalKineticEnergy = function (momentOfInertia, angularVelocity) {
        var K = 0.5 * (Math.pow((momentOfInertia * angularVelocity), 2));
        return K.toFixed(3);
    };
    //angular momentum equation (kg·m²/s)
    /*
    @param: r - radius
    @unit: m
    @param: p - momentum
    @unit: kg·m²/s
    */
    Mechanics.prototype.angularMomentum = function (radius, momentum) {
        var L = radius * momentum;
        return L.toFixed(3);
    };
    //angular impulse equation (N·m·s)
    /*
    @param: avTau - average torque
    @unit: N·m
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.angularImpulse = function (averageTorque, changeInTime) {
        var H = averageTorque * changeInTime;
        return H.toFixed(3);
    };
    //angular impulse momentum equation (kg·m²/s)
    /*
    @param: m - mass
    @unit: kg
    @param: deltaOmega - change in angular velocity
    @unit: rad/s
    */
    Mechanics.prototype.angularImpulseMomentum = function (mass, changeInAngularVelocity) {
        var angIM = mass * changeInAngularVelocity;
        return angIM.toFixed(3);
    };
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
    Mechanics.prototype.universalGravitation = function (gravitationalConstant, mass1, mass2, distanceBetweenCentersOfTheMasses) {
        if (gravitationalConstant === void 0) { gravitationalConstant = 6.67430 * Math.pow(10, -11); }
        var Fg = gravitationalConstant * ((mass1 * mass2) / Math.pow(distanceBetweenCentersOfTheMasses, 2));
        return Fg.toFixed(3);
    };
    //gravitational field equation (N/kg)
    /*
    @param: G - gravitational constant
    @unit: N·m²/kg²
    @param: m - mass
    @unitL kg
    @param: r - distance between centers of the masses
    @unit: m (@TODO: ADD ALTERNATIVES TO FUTURE UPDATES - km, mi, AU (astronomical units), ly (light years) )
    */
    Mechanics.prototype.gravitationalFieldEquation = function (gravitationalConstant, mass, distanceBetweenCentersOfTheMasses) {
        if (gravitationalConstant === void 0) { gravitationalConstant = 6.67430 * Math.pow(10, -11); }
        var g = -((gravitationalConstant * mass) / Math.pow(distanceBetweenCentersOfTheMasses, 2));
        return g.toFixed(3);
    };
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
    Mechanics.prototype.gravitationalPotentialEnergy2 = function (gravitationalConstant, mass1, mass2, distanceBetweenCentersOfTheMasses) {
        if (gravitationalConstant === void 0) { gravitationalConstant = 6.67430 * Math.pow(10, -11); }
        var Ug = -((gravitationalConstant * mass1 * mass2) / distanceBetweenCentersOfTheMasses);
        return Ug.toFixed(3);
    };
    //gravitational potential equation (J/kg)
    /*
    @param: G - gravitational constant
    @unit: N·m²/kg²
    @param: m - mass
    @unit: kg
    @param: r - distance between centers of the masses
    @unit: m
    */
    Mechanics.prototype.gravitationalPotential = function (gravitationalConstant, mass, distanceBetweenCentersOfTheMasses) {
        if (gravitationalConstant === void 0) { gravitationalConstant = 6.67430 * Math.pow(10, -11); }
        var Vg = -((gravitationalConstant * mass) / distanceBetweenCentersOfTheMasses);
        return Vg.toFixed(3);
    };
    //orbital speed equation (m/s)
    /*
    @param: G - gravitational constant
    @unit: N·m²/kg²
    @param: m - mass
    @unit: kg
    @param: r - distance between centers of the masses
    @unit: m
    */
    Mechanics.prototype.orbitalSpeedEquation = function (gravitationalConstant, mass, distanceBetweenCentersOfTheMasses) {
        if (gravitationalConstant === void 0) { gravitationalConstant = 6.67430 * Math.pow(10, -11); }
        var v = Math.sqrt((gravitationalConstant * mass) / distanceBetweenCentersOfTheMasses);
        return v.toFixed(3);
    };
    //escape speed equation (m/s)
    /*
    @param: G - gravitational constant
    @unit: N·m²/kg²
    @param: m - mass
    @unit: kg
    @param: r - distance between centers of the masses
    @unit: m (@TODO: Refer to previous)
    */
    Mechanics.prototype.escapeSpeed = function (gravitationalConstant, mass, distanceBetweenCentersOfTheMasses) {
        if (gravitationalConstant === void 0) { gravitationalConstant = 6.67430 * Math.pow(10, -11); }
        var v = Math.sqrt((2 * gravitationalConstant * mass) / distanceBetweenCentersOfTheMasses);
        return v.toFixed(3);
    };
    //hooke's law (N)
    /*
    @param: k - spring constant
    @unit: N/m
    @param: deltaX - spring stretch or compression
    @unit: m
    */
    Mechanics.prototype.hookesLaw = function (springConstant, springStretchOrCompression) {
        var Fs = -(springConstant * springStretchOrCompression);
        return Fs.toFixed(3);
    };
    //spring potential energy equation (J)
    /*
    @param: k - spring constant
    @unit: N/m
    @param: deltaX - spring stretch or compression
    @unit: m
    */
    Mechanics.prototype.springPotentialEnergy = function (springConstant, springStretchOrCompression) {
        var Us = 0.5 * (springConstant * Math.pow((springStretchOrCompression), 2));
        return Us.toFixed(3);
    };
    //simple harmonic oscillator equation (varies based on context)
    /*
    @param: m - mass
    @unit: kg
    @param: k - positive constant
    @unit: N/m
    */
    Mechanics.prototype.simpleHarmonicOscillator = function (mass, positiveConstant) {
        var T = (2 * Math.PI) * (Math.sqrt(mass / positiveConstant));
        return T.toFixed(3);
    };
    //simple pendulum equation (varies based on context)
    /*
    @param: L - pendulum length
    @unit: m
    @param: g - acceleration due to gravity
    @unit: m/s²
    */
    Mechanics.prototype.simplePendulum = function (pendulumLength, accelerationDueToGravity) {
        if (accelerationDueToGravity === void 0) { accelerationDueToGravity = 9.80665; }
        var T = (2 * Math.PI) * (Math.sqrt(pendulumLength / accelerationDueToGravity));
        return T.toFixed(3);
    };
    //frequency equation (Hz)
    /*
    @param: T - period
    @unit: s
    */
    Mechanics.prototype.frequency = function (period) {
        var f = 1 / period;
        return f.toFixed(3);
    };
    //angular frequency equation (rad/s)
    /*
    @param: f - frequency
    @unit: Hz
    */
    Mechanics.prototype.angularFrequency = function (frequency) {
        var omega = 2 * Math.PI * frequency;
        return omega.toFixed(3);
    };
    //density equation (kg/m³)
    /*
    @param: m - mass
    @unit: kg
    @param: V - volume
    @unit: m³
    */
    Mechanics.prototype.density = function (mass, volume) {
        var rho = mass / volume;
        return rho.toFixed(3);
    };
    //pressure equation (Pa)
    /*
    @param: F - force
    @unit: N
    @param: A - area
    @unit: m²
    */
    Mechanics.prototype.pressure = function (force, area) {
        var P = force / area;
        return P.toFixed(3);
    };
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
    Mechanics.prototype.fluidPressure = function (initialPressure, density, accelerationDueToGravity, fluidDepth) {
        if (accelerationDueToGravity === void 0) { accelerationDueToGravity = 9.80665; }
        var P = initialPressure + (density * accelerationDueToGravity * fluidDepth);
        return P.toFixed(3);
    };
    //buoyancy equation (N)
    /*
    @param: rho - density
    @unit: kg/m³
    @param: g - acceleration due to gravity
    @unit: m/s²
    @param: V - volume displaced
    @unit: m³
    */
    Mechanics.prototype.buoyancy = function (density, accelerationDueToGravity, volumeDisplaced) {
        if (accelerationDueToGravity === void 0) { accelerationDueToGravity = 9.80665; }
        var B = density * accelerationDueToGravity * volumeDisplaced;
        return B.toFixed(3);
    };
    //mass flow rate equation (kg/s)
    /*
    @param: deltaM - change in mass
    @unit: kg
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.massFlowRate = function (changeInMass, changeInTime) {
        var avqm = changeInMass / changeInTime;
        return avqm.toFixed(3);
    };
    //volume flow rate equation (m³/s)
    /*
    @param: deltaVol - change in volume
    @unit: m³
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.volumeFlowRate = function (changeInVolume, changeInTime) {
        var avqv = changeInVolume / changeInTime;
        return avqv.toFixed(3);
    };
    //dynamic viscosity equation (Pa·s)
    /*
    @param: T - shearing stress
    @unit: Pa
    @param: gamma - shear rate
    @unit: s⁻¹
    */
    Mechanics.prototype.dynamicViscosityEquation = function (shearingStress, shearRate) {
        var eta = shearingStress / shearRate;
        return eta.toFixed(3);
    };
    //kinematic viscosity equation (m²/s)
    /*
    @param: eta - dynamic viscosity
    @unit: Pa·s
    @param: rho - density
    @unit: kg/m³
    */
    Mechanics.prototype.kinematicViscosity = function (dynamicViscosty, density) {
        var v = dynamicViscosty / density;
        return v.toFixed(3);
    };
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
    Mechanics.prototype.drag = function (density, speedOfTheObjectRelativeToTheFluid, dragCoefficient, crossSectionalArea) {
        var FD = 0.5 * (density * (Math.pow(speedOfTheObjectRelativeToTheFluid, 2)) * dragCoefficient * crossSectionalArea);
        return FD.toFixed(3);
    };
    //mach number equation (mach)
    /*
    @TODO: Remember to have Mach before the number on the output UI
    @param: u - local flow velocity
    @unit: m/s
    @param: c - speed of sound in the medium
    @unit: m/s
    */
    Mechanics.prototype.machNumber = function (localFlowVelocity, speedOfSoundTheMedium) {
        var Ma = localFlowVelocity / speedOfSoundTheMedium;
        return Ma.toFixed(3);
    };
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
    Mechanics.prototype.reynoldsNumber = function (density, flowSpeed, characteristicLinearDimension, dynamicViscosity) {
        var Re = (density * flowSpeed * characteristicLinearDimension) / dynamicViscosity;
        return Re.toFixed(3);
    };
    //froude number equation (no units)
    /*
    @param: u - flow speed
    @unit: m/s
    @param: g - gravitational acceleration
    @unit: m/s²
    @param: d - depth of flow
    @unit: m
    */
    Mechanics.prototype.froudeNumber = function (flowSpeed, gravitationalConstant, depthOfFlow) {
        if (gravitationalConstant === void 0) { gravitationalConstant = 9.80665; }
        var Fr = flowSpeed / Math.sqrt(gravitationalConstant * depthOfFlow);
        return Fr.toFixed(3);
    };
    //young's modulus (Pa)
    /*
    @param: sigma - uniaxial stress (or uniaxial force per unit surface)
    @unit: Pa
    @param: epsilon - strain, or proportional deformation
    @unit: no units
    */
    Mechanics.prototype.youngsModulus = function (uniaxialStressOrUniaxialForcePerUnitSurface, strainOrProportionalDeformation) {
        var E = uniaxialStressOrUniaxialForcePerUnitSurface / strainOrProportionalDeformation;
        return E.toFixed(3);
    };
    //shear modulus (Pa)
    /*
    @param: tauXY - shear stress or pressure in xy direction
    @unit: Pa
    @param: gammaXY - shear strain
    @unit: no units
    */
    Mechanics.prototype.shearModulus = function (shearStressOrPressureInXYDirection, shearStrain) {
        var G = shearStressOrPressureInXYDirection / shearStrain;
        return G.toFixed(3);
    };
    //bulk modulus (Pa)
    /*
    @param: V0 - initial volume of the substance
    @unit: m³
    @param: deltaV - change in volume
    @unit: m³
    @param: deltaP - change in pressure
    @unit: Pa
    */
    Mechanics.prototype.bulkModulus = function (initialVolumeOfTheSubstance, changeInVolume, changeInPressure) {
        var k = -(initialVolumeOfTheSubstance * (changeInPressure / changeInVolume));
        return k.toFixed(3);
    };
    //surface tension equation (N/m)
    /*
    @param: F - force
    @unit: N
    @param: L - length
    @unit: m
    */
    Mechanics.prototype.surfaceTension = function (force, length) {
        var gamma = 0.5 * (force / length);
        return gamma.toFixed(3);
    };
    return Mechanics;
}());
module.exports = Mechanics;
