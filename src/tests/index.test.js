/*
* @Desc: Primary Testing File
* @Author: Lwandle Babekizulu Dlamini
* @Date: 2022/10/22
*/
describe('Tests are a go!', () => {
    test('Tests running: true', () => {
        expect(true).toBe(true);
    });
});
// //libs
// const PhysicsFormulae = require('../libs/PhysicsFormulae');
// const EconomicsFormulae = require('../libs/EconomicsFormulae');
// const AccountingFormulae = require('../libs/AccountingFormulae');
// const {
//     IncomeStatementFormulae
// } = AccountingFormulae;
// const {KinematicsEquations} = PhysicsFormulae;
// const {
//     GDPExpApproachFormula, 
//     GDPIncomeApproachFormula, 
//     BalanceOfTradeFormula, 
//     CurrentAccountFormula, 
//     CAGDPRatio, 
//     GDGDPRatio, 
//     RealGDPQuaterlyGrowthRateFormula, 
//     RealGDPAnnualGrowthRateFormula, 
//     GDPDeflatorFormula, 
//     RealGDPFormula, 
//     InflationRateFormula, 
//     SimpleInterestRateFormula, 
//     CompoundInterestRateFormula,
//     UnemploymentRateFormula,
//     NetExportsFormula,
//     StraightLineDepreciationFormula,
//     DoubleDecliningBalanceDepreciationFormula,
//     UnitsOfProductionDepreciationFormula,
//     SumOfYearsDigitsDepreciation,
//     NetForeignFactorIncomeFormula
// } = EconomicsFormulae;
// //Kinematics Equation Tests
// const {
//     solveForAverageVelocityDAE, 
//     solveForInitialVelocityDAE,
//     solveForAccelerationDAE,
//     solveForTimeDAE,
//     solveForDisplacementDCE,
//     solveForFinalPositionDCE,
//     solveForInitialPositionDCE,
//     solveForInitialVelocityDCE,
//     solveForAccelerationDCE
// } = new KinematicsEquations();
// //Definition of Acceleration Equation Tests
// describe('Kinematic Equations Tests: Definition of Acceleration', () => {
//     //tests average velocity equation (unit test)
//     test('Average Velocity should equal 14', () => {
//         expect(solveForAverageVelocityDAE(2, 3, 4)).toBe(14);
//     });
//     //tests initial velocity equation
//     test('Initial Velocity should equal 2', () => {
//         expect(solveForInitialVelocityDAE(14, 3, 4)).toBe(2);
//     });
//     //tests acceleration equation
//     test('Acceleration should equal 3', () => {
//         expect(solveForAccelerationDAE(14, 2, 4)).toBe(3);
//     });
//     //tests time equation
//     test('Time should equal 4', () => {
//         expect(solveForTimeDAE(14, 2, 3)).toBe(4);
//     });
// });
// //Displacement Curve Equation Tests
// describe('Kinematic Equations Tests: Displacement Curve', () => {
//     //tests displacement equation
//     test('Displacement should equal 150', () => {
//         expect(solveForDisplacementDCE(5, 10, 2)).toBe(150);
//     });
//     //tests final position equation
//     test('Final Position should equal 150', () => {
//         expect(solveForFinalPositionDCE(5, 10, 2, 0)).toBe(150);
//     });
//     //tests initial position equation
//     test('Initial Position should equal 0', () => {
//         expect(solveForInitialPositionDCE(150, 5, 10, 2)).toBe(0);
//     });
//     //tests initial velocity equation
//     test('Initial Velocity should equal 5', () => {
//         expect(solveForInitialVelocityDCE(150, 2, 10)).toBe(5);
//     });
//     //tests acceleration equation
//     test('Acceleration should equal 2', () => {
//         expect(solveForAccelerationDCE(150, 5, 10)).toBe(2);
//     });
// });
// //Economics Formulae Tests
// describe('Economics Formulae Tests', () => {
//     // tests GDPExpApproachFormula
//     test('GDP should equal 8500.00', () => {
//         expect( new GDPExpApproachFormula().solve(
//             1000,
//             2000,
//             500,
//             5000
//         )).toBe(parseFloat(8500).toFixed(2));
//     });
//     // tests GDPIncomeApproachFormula
//     test('GDP should equal 30650.00', () => {
//         expect(new GDPIncomeApproachFormula().solve(
//             10000,
//             500,
//             150,
//             20000
//         )).toBe(parseFloat(30650).toFixed(2));
//     });
//     //tests BalanceOfTradeFormula
//     test('Balance of Trade should equal -10000.00', () => {
//         expect(new BalanceOfTradeFormula().solve(
//             20000,
//             30000
//         )).toBe(parseFloat(-10000).toFixed(2));
//     });
//     //tests CurrentAccountFormula
//     test('Current Account should equal 65000.00', () => {
//         expect(new CurrentAccountFormula().solve(
//             40000,
//             10000,
//             20000,
//             15000
//         )).toBe(parseFloat(65000).toFixed(2));
//     });
//     //tests CAGDPRatio
//     test('Current Account to GDP Ratio should equal 212.07', () => {
//         expect(new CAGDPRatio().solve(
//             65000,
//             30650
//         )).toBe(parseFloat(212.07).toFixed(2));
//     });
//     //tests GDGDPRatio
//     test('Government Debt to GDP Ratio should equal 32.63', () => {
//         expect(new GDGDPRatio().solve(
//             10000,
//             30650
//         )).toBe(parseFloat(32.63).toFixed(2));
//     });
//     // tests RealGDPQuaterlyGrowthRateFormula
//     test('Real GDP Quarterly Growth Rate should equal 1.28', () => {
//         expect(new RealGDPQuaterlyGrowthRateFormula().solve(
//             30650,
//             70000
//         )).toBe(parseFloat(1.28).toFixed(2));
//     });
//     //tests RealGDPAnnualGrowthRateFormula
//     test('Real GDP Annual Growth Rate should equal 0.53', () => {
//         expect(new RealGDPAnnualGrowthRateFormula().solve(
//             20000,
//             30650
//         )).toBe(parseFloat(0.53).toFixed(2));
//     });
//     //tests GDPDeflatorFormula
//     test('GDP Deflator should equal 111.11', () => {
//         expect(new GDPDeflatorFormula().solve(
//             30000,
//             27000
//         )).toBe(parseFloat(111.11).toFixed(2));
//     });
//     //tests RealGDPFormula
//     test('Real GDP should equal 270.27', () => {
//         expect(new RealGDPFormula().solve(
//             30000,
//             111
//         )).toBe(parseFloat(270.27).toFixed(2));
//     });
//     //tests InflationRateFormula
//     test('Inflation Rate should equal 233.33', () => {
//         expect(new InflationRateFormula().solve(
//             3,
//             10
//         )).toBe(parseFloat(233.33).toFixed(2));
//     });
//     //tests SimpleInterestRateFormula
//     test('Simple Interest Rate should equal 4000.00', () => {
//         expect(new SimpleInterestRateFormula().solve(
//             20,
//             10000,
//             2
//         )).toBe(parseFloat(4000).toFixed(2));
//     });
//     //tests CompoundInterestRateFormula
//     test('Compound Interest Rate should equal 14257.61', () => {
//         expect(new CompoundInterestRateFormula().solve(
//             10000,
//             3,
//             1,
//             12
//         )).toBe(parseFloat(14257.61).toFixed(2));
//     });
//     //tests UnemploymentRateFormula
//     test('Unemployment Rate should equal 10.00', () => {
//         expect(new UnemploymentRateFormula().solve(
//             2000,
//             20000
//         )).toBe(parseFloat(10).toFixed(2));
//     });
//     //tests NetExportsFormula
//     test('Net Exports should equal 19900.00', () => {
//         expect(new NetExportsFormula().solve(
//             20000,
//             1000
//         )).toBe(parseFloat(19000).toFixed(2));
//     });
//     //StraightLineDepreciationFormula
//     test('Straight Line Depreciation should equal 1000.00', () => {
//         expect(new StraightLineDepreciationFormula().solve(
//             10000,
//             5000,
//             5
//         )).toBe(parseFloat(1000).toFixed(2));
//     });
//     //tests DoubleDecliningBalanceDepreciationFormula
//     test('Double Declining Balance Depreciation should equal 4000.00', () => {
//         expect(new DoubleDecliningBalanceDepreciationFormula().solve(
//             10000,
//             5
//         )).toBe(parseFloat(4000).toFixed(2));
//     })
//     //tests UnitsOfProductionDepreciationFormula
//     test('Units of Production Depreciation should equal 100000.00', () => {
//         expect(new UnitsOfProductionDepreciationFormula().solve(
//             100,
//             5,
//             10000,
//             5000
//         )).toBe(parseFloat(100000).toFixed(2));
//     });
//     //tests SumOfYearsDigitsDepreciation
//     test('Sum of Years Digits Depreciation should equal 10000.00', () => {
//         expect(new SumOfYearsDigitsDepreciation().solve(
//             10,
//             5,
//             10000,
//             5000
//         )).toBe(parseFloat(10000).toFixed(2));
//     });
//     //NetForeignFactorIncomeFormula
//     test('Net Foreign Factor Income should equal 5000.00', () => {
//         expect(new NetForeignFactorIncomeFormula().solve(
//             10000,
//             5000
//         )).toBe(parseFloat(5000).toFixed(2));
//     });
// });
// //Accounting Formulae Tests 

