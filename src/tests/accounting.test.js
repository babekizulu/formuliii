/*
* @Desc: Testing file for Accounting Formulae
* @Author: Lwandle Babekizulu Dlamini
* @Date: 2022/10/13
*/
//libs
const AccountingFormulae = require('../libs/AccountingFormulae');
const {
    IncomeStatementFormulae
} = AccountingFormulae;

//Accounting Formulae Tests 

//income statement formulae tests
const {
    basicIncomeFormula, 
    earningsBITFormula, 
    grossProfitFormula,
    operatingExpensesFormula,
    earningsBTFormula,
    netIncomeFormula
} = new IncomeStatementFormulae();
describe('Income Statement Formulae Tests', () => {
    //basic income formula test 
    test('Basic Income Formula should return: 80.00', () => {
        expect(basicIncomeFormula(100, 20)).toBe(parseFloat(80).toFixed(2));
    });
    //earnings before interest & taxes formula test
    test('Earnings Before Interest & Taxes should return: 50.00', () => {
        expect(earningsBITFormula(200, 150)).toBe(parseFloat(50).toFixed(2));
    });
    //gross profit formula test
    test('Gross Profit should return: 300.00', () => {
        expect(grossProfitFormula(500, 200)).toBe(parseFloat(300).toFixed(2));
    });
    //operating expenses formula test
    test('Operating Expenses should return: 470.00', () => {
        expect(operatingExpensesFormula(120, 150, 200)).toBe(parseFloat(470).toFixed(2));
    });
    //earnings before taxes formula test
    test('Earnings Before Taxes should return: 800.00', () => {
        expect(earningsBTFormula(1000, 200)).toBe(parseFloat(800).toFixed(2));
    });
    //net income formula test
    test('Net Income should return: 640.00', () => {
        expect(netIncomeFormula(800, 160)).toBe(parseFloat(640).toFixed(2));
    });
});