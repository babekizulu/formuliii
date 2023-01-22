/*
@Author: Lwandle Babekizulu Dlamini (https://github.com/babekizulu)
@Desc: A library of interest formulae
@Date: 2023/01/22
@TODO:
- Compound Interest
- Simple Interest
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
    Interest.prototype.compound = function (p, r, n, t) {
        var i = p * Math.pow((1 + (r / 100) / n), (n * t));
        return i.toFixed(2);
    };
    //simple interest
    /*
    @param: r - rate of interest
    @param: p - principal amount
    @param: t - time period
    */
    Interest.prototype.simple = function (r, p, t) {
        var i = (p * r * t) / 100;
        return i.toFixed(2);
    };
    return Interest;
}());
module.exports = Interest;
