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

class Mechanics {
    //velocity equation
    /*
      @param: deltaX - Change in Position
      @param: deltaT - Change in Time
      */
    velocity(deltaX:number, deltaT:number) {
      const avV = deltaX / deltaT;
      return avV.toFixed(3);
    }
  
    //acceleration equation
    /*
    @param: deltaV - Change in Velocity
    @param: deltaT - Change in Time
    */
    acceleration(deltaV:number, deltaT:number) {
      const avA = deltaV / deltaT;
      return avA.toFixed(3);
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
        velocityEM: function (v0:number, a:number, t:number) {
          const v = v0 + a * t;
          return v.toFixed(3);
        },
        displacement: function (d0:number, v0:number, t:number, a:number) {
          const d = d0 + v0 * t + 0.5 * (a * t) ** 2;
          return d.toFixed(3);
        },
        velocitySquared: function (v0:number, a:number, d:number, d0:number) {
          const vSquared = v0 ** 2 + 2 * a * (d - d0);
          return vSquared.toFixed(3);
        },
        averageVelocity: function (v0:number, v:number) {
          const av = 0.5 * (v + v0);
          return av.toFixed(3);
        },
      };
    }
    //net force equations
    /*
    @param: m - mass
    @param: a - acceleration
    */
    netForce1(m:number, a:number) {
      const nf = m * a;
      return nf.toFixed(3);
    }
  
    /*
    @param: deltaP - Change in Momentum
    @param: deltaT - Change in Time
    */
    netForce2(deltaP:number, deltaT:number) {
      const nf = deltaP / deltaT;
      return nf.toFixed(3);
    }
  
    //weight equation
    /*
    @param: m - mass
    @param: g - gravity
    */
    weight(m:number, g:number) {
      const w = m * g;
      return w.toFixed(3);
    }
  
    //dry friction equation
    /*
    @param: mu - coefficient of friction
    @param: n - normal force
    */
    dryFriction(mu:number, n:number) {
      const f = mu * n;
      return f.toFixed(3);
    }
  
    //centripetal acceleration equation
    /*
    @param: v - velocity
    @param: r - radius
    */
    centripetalAcceleration(v:number, r:number) {
      const ac = v ** 2 / r;
      return ac.toFixed(3);
    }
  
    //momentum equation
    /*
    @param: m - mass
    @param: v - velocity
    */
    momentum(m:number, v:number) {
      const p = m * v;
      return p.toFixed(3);
    }
  
    //impulse equation
    /*
    @param: f - applied force
    @param: deltaT - change in time
    */
    impulse(f:number, deltaT:number) {
      const deltaP = f * deltaT;
      return deltaP.toFixed(3);
    }
  
    //impulse momentum equation
    /*
    @param: m - mass
    @param: deltaV - change in velocity
    */
    impulseMomentum(m:number, deltaV:number) {
      const im = m * deltaV;
      return im.toFixed(3);
    }
  
    //work equation
    /*
    @param: f - force
    @param: d - displacement
    */
    work(f:number, d:number) {
      const w = f * d;
      return w.toFixed(3);
    }
  
    //work-energy equation
    /*
    @param: KA - initial kinetic energy
    @param: KB - final kinetic energy
    */
    workEnergy(KA:number, KB:number) {
      const wNet = KB - KA;
      return wNet.toFixed(3);
    }
  
    //kinetic energy equation
    /*
    @param: m - mass
    @param: v - velocity
     */
    kineticEnergy(m:number, v:number) {
      const K = 0.5 * (m * (v ** 2));
      return K.toFixed(3);
    }
  
    //general potential energy equation
    /*
    @param: f - force
    @param: d - displacement
    */
    generalPotentialEnergy(f:number, d:number) {
      const U = -f * d;
      return U.toFixed(3);
    }
  
    //gravitational potential energy equation
    /*
    @param: m - mass
    @param: g - gravitational field
    @param: h - height
     */
    gravitationalPotentialEnergy(m:number, g:number, h:number) {
      const U = m * g * h;
      return U.toFixed(3);
    }
  
    //efficiency equation
    /*
    @param: eo - energy output
    @param: ei - energy input
    */
    efficiency(eo:number, ei:number) {
      const eta = eo / ei;
      return eta.toFixed(3);
    }

    //power equation
    /*
    @param: deltaW - change in work
    @param: deltaT - change in time
    */
   power(deltaW:number, deltaT:number) {
    const P = deltaW/deltaT;
    return P.toFixed(3);
   }
   
   //power-velocity equation
   /*
   @param: F - force
   @param: v - velocity
   */
   powerVelocity(F:number, v:number) {
    const P = F*v;
    return P.toFixed(3);
   }

   //angular velocity equation
   /*
   @param: deltaTheta - change in angular rotation
   @param: deltaT - change in time
   */
  angularVelocity(deltaTheta:number, deltaT:number) {
    const omega = deltaTheta/deltaT;
    return omega.toFixed(3);
  }

  //angular acceleration equation
  /*
  @param: deltaOmega - change in angular velocity
  @param: deltaT - change in time
  */
  angularAcceleration(deltaOmega:number, deltaT:number) {
    const a = deltaOmega/deltaT;
    return a.toFixed(3);
  }

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
 equationsOfRotation() {
  return {
    angularVelocityEOR: (omega0:number, a:number, t:number) => {
      const omega = omega0 + (a*t);
      return omega.toFixed(3);
    },
    angularRotationEOR: (theta0:number, omega0:number, t:number, a:number) => {
      const theta = theta0 + (omega0*t) + (0.5* ((a*t)**2));
      return theta.toFixed(3);
    },
    angularVelocitySquaredEOR: (omega0:number, a:number, theta:number, theta0:number) => {
      const omegaSquared = omega0**2 + (2*a*(theta - theta0));
      return omegaSquared.toFixed(3);
    },
    averageAngularVelocity(omega:number, omega0:number) {
      const avOmega = 0.5*(omega + omega0);
      return avOmega.toFixed(3);
    }
  }
 }
 //torque equation
  /*
  @param: r - radius
  @param: F - force
  */
  torque(r:number, F:number){
    const tau = r*F;
    return tau.toFixed(3);
  }

  //Net Torque Equations

  // 1.
  /*
  @param: I - moment of inertia
  @param: a - angular acceleration
  */
 netTorque1(I:number, a:number) {
  const sigmaTau = I*a;
  return sigmaTau.toFixed(3);
 }

 // 2.
 /*
 @param: deltaL - change in length
 @param: deltaT - change in time
 */
