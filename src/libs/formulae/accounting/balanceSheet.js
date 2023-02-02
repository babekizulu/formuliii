/*
@Author: Lwandle Babekizulu Dlamini (https://github.com/babekizulu)
@Desc: A library of balance sheet formulae
@Date: 2023/01/23
*/
var BalanceSheet = /** @class */ (function () {
    function BalanceSheet() {
    }
    //basic balance sheet
    /*
    @param: od - outstanding debt
    @param: oe - owners equity
    */
    BalanceSheet.prototype.basic = function (od, oe) {
        var t = od + oe;
        return t.toFixed(2);
    };
    //current assets
    /*
    @param: c - cash
    @param: a - accounts receivable
    @param: i - inventories
    @param: p - prepaid expenses
    */
    BalanceSheet.prototype.currentAssets = function (c, a, i, p) {
        var ca = c + a + i + p;
        return ca.toFixed(2);
    };
    //current debt
    /*
    @param: a - accounts payable
    @param: o - other payables
    @param: ae - accrued expenses
    @param: stn - short-term notes
    */
    BalanceSheet.prototype.currentDebt = function (a, o, ae, stn) {
        var cd = a + o + ae + stn;
        return cd.toFixed(2);
    };
    //debt capital 
    /*
    @param: cd - current debt
    @param: ltd - long-term debt
    */
    BalanceSheet.prototype.debtCapital = function (cd, ltd) {
        var dc = cd + ltd;
        return dc.toFixed(2);
    };
    //fixed assets
    /*
    @param: me - machinery & equipment
    @param: b - buildings
    @param: l - land
    */
    BalanceSheet.prototype.fixedAssets = function (me, b, l) {
        var fa = me + b + l;
        return fa.toFixed(2);
    };
    //long term debt
    /*
    @param: ltn - long-term notes
    @param: m - mortgages
    */
    BalanceSheet.prototype.longTermDebt = function (ltn, m) {
        var ltd = ltn + m;
        return ltd.toFixed(2);
    };
    //other assets
    /*
    @param: i - investments
    @param: p - patents
    */
    BalanceSheet.prototype.otherAssets = function (i, p) {
        var oa = i + p;
        return oa.toFixed(2);
    };
    //owners equity capital
    /*
    @param: onw - owners net-worth
    @param: pe - partnership equity
    @param: cse - common stock equity
    */
    BalanceSheet.prototype.ownersEquityCapital = function (onw, pe, cse) {
        var oec = onw + pe + cse;
        return oec.toFixed(2);
    };
    //total assets
    /*
    @param: c - current assets
    @param: f - fixed assets
    @param: o - other assets
    */
    BalanceSheet.prototype.totalAssets = function (c, f, o) {
        var t = c + f + o;
        return t.toFixed(2);
    };
    //total debt & equity
    /*
    @param: d - debt capital
    @param: oe - owners equity capital
    */
    BalanceSheet.prototype.totalDebtEquity = function (d, oe) {
        var t = d + oe;
        return t.toFixed(2);
    };
    return BalanceSheet;
}());
module.exports = BalanceSheet;
