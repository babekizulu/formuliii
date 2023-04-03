/*
* @Desc: Testing file for Accounting Formulae
* @Author: Lwandle Babekizulu Dlamini
* @Date: 2022/10/13
*/
//libs
const AccountingFormulae = require('../libs/AccountingFormulae');
const {
    IncomeStatementFormulae,
    BalanceSheetFormulae,
    FirmCashFlowStatementFormulae,
    FinancingCashFlowStatementFormulae
} = AccountingFormulae;

//Accounting Formulae Tests 

const {
    basicIncomeFormula, 
    earningsBITFormula, 
    grossProfitFormula,
    operatingExpensesFormula,
    earningsBTFormula,
    netIncomeFormula,
} = new IncomeStatementFormulae();

//income statement formulae tests
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

//BALANCE SHEET FORMULAE
const {
    basicBalanceSheetFormula,
    totalAssetsFormula,
    currentAssetsFormula,
    fixedAssetsValueFormula,
    otherAssetsFormula,
    totalDebtAndEquityFormula,
    debtCapitalFormula,
    currentDebtFormula,
    longTermDebtFormula,
    ownersEquityCapitalFormula
} = new BalanceSheetFormulae();

//balance sheet formulae tests
describe('Balance Sheet Formulae Tests', () => {
    //basic balance sheet formula test
    test('Basic Balance Sheet should return: 2000.00', () => {
        expect(basicBalanceSheetFormula(500, 1500)).toBe(parseFloat(2000).toFixed(2));
    });

    //total assets formula test
    test('Total Assets should return: 1600.00', () => {
        expect(totalAssetsFormula(200, 1000, 400)).toBe(parseFloat(1600).toFixed(2));
    });

    //current assets formula test
    test('Current Assets should return: 6000.00', () => {
        expect(currentAssetsFormula(500, 2000, 1500, 2000)).toBe(parseFloat(6000).toFixed(2));
    });

    //fixed assets value formula test
    test('Fixed Assets should return: 32000.00', () => {
        expect(fixedAssetsValueFormula(2000, 10000, 20000)).toBe(parseFloat(32000).toFixed(2));
    });

    //other assets formula test
    test('Other Assets should return: 15000.00', () => {
        expect(otherAssetsFormula(5000, 10000)).toBe(parseFloat(15000).toFixed(2));
    });

    //total debt & equity formula test
    test('Total Debt & Equity should return: 15000.00', () => {
        expect(totalDebtAndEquityFormula(5000, 10000)).toBe(parseFloat(15000).toFixed(2));
    });

    //debt capital formula test
    test('Debt Capital should return: 5000.00', () => {
        expect(debtCapitalFormula(1000, 4000)).toBe(parseFloat(5000).toFixed(2));
    });

    //current debt formula test
    test('Current Debt should return: 17600.00', () => {
        expect(currentDebtFormula(5000, 1400, 1200, 10000)).toBe(parseFloat(17600).toFixed(2));
    });

    //long-term debt formula test
    test('Long-Term Debt should return: 120000.00', () => {
        expect(longTermDebtFormula(100000, 20000)).toBe(parseFloat(120000).toFixed(2));
    });

    //owners equity capital formula test
    test('Owners Equity Capital should return: 70.00', () => {
        expect(ownersEquityCapitalFormula(70, 0, 0)).toBe(parseFloat(70).toFixed(2));
    });
});

//firm cash flow formulae tests
const {
    cashFlowsFormula,
    ebitdaFormula,
    atcfoFormula,
    cashTaxesFormula,
    deltaNOWCFormula,
    deltaLTAFormula
} = new FirmCashFlowStatementFormulae()
describe('Firm Cash Flow Formulae Tests', () => {
    //cash flow formula test
    test('Cash Flow should return: 10.00', () => {
        expect(cashFlowsFormula(100, 20, 70)).toBe(parseFloat(10).toFixed(2));
    });

    //ebitda formula test
    test('EBITDA should return: 270.00', () => {
        expect(ebitdaFormula(200, 70)).toBe(parseFloat(270).toFixed(2));
    });

    //atcfo formula test
    test('ATCFO should return: 160.00', () => {
        expect(atcfoFormula(500, 340)).toBe(parseFloat(160).toFixed(2));
    });

    //cash taxes formula test
    test('Cash Taxes should return: 550.00', () => {
        expect(cashTaxesFormula(400, -150)).toBe(parseFloat(550).toFixed(2));
    });

    //delta NOWC formula test
    test('deltaNOWC should return: 520.00', () => {
        expect(deltaNOWCFormula(400, -120)).toBe(parseFloat(520).toFixed(2));
    });

    //delta LTA formula test
    test('deltaLTA should return: 1700', () => {
        expect(deltaLTAFormula(700, 1000)).toBe(parseFloat(1700).toFixed(2));
    });
});

//financing cash flow formulae tests
const {
    financingCashFlowsFormula
} = new FinancingCashFlowStatementFormulae();

describe('Financial Cash Flow Formulae Tests', () => {
    //financing cash flow formula test(
    test('Cash Flow should return: 450.00', () => {
        expect(financingCashFlowsFormula(250, -150, 50, 300)).toBe(parseFloat(450).toFixed(2))
    });
});
