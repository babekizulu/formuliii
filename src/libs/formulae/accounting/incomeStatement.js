/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of income statement formulae
@Date: 2023/01/23
*/
var incomeStatement = /** @class */ (function () {
    function incomeStatement() {
    }
    //basic income equation
    /*
    @param: s - sales
    @param: x - expenses
    */
    incomeStatement.prototype.basic = function (sales, expenses) {
        var p = sales - expenses;
        return p.toFixed(2);
    };
    //earnings before income & taxes equation
    /*
    @param: g - gross profit
    @param: x - operating expenses
    */
    incomeStatement.prototype.earningsBeforeIncomeAndTaxes = function (grossProfit, operatingExpenses) {
        var e = grossProfit - operatingExpenses;
        return e.toFixed(2);
    };
    //earnings before taxes equation
    /*
    @param: oi - operating income
    @param: ix - interest expense
    */
    incomeStatement.prototype.earningsBeforeTaxes = function (operatingIncome, interestExpense) {
        var e = operatingIncome - interestExpense;
        return e.toFixed(2);
    };
    //gross profit equation
    /*
    @param: s - sales revenue
    @param: c - cost of production
    */
    incomeStatement.prototype.grossProfit = function (salesRevenue, costOfProduction) {
        var p = salesRevenue - costOfProduction;
        return p.toFixed(2);
    };
    //net income equation
    /*
    @param: ebt - earnings before taxes
    @param: ct - corportate taxes
    */
    incomeStatement.prototype.netIncome = function (earningsBeforeTaxes, corporateTaxes) {
        var i = earningsBeforeTaxes - corporateTaxes;
        return i.toFixed(2);
    };
    //operating expenses equation
    /*
    @param: m - marketing expense
    @param: d - distribution expense
    @param: a - administrative expense
    */
    incomeStatement.prototype.operatingExpenses = function (marketingExpense, distributionExpense, administrativeExpense) {
        var x = marketingExpense + distributionExpense + administrativeExpense;
        return x.toFixed(2);
    };
    return incomeStatement;
}());
module.exports = incomeStatement;
