/*
 * @Author: Lwandle Babekizulu Dlamini
 * @Desc: A library of economics depreciation formulae
 * @Date: 2022/02/07
 */
var depreciation = /** @class */ (function () {
    function depreciation() {
    }
    //straight-line depreciation formula
    depreciation.prototype.straightLine = function (cost, salvageValue, lifespan) {
        var d = (cost - salvageValue) / lifespan;
        return d.toFixed(2);
    };
    //double-declining balance depreciation formula
    depreciation.prototype.doubleDecliningBalance = function (lifespan, startingBookValue, salvageValue) {
        //solve for ddb rate
        var ddbRate = (1 / (lifespan * 2));
        ddbRate.toFixed(2);
        //solve for current year depreciation
        var cyd = (startingBookValue * ddbRate);
        cyd.toFixed(2);
        //solve for end book value
        var ebv = (startingBookValue - cyd);
        ebv.toFixed(2);
        //solve for final year depreciation
        var fyd = (ebv - salvageValue);
        //return fyd
        return fyd.toFixed(2);
    };
    //units of production depreciation formula
    depreciation.prototype.unitsOfProduction = function (costBasisOfAsset, salvageValue, estimatedTotalUnitsToBeProducedOverLifespan, actualUnitsProduced) {
        //solve for units of production rate
        var upRate = (costBasisOfAsset - salvageValue) /
            estimatedTotalUnitsToBeProducedOverLifespan;
        upRate.toFixed(2);
        var d = upRate * actualUnitsProduced;
        return d.toFixed(2);
    };
    //sum of years digits depreciation formula
    depreciation.prototype.sumOfYearsDigits = function (lifespan, cost, salvageValue) {
        if (lifespan === void 0) { lifespan = 0; }
        if (cost === void 0) { cost = 0; }
        if (salvageValue === void 0) { salvageValue = 0; }
        //solve for some of years
        // - Add the number of each year of the lifespan
        // e.g 5 years = 5 + 4 + 3 + 2 + 1, which equals 15
        var sumOfYears = 0;
        for (var i = 0; i < lifespan; i++) {
            sumOfYears += lifespan - i;
        }
        //solve for depreciable amount
        var depreciableAmount = cost - salvageValue;
        //solve for sum of years digits depreciation
        var syd = (lifespan / sumOfYears) * depreciableAmount;
        return syd.toFixed(2);
    };
    return depreciation;
}());
module.exports = depreciation;
