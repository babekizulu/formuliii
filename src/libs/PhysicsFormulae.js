/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: A library of physics formulae
* @Date: 2022/10/13
*/
//Kinematics Equations
class KinematicsEquations {
    constructor(averageVelocity, initialVelocity, acceleration, time, finalPosition, initialPosition, displacement) {
        this.averageVelocity = parseFloat(averageVelocity);
        this.initialVelocity = parseFloat(initialVelocity);
        this.acceleration = parseFloat(acceleration);
        this.time = parseFloat(time) * 0.001; //convert time to milliseconds
        this.finalPosition = parseFloat(finalPosition);
        this.initialPosition = parseFloat(initialPosition);
        this.displacement = parseFloat(displacement);
    }

    //Definition of Acceleration Equations

    //Average Velocity
    solveForAverageVelocityDAE(v0, a, t) {
        //solve for average velocity
        const av = v0 + (a*t);
        return av;
    };

    //Initial Velocity
    solveForInitialVelocityDAE(av, a, t) {
        //solve for initial velocity
        const v0 = av - (a*t);
        return v0;
    };

    //Acceleration
    solveForAccelerationDAE(av, v0, t) {
        //solve for acceleration
        const a = (av - v0)/t;
        return a;
    };

    solveForTimeDAE(av, v0, a) {
        //solve for time
        const t = (av - v0)/a;
        return t;
    };

    //Displacement Curve Equations

    //Displacement
    solveForDisplacementDCE(v0, t, a) {
        //solve for displacement
        const d = (v0*t) + (0.5)*(a)*(t**2);
        return d;
    }

    //Final Position
    solveForFinalPositionDCE(v0, t, a, x0) {
     //solve for final position
        const xf = (v0*t) + (0.5)*(a)*(t**2) + x0;
        return xf;
    }

    //Initial Position
    solveForInitialPositionDCE(xf, v0, t, a) {
        //solve for initial position
        const x0 = xf - (v0*t) - (0.5)*(a)*(t**2);
        return x0;
    }

    //Initial Velocity
    solveForInitialVelocityDCE(d, a, t) {
        //solve for initial velocity
        const v0 = (d - (0.5)*(a)*(t**2))/t;
        return v0;
    }

    //Acceleration
    solveForAccelerationDCE(d, v0, t) {
        //solve for acceleration
        const a = 2*((d - (v0 * t))/t**2);
        return a;
    }
}

module.exports = {
    KinematicsEquations
}