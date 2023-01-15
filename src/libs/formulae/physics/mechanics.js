/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of mechanics formulae
@Date: 2023/01/15
@TODO:
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

- equations that take angles as inputs should limit
  argument input numbers to [-360, 360]
- add parameter descriptions to each equation of motion
*/
var Mechanics = /** @class */ (function () {
    function Mechanics() {
    }
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
                var d = d0 + v0 * t + 0.5 * Math.pow((a * t), 2);
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
            }
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
    //power equation
    /*
    @param: deltaW - change in work
    @param: deltaT - change in time
    */
    Mechanics.prototype.power = function (deltaW, deltaT) {
        var P = deltaW / deltaT;
        return P.toFixed(3);
    };
    //power-velocity
    /*
    @param: F - force
    @param: v - velocity
    */
    Mechanics.prototype.powerVelocity = function (F, v) {
        var P = F * v;
        return P.toFixed(3);
    };
    //angular velocity
    /*
    @param: deltaTheta - change in angular rotation
    @param: deltaT - change in time
    */
    Mechanics.prototype.angularVelocity = function (deltaTheta, deltaT) {
        var omega = deltaTheta / deltaT;
        return omega.toFixed(3);
    };
    //angular acceleration
    /*
    @param: deltaOmega - change in angular velocity
    @param: deltaT - change in time
    */
    Mechanics.prototype.angularAcceleration = function (deltaOmega, deltaT) {
        var a = deltaOmega / deltaT;
        return a.toFixed(3);
    };
    //equations of rotation
    /*
    @methods:
    - angularVelocityEOR()
    - angularRotationEOR()
    - angularVelocitySquaredEOR()
    - averageAngularVelocityEOR()
    */
    Mechanics.prototype.equationsOfRotation = function () {
        return {
            //angular velocity (equations of rotation)
            /*
            @param: omega0 -  initial angular velocity
            @param: a - acceleration
            @param: t - time
            */
            angularVelocityEOR: function (omega0, a, t) {
                var omega = omega0 + (a * t);
                return omega.toFixed(3);
            },
            //angular rotation (equations of rotation)
            /*
            @param: theta0 - initial angular rotation
            @param: omega0 - initial angular velocity
            @param: t - time
            @param: a - acceleration
            */
            angularRotationEOR: function (theta0, omega0, t, a) {
                var theta = theta0 + (omega0 * t) + (0.5 * (Math.pow((a * t), 2)));
                return theta.toFixed(3);
            },
            //angular velocity squared (equations of rotation)
            /*
            @param: omega0 - initial angular velocity
            @param: a - acceleration
            @param: theta - angular rotation
            @param: theta0 - initial angular rotation
            */
            angularVelocitySquaredEOR: function (omega0, a, theta, theta0) {
                var omegaSquared = Math.pow(omega0, 2) + (2 * a * (theta - theta0));
                return omegaSquared.toFixed(3);
            },
            //average angular velocity (equations of rotation)
            /*
            @param: omega - angular velocity
            @param: omega0 - initial angular velocity
            */
            averageAngularVelocity: function (omega, omega0) {
                var avOmega = 0.5 * (omega + omega0);
                return avOmega.toFixed(3);
            }
        };
    };
    //torque equation
    /*
    @param: r - radius
    @param: F - force
    */
    Mechanics.prototype.torque = function (r, F) {
        var tau = r * F;
        return tau.toFixed(3);
    };
    //Net Torque Equations
    // 1.
    /*
    @param: I - moment of inertia
    @param: a - angular acceleration
    */
    Mechanics.prototype.netTorque1 = function (I, a) {
        var sigmaTau = I * a;
        return sigmaTau.toFixed(3);
    };
    // 2.
    /*
    @param: deltaL - change in length
    @param: deltaT - change in time
    */
    Mechanics.prototype.netTorque2 = function (deltaL, deltaT) {
        var sigmaTau = deltaL / deltaT;
        return sigmaTau.toFixed(3);
    };
    //moment of inertia equation
    /*
    @param: sigmaM - net mass
    @param: r - radius
    */
    Mechanics.prototype.momentOfInertia = function (sigmaM, r) {
        var I = sigmaM * (Math.pow(r, 2));
        return I.toFixed(3);
    };
    //rotational work equation
    /*
    @param: avTau - average torque
    @param: deltaTheta - change in angular rotation
    */
    Mechanics.prototype.rotationalWork = function (avTau, deltaTheta) {
        var W = avTau * deltaTheta;
        return W.toFixed(3);
    };
    //rotational power equation
    /*
    @param: tau - torque
    @param: omega - angularVelocity
    */
    Mechanics.prototype.rotationalPower = function (tau, omega) {
        var P = tau * omega;
        return P.toFixed(3);
    };
    //rotational kinetic energy equation
    /*
    @param: I - moment of inertia
    @param: omega - angular velocity
    */
    Mechanics.prototype.rotationalKineticEnergy = function (I, omega) {
        var K = 0.5 * (Math.pow((I * omega), 2));
        return K.toFixed(3);
    };
    return Mechanics;
}());
module.exports = Mechanics;