// //income statement formulae tests
// const {
//     basicIncomeFormula, 
//     earningsBITFormula, 
//     grossProfitFormula,
//     operatingExpensesFormula,
//     earningsBTFormula,
//     netIncomeFormula
// } = new IncomeStatementFormulae();
// describe('Income Statement Formulae Tests', () => {
//     //basic income formula test 
//     test('Should return: 80.00', () => {
//         expect(basicIncomeFormula(100, 20)).toBe(parseFloat(80).toFixed(2));
//     });
//     //earnings before interest & taxes formula test
//     test('Should return: 50.00', () => {
//         expect(earningsBITFormula(200, 150)).toBe(parseFloat(50).toFixed(2));
//     });
//     //gross profit formula test
//     test('Should return: 300.00', () => {
//         expect(grossProfitFormula(500, 200)).toBe(parseFloat(300).toFixed(2));
//     });
//     //operating expenses formula test
//     test('Should return: 470.00', () => {
//         expect(operatingExpensesFormula(120, 150, 200)).toBe(parseFloat(470).toFixed(2));
//     });
//     //earnings before taxes formula test
//     test('Should return: 800.00', () => {
//         expect(earningsBTFormula(1000, 200)).toBe(parseFloat(800).toFixed(2));
//     });
//     //net income formula test
//     test('Should return: 640.00', () => {
//         expect(netIncomeFormula(800, 160)).toBe(parseFloat(640).toFixed(2));
//     });
// });