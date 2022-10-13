/*
* @Desc: Testing file for Physics Formulae
* @Author: Lwandle Babekizulu Dlamini
* @Date: 2022/10/13
*/
import { KinematicsEquations } from "../libs/PhysicsFormulae";

//Kinematics Equation Tests
const {
    solveForAverageVelocityDAE,
    solveForInitialVelocityDAE,
    solveForAccelerationDAE,
    solveForTimeDAE,
    solveForDisplacementDCE,
    solveForFinalPositionDCE,
    solveForInitialPositionDCE,
    solveForInitialVelocityDCE,
    sovleForTimeDCE,
    solveForAccelerationDCE
} = KinematicsEquations;

//solve for average velocity (unit test)
