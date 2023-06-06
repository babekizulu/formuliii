/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of GDP formulae
@Date: 2023/01/22
@TODO:
    - Consider measuring GDP values in Millions
*/
var GDP = /** @class */ (function () {
    function GDP() {
    }
    //deflator
    /*
    @param: n - nominal gdp
    @param: r - real gdp
    */
    GDP.prototype.deflator = function (nominalGDP, realGDP) {
        var d = (nominalGDP / realGDP) * 100;
        return d.toFixed(2);
    };
    //expenditure approach
    /*
    @param: c - consumption
    @param: i - investment
    @param: g - government expenditure
    @param: nx - net exports
    */
    GDP.prototype.expenditureApproach = function (consumption, investment, governmentExpenditure, netExports) {
        var gdp = consumption + investment + governmentExpenditure + netExports;
        return gdp.toFixed(2);
    };
    //income approach
    /*
    @param: tni - total national income
    @param: st - sales taxes
    @param: d - depreciation
    @param: nffi - net foreign factor income
    */
    GDP.prototype.incomeApproach = function (totalNationalIncome, salesTaxes, depreciation, netForeignFactorIncome) {
        var gdp = totalNationalIncome + salesTaxes + depreciation + netForeignFactorIncome;
        return gdp.toFixed(2);
    };
    //net exports
    /*
    @param: e - value of exports
    @param: i - value of imports
    */
    GDP.prototype.netExports = function (valueOfExports, valueOfImports) {
        var nx = valueOfExports - valueOfImports;
        return nx.toFixed(2);
    };
    //real gdp
    /*
    @param: n - nominal gdp
    @param: d - deflator
    */
    GDP.prototype.realGDP = function (nominalGDP, deflator) {
        var gdp = nominalGDP / deflator;
        return gdp.toFixed(2);
    };
    return GDP;
}());
module.exports = GDP;