netTorque2(deltaL:number, deltaT:number){
  const sigmaTau = deltaL/deltaT;
  return sigmaTau.toFixed(3);
}

//moment of inertia equation
/*
@param: sigmaM - net mass
@param: r - radius
*/
momentOfInertia(sigmaM:number, r:number) {
  const I = sigmaM*(r**2);
  return I.toFixed(3);
}

//rotational work equation
/*
@param: avTau - average torque
@param: deltaTheta - change in angular rotation
*/
rotationalWork(avTau:number, deltaTheta:number) {
  const W = avTau*deltaTheta;
  return W.toFixed(3);
}

//rotational power equation
/*
@param: tau - torque
@param: omega - angularVelocity
*/
rotationalPower(tau:number, omega:number){
  const P = tau*omega;
  return P.toFixed(3);
}

//rotational kinetic energy equation
/*
@param: I - moment of inertia
@param: omega - angular velocity
*/
rotationalKineticEnergy(I:number, omega:number){
  const K = 0.5*((I*omega)**2);
  return K.toFixed(3);
}

//angular momentum equation
/*
@param: r - radius
@param: p - momentum
*/
angularMomentum(r:number, p:number) {
  const L = r * p;
  return L.toFixed(3);
}

//angular impulse equation
/*
@param: avTau - average torque
@param: deltaT - change in time
*/
angularImpulse(avTau:number, deltaT:number) {
  const H = avTau * deltaT;
  return H.toFixed(3);
}

//angular impulse momentum equation
/*
@param: m - mass 
@param: deltaOmega - change in angular velocity
*/
angularImpulseMomentum(m:number, deltaOmega:number) {
  const angIM = m*deltaOmega;
  return angIM.toFixed(3);
}

//universal gravitation equation
/*
@param: G - gravitational constant
@param: m1 - mass 1
@param: m2 - mass 2
@param: r - distance between centers of the masses
*/
universalGravitation(G:number, m1:number, m2:number, r:number){
  const Fg = G*((m1*m2)/r**2);
  return Fg.toFixed(3);
}

//gravitational field equation
/*
@param: G - gravitational constant
@param: m - mass 
@param: r - distance between centers of the masses
*/
gravitationalFieldEquation(G:number, m:number, r:number) {
  const g = -((G*m)/r**2);
  return g.toFixed(3);
}

//gravitational potential energy equation
/*
@param: G - gravitational constant
@param: m1 - mass 1
@param: m2 - mass 2 
@param: r - distance between centers of the masses
*/
gravitationalPotentialEnergy2(G:number, m1:number, m2:number, r:number) {
  const Ug = -((G*m1*m2)/r);
  return Ug.toFixed(3);
}
//gravitational potential equation
/*
@param: G - gravitational constant
@param: m - mass
@param: r - distance between centers of the masses
*/
gravitationalPotential(G:number, m:number, r:number) {
  const Vg = -((G*m)/r);
  return Vg.toFixed(3);
}

//orbital speed equation
/*
@param: G - gravitational constant
@param: m - mass
@param: r - distance between centers of the masses
*/
orbitalSpeedEquation(G:number, m:number, r:number) {
  const v = Math.sqrt((G*m)/r);
  return v.toFixed(3);
}

//escape speed equation
/*
@param: G - gravitational constant
@param: m - mass
@param: r - distance between centers of the masses
*/
escapeSpeed(G:number, m:number, r:number) {
  const v = Math.sqrt((2*G*m)/r);
  return v.toFixed(3);
}
//hooke's law
/*
@param: k - spring constant
@param: deltaX - spring stretch or compression
*/
hookesLaw(k:number, deltaX:number) {
  const Fs = -(k*deltaX);
  return Fs.toFixed(3);
}

