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
   basic(od:number, oe:number) {
    const t = od + oe;
    return t.toFixed(2);
   }
    //current assets
    /*
    @param: c - cash
    @param: a - accounts receivable
    @param: i - inventories
    @param: p - prepaid expenses
    */
   currentAssets(c:number, a:number, i:number, p:number) {
    const ca = c + a + i + p;
    return ca.toFixed(2);
   }
    //current debt
    /*
    @param: a - accounts payable
    @param: o - other payables
    @param: ae - accrued expenses
    @param: stn - short-term notes
    */
   currentDebt(a:number, o:number, ae:number, stn:number) {
    const cd = a + o + ae + stn;
    return cd.toFixed(2);
   }
    //debt capital 
    /*
    @param: cd - current debt
    @param: ltd - long-term debt
    */
   debtCapital(cd:number, ltd:number) {
    const dc = cd + ltd;
    return dc.toFixed(2);
   }
    //fixed assets
    /*
    @param: me - machinery & equipment
    @param: b - buildings
    @param: l - land
    */
   fixedAssets(me:number, b:number, l:number) {
        const fa = me + b + l;
        return fa.toFixed(2);
   }
    //long term debt
    /*
    @param: ltn - long-term notes
    @param: m - mortgages
    */
   longTermDebt(ltn:number, m:number) {
    const ltd = ltn + m;
    return ltd.toFixed(2);
   }
    //other assets
    /*
    @param: i - investments
    @param: p - patents
    */
   otherAssets(i:number, p:number) {
    const oa = i + p;
    return oa.toFixed(2);
   }
    //owners equity capital
    /*
    @param: onw - owners net-worth
    @param: pe - partnership equity
    @param: cse - common stock equity
    */
   ownersEquityCapital(onw:number, pe:number, cse:number) {
    const oec = onw + pe + cse;
    return oec.toFixed(2);
   }
    //total assets
    /*
    @param: c - current assets
    @param: f - fixed assets
    @param: o - other assets
    */
   totalAssets(c:number, f:number, o:number) {
    const t = c + f + o;
    return t.toFixed(2);
   }
    //total debt & equity
    /*
    @param: d - debt capital
    @param: oe - owners equity capital
    */
   totalDebtEquity(d:number, oe:number) {
    const t = d + oe;
    return t.toFixed(2);
   }
}

module.exports = BalanceSheet;
