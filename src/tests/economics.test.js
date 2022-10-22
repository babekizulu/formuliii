/*
* @Desc: Testing file for Economics Formulae
* @Author: Lwandle Babekizulu Dlamini
* @Date: 2022/10/13
*/
//libs
const EconomicsFormulae = require('../libs/EconomicsFormulae');
const {
    GDPExpApproachFormula, 
    GDPIncomeApproachFormula, 
    BalanceOfTradeFormula, 
    CurrentAccountFormula, 
    CAGDPRatio, 
    GDGDPRatio, 
    RealGDPQuaterlyGrowthRateFormula, 
    RealGDPAnnualGrowthRateFormula, 
    GDPDeflatorFormula, 
    RealGDPFormula, 
    InflationRateFormula, 
    SimpleInterestRateFormula, 
    CompoundInterestRateFormula,
    UnemploymentRateFormula,
    NetExportsFormula,
    StraightLineDepreciationFormula,
    DoubleDecliningBalanceDepreciationFormula,
    UnitsOfProductionDepreciationFormula,
    SumOfYearsDigitsDepreciation,
    NetForeignFactorIncomeFormula
} = EconomicsFormulae;

//Economics Formulae Tests
describe('Economics Formulae Tests', () => {
    // tests GDPExpApproachFormula
    test('GDP should equal 8500.00', () => {
        expect( new GDPExpApproachFormula().solve(
            1000,
            2000,
            500,
            5000
        )).toBe(parseFloat(8500).toFixed(2));
    });
    // tests GDPIncomeApproachFormula
    test('GDP should equal 30650.00', () => {
        expect(new GDPIncomeApproachFormula().solve(
            10000,
            500,
            150,
            20000
        )).toBe(parseFloat(30650).toFixed(2));
    });
    //tests BalanceOfTradeFormula
    test('Balance of Trade should equal -10000.00', () => {
        expect(new BalanceOfTradeFormula().solve(
            20000,
            30000
        )).toBe(parseFloat(-10000).toFixed(2));
    });
    //tests CurrentAccountFormula
    test('Current Account should equal 65000.00', () => {
        expect(new CurrentAccountFormula().solve(
            40000,
            10000,
            20000,
            15000
        )).toBe(parseFloat(65000).toFixed(2));
    });
    //tests CAGDPRatio
    test('Current Account to GDP Ratio should equal 212.07', () => {
        expect(new CAGDPRatio().solve(
            65000,
            30650
        )).toBe(parseFloat(212.07).toFixed(2));
    });
    //tests GDGDPRatio
    test('Government Debt to GDP Ratio should equal 32.63', () => {
        expect(new GDGDPRatio().solve(
            10000,
            30650
        )).toBe(parseFloat(32.63).toFixed(2));
    });
    // tests RealGDPQuaterlyGrowthRateFormula
    test('Real GDP Quarterly Growth Rate should equal 1.28', () => {
        expect(new RealGDPQuaterlyGrowthRateFormula().solve(
            30650,
            70000
        )).toBe(parseFloat(1.28).toFixed(2));
    });
    //tests RealGDPAnnualGrowthRateFormula
    test('Real GDP Annual Growth Rate should equal 0.53', () => {
        expect(new RealGDPAnnualGrowthRateFormula().solve(
            20000,
            30650
        )).toBe(parseFloat(0.53).toFixed(2));
    });
    //tests GDPDeflatorFormula
    test('GDP Deflator should equal 111.11', () => {
        expect(new GDPDeflatorFormula().solve(
            30000,
            27000
        )).toBe(parseFloat(111.11).toFixed(2));
    });
    //tests RealGDPFormula
    test('Real GDP should equal 270.27', () => {
        expect(new RealGDPFormula().solve(
            30000,
            111
        )).toBe(parseFloat(270.27).toFixed(2));
    });
    //tests InflationRateFormula
    test('Inflation Rate should equal 233.33', () => {
        expect(new InflationRateFormula().solve(
            3,
            10
        )).toBe(parseFloat(233.33).toFixed(2));
    });
    //tests SimpleInterestRateFormula
    test('Simple Interest Rate should equal 4000.00', () => {
        expect(new SimpleInterestRateFormula().solve(
            20,
            10000,
            2
        )).toBe(parseFloat(4000).toFixed(2));
    });
    //tests CompoundInterestRateFormula
    test('Compound Interest Rate should equal 14257.61', () => {
        expect(new CompoundInterestRateFormula().solve(
            10000,
            3,
            1,
            12
        )).toBe(parseFloat(14257.61).toFixed(2));
    });
    //tests UnemploymentRateFormula
    test('Unemployment Rate should equal 10.00', () => {
        expect(new UnemploymentRateFormula().solve(
            2000,
            20000
        )).toBe(parseFloat(10).toFixed(2));
    });
    //tests NetExportsFormula
    test('Net Exports should equal 19900.00', () => {
        expect(new NetExportsFormula().solve(
            20000,
            1000
        )).toBe(parseFloat(19000).toFixed(2));
    });
    //StraightLineDepreciationFormula
    test('Straight Line Depreciation should equal 1000.00', () => {
        expect(new StraightLineDepreciationFormula().solve(
            10000,
            5000,
            5
        )).toBe(parseFloat(1000).toFixed(2));
    });
    //tests DoubleDecliningBalanceDepreciationFormula
    test('Double Declining Balance Depreciation should equal 4000.00', () => {
        expect(new DoubleDecliningBalanceDepreciationFormula().solve(
            10000,
            5
        )).toBe(parseFloat(4000).toFixed(2));
    })
    //tests UnitsOfProductionDepreciationFormula
    test('Units of Production Depreciation should equal 100000.00', () => {
        expect(new UnitsOfProductionDepreciationFormula().solve(
            100,
            5,
            10000,
            5000
        )).toBe(parseFloat(100000).toFixed(2));
    });
    //tests SumOfYearsDigitsDepreciation
    test('Sum of Years Digits Depreciation should equal 10000.00', () => {
        expect(new SumOfYearsDigitsDepreciation().solve(
            10,
            5,
            10000,
            5000
        )).toBe(parseFloat(10000).toFixed(2));
    });
    //NetForeignFactorIncomeFormula
    test('Net Foreign Factor Income should equal 5000.00', () => {
        expect(new NetForeignFactorIncomeFormula().solve(
            10000,
            5000
        )).toBe(parseFloat(5000).toFixed(2));
    });
});