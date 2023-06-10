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

class mechanics {
  //velocity equation (m/s)
  /*
      @param: Change in Position
      @unit: m (meters)
      @param: Change in Time
      @unit: s (seconds)
      */
  velocity(changeInPosition, changeInTime) {
    const dp = parseFloat(changeInPosition);
    const dt = parseFloat(changeInTime);
    const avV = dp / dt;
    return avV.toFixed(3);
  }

  //acceleration equation (m/s²)
  /*
    @param: Change in Velocity
    @unit: m/s
    @param: Change in Time
    @unit: s
    */
  acceleration(changeInVelocity, changeInTime) {
    const dv = parseFloat(changeInVelocity);
    const dt = parseFloat(changeInTime);
    const avA = dv / dt;
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
      velocityEM: function (initialVelocity, acceleration, time) {
        const iv = parseFloat(initialVelocity);
        const a = parseFloat(acceleration);
        const t = parseFloat(time);
        const v = iv + a * t;
        return v.toFixed(3);
      },
      displacementEM: function (
        initialPosition,
        initialVelocity,
        time,
        acceleration,
      ) {
        const ip = parseFloat(initialPosition);
        const iv = parseFloat(initialVelocity);
        const t = parseFloat(time);
        const a = parseFloat(acceleration);
        const d = ip + iv * t + 0.5 * (a * t) ** 2;
        return d.toFixed(3);
      },
      velocitySquaredEM: function (
        initialVelocity,
        acceleration,
        displacement,
        initialPosition,
      ) {
        const iv = parseFloat(initialVelocity);
        const a = parseFloat(acceleration);
        const d = parseFloat(displacement);
        const ip = parseFloat(initialPosition);
        const vSquared = iv ** 2 + 2 * a * (d - ip);
        return vSquared.toFixed(3);
      },
      averageVelocityEM: function (initialVelocity, finalVelocity) {
        const iv = parseFloat(initialVelocity);
        const fv = parseFloat(finalVelocity);
        const av = 0.5 * (fv + iv);
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
  netForce1(mass, acceleration) {
    const m = parseFloat(mass);
    const a = parseFloat(acceleration);
    const nf = parseFloat(m * a);
    return nf.toFixed(3);
  }

  /*
    @param: deltaP - Change in Momentum
    @unit: kg·m/s
    @param: deltaT - Change in Time
    @unit: s
    */
  netForce2(changeInMomentum, changeInTime) {
    const dm = parseFloat(changeInMomentum);
    const dt = parseFloat(changeInTime);
    const nf = parseFloat(dm / dt);
    return nf.toFixed(3);
  }

  //weight equation (N)
  /*
    @param: m - mass
    @unit: kg
    @param: g - gravity
    @unit: m/s²
    */
  weight(mass, gravity) {
    const m = parseFloat(mass);
    const g = parseFloat(gravity);
    const w = m * g;
    return w.toFixed(3);
  }

  //dry friction equation (μ)
  /*
    @param: mu - coefficient of friction
    @unit: no units
    @param: n - normal force
    @unit: N
    */
  dryFriction(coefficientOfFriction, normalForce) {
    const f = parseFloat(coefficientOfFriction * normalForce);
    return f.toFixed(3);
  }

  //centripetal acceleration equation (m/s²)
  /*
    @param: v - velocity
    @unit: m/s
    @param: r - radius
    @unit: m
    */
  centripetalAcceleration(velocity, radius) {
    const v = parseFloat(velocity);
    const r = parseFloat(radius);
    const ac = v ** 2 / r;
    return ac.toFixed(3);
  }

  //momentum equation (kg·m/s)
  /*
    @param: m - mass
    @unit: kg
    @param: v - velocity
    @unit: m/s
    */
  momentum(mass, velocity) {
    const m = parseFloat(mass);
    const v = parseFloat(velocity);
    const p = m * v;
    return p.toFixed(3);
  }

  //impulse equation (N·s)
  /*
    @param: f - applied force
    @unit: N
    @param: deltaT - change in time
    @unit: s
    */
  impulse(appliedForce, changeInTime) {
    const af = parseFloat(appliedForce);
    const dt = parseFloat(changeInTime);
    const deltaP = af * dt;
    return deltaP.toFixed(3);
  }

  //impulse momentum equation (kg·m/s)
  /*
    @param: m - mass
    @unit: kg
    @param: deltaV - change in velocity
    @unit: m/s
    */
  impulseMomentum(mass, changeInVelocity) {
    const m = parseFloat(mass);
    const dv = parseFloat(changeInVelocity);
    const im = m * dv;
    return im.toFixed(3);
  }

  //work equation (J)
  /*
    @param: f - force
    @unit: N
    @param: d - displacement
    @unit: m
    */
  work(force, displacement) {
    const f = parseFloat(force);
    const d = parseFloat(displacement);
    const w = f * d;
    return w.toFixed(3);
  }

  //work-energy equation (J)
  /*
    @param: KA - initial kinetic energy
    @unit: J
    @param: KB - final kinetic energy
    @unit: J
    */
  workEnergy(initialKineticEnergy, finalKineticEnergy) {
    const ka = parseFloat(initialKineticEnergy);
    const kb = parseFloat(finalKineticEnergy);
    const wNet = kb - ka;
    return wNet.toFixed(3);
  }

  //kinetic energy equation (J)
  /*
    @param: m - mass
    @unit: kg
    @param: v - velocity
    @unit: m/s
     */
  kineticEnergy(mass, velocity) {
    const m = parseFloat(mass);
    const v = parseFloat(velocity);
    const K = 0.5 * (m * v ** 2);
    return K.toFixed(3);
  }

  //general potential energy equation (J)
  /*
    @param: f - force
    @unit: N
    @param: d - displacement
    @unit: m
    */
  generalPotentialEnergy(force, displacement) {
    const f = parseFloat(force);
    const d = parseFloat(displacement);
    const U = -(f * d);
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
  gravitationalPotentialEnergy(mass, gravitationalField, height) {
    const m = parseFloat(mass);
    const g = parseFloat(gravitationalField);
    const h = parseFloat(height);
    const U = m * g * h;
    return U.toFixed(3);
  }

  //efficiency equation (no units)
  /*
    @param: eo - energy output
    @unit: J
    @param: ei - energy input
    @unit: J
    */
  efficiency(energyOutput, energyInput) {
    const eo = parseFloat(energyOutput);
    const ei = parseFloat(energyInput);
    const eta = eo / ei;
    return eta.toFixed(3);
  }

  //power equation (W)
  /*
    @param: deltaW - change in work
    @unit: J
    @param: deltaT - change in time
    @unit: s
    */
  power(changeInWork, changeInTime) {
    const dw = parseFloat(changeInWork);
    const dt = parseFloat(changeInTime);
    const P = dw / dt;
    return P.toFixed(3);
  }

  //power-velocity equation (W)
  /*
   @param: F - force
   @unit: N
   @param: v - velocity
   @unit: m/s
   */
  powerVelocity(force, velocity) {
    const f = parseFloat(force);
    const v = parseFloat(velocity);
    const P = f * v;
    return P.toFixed(3);
  }

  //angular velocity equation (rad/s)
  /*
   @param: deltaTheta - change in angular rotation
   @unit: rad
   @param: deltaT - change in time
   @unit: s
   */
  angularVelocity(changeInAngularRotation, changeInTime) {
    const cir = parseFloat(changeInAngularRotation);
    const dt = parseFloat(changeInTime);
    const omega = cir / dt;
    return omega.toFixed(3);
  }

  //angular acceleration equation (rad/s²))
  /*
  @param: deltaOmega - change in angular velocity
  @unit: rad/s
  @param: deltaT - change in time
  @unit: s
  */
  angularAcceleration(changeInAngularVelocity, changeInTime) {
    const dav = parseFloat(changeInAngularVelocity);
    const dt = parseFloat(changeInTime);
    const a = dav / dt;
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
      angularVelocityEOR: (initialAngularVelocity, acceleration, time) => {
        const iav = parseFloat(initialAngularVelocity);
        const a = parseFloat(acceleration);
        const t = parseFloat(time);
        const omega = iav + a * t;
        return omega.toFixed(3);
      },
      angularRotationEOR: (
        initialAngularRotation,
        initialAngularVelocity,
        time,
        acceleration,
      ) => {
        const iar = parseFloat(initialAngularRotation);
        const iav = parseFloat(initialAngularVelocity);
        const t = parseFloat(time);
        const a = parseFloat(acceleration);
        const theta = iar + iav * t + 0.5 * (a * t) ** 2;
        return theta.toFixed(3);
      },
      angularVelocitySquaredEOR: (
        initialAngularVelocity,
        acceleration,
        angularRotation,
        initialAngularRotation,
      ) => {
        const iav = parseFloat(initialAngularVelocity);
        const a = parseFloat(acceleration);
        const ar = parseFloat(angularRotation);
        const iar = parseFloat(initialAngularRotation);
        const omegaSquared = iav ** 2 + 2 * a * (ar - iar);
        return omegaSquared.toFixed(3);
      },
      averageAngularVelocity(angularVelocity, initialAngularVelocity) {
        const av = parseFloat(angularVelocity);
        const iav = parseFloat(initialAngularVelocity);
        const avOmega = 0.5 * (av + iav);
        return avOmega.toFixed(3);
      },
    };
  }
  //torque equation (N·m)
  /*
  @param: r - radius
  @unit: m
  @param: F - force
  @unit: N
  */
  torque(radius, force) {
    const r = parseFloat(radius);
    const f = parseFloat(force);
    const tau = r * f;
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
  netTorque1(momentOfInertia, angularAcceleration) {
    const moi = parseFloat(momentOfInertia);
    const aa = parseFloat(angularAcceleration);
    const sigmaTau = moi * aa;
    return sigmaTau.toFixed(3);
  }

  // 2.
  /*
 @param: deltaL - change in length
 @unit: m
 @param: deltaT - change in time
 @unit: s
 */
  netTorque2(changeInLength, changeInTime) {
    const dl = parseFloat(changeInLength);
    const dt = parseFloat(changeInTime);
    const sigmaTau = dl / dt;
    return sigmaTau.toFixed(3);
  }

  //moment of inertia equation (kg·m²)
  /*
@param: sigmaM - net mass
@unit: kg
@param: r - radius
@unit: m
*/
  momentOfInertia(netMass, radius) {
    const nm = parseFloat(netMass);
    const r = parseFloat(radius);
    const I = nm * r ** 2;
    return I.toFixed(3);
  }

  //rotational work equation (N·m)
  /*
@param: avTau - average torque
@unit: N·m
@param: deltaTheta - change in angular rotation
@unit: rad
*/
  rotationalWork(averageTorque, changeInAngularRotation) {
    const at = parseFloat(averageTorque);
    const dar = parseFloat(changeInAngularRotation);
    const W = at * dar;
    return W.toFixed(3);
  }

  //rotational power equation (W)
  /*
@param: tau - torque
@unit: N·m
@param: omega - angularVelocity
@unit: rad/s
*/
  rotationalPower(torque, angularVelocity) {
    const t = parseFloat(torque);
    const av = parseFloat(angularVelocity);
    const P = t * av;
    return P.toFixed(3);
  }

  //rotational kinetic energy equation (J)
  /*
@param: I - moment of inertia
@unit: kg·m²
@param: omega - angular velocity
@unit: rad/s
*/
  rotationalKineticEnergy(momentOfInertia, angularVelocity) {
    const moi = parseFloat(momentOfInertia);
    const av = parseFloat(angularVelocity);
    const K = 0.5 * (moi * av) ** 2;
    return K.toFixed(3);
  }

  //angular momentum equation (kg·m²/s)
  /*
@param: r - radius
@unit: m
@param: p - momentum
@unit: kg·m²/s
*/
  angularMomentum(radius, momentum) {
    const r = parseFloat(radius);
    const m = parseFloat(momentum);
    const L = r * m;
    return L.toFixed(3);
  }

  //angular impulse equation (N·m·s)
  /*
@param: avTau - average torque
@unit: N·m
@param: deltaT - change in time
@unit: s
*/
  angularImpulse(averageTorque, changeInTime) {
    const at = parseFloat(averageTorque);
    const dt = parseFloat(changeInTime);
    const H = at * dt;
    return H.toFixed(3);
  }

  //angular impulse momentum equation (kg·m²/s)
  /*
@param: m - mass 
@unit: kg
@param: deltaOmega - change in angular velocity
@unit: rad/s
*/
  angularImpulseMomentum(mass, changeInAngularVelocity) {
    const m = parseFloat(mass);
    const dav = parseFloat(changeInAngularVelocity);
    const angIM = m * dav;
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
    gravitationalConstant = 6.6743 * 10 ** -11,
    mass1,
    mass2,
    distanceBetweenCentersOfTheMasses,
  ) {
    const g = parseFloat(gravitationalConstant);
    const m1 = parseFloat(mass1);
    const m2 = parseFloat(mass2);
    const r = parseFloat(distanceBetweenCentersOfTheMasses);
    const Fg = (g * m1 * m2) / r ** 2;
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
    gravitationalConstant = 6.6743 * 10 ** -11,
    mass,
    distanceBetweenCentersOfTheMasses,
  ) {
    const gc = parseFloat(gravitationalConstant);
    const m = parseFloat(mass);
    const r = parseFloat(distanceBetweenCentersOfTheMasses);
    const g = -((gc * m) / r ** 2);
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
    gravitationalConstant = 6.6743 * 10 ** -11,
    mass1,
    mass2,
    distanceBetweenCentersOfTheMasses,
  ) {
    const g = parseFloat(gravitationalConstant);
    const m1 = parseFloat(mass1);
    const m2 = parseFloat(mass2);
    const r = parseFloat(distanceBetweenCentersOfTheMasses);
    const Ug = -((g * m1 * m2) / r);
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
    gravitationalConstant = 6.6743 * 10 ** -11,
    mass,
    distanceBetweenCentersOfTheMasses,
  ) {
    const g = parseFloat(gravitationalConstant);
    const m = parseFloat(mass);
    const r = parseFloat(distanceBetweenCentersOfTheMasses);
    const Vg = -((g * m) / r);
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
  orbitalSpeed(
    gravitationalConstant = 6.6743 * 10 ** -11,
    mass,
    distanceBetweenCentersOfTheMasses,
  ) {
    const g = parseFloat(gravitationalConstant);
    const m = parseFloat(mass);
    const r = parseFloat(distanceBetweenCentersOfTheMasses);
    const v = Math.sqrt((g * m) / r);
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
    gravitationalConstant = 6.6743 * 10 ** -11,
    mass,
    distanceBetweenCentersOfTheMasses,
  ) {
    const g = parseFloat(gravitationalConstant);
    const m = parseFloat(mass);
    const r = parseFloat(distanceBetweenCentersOfTheMasses);
    const v = Math.sqrt((2 * g * m) / r);
    return v.toFixed(3);
  }
  //hooke's law (N)
  /*
@param: k - spring constant
@unit: N/m
@param: deltaX - spring stretch or compression
@unit: m
*/
  hookesLaw(springConstant, springStretchOrCompression) {
    const sc = parseFloat(springConstant);
    const ssc = parseFloat(springStretchOrCompression);
    const Fs = -(sc * ssc);
    return Fs.toFixed(3);
  }

  //spring potential energy equation (J)
  /*
@param: k - spring constant
@unit: N/m
@param: deltaX - spring stretch or compression
@unit: m
*/
  springPotentialEnergy(springConstant, springStretchOrCompression) {
    const sc = parseFloat(springConstant);
    const ssc = parseFloat(springStretchOrCompression);
    const Us = 0.5 * (sc * ssc ** 2);
    return Us.toFixed(3);
  }

  //simple harmonic oscillator equation (varies based on context)
  /*
@param: m - mass
@unit: kg
@param: k - positive constant
@unit: N/m
*/
  simpleHarmonicOscillator(mass, positiveConstant) {
    const m = parseFloat(mass);
    const k = parseFloat(positiveConstant);
    const T = 2 * Math.PI * Math.sqrt(m / k);
    return T.toFixed(3);
  }

  //simple pendulum equation (varies based on context)
  /*
@param: L - pendulum length
@unit: m
@param: g - acceleration due to gravity
@unit: m/s²
*/
  simplePendulum(pendulumLength, accelerationDueToGravity = 9.80665) {
    const L = parseFloat(pendulumLength);
    const g = parseFloat(accelerationDueToGravity);
    const T = 2 * Math.PI * Math.sqrt(L / g);
    return T.toFixed(3);
  }

  //frequency equation (Hz)
  /*
@param: T - period
@unit: s
*/
  frequency(period) {
    const p = parseFloat(period);
    const f = 1 / p;
    return f.toFixed(3);
  }

  //angular frequency equation (rad/s)
  /*
@param: f - frequency
@unit: Hz
*/
  angularFrequency(frequency) {
    const f = parseFloat(frequency);
    const omega = 2 * Math.PI * f;
    return omega.toFixed(3);
  }

  //density equation (kg/m³)
  /*
@param: m - mass
@unit: kg
@param: V - volume
@unit: m³
*/
  density(mass, volume) {
    const m = parseFloat(mass);
    const v = parseFloat(volume);
    const rho = m / v;
    return rho.toFixed(3);
  }

  //pressure equation (Pa)
  /*
@param: F - force
@unit: N
@param: A - area
@unit: m²
*/
  pressure(force, area) {
    const f = parseFloat(force);
    const a = parseFloat(area);
    const P = f / a;
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
    initialPressure,
    density,
    accelerationDueToGravity = 9.80665,
    fluidDepth,
  ) {
    const ip = parseFloat(initialPressure);
    const d = parseFloat(density);
    const ag = parseFloat(accelerationDueToGravity);
    const fd = parseFloat(fluidDepth);
    const P = ip + d * ag * fd;
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
  buoyancy(density, accelerationDueToGravity = 9.80665, volumeDisplaced) {
    const d = parseFloat(density);
    const a = parseFloat(accelerationDueToGravity);
    const vd = parseFloat(volumeDisplaced);
    const B = d * a * vd;
    return B.toFixed(3);
  }

  //mass flow rate equation (kg/s)
  /*
@param: deltaM - change in mass
@unit: kg
@param: deltaT - change in time
@unit: s
*/
  massFlowRate(changeInMass, changeInTime) {
    const dm = parseFloat(changeInMass);
    const dt = parseFloat(changeInTime);
    const avqm = dm / dt;
    return avqm.toFixed(3);
  }

  //volume flow rate equation (m³/s)
  /*
@param: deltaVol - change in volume
@unit: m³
@param: deltaT - change in time
@unit: s
*/
  volumeFlowRate(changeInVolume, changeInTime) {
    const dv = parseFloat(changeInVolume);
    const dt = parseFloat(changeInTime);
    const avqv = dv / dt;
    return avqv.toFixed(3);
  }

  //dynamic viscosity equation (Pa·s)
  /*
@param: T - shearing stress
@unit: Pa
@param: gamma - shear rate
@unit: s⁻¹
*/
  dynamicViscosity(shearingStress, shearRate) {
    const T = parseFloat(shearingStress);
    const Tr = parseFloat(shearRate);
    const eta = T / Tr;
    return eta.toFixed(3);
  }

  //kinematic viscosity equation (m²/s)
  /*
@param: eta - dynamic viscosity
@unit: Pa·s
@param: rho - density
@unit: kg/m³
*/
  kinematicViscosity(dynamicViscosity, density) {
    const dv = parseFloat(dynamicViscosity);
    const d = parseFloat(density);
    const v = dv / d;
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
    density,
    speedOfTheObjectRelativeToTheFluid,
    dragCoefficient,
    crossSectionalArea,
  ) {
    const d = parseFloat(density);
    const s = parseFloat(speedOfTheObjectRelativeToTheFluid);
    const dc = parseFloat(dragCoefficient);
    const csa = parseFloat(crossSectionalArea);
    const FD = 0.5 * (d * s ** 2 * dc * csa);
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
  machNumber(localFlowVelocity, speedOfSoundInTheMedium) {
    const lfv = parseFloat(localFlowVelocity);
    const sstm = parseFloat(speedOfSoundInTheMedium);
    const Ma = lfv / sstm;
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
    density,
    flowSpeed,
    characteristicLinearDimension,
    dynamicViscosity,
  ) {
    const d = parseFloat(density);
    const fs = parseFloat(flowSpeed);
    const cld = parseFloat(characteristicLinearDimension);
    const dv = parseFloat(dynamicViscosity);
    const Re = (d * fs * cld) / dv;
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
  froudeNumber(flowSpeed, gravitationalAcceleration, depthOfFlow) {
    const fs = parseFloat(flowSpeed);
    const g = parseFloat(gravitationalAcceleration);
    const df = parseFloat(depthOfFlow);
    const Fr = fs / Math.sqrt(g * df);
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
    uniaxialStressOrUniaxialForcePerUnitSurface,
    strainOrProportionalDeformation,
  ) {
    const a = parseFloat(uniaxialStressOrUniaxialForcePerUnitSurface);
    const b = parseFloat(strainOrProportionalDeformation);
    const E = a / b;
    return E.toFixed(3);
  }

  //shear modulus (Pa)
  /*
@param: tauXY - shear stress or pressure in xy direction
@unit: Pa
@param: gammaXY - shear strain
@unit: no units
*/
  shearModulus(shearStressOrPressureInXYDirection, shearStrain) {
    const a = parseFloat(shearStressOrPressureInXYDirection);
    const b = parseFloat(shearStrain);
    const G = a / b;
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
  bulkModulus(initialVolumeOfTheSubstance, changeInVolume, changeInPressure) {
    const a = parseFloat(initialVolumeOfTheSubstance);
    const b = parseFloat(changeInVolume);
    const c = parseFloat(changeInPressure);
    const k = -(a * (c / b));
    return k.toFixed(3);
  }

  //surface tension equation (N/m)
  /*
@param: F - force
@unit: N
@param: L - length
@unit: m
*/
  surfaceTension(force, length) {
    const f = parseFloat(force);
    const l = parseFloat(length);
    const gamma = 0.5 * (f / l);
    return gamma.toFixed(3);
  }
}

export default mechanics;
