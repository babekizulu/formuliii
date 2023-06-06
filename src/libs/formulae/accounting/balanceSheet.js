/*
@Author: Lwandle Babekizulu Dlamini
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
    BalanceSheet.prototype.basic = function (outstandingDebt, ownersEquity) {
        var t = outstandingDebt + ownersEquity;
        return t.toFixed(2);
    };
    //current assets
    /*
    @param: c - cash
    @param: a - accounts receivable
    @param: i - inventories
    @param: p - prepaid expenses
    */
    BalanceSheet.prototype.currentAssets = function (cash, accountsReceivable, inventories, prepaidExpenses) {
        var ca = cash + accountsReceivable + inventories + prepaidExpenses;
        return ca.toFixed(2);
    };
    //current debt
    /*
    @param: a - accounts payable
    @param: o - other payables
    @param: ae - accrued expenses
    @param: stn - short-term notes
    */
    BalanceSheet.prototype.currentDebt = function (accountsPayable, otherPayables, accruedExpenses, shortTermNotes) {
        var cd = accountsPayable + otherPayables + accruedExpenses + shortTermNotes;
        return cd.toFixed(2);
    };
    //debt capital 
    /*
    @param: cd - current debt
    @param: ltd - long-term debt
    */
    BalanceSheet.prototype.debtCapital = function (currentDebt, longTermDebt) {
        var dc = currentDebt + longTermDebt;
        return dc.toFixed(2);
    };
    //fixed assets
    /*
    @param: me - machinery & equipment
    @param: b - buildings
    @param: l - land
    */
    BalanceSheet.prototype.fixedAssets = function (machineryAndEquipment, buildings, land) {
        var fa = machineryAndEquipment + buildings + land;
        return fa.toFixed(2);
    };
    //long term debt
    /*
    @param: ltn - long-term notes
    @param: m - mortgages
    */
    BalanceSheet.prototype.longTermDebt = function (longTermNotes, mortgages) {
        var ltd = longTermNotes + mortgages;
        return ltd.toFixed(2);
    };
    //other assets
    /*
    @param: i - investments
    @param: p - patents
    */
    BalanceSheet.prototype.otherAssets = function (investments, patents) {
        var oa = investments + patents;
        return oa.toFixed(2);
    };
    //owners equity capital
    /*
    @param: onw - owners net-worth
    @param: pe - partnership equity
    @param: cse - common stock equity
    */
    BalanceSheet.prototype.ownersEquityCapital = function (ownersNetWorth, partnershipEquity, commonStockEquity) {
        var oec = ownersNetWorth + partnershipEquity + commonStockEquity;
        return oec.toFixed(2);
    };
    //total assets
    /*
    @param: c - current assets
    @param: f - fixed assets
    @param: o - other assets
    */
    BalanceSheet.prototype.totalAssets = function (currentAssets, fixedAssets, otherAssets) {
        var t = currentAssets + fixedAssets + otherAssets;
        return t.toFixed(2);
    };
    //total debt & equity
    /*
    @param: d - debt capital
    @param: oe - owners equity capital
    */
    BalanceSheet.prototype.totalDebtEquity = function (debtCapital, ownersEquity) {
        var t = debtCapital + ownersEquity;
        return t.toFixed(2);
    };
    return BalanceSheet;
}());
module.exports = BalanceSheet;
