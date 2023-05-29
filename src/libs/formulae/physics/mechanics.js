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
@CurrentComp: AngularMomentum
*/
var Mechanics = /** @class */ (function () {
    function Mechanics() {
    }
    //velocity equation (m/s)
    /*
      @param: deltaX - Change in Position
      @unit: m (meters)
      @param: deltaT - Change in Time
      @unit: s (seconds)
      */
    Mechanics.prototype.velocity = function (deltaX, deltaT) {
        var avV = deltaX / deltaT;
        return avV.toFixed(3);
    };
    //acceleration equation (m/s²)
    /*
    @param: deltaV - Change in Velocity
    @unit: m/s
    @param: deltaT - Change in Time
    @unit: s
    */
    Mechanics.prototype.acceleration = function (deltaV, deltaT) {
        var avA = deltaV / deltaT;
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
    @param: v0 - initial velocity
    @unit: m/s
    @param: a - acceleration
    @unit: m/s²
    @param: t - time
    @unit: s
    @param: d0 - initial position
    @unit: m
    @param: d - displacement
    @unit: d
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
    //net force equations (N)
    /*
    @param: m - mass
    @unit: kg
    @param: a - acceleration
    @unit: m/s²
    */
    Mechanics.prototype.netForce1 = function (m, a) {
        var nf = m * a;
        return nf.toFixed(3);
    };
    /*
    @param: deltaP - Change in Momentum
    @unit: kg·m/s
    @param: deltaT - Change in Time
    @unit: s
    */
    Mechanics.prototype.netForce2 = function (deltaP, deltaT) {
        var nf = deltaP / deltaT;
        return nf.toFixed(3);
    };
    //weight equation (N)
    /*
    @param: m - mass
    @unit: kg
    @param: g - gravity
    @unit: m/s²
    */
    Mechanics.prototype.weight = function (m, g) {
        var w = m * g;
        return w.toFixed(3);
    };
    //dry friction equation (μ)
    /*
    @param: mu - coefficient of friction
    @unit: no units
    @param: n - normal force
    @unit: N
    */
    Mechanics.prototype.dryFriction = function (mu, n) {
        var f = mu * n;
        return f.toFixed(3);
    };
    //centripetal acceleration equation (m/s²)
    /*
    @param: v - velocity
    @unit: m/s
    @param: r - radius
    @unit: m
    */
    Mechanics.prototype.centripetalAcceleration = function (v, r) {
        var ac = Math.pow(v, 2) / r;
        return ac.toFixed(3);
    };
    //momentum equation (kg·m/s)
    /*
    @param: m - mass
    @unit: kg
    @param: v - velocity
    @unit: m/s
    */
    Mechanics.prototype.momentum = function (m, v) {
        var p = m * v;
        return p.toFixed(3);
    };
    //impulse equation (N·s)
    /*
    @param: f - applied force
    @unit: N
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.impulse = function (f, deltaT) {
        var deltaP = f * deltaT;
        return deltaP.toFixed(3);
    };
    //impulse momentum equation (kg·m/s)
    /*
    @param: m - mass
    @unit: kg
    @param: deltaV - change in velocity
    @unit: m/s
    */
    Mechanics.prototype.impulseMomentum = function (m, deltaV) {
        var im = m * deltaV;
        return im.toFixed(3);
    };
    //work equation (J)
    /*
    @param: f - force
    @unit: N
    @param: d - displacement
    @unit: m
    */
    Mechanics.prototype.work = function (f, d) {
        var w = f * d;
        return w.toFixed(3);
    };
    //work-energy equation (J)
    /*
    @param: KA - initial kinetic energy
    @unit: J
    @param: KB - final kinetic energy
    @unit: J
    */
    Mechanics.prototype.workEnergy = function (KA, KB) {
        var wNet = KB - KA;
        return wNet.toFixed(3);
    };
    //kinetic energy equation (J)
    /*
    @param: m - mass
    @unit: kg
    @param: v - velocity
    @unit: m/s
     */
    Mechanics.prototype.kineticEnergy = function (m, v) {
        var K = 0.5 * (m * (Math.pow(v, 2)));
        return K.toFixed(3);
    };
    //general potential energy equation (J)
    /*
    @param: f - force
    @unit: N
    @param: d - displacement
    @unit: m
    */
    Mechanics.prototype.generalPotentialEnergy = function (f, d) {
        var U = -f * d;
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
    Mechanics.prototype.gravitationalPotentialEnergy = function (m, g, h) {
        var U = m * g * h;
        return U.toFixed(3);
    };
    //efficiency equation (no units)
    /*
    @param: eo - energy output
    @unit: J
    @param: ei - energy input
    @unit: J
    */
    Mechanics.prototype.efficiency = function (eo, ei) {
        var eta = eo / ei;
        return eta.toFixed(3);
    };
    //power equation (W)
    /*
    @param: deltaW - change in work
    @unit: J
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.power = function (deltaW, deltaT) {
        var P = deltaW / deltaT;
        return P.toFixed(3);
    };
    //power-velocity equation (W)
    /*
    @param: F - force
    @unit: N
    @param: v - velocity
    @unit: m/s
    */
    Mechanics.prototype.powerVelocity = function (F, v) {
        var P = F * v;
        return P.toFixed(3);
    };
    //angular velocity equation (rad/s)
    /*
    @param: deltaTheta - change in angular rotation
    @unit: rad
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.angularVelocity = function (deltaTheta, deltaT) {
        var omega = deltaTheta / deltaT;
        return omega.toFixed(3);
    };
    //angular acceleration equation (rad/s²))
    /*
    @param: deltaOmega - change in angular velocity
    @unit: rad/s
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.angularAcceleration = function (deltaOmega, deltaT) {
        var a = deltaOmega / deltaT;
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
    //torque equation (N·m)
    /*
    @param: r - radius
    @unit: m
    @param: F - force
    @unit: N
    */
    Mechanics.prototype.torque = function (r, F) {
        var tau = r * F;
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
    Mechanics.prototype.netTorque1 = function (I, a) {
        var sigmaTau = I * a;
        return sigmaTau.toFixed(3);
    };
    // 2.
    /*
    @param: deltaL - change in length
    @unit: m
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.netTorque2 = function (deltaL, deltaT) {
        var sigmaTau = deltaL / deltaT;
        return sigmaTau.toFixed(3);
    };
    //moment of inertia equation (kg·m²)
    /*
    @param: sigmaM - net mass
    @unit: kg
    @param: r - radius
    @unit: m
    */
    Mechanics.prototype.momentOfInertia = function (sigmaM, r) {
        var I = sigmaM * (Math.pow(r, 2));
        return I.toFixed(3);
    };
    //rotational work equation (N·m)
    /*
    @param: avTau - average torque
    @unit: N·m
    @param: deltaTheta - change in angular rotation
    @unit: rad
    */
    Mechanics.prototype.rotationalWork = function (avTau, deltaTheta) {
        var W = avTau * deltaTheta;
        return W.toFixed(3);
    };
    //rotational power equation (W)
    /*
    @param: tau - torque
    @unit: N·m
    @param: omega - angularVelocity
    @unit: rad/s
    */
    Mechanics.prototype.rotationalPower = function (tau, omega) {
        var P = tau * omega;
        return P.toFixed(3);
    };
    //rotational kinetic energy equation (J)
    /*
    @param: I - moment of inertia
    @unit: kg·m²
    @param: omega - angular velocity
    @unit: rad/s
    */
    Mechanics.prototype.rotationalKineticEnergy = function (I, omega) {
        var K = 0.5 * (Math.pow((I * omega), 2));
        return K.toFixed(3);
    };
    //angular momentum equation (kg·m²/s)
    /*
    @param: r - radius
    @unit: m
    @param: p - momentum
    @unit: kg·m²/s
    */
    Mechanics.prototype.angularMomentum = function (r, p) {
        var L = r * p;
        return L.toFixed(3);
    };
    //angular impulse equation (N·m·s)
    /*
    @param: avTau - average torque
    @unit: N·m
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.angularImpulse = function (avTau, deltaT) {
        var H = avTau * deltaT;
        return H.toFixed(3);
    };
    //angular impulse momentum equation (kg·m²/s)
    /*
    @param: m - mass
    @unit: kg
    @param: deltaOmega - change in angular velocity
    @unit: rad/s
    */
    Mechanics.prototype.angularImpulseMomentum = function (m, deltaOmega) {
        var angIM = m * deltaOmega;
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
    Mechanics.prototype.universalGravitation = function (G, m1, m2, r) {
        if (G === void 0) { G = 6.67430 * Math.pow(10, -11); }
        var Fg = G * ((m1 * m2) / Math.pow(r, 2));
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
    Mechanics.prototype.gravitationalFieldEquation = function (G, m, r) {
        if (G === void 0) { G = 6.67430 * Math.pow(10, -11); }
        var g = -((G * m) / Math.pow(r, 2));
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
    Mechanics.prototype.gravitationalPotentialEnergy2 = function (G, m1, m2, r) {
        if (G === void 0) { G = 6.67430 * Math.pow(10, -11); }
        var Ug = -((G * m1 * m2) / r);
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
    Mechanics.prototype.gravitationalPotential = function (G, m, r) {
        if (G === void 0) { G = 6.67430 * Math.pow(10, -11); }
        var Vg = -((G * m) / r);
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
    Mechanics.prototype.orbitalSpeedEquation = function (G, m, r) {
        if (G === void 0) { G = 6.67430 * Math.pow(10, -11); }
        var v = Math.sqrt((G * m) / r);
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
    Mechanics.prototype.escapeSpeed = function (G, m, r) {
        if (G === void 0) { G = 6.67430 * Math.pow(10, -11); }
        var v = Math.sqrt((2 * G * m) / r);
        return v.toFixed(3);
    };
    //hooke's law (N)
    /*
    @param: k - spring constant
    @unit: N/m
    @param: deltaX - spring stretch or compression
    @unit: m
    */
    Mechanics.prototype.hookesLaw = function (k, deltaX) {
        var Fs = -(k * deltaX);
        return Fs.toFixed(3);
    };
    //spring potential energy equation (J)
    /*
    @param: k - spring constant
    @unit: N/m
    @param: deltaX - spring stretch or compression
    @unit: m
    */
    Mechanics.prototype.springPotentialEnergy = function (k, deltaX) {
        var Us = 0.5 * (k * Math.pow((deltaX), 2));
        return Us.toFixed(3);
    };
    //simple harmonic oscillator equation (varies based on context)
    /*
    @param: m - mass
    @unit: kg
    @param: k - positive constant
    @unit: N/m
    */
    Mechanics.prototype.simpleHarmonicOscillator = function (m, k) {
        var T = (2 * Math.PI) * (Math.sqrt(m / k));
        return T.toFixed(3);
    };
    //simple pendulum equation (varies based on context)
    /*
    @param: L - pendulum length
    @unit: m
    @param: g - acceleration due to gravity
    @unit: m/s²
    */
    Mechanics.prototype.simplePendulum = function (L, g) {
        if (g === void 0) { g = 9.80665; }
        var T = (2 * Math.PI) * (Math.sqrt(L / g));
        return T.toFixed(3);
    };
    //frequency equation (Hz)
    /*
    @param: T - period
    @unit: s
    */
    Mechanics.prototype.frequency = function (T) {
        var f = 1 / T;
        return f.toFixed(3);
    };
    //angular frequency equation (rad/s)
    /*
    @param: f - frequency
    @unit: Hz
    */
    Mechanics.prototype.angularFrequency = function (f) {
        var omega = 2 * Math.PI * f;
        return omega.toFixed(3);
    };
    //density equation (kg/m³)
    /*
    @param: m - mass
    @unit: kg
    @param: V - volume
    @unit: m³
    */
    Mechanics.prototype.density = function (m, V) {
        var rho = m / V;
        return rho.toFixed(3);
    };
    //pressure equation (Pa)
    /*
    @param: F - force
    @unit: N
    @param: A - area
    @unit: m²
    */
    Mechanics.prototype.pressure = function (F, A) {
        var P = F / A;
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
    Mechanics.prototype.fluidPressure = function (p0, rho, g, h) {
        if (g === void 0) { g = 9.80665; }
        var P = p0 + (rho * g * h);
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
    Mechanics.prototype.buoyancy = function (rho, g, V) {
        if (g === void 0) { g = 9.80665; }
        var B = rho * g * V;
        return B.toFixed(3);
    };
    //mass flow rate equation (kg/s)
    /*
    @param: deltaM - change in mass
    @unit: kg
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.massFlowRate = function (deltaM, deltaT) {
        var avqm = deltaM / deltaT;
        return avqm.toFixed(3);
    };
    //volume flow rate equation (m³/s)
    /*
    @param: deltaVol - change in volume
    @unit: m³
    @param: deltaT - change in time
    @unit: s
    */
    Mechanics.prototype.volumeFlowRate = function (deltaVol, deltaT) {
        var avqv = deltaVol / deltaT;
        return avqv.toFixed(3);
    };
    //dynamic viscosity equation (Pa·s)
    /*
    @param: T - shearing stress
    @unit: Pa
    @param: gamma - shear rate
    @unit: s⁻¹
    */
    Mechanics.prototype.dynamicViscosityEquation = function (T, gamma) {
        var eta = T / gamma;
        return eta.toFixed(3);
    };
    //kinematic viscosity equation (m²/s)
    /*
    @param: eta - dynamic viscosity
    @unit: Pa·s
    @param: rho - density
    @unit: kg/m³
    */
    Mechanics.prototype.kinematicViscosity = function (eta, rho) {
        var v = eta / rho;
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
    Mechanics.prototype.drag = function (rho, v, Cd, A) {
        var FD = 0.5 * (rho * (Math.pow(v, 2)) * Cd * A);
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
    Mechanics.prototype.machNumber = function (u, c) {
        var Ma = u / c;
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
    Mechanics.prototype.reynoldsNumber = function (rho, u, L, eta) {
        var Re = (rho * u * L) / eta;
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
    Mechanics.prototype.froudeNumber = function (u, g, d) {
        if (g === void 0) { g = 9.80665; }
        var Fr = u / Math.sqrt(g * d);
        return Fr.toFixed(3);
    };
    //young's modulus (Pa)
    /*
    @param: sigma - uniaxial stress (or uniaxial force per unit surface)
    @unit: Pa
    @param: epsilon - strain, or proportional deformation
    @unit: no units
    */
    Mechanics.prototype.youngsModulus = function (sigma, epsilon) {
        var E = sigma / epsilon;
        return E.toFixed(3);
    };
    //shear modulus (Pa)
    /*
    @param: tauXY - shear stress or pressure in xy direction
    @unit: Pa
    @param: gammaXY - shear strain
    @unit: no units
    */
    Mechanics.prototype.shearModulus = function (tauXY, gammaXY) {
        var G = tauXY / gammaXY;
        return G.toFixed(3);
    };
    //bulk modulus (Pa)
    /*
    @param: V - initial volume of the substance
    @unit: m³
    @param: deltaV - change in volume
    @unit: m³
    @param: deltaP - change in pressure
    @unit: Pa
    */
    Mechanics.prototype.bulkModulus = function (V0, deltaV, deltaP) {
        var k = -(V0 * (deltaP / deltaV));
        return k.toFixed(3);
    };
    //surface tension equation (N/m)
    /*
    @param: F - force
    @unit: N
    @param: L - length
    @unit: m
    */
    Mechanics.prototype.surfaceTension = function (F, L) {
        var gamma = 0.5 * (F / L);
        return gamma.toFixed(3);
    };
    return Mechanics;
}());
module.exports = Mechanics;
