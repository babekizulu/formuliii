/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of balance sheet formulae
@Date: 2023/01/23
*/

class BalanceSheet {
    //basic balance sheet
    /*
    @param: od - outstanding debt
    @param: oe - owners equity
    */
   basic(outstandingDebt:number, ownersEquity:number) {
    const t = outstandingDebt + ownersEquity;
    return t.toFixed(2);
   }
    //current assets
    /*
    @param: c - cash
    @param: a - accounts receivable
    @param: i - inventories
    @param: p - prepaid expenses
    */
   currentAssets(
     cash:number, 
     accountsReceivable:number, 
     inventories:number, 
     prepaidExpenses:number) {
    const ca = cash + accountsReceivable + inventories + prepaidExpenses;
    return ca.toFixed(2);
   }
    //current debt
    /*
    @param: a - accounts payable
    @param: o - other payables
    @param: ae - accrued expenses
    @param: stn - short-term notes
    */
   currentDebt(
     accountsPayable:number, 
     otherPayables:number, 
     accruedExpenses:number, 
     shortTermNotes:number) {
    const cd = accountsPayable + otherPayables + accruedExpenses + shortTermNotes;
    return cd.toFixed(2);
   }
    //debt capital 
    /*
    @param: cd - current debt
    @param: ltd - long-term debt
    */
   debtCapital(currentDebt:number, longTermDebt:number) {
    const dc = currentDebt + longTermDebt;
    return dc.toFixed(2);
   }
    //fixed assets
    /*
    @param: me - machinery & equipment
    @param: b - buildings
    @param: l - land
    */
   fixedAssets(machineryAndEquipment:number, buildings:number, land:number) {
        const fa = machineryAndEquipment + buildings + land;
        return fa.toFixed(2);
   }
    //long term debt
    /*
    @param: ltn - long-term notes
    @param: m - mortgages
    */
   longTermDebt(longTermNotes:number, mortgages:number) {
    const ltd = longTermNotes + mortgages;
    return ltd.toFixed(2);
   }
    //other assets
    /*
    @param: i - investments
    @param: p - patents
    */
   otherAssets(investments:number, patents:number) {
    const oa = investments + patents;
    return oa.toFixed(2);
   }
    //owners equity capital
    /*
    @param: onw - owners net-worth
    @param: pe - partnership equity
    @param: cse - common stock equity
    */
   ownersEquityCapital(
     ownersNetWorth:number, 
     partnershipEquity:number, 
     commonStockEquity:number) {
    const oec = ownersNetWorth + partnershipEquity + commonStockEquity;
    return oec.toFixed(2);
   }
    //total assets
    /*
    @param: c - current assets
    @param: f - fixed assets
    @param: o - other assets
    */
   totalAssets(
     currentAssets:number, 
     fixedAssets:number, 
     otherAssets:number) {
    const t = currentAssets + fixedAssets + otherAssets;
    return t.toFixed(2);
   }
    //total debt & equity
    /*
    @param: d - debt capital
    @param: oe - owners equity capital
    */
   totalDebtEquity(debtCapital:number, ownersEquity:number) {
    const t = debtCapital + ownersEquity;
    return t.toFixed(2);
   }
}

module.exports = BalanceSheet;
