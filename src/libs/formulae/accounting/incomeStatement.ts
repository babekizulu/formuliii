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
   basic(sales:number, expenses:number) {
    const p = sales-expenses;
    return p.toFixed(2);
   }
    //earnings before income & taxes equation
    /*
    @param: g - gross profit
    @param: x - operating expenses
    */
   earningsBeforeIncomeAndTaxes(
    grossProfit:number, 
    operatingExpenses:number
    ) {
    const e = grossProfit - operatingExpenses;
    return e.toFixed(2);
   }
    //earnings before taxes equation
    /*
    @param: oi - operating income
    @param: ix - interest expense
    */
   earningsBeforeTaxes(operatingIncome:number, interestExpense:number) {
    const e = operatingIncome - interestExpense;
    return e.toFixed(2);
   }
    //gross profit equation
    /*
    @param: s - sales revenue
    @param: c - cost of production
    */
   grossProfit(salesRevenue:number, costOfProduction:number) {
    const p = salesRevenue - costOfProduction;
    return p.toFixed(2);
   }
    //net income equation
    /*
    @param: ebt - earnings before taxes
    @param: ct - corportate taxes
    */
   netIncome(earningsBeforeTaxes:number, corporateTaxes:number) {
    const i = earningsBeforeTaxes - corporateTaxes;
    return i.toFixed(2);
   }
    //operating expenses equation
    /*
    @param: m - marketing expense
    @param: d - distribution expense
    @param: a - administrative expense
    */
   operatingExpenses(
    marketingExpense:number, 
    distributionExpense:number, 
    administrativeExpense:number
    ) {
    const x = marketingExpense+ distributionExpense + administrativeExpense;
    return x.toFixed(2);
   }
}

module.exports = incomeStatement;