/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of interest formulae
@Date: 2023/01/22
*/
var Interest = /** @class */ (function () {
    function Interest() {
    }
    //compound interest
    /*
    @param: p - principal amount
    @param: r - rate of interest
    @param: n - n times compounded
    @param: t - time period
    */
    Interest.prototype.compound = function (principalAmount, rateOfInterest, numberOfTimesCompounded, timePeriod) {
        var i = principalAmount * Math.pow((1 + (rateOfInterest / 100) / numberOfTimesCompounded), (numberOfTimesCompounded * timePeriod));
        return i.toFixed(2);
    };
    //simple interest
    /*
    @param: r - rate of interest
    @param: p - principal amount
    @param: t - time period
    */
    Interest.prototype.simple = function (rateOfInterest, principalAmount, timePeriod) {
        var i = (principalAmount * rateOfInterest * timePeriod) / 100;
        return i.toFixed(2);
    };
    return Interest;
}());
module.exports = Interest;
