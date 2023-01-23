/*
@Author: Lwandle Babekizulu Dlamini (https://github.com/babekizulu)
@Desc: A library of income statement formulae
@Date: 2023/01/23
*/
var IncomeStatement = /** @class */ (function () {
    function IncomeStatement() {
    }
    //basic income equation
    /*
    @param: s - sales
    @param: x - expenses
    */
    IncomeStatement.prototype.basic = function (s, x) {
        var p = s - x;
        return p.toFixed(2);
    };
    //earnings before income & taxes equation
    /*
    @param: g - gross profit
    @param: x - operating expenses
    */
    IncomeStatement.prototype.earningsBeforeIncomeAndTaxes = function (g, x) {
        var e = g - x;
        return e.toFixed(2);
    };
    //earnings before taxes equation
    /*
    @param: oi - operating income
    @param: ix - interest expense
    */
    IncomeStatement.prototype.earningsBeforeTaxes = function (oi, ix) {
        var e = oi - ix;
        return e.toFixed(2);
    };
    //gross profit equation
    /*
    @param: s - sales revenue
    @param: c - cost of production
    */
    IncomeStatement.prototype.grossProfit = function (s, c) {
        var p = s - c;
        return p.toFixed(2);
    };
    //net income equation
    /*
    @param: ebt - earnings before taxes
    @param: ct - corportate taxes
    */
    IncomeStatement.prototype.netIncome = function (ebt, ct) {
        var i = ebt - ct;
        return i.toFixed(2);
    };
    //operating expenses equation
    /*
    @param: m - marketing expense
    @param: d - distributive expense
    @param: a - administrative expense
    */
    IncomeStatement.prototype.operatingExpenses = function (m, d, a) {
        var x = m + d + a;
        return x.toFixed(2);
    };
    return IncomeStatement;
}());
module.exports = IncomeStatement;
