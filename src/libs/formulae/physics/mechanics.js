/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of mechanics formulae
@Date: 2023/01/04
@TODO:
o	Weight
o	Dry Friction
o	Centripetal Acceleration
o	Momentum
o	Impulse
o	Impulse-Momentum
o	Work
o	Work-Energy
o	Kinetic Energy
o	General Potential Energy
o	Gravitational Potential Energy
o	Efficiency
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

class Mechanics {
  //velocity equation
  /*
    @param: deltaX - Change in Position
    @param: deltaT - Change in Time
    */
  velocity(deltaX, deltaT) {
    const avV = deltaX / deltaT;
    return {
      valName: 'Average Velocity',
      val: parseFloat(avV).toFixed(3),
    };
  }

  //acceleration equation
  /*
  @param: deltaV - Change in Velocity
  @param: deltaT - Change in Time
  */
  acceleration(deltaV, deltaT) {
    const avA = deltaV / deltaT;
    return {
      valName: '',
      val: parseFloat(avA).toFixed(3),
    };
  }
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

  equationsOfMotion() {
    return {
      velocityEM: function (v0, a, t) {
        const v = v0 + a * t;
        return {
          valName: 'Velocity',
          val: parseFloat(v).toFixed(3),
        };
      },
      displacement: function (d0, v0, t, a) {
        const d = d0 + v0 * t + 0.5 * (a * t) ** 2;
        return {
          valName: 'Displacement',
          val: parseFloat(d).toFixed(3),
        };
      },
      velocitySquared: function (v0, a, d, d0) {
        const sqrtV = Math.sqrt(v0 ** 2 + 2 * a * (d - d0));
        const vSquared = sqrtV ** 2;
        return {
          valName: 'Velocity Squared',
          val: parseFloat(vSquared).toFloat(3),
        };
      },
      averageVelocity: function (v0, v) {
        const av = 0.5 * (v + v0);
        return {
          valName: 'Average Velocity',
          val: parseFloat(av).toFixed(3),
        };
      },
    };
  }
  //net force equations
  /*
  @param: m - mass
  @param: a - acceleration
  */
  netForce1(m, a) {
    const nf = m * a;
    return {
      valName: 'Net Force',
      val: parseFloat(nf).toFixed(3),
    };
  }

  /*
  @param: deltaP - Change in Momentum
  @param: deltaT - Change in Time
  */
  netForce2(deltaP, deltaT) {
    const nf = deltaP / deltaT;
    return {
      valName: 'Net Force',
      val: parseFloat(nf).toFixed(3),
    };
  }

  //weight equation
  /*
  @param: m - mass
  @param: g - gravity
  */
  weight(m, g) {
    const w = m * g;
    return {
      valName: 'Weight',
      val: parseFloat(w).toFixed(3),
    };
  }

  //dry friction equation
  /*
  @param: mu - coefficient of friction
  @param: n - normal force
  */
  dryFriction(mu, n) {
    const f = mu * n;
    return {
      valName: 'Friction Force',
      val: parseFloat(f).toFixed(3),
    };
  }

  //centripetal acceleration equation
  /*
  @param: v - velocity
  @param: r - radius
  */
  centripetalAcceleration(v, r) {
    const ac = v ** 2 / r;
    return {
      valName: 'Centripetal Acceleration',
      val: parseFloat(ac).toFixed(3),
    };
  }

  //momentum equation
  /*
  @param: m - mass
  @param: v - velocity
  */
  momentum(m, v) {
    const p = m * v;
    return {
      valName: 'Momentum',
      val: parseFloat(p).toFixed(3),
    };
  }

  //impulse equation
  /*
  @param: f - applied force
  @param: deltaT - change in time
  */
  impulse(f, deltaT) {
    const deltaP = f * deltaT;
    return {
      valName: 'Impulse',
      val: parseFloat(deltaP).toFixed(3),
    };
  }

  //impulse momentum equation
  /*
  @param: m - mass
  @param: deltaV - change in velocity
  */
  impulseMomentum(m, deltaV) {
    const im = m * deltaV;
    return {
      valName: 'Impulse-Momentum',
      val: parseFloat(im).toFixed(3),
    };
  }
}
module.exports = Mechanics;
