/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of balance sheet formulae
@Date: 2023/01/23
*/

class balanceSheet {
  //basic balance sheet
  /*
    @param: od - outstanding debt
    @param: oe - owners equity
    */
  basic(outstandingDebt, ownersEquity) {
    const od = parseFloat(outstandingDebt);
    const oe = parseFloat(ownersEquity);
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
  currentAssets(cash, accountsReceivable, inventories, prepaidExpenses) {
    const c = parseFloat(cash);
    const a = parseFloat(accountsReceivable);
    const i = parseFloat(inventories);
    const p = parseFloat(prepaidExpenses);
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
  currentDebt(accountsPayable, otherPayables, accruedExpenses, shortTermNotes) {
    const a = parseFloat(accountsPayable);
    const o = parseFloat(otherPayables);
    const ae = parseFloat(accruedExpenses);
    const stn = parseFloat(shortTermNotes);
    const cd = a + o + ae + stn;
    return cd.toFixed(2);
  }
  //debt capital
  /*
    @param: cd - current debt
    @param: ltd - long-term debt
    */
  debtCapital(currentDebt, longTermDebt) {
    const cd = parseFloat(currentDebt);
    const ltd = parseFloat(longTermDebt);
    const dc = cd + ltd;
    return dc.toFixed(2);
  }
  //fixed assets
  /*
    @param: me - machinery & equipment
    @param: b - buildings
    @param: l - land
    */
  fixedAssets(machineryAndEquipment, buildings, land) {
    const me = parseFloat(machineryAndEquipment);
    const b = parseFloat(buildings);
    const l = parseFloat(land);
    const fa = me + b + l;
    return fa.toFixed(2);
  }
  //long term debt
  /*
    @param: ltn - long-term notes
    @param: m - mortgages
    */
  longTermDebt(longTermNotes, mortgages) {
    const ltn = parseFloat(longTermNotes);
    const m = parseFloat(mortgages);
    const ltd = ltn + m;
    return ltd.toFixed(2);
  }
  //other assets
  /*
    @param: i - investments
    @param: p - patents
    */
  otherAssets(investments, patents) {
    const i = parseFloat(investments);
    const p = parseFloat(patents);
    const oa = i + p;
    return oa.toFixed(2);
  }
  //owners equity capital
  /*
    @param: onw - owners net-worth
    @param: pe - partnership equity
    @param: cse - common stock equity
    */
  ownersEquityCapital(ownersNetWorth, partnershipEquity, commonStockEquity) {
    const onw = parseFloat(ownersNetWorth);
    const pe = parseFloat(partnershipEquity);
    const cse = parseFloat(commonStockEquity);
    const oec = onw + pe + cse;
    return oec.toFixed(2);
  }
  //total assets
  /*
    @param: c - current assetss
    @param: f - fixed assets
    @param: o - other assets
    */
  totalAssets(currentAssets, fixedAssets, otherAssets) {
    const c = parseFloat(currentAssets);
    const f = parseFloat(fixedAssets);
    const o = parseFloat(otherAssets);
    const t = c + f + o;
    return t.toFixed(2);
  }
  //total debt & equity
  /*
    @param: d - debt capital
    @param: oe - owners equity capital
    */
  totalDebtEquity(debtCapital, ownersEquity) {
    const d = parseFloat(debtCapital);
    const oe = parseFloat(ownersEquity);
    const t = d + oe;
    return t.toFixed(2);
  }
}
export default balanceSheet;
