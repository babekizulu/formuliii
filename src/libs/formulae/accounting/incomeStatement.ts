/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of income statement formulae
@Date: 2023/01/23
*/

class IncomeStatement {
    //basic income equation
    /*
    @param: s - sales
    @param: x - expenses
    */
   basic(s:number, x:number) {
    const p = s-x;
    return p.toFixed(2);
   }
    //earnings before income & taxes equation
    /*
    @param: g - gross profit
    @param: x - operating expenses
    */
   earningsBeforeIncomeAndTaxes(g:number, x:number) {
    const e = g - x;
    return e.toFixed(2);
   }
    //earnings before taxes equation
    /*
    @param: oi - operating income
    @param: ix - interest expense
    */
   earningsBeforeTaxes(oi:number, ix:number) {
    const e = oi - ix;
    return e.toFixed(2);
   }
    //gross profit equation
    /*
    @param: s - sales revenue
    @param: c - cost of production
    */
   grossProfit(s:number, c:number) {
    const p = s - c;
    return p.toFixed(2);
   }
    //net income equation
    /*
    @param: ebt - earnings before taxes
    @param: ct - corportate taxes
    */
   netIncome(ebt:number, ct:number) {
    const i = ebt - ct;
    return i.toFixed(2);
   }
    //operating expenses equation
    /*
    @param: m - marketing expense
    @param: d - distributive expense
    @param: a - administrative expense
    */
   operatingExpenses(m:number, d:number, a:number) {
    const x = m + d + a;
    return x.toFixed(2);
   }
}

module.exports = IncomeStatement;