/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: A library of accounting formulae
* @Date: 2022/10/22
*/
//Income Statement Formulae
class IncomeStatementFormulae {
    //Basic Income
    basicIncomeFormula(sales, expenses) {
        const s = parseFloat(sales);
        const x = parseFloat(expenses);
        //solve for profit
        const p = s -x;
        return p.toFixed(2);
    };

    //Earnings Before Income & Taxes
    earningsBITFormula(grossProfit, operatingExpenses) {
        const g = parseFloat(grossProfit);
        const ox = parseFloat(operatingExpenses);
        //solve for earnings
        const e = g -ox;
        return e.toFixed(2);
    };

    //Gross Profit
    grossProfitFormula(salesRevenue, CostOfProduction) {
        const s = parseFloat(salesRevenue);
        const c = parseFloat(CostOfProduction);
        //solve for gross profit
        const g = s - c;
        return g.toFixed(2);
    };

    //Operating Expenses
    operatingExpensesFormula(marketingExpense, distributionExpense, administrativeExpense) {
        const m = parseFloat(marketingExpense);
        const d = parseFloat(distributionExpense);
        const a = parseFloat(administrativeExpense);
        //solve for operating expenses
        const ox = m + d + a;
        return ox.toFixed(2);
    };

    //Earnings Before Taxes
    earningsBTFormula(operatingIncome, interestExpense) {
        const i = parseFloat(operatingIncome);
        const ix = parseFloat(interestExpense);
        //solve for earnings
        const e = i - ix;
        return e.toFixed(2);
    };

    //Net Income
    netIncomeFormula(earningsBeforeTaxes, corporateTaxes) {
        const e = parseFloat(earningsBeforeTaxes);
        const t = parseFloat(corporateTaxes);
        //solve for net income
        const ni = e - t;
        return ni.toFixed(2);
    };
};

module.exports = {
    IncomeStatementFormulae
};
