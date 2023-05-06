/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of mechanics formulae
@Date: 2023/05/06
@TODO:
- equations that take angles as inputs should limit
  argument input numbers to [-360, 360]
- add a default value for all physics constants e.g gravitational constant
- double check bulk modulus equation
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
                var vSquared = Math.pow(v0, 2) + 2 * a * (d - d0);
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
        var K = 0.5 * (m * (Math.pow(v, 2)));
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
    //power-velocity equation
    /*
    @param: F - force
    @param: v - velocity
    */
    Mechanics.prototype.powerVelocity = function (F, v) {
        var P = F * v;
        return P.toFixed(3);
    };
    //angular velocity equation
    /*
    @param: deltaTheta - change in angular rotation
    @param: deltaT - change in time
    */
    Mechanics.prototype.angularVelocity = function (deltaTheta, deltaT) {
        var omega = deltaTheta / deltaT;
        return omega.toFixed(3);
    };
    //angular acceleration equation
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
    @params:
      @param: omega - angular velocity
      @param: omega0 -  initial angular velocity
      @param: a - acceleration
      @param: t - time
      @param: theta - angular rotation
      @param: theta0 - initial angular rotation
    */
    Mechanics.prototype.equationsOfRotation = function () {
        return {
            angularVelocityEOR: function (omega0, a, t) {
                var omega = omega0 + (a * t);
                return omega.toFixed(3);
            },
            angularRotationEOR: function (theta0, omega0, t, a) {
                var theta = theta0 + (omega0 * t) + (0.5 * (Math.pow((a * t), 2)));
                return theta.toFixed(3);
            },
            angularVelocitySquaredEOR: function (omega0, a, theta, theta0) {
                var omegaSquared = Math.pow(omega0, 2) + (2 * a * (theta - theta0));
                return omegaSquared.toFixed(3);
            },
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
    //angular momentum equation
    /*
    @param: r - radius
    @param: p - momentum
    */
    Mechanics.prototype.angularMomentum = function (r, p) {
        var L = r * p;
        return L.toFixed(3);
    };
    //angular impulse equation
    /*
    @param: avTau - average torque
    @param: deltaT - change in time
    */
    Mechanics.prototype.angularImpulse = function (avTau, deltaT) {
        var H = avTau * deltaT;
        return H.toFixed(3);
    };
    //angular impulse momentum equation
    /*
    @param: m - mass
    @param: deltaOmega - change in angular velocity
    */
    Mechanics.prototype.angularImpulseMomentum = function (m, deltaOmega) {
        var angIM = m * deltaOmega;
        return angIM.toFixed(3);
    };
    //universal gravitation equation
    /*
    @param: G - gravitational constant
    @param: m1 - mass 1
    @param: m2 - mass 2
    @param: r - distance between centers of the masses
    */
    Mechanics.prototype.universalGravitation = function (G, m1, m2, r) {
        var Fg = G * ((m1 * m2) / Math.pow(r, 2));
        return Fg.toFixed(3);
    };
    //gravitational field equation
    /*
    @param: G - gravitational constant
    @param: m - mass
    @param: r - distance between centers of the masses
    */
    Mechanics.prototype.gravitationalFieldEquation = function (G, m, r) {
        var g = -((G * m) / Math.pow(r, 2));
        return g.toFixed(3);
    };
    //gravitational potential energy equation
    /*
    @param: G - gravitational constant
    @param: m1 - mass 1
    @param: m2 - mass 2
    @param: r - distance between centers of the masses
    */
    Mechanics.prototype.gravitationalPotentialEnergy2 = function (G, m1, m2, r) {
        var Ug = -((G * m1 * m2) / r);
        return Ug.toFixed(3);
    };
    //gravitational potential equation
    /*
    @param: G - gravitational constant
    @param: m - mass
    @param: r - distance between centers of the masses
    */
    Mechanics.prototype.gravitationalPotential = function (G, m, r) {
        var Vg = -((G * m) / r);
        return Vg.toFixed(3);
    };
    //orbital speed equation
    /*
    @param: G - gravitational constant
    @param: m - mass
    @param: r - distance between centers of the masses
    */
    Mechanics.prototype.orbitalSpeedEquation = function (G, m, r) {
        var v = Math.sqrt((G * m) / r);
        return v.toFixed(3);
    };
    //escape speed equation
    /*
    @param: G - gravitational constant
    @param: m - mass
    @param: r - distance between centers of the masses
    */
    Mechanics.prototype.escapeSpeed = function (G, m, r) {
        var v = Math.sqrt((2 * G * m) / r);
        return v.toFixed(3);
    };
    //hooke's law
    /*
    @param: k - spring constant
    @param: deltaX - spring stretch or compression
    */
    Mechanics.prototype.hookesLaw = function (k, deltaX) {
        var Fs = -(k * deltaX);
        return Fs.toFixed(3);
    };
    //spring potential energy equation
    /*
    @param: k - spring constant
    @param: deltaX - spring stretch or compression
    */
    Mechanics.prototype.springPotentialEnergy = function (k, deltaX) {
        var Us = 0.5 * (k * Math.pow((deltaX), 2));
        return Us.toFixed(3);
    };
    //simple harmonic oscillator equation
    /*
    @param: m - mass
    @param: k - positive constant
    */
    Mechanics.prototype.simpleHarmonicOscillator = function (m, k) {
        var T = (2 * Math.PI) * (Math.sqrt(m / k));
        return T.toFixed(3);
    };
    //simple pendulum equation
    /*
    @param: L - pendulum length
    @param: g - acceleration due to gravity
    */
    Mechanics.prototype.simplePendulum = function (L, g) {
        var T = (2 * Math.PI) * (Math.sqrt(L / g));
        return T.toFixed(3);
    };
    //frequency equation
    /*
    @param: T - period
    */
    Mechanics.prototype.frequency = function (T) {
        var f = 1 / T;
        return f.toFixed(3);
    };
    //angular frequency equation
    /*
    @param: f - frequency
    */
    Mechanics.prototype.angularFrequency = function (f) {
        var omega = 2 * Math.PI * f;
        return omega.toFixed(3);
    };
    //density equation
    /*
    @param: m - mass
    @param: V - volume
    */
    Mechanics.prototype.density = function (m, V) {
        var rho = m / V;
        return rho.toFixed(3);
    };
    //pressure equation
    /*
    @param: F - force
    @param: A - area
    */
    Mechanics.prototype.pressure = function (F, A) {
        var P = F / A;
        return P.toFixed(3);
    };
    //fluid pressure equation
    /*
    @param: p0 - initial pressure
    @param: rho - density
    @param: g - acceleration due to gravity
    @param: h - fluid depth
    */
    Mechanics.prototype.fluidPressure = function (p0, rho, g, h) {
        var P = p0 + (rho * g * h);
        return P.toFixed(3);
    };
    //buoyancy equation
    /*
    @param: rho - density
    @param: g - acceleration due to gravity
    @param: V - volume displaced
    */
    Mechanics.prototype.buoyancy = function (rho, g, V) {
        var B = rho * g * V;
        return B.toFixed(3);
    };
    //mass flow rate equation
    /*
    @param: deltaM - change in mass
    @param: deltaT - change in time
    */
    Mechanics.prototype.massFlowRate = function (deltaM, deltaT) {
        var avqm = deltaM / deltaT;
        return avqm.toFixed(3);
    };
    //volume flow rate equation
    /*
    @param: deltaVol - change in volume
    @param: deltaT - change in time
    */
    Mechanics.prototype.volumeFlowRate = function (deltaVol, deltaT) {
        var avqv = deltaVol / deltaT;
        return avqv.toFixed(3);
    };
    //dynamic viscosity equation
    /*
    @param: T - shearing stress
    @param: gamma - shear rate
    */
    Mechanics.prototype.dynamicViscosityEquation = function (T, gamma) {
        var eta = T / gamma;
        return eta.toFixed(3);
    };
    //kinematic viscosity equation
    /*
    @param: eta - dynamic viscosity
    @param: rho - density
    */
    Mechanics.prototype.kinematicViscosity = function (eta, rho) {
        var v = eta / rho;
        return v.toFixed(3);
    };
    //drag equation
    /*
    @param: rho - density of fluid
    @param: v - speed of the object relative to the fluid
    @param: Cd - drag coefficient
    @param: A - cross sectional area
    */
    Mechanics.prototype.drag = function (rho, v, Cd, A) {
        var FD = 0.5 * (rho * (Math.pow(v, 2)) * Cd * A);
        return FD.toFixed(3);
    };
    //mach number equation
    /*
    @param: u - local flow velocity
    @param: c - speed of sound in the medium
    */
    Mechanics.prototype.machNumber = function (u, c) {
        var Ma = u / c;
        return Ma.toFixed(3);
    };
    //reynolds number equation
    /*
    @param: rho - density
    @param: u - flow speed
    @param: L - characteristic linear dimension
    @param: eta - dynamic viscosity
    */
    Mechanics.prototype.reynoldsNumber = function (rho, u, L, eta) {
        var Re = (rho * u * L) / eta;
        return Re.toFixed(3);
    };
    //froude number equation
    /*
    @param: u - flow speed
    @param: g - gravitational acceleration
    @param: d - depth of flow
    */
    Mechanics.prototype.froudeNumber = function (u, g, d) {
        var Fr = u / Math.sqrt(g * d);
        return Fr.toFixed(3);
    };
    //young's modulus
    /*
    @param: sigma - uniaxial stress (or uniaxial force per unit surface)
    @param: epsilon - strain, or proportional deformation
    */
    Mechanics.prototype.youngsModulus = function (sigma, epsilon) {
        var E = sigma / epsilon;
        return E.toFixed(3);
    };
    //shear modulus
    /*
    @param: tauXY - shear stress or pressure in xy direction
    @param: gammaXY - shear strain
    */
    Mechanics.prototype.shearModulus = function (tauXY, gammaXY) {
        var G = tauXY / gammaXY;
        return G.toFixed(3);
    };
    //bulk modulus
    /*
    @param: V - initial volume of the substance
    @param: deltaV - change in volume
    @param: deltaP - change in pressure
    */
    Mechanics.prototype.bulkModulus = function (V0, deltaV, deltaP) {
        var k = -(V0 * (deltaP / deltaV));
        return k.toFixed(3);
    };
    //surface tension equation
    /*
    @param: F - force
    @param: L - length
    */
    Mechanics.prototype.surfaceTension = function (F, L) {
        var gamma = 0.5 * (F / L);
        return gamma.toFixed(3);
    };
    return Mechanics;
}());
module.exports = Mechanics;
