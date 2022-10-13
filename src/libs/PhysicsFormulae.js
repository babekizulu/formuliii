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

    //Definition of Acceleration Equation
    solveForAverageVelocityDAE() {
        const v0 = this.initialVelocity;
        const a = this.acceleration;
        const t = this.time;

        //solve for average velocity
        const av = v0 + (a*t);
        return av;
    };

    solveForInitialVelocityDAE() {
        const av = this.averageVelocity;
        const a = this.acceleration;
        const t = this.time;

        //solve for initial velocity
        const v0 = av - (a*t);
        return v0;
    };

    solveForAccelerationDAE() {
        const av = this.averageVelocity;
        const v0 = this.initialVelocity;
        const t = this.time;

        //solve for acceleration
        const a = (av - v0)/t;
        return a;
    };

    solveForTimeDAE() {
        const av = this.averageVelocity;
        const v0 = this.initialVelocity;
        const a = this.acceleration;

        //solve for time
        const t = (av - v0)/a;
        return t;
    };

    //Displacement Curve Equation
    solveForDisplacementDCE() {
        const v0 = this.initialVelocity;
        const t = this.time;
        const a = this.acceleration;
        
        //solve for displacement
        const d = (v0*t) + (0.5)*(a)*(t**2);
        return d;
    }

    solveForFinalPositionDCE() {
        const v0 = this.initialVelocity;
        const t = this.time;
        const a = this.acceleration;
        const x0 = this.initialPosition;

        //solve for final position
        const xf = (v0*t) + (0.5)*(a)*(t**2) + x0;
        return xf;
    }

    solveForInitialPositionDCE() {
        const xf = this.finalPosition;
        const v0 = this.initialVelocity;
        const t = this.time;
        const a = this.acceleration;

        //solve for initial position
        const x0 = xf - (v0*t) - (0.5)*(a)*(t**2);
        return x0;
    }

    solveForInitialVelocityDCE() {
        const d = this.displacement;
        const a = this.acceleration;
        const t = this.time;

        //solve for initial velocity
        const v0 = (d - (0.5)*(a)*(t**2))/t;
        return v0;
    }

    solveForTimeDCE() {
        const d = this.displacement;
        const v0 = this.initialVelocity;
        const a = this.acceleration;

        //solve for time
        const t = (Math.sqrt(d))/2*(Math.sqrt(v0))*(Math.sqrt((0.5)*(a)));
        return t;
    }

    solveForAccelerationDCE() {
        const d = this.displacement;
        const v0 = this.initialVelocity;
        const t = this.time;

        //solve for acceleration
        const a = 2*((d - (v0 * t))/t**2);
        return a;
    }
}

export {
    KinematicsEquations
}