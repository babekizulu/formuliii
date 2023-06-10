/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of income statement formulae
@Date: 2023/01/23
*/

class incomeStatement {
  //basic income equation
  /*
    @param: s - sales
    @param: x - expenses
    */
  basic(sales, expenses) {
    const s = parseFloat(sales);
    const x = parseFloat(expenses);
    const p = s - x;
    return p.toFixed(2);
  }
  //earnings before income & taxes equation
  /*
    @param: g - gross profit
    @param: x - operating expenses
    */
  earningsBeforeIncomeAndTaxes(grossProfit, operatingExpenses) {
    const g = parseFloat(grossProfit);
    const x = parseFloat(operatingExpenses);
    const e = g - x;
    return e.toFixed(2);
  }
  //earnings before taxes equation
  /*
    @param: oi - operating income
    @param: ix - interest expense
    */
  earningsBeforeTaxes(operatingIncome, interestExpense) {
    const oi = parseFloat(operatingIncome);
    const ie = parseFloat(interestExpense);
    const e = oi - ie;
    return e.toFixed(2);
  }
  //gross profit equation
  /*
    @param: s - sales revenue
    @param: c - cost of production
    */
  grossProfit(salesRevenue, costOfProduction) {
    const s = parseFloat(salesRevenue);
    const c = parseFloat(costOfProduction);
    const p = s - c;
    return p.toFixed(2);
  }
  //net income equation
  /*
    @param: ebt - earnings before taxes
    @param: ct - corportate taxes
    */
  netIncome(earningsBeforeTaxes, corporateTaxes) {
    const ebt = parseFloat(earningsBeforeTaxes);
    const ct = parseFloat(corporateTaxes);
    const i = ebt - ct;
    return i.toFixed(2);
  }
  //operating expenses equation
  /*
    @param: m - marketing expense
    @param: d - distribution expense
    @param: a - administrative expense
    */
  operatingExpenses(
    marketingExpense,
    distributionExpense,
    administrativeExpense,
  ) {
    const m = parseFloat(marketingExpense);
    const d = parseFloat(distributionExpense);
    const a = parseFloat(administrativeExpense);
    const x = m + d + a;
    return x.toFixed(2);
  }
}

export default incomeStatement;