//spring potential energy equation
/*
@param: k - spring constant
@param: deltaX - spring stretch or compression
*/
springPotentialEnergy(k:number, deltaX:number) {
  const Us = 0.5*(k*(deltaX)**2);
  return Us.toFixed(3);
}

//simple harmonic oscillator equation
/*
@param: m - mass
@param: k - positive constant
*/
simpleHarmonicOscillator(m:number, k:number) {
  const T = (2*Math.PI)*(Math.sqrt(m/k));
  return T.toFixed(3);
}

//simple pendulum equation
/*
@param: L - pendulum length
@param: g - acceleration due to gravity
*/
simplePendulum(L:number, g:number) {
  const T = (2*Math.PI)*(Math.sqrt(L/g));
  return T.toFixed(3);
}

//frequency equation
/*
@param: T - period
*/
frequency(T:number) {
  const f = 1/T;
  return f.toFixed(3);
}

//angular frequency equation
/*
@param: f - frequency
*/
angularFrequency(f:number) {
  const omega = 2*Math.PI*f;
  return omega.toFixed(3);
}

//density equation
/*
@param: m - mass
@param: V - volume
*/
density(m:number, V:number) {
  const rho = m/V;
  return rho.toFixed(3);
}

//pressure equation
/*
@param: F - force
@param: A - area
*/
pressure(F:number, A:number) {
  const P = F/A;
  return P.toFixed(3);
}

//fluid pressure equation
/*
@param: p0 - initial pressure
@param: rho - density
@param: g - acceleration due to gravity
@param: h - fluid depth
*/
fluidPressure(p0:number, rho:number, g:number, h:number) {
  const P = p0 + (rho*g*h);
  return P.toFixed(3);
}

//buoyancy equation
/*
@param: rho - density
@param: g - acceleration due to gravity
@param: V - volume displaced
*/
buoyancy(rho:number, g:number, V:number) {
  const B = rho*g*V;
  return B.toFixed(3);
}

//mass flow rate equation
/*
@param: deltaM - change in mass
@param: deltaT - change in time
*/
massFlowRate(deltaM:number, deltaT:number) {
  const avqm = deltaM/deltaT;
  return avqm.toFixed(3);
}

//volume flow rate equation
/*
@param: deltaVol - change in volume
@param: deltaT - change in time
*/
volumeFlowRate(deltaVol:number, deltaT:number) {
  const avqv = deltaVol/deltaT;
  return avqv.toFixed(3);
}

//dynamic viscosity equation
/*
@param: T - shearing stress
@param: gamma - shear rate
*/
dynamicViscosityEquation(T:number, gamma:number) {
  const eta = T/gamma;
  return eta.toFixed(3);
}

//kinematic viscosity equation
/*
@param: eta - dynamic viscosity
@param: rho - density
*/
kinematicViscosity(eta:number, rho:number) {
  const v = eta/rho;
  return v.toFixed(3);
}

//drag equation
/*
@param: rho - density of fluid
@param: v - speed of the object relative to the fluid
@param: Cd - drag coefficient
@param: A - cross sectional area
*/
drag(rho:number, v:number, Cd:number, A:number)  {
  const FD = 0.5*(rho*(v**2)*Cd*A);
  return FD.toFixed(3);
}

//mach number equation
/*
@param: u - local flow velocity
@param: c - speed of sound in the medium
*/
machNumber(u:number, c:number) {
  const Ma = u/c;
  return Ma.toFixed(3);
}

//reynolds number equation
/*
@param: rho - density
@param: u - flow speed
@param: L - characteristic linear dimension
@param: eta - dynamic viscosity
*/
reynoldsNumber(rho:number, u:number, L:number, eta:number) {
  const Re = (rho*u*L)/eta;
  return Re.toFixed(3);
}

//froude number equation
/*
@param: u - flow speed
@param: g - gravitational acceleration
@param: d - depth of flow
*/
froudeNumber(u:number, g:number, d:number) {
  const Fr = u/Math.sqrt(g*d);
  return Fr.toFixed(3);
}

//young's modulus
/*
@param: sigma - uniaxial stress (or uniaxial force per unit surface)
@param: epsilon - strain, or proportional deformation
*/
youngsModulus(sigma:number, epsilon:number) {
  const E = sigma/epsilon;
  return E.toFixed(3);
}

//shear modulus
/*
@param: tauXY - shear stress or pressure in xy direction
@param: gammaXY - shear strain
*/
shearModulus(tauXY:number, gammaXY:number) {
  const G = tauXY/gammaXY;
  return G.toFixed(3);
}

//bulk modulus
/*
@param: V - initial volume of the substance
@param: deltaV - change in volume
@param: deltaP - change in pressure
*/
bulkModulus(V0:number, deltaV:number, deltaP:number) {
  const k = -(V0*(deltaP/deltaV));
  return k.toFixed(3);
}

//surface tension equation
/*
@param: F - force
@param: L - length
*/
surfaceTension(F:number, L:number) {
  const gamma = 0.5*(F/L);
  return gamma.toFixed(3);
}

}

module.exports = Mechanics;