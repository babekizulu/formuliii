/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of balance sheet formulae
@Date: 2023/01/23
*/
var balanceSheet = /** @class */ (function () {
    function balanceSheet() {
    }
    //basic balance sheet
    /*
    @param: od - outstanding debt
    @param: oe - owners equity
    */
    balanceSheet.prototype.basic = function (outstandingDebt, ownersEquity) {
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
    balanceSheet.prototype.currentAssets = function (cash, accountsReceivable, inventories, prepaidExpenses) {
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
    balanceSheet.prototype.currentDebt = function (accountsPayable, otherPayables, accruedExpenses, shortTermNotes) {
        var cd = accountsPayable + otherPayables + accruedExpenses + shortTermNotes;
        return cd.toFixed(2);
    };
    //debt capital 
    /*
    @param: cd - current debt
    @param: ltd - long-term debt
    */
    balanceSheet.prototype.debtCapital = function (currentDebt, longTermDebt) {
        var dc = currentDebt + longTermDebt;
        return dc.toFixed(2);
    };
    //fixed assets
    /*
    @param: me - machinery & equipment
    @param: b - buildings
    @param: l - land
    */
    balanceSheet.prototype.fixedAssets = function (machineryAndEquipment, buildings, land) {
        var fa = machineryAndEquipment + buildings + land;
        return fa.toFixed(2);
    };
    //long term debt
    /*
    @param: ltn - long-term notes
    @param: m - mortgages
    */
    balanceSheet.prototype.longTermDebt = function (longTermNotes, mortgages) {
        var ltd = longTermNotes + mortgages;
        return ltd.toFixed(2);
    };
    //other assets
    /*
    @param: i - investments
    @param: p - patents
    */
    balanceSheet.prototype.otherAssets = function (investments, patents) {
        var oa = investments + patents;
        return oa.toFixed(2);
    };
    //owners equity capital
    /*
    @param: onw - owners net-worth
    @param: pe - partnership equity
    @param: cse - common stock equity
    */
    balanceSheet.prototype.ownersEquityCapital = function (ownersNetWorth, partnershipEquity, commonStockEquity) {
        var oec = ownersNetWorth + partnershipEquity + commonStockEquity;
        return oec.toFixed(2);
    };
    //total assets
    /*
    @param: c - current assetss
    @param: f - fixed assets
    @param: o - other assets
    */
    balanceSheet.prototype.totalAssets = function (currentAssets, fixedAssets, otherAssets) {
        var t = currentAssets + fixedAssets + otherAssets;
        return t.toFixed(2);
    };
    //total debt & equity
    /*
    @param: d - debt capital
    @param: oe - owners equity capital
    */
    balanceSheet.prototype.totalDebtEquity = function (debtCapital, ownersEquity) {
        var t = debtCapital + ownersEquity;
        return t.toFixed(2);
    };
    return balanceSheet;
}());
module.exports = balanceSheet;
