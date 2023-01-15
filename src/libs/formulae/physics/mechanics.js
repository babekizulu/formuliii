/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of mechanics formulae
@Date: 2023/01/05
@TODO:
o	Power
o	Power-Velocity
o	Angular Velocity
o	Angular Acceleration
o	Equations of Rotation
o	Torque
o	Second Law of Rotation
o	Moment of Inertia
o	Rotational Work
o	Rotational Power
o	Rotational Kinetic Energy
o	Angular Momentum
o	Angular Impulse
o	Angular Impulse & Momentum
o	Universal Gravitation
o	Gravitational Field
o	Gravitational Potential Energy
o	Gravitational Potential
o	Orbital Speed
o	Escape Speed
o	Hooke’s Law
o	Spring Potential Energy
o	Simple Harmonic Oscillator
o	Simple Pendulum
o	Frequency
o	Angular Frequency
o	Density
o	Pressure
o	Pressure in a Fluid
o	Buoyancy
o	Mass Flow Rate
o	Volume Flow Rate
o	Mass Continuity
o	Volume Continuity
o	Bernoulli’s Equation
o	Dynamic Viscosity
o	Kinematic Viscosity
o	Drag
o	Mach Number
o	Reynolds Number
o	Froude Number
o	Young’s Modulus
o	Shear Modulus
o	Bulk Modulus
o	Surface Tension
*/
var Mechanics = /** @class */ (function () {
  function Mechanics() {}
  //velocity equation
  /*
      @param: deltaX - Change in Position
      @param: deltaT - Change in Time
      */
  Mechanics.prototype.velocity = function (deltaX, deltaT) {
    var avV = deltaX / deltaT;
    return avV.toFixed(3);
  };
  //acceleration equation
  /*
    @param: deltaV - Change in Velocity
    @param: deltaT - Change in Time
    */
  Mechanics.prototype.acceleration = function (deltaV, deltaT) {
    var avA = deltaV / deltaT;
    return avA.toFixed(3);
  };
  //equations of motion
  //1. velocity equation
  //2. displacement equation
  //3. velocity^2 equation
  //4. average velocity equation
  /*
    @param: v - velocity
    @param: v0 - initial velocity
    @param: a - acceleration
    @param: t - time
    @param: d0 - initial position
    @param: d - displacement
    */
  Mechanics.prototype.equationsOfMotion = function () {
    return {
      velocityEM: function (v0, a, t) {
        var v = v0 + a * t;
        return v.toFixed(3);
      },
      displacement: function (d0, v0, t, a) {
        var d = d0 + v0 * t + 0.5 * Math.pow(a * t, 2);
        return d.toFixed(3);
      },
      velocitySquared: function (v0, a, d, d0) {
        var sqrtV = Math.sqrt(Math.pow(v0, 2) + 2 * a * (d - d0));
        var vSquared = Math.pow(sqrtV, 2);
        return vSquared.toFixed(3);
      },
      averageVelocity: function (v0, v) {
        var av = 0.5 * (v + v0);
        return av.toFixed(3);
      },
    };
  };
  //net force equations
  /*
    @param: m - mass
    @param: a - acceleration
    */
  Mechanics.prototype.netForce1 = function (m, a) {
    var nf = m * a;
    return nf.toFixed(3);
  };
  /*
    @param: deltaP - Change in Momentum
    @param: deltaT - Change in Time
    */
  Mechanics.prototype.netForce2 = function (deltaP, deltaT) {
    var nf = deltaP / deltaT;
    return nf.toFixed(3);
  };
  //weight equation
  /*
    @param: m - mass
    @param: g - gravity
    */
  Mechanics.prototype.weight = function (m, g) {
    var w = m * g;
    return w.toFixed(3);
  };
  //dry friction equation
  /*
    @param: mu - coefficient of friction
    @param: n - normal force
    */
  Mechanics.prototype.dryFriction = function (mu, n) {
    var f = mu * n;
    return f.toFixed(3);
  };
  //centripetal acceleration equation
  /*
    @param: v - velocity
    @param: r - radius
    */
  Mechanics.prototype.centripetalAcceleration = function (v, r) {
    var ac = Math.pow(v, 2) / r;
    return ac.toFixed(3);
  };
  //momentum equation
  /*
    @param: m - mass
    @param: v - velocity
    */
  Mechanics.prototype.momentum = function (m, v) {
    var p = m * v;
    return p.toFixed(3);
  };
  //impulse equation
  /*
    @param: f - applied force
    @param: deltaT - change in time
    */
  Mechanics.prototype.impulse = function (f, deltaT) {
    var deltaP = f * deltaT;
    return deltaP.toFixed(3);
  };
  //impulse momentum equation
  /*
    @param: m - mass
    @param: deltaV - change in velocity
    */
  Mechanics.prototype.impulseMomentum = function (m, deltaV) {
    var im = m * deltaV;
    return im.toFixed(3);
  };
  //work equation
  /*
    @param: f - force
    @param: d - displacement
    */
  Mechanics.prototype.work = function (f, d) {
    var w = f * d;
    return w.toFixed(3);
  };
  //work-energy equation
  /*
    @param: KA - initial kinetic energy
    @param: KB - final kinetic energy
    */
  Mechanics.prototype.workEnergy = function (KA, KB) {
    var wNet = KB - KA;
    return wNet.toFixed(3);
  };
  //kinetic energy equation
  /*
    @param: m - mass
    @param: v - velocity
     */
  Mechanics.prototype.kineticEnergy = function (m, v) {
    var K = 0.5 * (m * Math.pow(v, 2));
    return K.toFixed(3);
  };
  //general potential energy equation
  /*
    @param: f - force
    @param: d - displacement
    */
  Mechanics.prototype.generalPotentialEnergy = function (f, d) {
    var U = -f * d;
    return U.toFixed(3);
  };
  //gravitational potential energy equation
  /*
    @param: m - mass
    @param: g - gravitational field
    @param: h - height
     */
  Mechanics.prototype.gravitationalPotentialEnergy = function (m, g, h) {
    var U = m * g * h;
    return U.toFixed(3);
  };
  //efficiency equation
  /*
    @param: eo - energy output
    @param: ei - energy input
    */
  Mechanics.prototype.efficiency = function (eo, ei) {
    var eta = eo / ei;
    return eta.toFixed(3);
  };
  return Mechanics;
})();

export default Mechanics;
