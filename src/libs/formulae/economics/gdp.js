/*
@Author: Lwandle Babekizulu Dlamini (https://github.com/babekizulu)
@Desc: A library of GDP formulae
@Date: 2023/01/22
*/
var GDP = /** @class */ (function () {
    function GDP() {
    }
    //deflator
    /*
    @param: n - nominal gdp
    @param: r - real gdp
    */
    GDP.prototype.deflator = function (n, r) {
        var d = (n / r) * 100;
        return d.toFixed(2);
    };
    //expenditure approach
    /*
    @param: c - consumption
    @param: i - investment
    @param: g - government expenditure
    @param: nx - net exports
    */
    GDP.prototype.expenditureApproach = function (c, i, g, nx) {
        var gdp = c + i + g + nx;
        return gdp.toFixed(2);
    };
    //income approach
    /*
    @param: tni - total national income
    @param: st - sales taxes
    @param: d - depreciation
    @param: nffi - net foreign factor income
    */
    GDP.prototype.incomeApproach = function (tni, st, d, nffi) {
        var gdp = tni + st + d + nffi;
        return gdp.toFixed(2);
    };
    //net exports
    /*
    @param: e - value of exports
    @param: i - value of imports
    */
    GDP.prototype.netExports = function (e, i) {
        var nx = e - i;
        return nx.toFixed(2);
    };
    //real gdp
    /*
    @param: n - nominal gdp
    @param: d - deflator
    */
    GDP.prototype.realGDP = function (n, d) {
        var gdp = n / d;
        return gdp.toFixed(2);
    };
    return GDP;
}());
module.exports = GDP;
