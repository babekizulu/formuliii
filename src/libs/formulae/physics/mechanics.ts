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
@CurrentComp: AngularVelocity
*/

class Mechanics {
    //velocity equation (m/s)
    /*
      @param: deltaX - Change in Position
      @unit: m (meters)
      @param: deltaT - Change in Time
      @unit: s (seconds)
      */
    velocity(deltaX:number, deltaT:number) {
      const avV = deltaX / deltaT;
      return avV.toFixed(3);
    }
  
    //acceleration equation (m/s²)
    /*
    @param: deltaV - Change in Velocity
    @unit: m/s
    @param: deltaT - Change in Time
    @unit: s
    */
    acceleration(deltaV:number, deltaT:number) {
      const avA = deltaV / deltaT;
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
    //net force equations (N)
    /*
    @param: m - mass
    @unit: kg
    @param: a - acceleration
    @unit: m/s²
    */
    netForce1(m:number, a:number) {
      const nf = m * a;
      return nf.toFixed(3);
    }
  
    /*
    @param: deltaP - Change in Momentum
    @unit: kg·m/s
    @param: deltaT - Change in Time
    @unit: s
    */
    netForce2(deltaP:number, deltaT:number) {
      const nf = deltaP / deltaT;
      return nf.toFixed(3);
    }
  
    //weight equation (N)
    /*
    @param: m - mass
    @unit: kg
    @param: g - gravity
    @unit: m/s²
    */
    weight(m:number, g:number) {
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
    dryFriction(mu:number, n:number) {
      const f = mu * n;
      return f.toFixed(3);
    }
  
    //centripetal acceleration equation (m/s²)
    /*
    @param: v - velocity
    @unit: m/s
    @param: r - radius
    @unit: m
    */
    centripetalAcceleration(v:number, r:number) {
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
    momentum(m:number, v:number) {
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
    impulse(f:number, deltaT:number) {
      const deltaP = f * deltaT;
      return deltaP.toFixed(3);
    }
  
    //impulse momentum equation (kg·m/s)
    /*
    @param: m - mass
    @unit: kg
    @param: deltaV - change in velocity
    @unit: m/s
    */
    impulseMomentum(m:number, deltaV:number) {
      const im = m * deltaV;
      return im.toFixed(3);
    }
  
    //work equation (J)
    /*
    @param: f - force
    @unit: N
    @param: d - displacement
    @unit: m
    */
    work(f:number, d:number) {
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
    workEnergy(KA:number, KB:number) {
      const wNet = KB - KA;
      return wNet.toFixed(3);
    }
  
    //kinetic energy equation (J)
    /*
    @param: m - mass
    @unit: kg
    @param: v - velocity
    @unit: m/s
     */
    kineticEnergy(m:number, v:number) {
      const K = 0.5 * (m * (v ** 2));
      return K.toFixed(3);
    }
  
    //general potential energy equation (J)
    /*
    @param: f - force
    @unit: N
    @param: d - displacement
    @unit: m
    */
    generalPotentialEnergy(f:number, d:number) {
      const U = -f * d;
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
    gravitationalPotentialEnergy(m:number, g:number, h:number) {
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
    efficiency(eo:number, ei:number) {
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
   power(deltaW:number, deltaT:number) {
    const P = deltaW/deltaT;
    return P.toFixed(3);
   }
   
   //power-velocity equation (W)
   /*
   @param: F - force
   @unit: N
   @param: v - velocity
   @unit: m/s
   */
   powerVelocity(F:number, v:number) {
    const P = F*v;
    return P.toFixed(3);
   }

   //angular velocity equation (rad/s)
   /*
   @param: deltaTheta - change in angular rotation
   @unit: rad
   @param: deltaT - change in time
   @unit: s
   */
  angularVelocity(deltaTheta:number, deltaT:number) {
    const omega = deltaTheta/deltaT;
    return omega.toFixed(3);
  }

  //angular acceleration equation (rad/s²))
  /*
  @param: deltaOmega - change in angular velocity
  @unit: rad/s
  @param: deltaT - change in time
  @unit: s
  */
  angularAcceleration(deltaOmega:number, deltaT:number) {
    const a = deltaOmega/deltaT;
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
 //torque equation (N·m)
  /*
  @param: r - radius
  @unit: m
  @param: F - force
  @unit: N
  */
  torque(r:number, F:number){
    const tau = r*F;
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
 netTorque1(I:number, a:number) {
  const sigmaTau = I*a;
  return sigmaTau.toFixed(3);
 }

 // 2.
 /*
 @param: deltaL - change in length
 @unit: m
 @param: deltaT - change in time
 @unit: s
 */
netTorque2(deltaL:number, deltaT:number){
  const sigmaTau = deltaL/deltaT;
  return sigmaTau.toFixed(3);
}

//moment of inertia equation (kg·m²)
/*
@param: sigmaM - net mass
@unit: kg
@param: r - radius
@unit: m
*/
momentOfInertia(sigmaM:number, r:number) {
  const I = sigmaM*(r**2);
  return I.toFixed(3);
}

//rotational work equation (N·m)
/*
@param: avTau - average torque
@unit: N·m
@param: deltaTheta - change in angular rotation
@unit: rad
*/
rotationalWork(avTau:number, deltaTheta:number) {
  const W = avTau*deltaTheta;
  return W.toFixed(3);
}

//rotational power equation (W)
/*
@param: tau - torque
@unit: N·m
@param: omega - angularVelocity
@unit: rad/s
*/
rotationalPower(tau:number, omega:number){
  const P = tau*omega;
  return P.toFixed(3);
}

//rotational kinetic energy equation (J)
/*
@param: I - moment of inertia
@unit: kg·m²
@param: omega - angular velocity
@unit: rad/s
*/
rotationalKineticEnergy(I:number, omega:number){
  const K = 0.5*((I*omega)**2);
  return K.toFixed(3);
}

//angular momentum equation (kg·m²/s)
/*
@param: r - radius
@unit: m
@param: p - momentum
@unit: kg·m²/s
*/
angularMomentum(r:number, p:number) {
  const L = r * p;
  return L.toFixed(3);
}

//angular impulse equation (N·m·s)
/*
@param: avTau - average torque
@unit: N·m
@param: deltaT - change in time
@unit: s
*/
angularImpulse(avTau:number, deltaT:number) {
  const H = avTau * deltaT;
  return H.toFixed(3);
}

//angular impulse momentum equation (kg·m²/s)
/*
@param: m - mass 
@unit: kg
@param: deltaOmega - change in angular velocity
@unit: rad/s
*/
angularImpulseMomentum(m:number, deltaOmega:number) {
  const angIM = m*deltaOmega;
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
universalGravitation(G:number=6.67430*10**-11, m1:number, m2:number, r:number){
  const Fg = G*((m1*m2)/r**2);
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
gravitationalFieldEquation(G:number=6.67430*10**-11, m:number, r:number) {
  const g = -((G*m)/r**2);
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
gravitationalPotentialEnergy2(G:number=6.67430*10**-11, m1:number, m2:number, r:number) {
  const Ug = -((G*m1*m2)/r);
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
gravitationalPotential(G:number=6.67430*10**-11, m:number, r:number) {
  const Vg = -((G*m)/r);
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
orbitalSpeedEquation(G:number=6.67430*10**-11, m:number, r:number) {
  const v = Math.sqrt((G*m)/r);
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
escapeSpeed(G:number=6.67430*10**-11, m:number, r:number) {
  const v = Math.sqrt((2*G*m)/r);
  return v.toFixed(3);
}
//hooke's law (N)
/*
@param: k - spring constant
@unit: N/m
@param: deltaX - spring stretch or compression
@unit: m
*/
hookesLaw(k:number, deltaX:number) {
  const Fs = -(k*deltaX);
  return Fs.toFixed(3);
}

//spring potential energy equation (J)
/*
@param: k - spring constant
@unit: N/m
@param: deltaX - spring stretch or compression
@unit: m
*/
springPotentialEnergy(k:number, deltaX:number) {
  const Us = 0.5*(k*(deltaX)**2);
  return Us.toFixed(3);
}

//simple harmonic oscillator equation (varies based on context)
/*
@param: m - mass
@unit: kg
@param: k - positive constant
@unit: N/m
*/
simpleHarmonicOscillator(m:number, k:number) {
  const T = (2*Math.PI)*(Math.sqrt(m/k));
  return T.toFixed(3);
}

//simple pendulum equation (varies based on context)
/*
@param: L - pendulum length
@unit: m
@param: g - acceleration due to gravity
@unit: m/s²
*/
simplePendulum(L:number, g:number=9.80665) {
  const T = (2*Math.PI)*(Math.sqrt(L/g));
  return T.toFixed(3);
}

//frequency equation (Hz)
/*
@param: T - period
@unit: s
*/
frequency(T:number) {
  const f = 1/T;
  return f.toFixed(3);
}

//angular frequency equation (rad/s)
/*
@param: f - frequency
@unit: Hz
*/
angularFrequency(f:number) {
  const omega = 2*Math.PI*f;
  return omega.toFixed(3);
}

//density equation (kg/m³)
/*
@param: m - mass
@unit: kg
@param: V - volume
@unit: m³
*/
density(m:number, V:number) {
  const rho = m/V;
  return rho.toFixed(3);
}

//pressure equation (Pa)
/*
@param: F - force
@unit: N
@param: A - area
@unit: m²
*/
pressure(F:number, A:number) {
  const P = F/A;
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
fluidPressure(p0:number, rho:number, g:number=9.80665, h:number) {
  const P = p0 + (rho*g*h);
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
buoyancy(rho:number, g:number=9.80665, V:number) {
  const B = rho*g*V;
  return B.toFixed(3);
}

//mass flow rate equation (kg/s)
/*
@param: deltaM - change in mass
@unit: kg
@param: deltaT - change in time
@unit: s
*/
massFlowRate(deltaM:number, deltaT:number) {
  const avqm = deltaM/deltaT;
  return avqm.toFixed(3);
}

//volume flow rate equation (m³/s)
/*
@param: deltaVol - change in volume
@unit: m³
@param: deltaT - change in time
@unit: s
*/
volumeFlowRate(deltaVol:number, deltaT:number) {
  const avqv = deltaVol/deltaT;
  return avqv.toFixed(3);
}

//dynamic viscosity equation (Pa·s)
/*
@param: T - shearing stress
@unit: Pa
@param: gamma - shear rate
@unit: s⁻¹
*/
dynamicViscosityEquation(T:number, gamma:number) {
  const eta = T/gamma;
  return eta.toFixed(3);
}

//kinematic viscosity equation (m²/s)
/*
@param: eta - dynamic viscosity
@unit: Pa·s
@param: rho - density
@unit: kg/m³
*/
kinematicViscosity(eta:number, rho:number) {
  const v = eta/rho;
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
drag(rho:number, v:number, Cd:number, A:number)  {
  const FD = 0.5*(rho*(v**2)*Cd*A);
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
machNumber(u:number, c:number) {
  const Ma = u/c;
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
reynoldsNumber(rho:number, u:number, L:number, eta:number) {
  const Re = (rho*u*L)/eta;
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
froudeNumber(u:number, g:number=9.80665, d:number) {
  const Fr = u/Math.sqrt(g*d);
  return Fr.toFixed(3);
}

//young's modulus (Pa)
/*
@param: sigma - uniaxial stress (or uniaxial force per unit surface)
@unit: Pa
@param: epsilon - strain, or proportional deformation
@unit: no units
*/
youngsModulus(sigma:number, epsilon:number) {
  const E = sigma/epsilon;
  return E.toFixed(3);
}

//shear modulus (Pa)
/*
@param: tauXY - shear stress or pressure in xy direction
@unit: Pa
@param: gammaXY - shear strain
@unit: no units
*/
shearModulus(tauXY:number, gammaXY:number) {
  const G = tauXY/gammaXY;
  return G.toFixed(3);
}

//bulk modulus (Pa)
/*
@param: V - initial volume of the substance
@unit: m³
@param: deltaV - change in volume
@unit: m³
@param: deltaP - change in pressure
@unit: Pa
*/
bulkModulus(V0:number, deltaV:number, deltaP:number) {
  const k = -(V0*(deltaP/deltaV));
  return k.toFixed(3);
}

//surface tension equation (N/m)
/*
@param: F - force
@unit: N
@param: L - length
@unit: m
*/
surfaceTension(F:number, L:number) {
  const gamma = 0.5*(F/L);
  return gamma.toFixed(3);
}

}

module.exports = Mechanics;