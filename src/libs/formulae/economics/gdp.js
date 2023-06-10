/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of GDP formulae
@Date: 2023/01/22
@TODO:
    - Consider measuring GDP values in Millions
*/
class gdp {
  //deflator
  /*
    @param: n - nominal gdp
    @param: r - real gdp
    */
  deflator(nominalGDP, realGDP) {
    const n = parseFloat(nominalGDP);
    const r = parseFloat(realGDP);
    const d = (n / r) * 100;
    return d.toFixed(2);
  }
  //expenditure approach
  /*
    @param: c - consumption
    @param: i - investment
    @param: g - government expenditure
    @param: nx - net exports
    */
  expenditureApproach(
    consumption,
    investment,
    governmentExpenditure,
    netExports,
  ) {
    const c = parseFloat(consumption);
    const i = parseFloat(investment);
    const g = parseFloat(governmentExpenditure);
    const nx = parseFloat(netExports);
    const solution = c + i + g + nx;

    return solution.toFixed(2);
  }
  //income approach
  /*
    @param: tni - total national income
    @param: st - sales taxes
    @param: d - depreciation
    @param: nffi - net foreign factor income
    */
  incomeApproach(
    totalNationalIncome,
    salesTaxes,
    depreciation,
    netForeignFactorIncome,
  ) {
    const tni = parseFloat(totalNationalIncome);
    const st = parseFloat(salesTaxes);
    const d = parseFloat(depreciation);
    const nffi = parseFloat(netForeignFactorIncome);
    const solution = parseFloat(tni + st + d + nffi);
    return solution.toFixed(2);
  }
  //net exports
  /*
    @param: e - value of exports
    @param: i - value of imports
    */
  netExports(valueOfExports, valueOfImports) {
    const e = parseFloat(valueOfExports);
    const i = parseFloat(valueOfImports);
    const nx = e - i;
    return nx.toFixed(2);
  }
  //real gdp
  /*
    @param: n - nominal gdp
    @param: d - deflator
    */
  realGDP(nominalGDP, deflator) {
    const n = parseFloat(nominalGDP);
    const d = parseFloat(deflator);
    const gdp = n / d;
    return gdp.toFixed(2);
  }
}

export default gdp;
