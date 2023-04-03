/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: A library of physics formulae
* @Date: 2022/11/06
*/
//Kinematics Equations
class KinematicsEquations {
    //Definition of Acceleration Equations

    //Average Velocity
    solveForAverageVelocityDAE(initialVelocity, acceleration, time) {
        const v0 = parseFloat(initialVelocity);
        const a = parseFloat(acceleration);
        const t = parseFloat(time);
        //solve for average velocity
        const av = v0 + (a*t);
        return av.toFixed(3)
    };

    //Initial Velocity
    solveForInitialVelocityDAE(averageVelocity, acceleration, time) {
        const av = parseFloat(averageVelocity);
        const a = parseFloat(acceleration);
        const t = parseFloat(time);
        //solve for initial velocity
        const v0 = av - (a*t);
        return v0.toFixed(3);
    };

    //Acceleration
    solveForAccelerationDAE(averageVelocity, initialVelocity, time) {
        const av = parseFloat(averageVelocity);
        const v0 = parseFloat(initialVelocity);
        const t = parseFloat(time);
        //solve for acceleration
        const a = (av - v0)/t;
        return a.toFixed(3);
    };

    //Time
    solveForTimeDAE(averageVelocity, initialVelocity, acceleration) {
        const av = parseFloat(averageVelocity);
        const v0 = parseFloat(initialVelocity);
        const a = parseFloat(acceleration);
        //solve for time
        const t = (av - v0)/a;
        return t.toFixed(3);
    };

    //Displacement Curve Equations

    //Displacement
    solveForDisplacementDCE(initialVelocity, time, acceleration) {
        const v0 = parseFloat(initialVelocity);
        const t = parseFloat(time);
        const a = parseFloat(acceleration);
        //solve for displacement
        const d = (v0*t) + (0.5)*(a)*(t**2);
        return d.toFixed(3);
    };

    //Final Position
    solveForFinalPositionDCE(initialVelocity, time, acceleration, initialPosition) {
        const v0 = parseFloat(initialVelocity);
        const t = parseFloat(time);
        const a = parseFloat(acceleration);
        const x0 = parseFloat(initialPosition);
     //solve for final position
        const xf = (v0*t) + (0.5)*(a)*(t**2) + x0;
        return xf.toFixed(3);
    };

    //Initial Position
    solveForInitialPositionDCE(finalPosition, initialVelocity, time, acceleration) {
        const xf = parseFloat(finalPosition);
        const v0 = parseFloat(initialVelocity);
        const t = parseFloat(time);
        const a = parseFloat(acceleration);
        //solve for initial position
        const x0 = xf - (v0*t) - (0.5)*(a)*(t**2);
        return x0.toFixed(3);
    };

    //Initial Velocity
    solveForInitialVelocityDCE(displacement, acceleration, time) {
        const d = parseFloat(displacement);
        const a = parseFloat(acceleration);
        const t = parseFloat(time);
        //solve for initial velocity
        const v0 = (d - (0.5)*(a)*(t**2))/t;
        return v0.toFixed(3);
    };

    //Acceleration
    solveForAccelerationDCE(displacement, initialVelocity, time) {
        const d = parseFloat(displacement);
        const v0 = parseFloat(initialVelocity);
        const t = parseFloat(time);
        //solve for acceleration
        const a = 2*((d - (v0 * t))/t**2);
        return a.toFixed(3);
    };
}

export {
    KinematicsEquations
}