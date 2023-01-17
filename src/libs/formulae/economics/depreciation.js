/*
 * @Author: Lwandle Babekizulu Dlamini
 * @Desc: A library of economics depreciation formulae
 * @Date: 2022/01/17
 */
var Depreciation = /** @class */ (function () {
    function Depreciation() {
    }
    //straight-line depreciation formula
    Depreciation.prototype.sl = function (cost, salvageValue, lifespan) {
        var d = (cost - salvageValue) / lifespan;
        return d.toFixed(2);
    };
    //double-declining balance depreciation formula
    Depreciation.prototype.ddb = function (lifespan, startingBookValue, salvageValue) {
        //solve for ddb rate
        var ddbRate = 1 / (lifespan * 2);
        //solve for current year depreciation
        var cyd = startingBookValue * ddbRate;
        //solve for end book value
        var ebv = startingBookValue - cyd;
        //set end book value to start book value of new period
        var sbv = ebv;
        //solve for final year depreciation
        var fyd = sbv - salvageValue;
        //return ddbRate, cyd, ebv, sbv & fyd
        return [
            ddbRate,
            cyd,
            ebv,
            sbv,
            fyd,
        ];
    };
    //units of production depreciation formula
    Depreciation.prototype.up = function (costBasisOfAsset, salvageValue, estimatedTotalUnitsToBeProducedOverLifespan, actualUnitsProduced) {
        //solve for units of production rate
        var upRate = (costBasisOfAsset - salvageValue) /
            estimatedTotalUnitsToBeProducedOverLifespan;
        var d = upRate * actualUnitsProduced;
        return d.toFixed(2);
    };
    //sum of years digits depreciation formula
    Depreciation.prototype.syd = function (lifespan, cost, salvageValue) {
        //solve for some of years
        // - Add the number of each year of the lifespan
        // e.g 5 years = 5 + 4 + 3 + 2 + 1, which equals 15
        var sumOfYears = 0;
        for (var i = 0; i < lifespan; i++) {
            sumOfYears += i;
        }
        //solve for depreciable amount
        var depreciableAmount = cost - salvageValue;
        //solve for sum of years digits depreciation
        var syd = (lifespan / sumOfYears) * depreciableAmount;
        return syd.toFixed(2);
    };
    return Depreciation;
}());
//methods: sl, ddb, up, syd
module.exports = Depreciation;
