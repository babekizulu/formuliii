/*
@Author: Lwandle Babekizulu Dlamini (https://github.com/babekizulu)
@Desc: A library of ratio formulae
@Date: 2023/01/22
*/
var Ratios = /** @class */ (function () {
    function Ratios() {
    }
    //current account to gdp ratio
    /*
    @param: ca - current account
    @param: gdp - gross domestic product
    */
    Ratios.prototype.currentAccountToGDP = function (ca, gdp) {
        var ratio = (ca / gdp) * 100;
        return ratio.toFixed(2);
    };
    //government debt to gdp ratio
    /*
    @param: gd - government debt
    @param: gdp - gross domestic product
    */
    Ratios.prototype.governmentDebtToGDP = function (gd, gdp) {
        var ratio = (gd / gdp) * 100;
        return ratio.toFixed(2);
    };
    return Ratios;
}());
module.exports = Ratios;
