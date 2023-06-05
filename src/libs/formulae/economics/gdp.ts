/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of GDP formulae
@Date: 2023/01/22
@TODO:
    - Consider measuring GDP values in Millions
*/
class GDP {
    //deflator
    /*
    @param: n - nominal gdp
    @param: r - real gdp
    */
   deflator(nominalGDP:number, realGDP:number) {
    const d = (nominalGDP/realGDP) * 100;
    return d.toFixed(2);
   }
    //expenditure approach
    /*
    @param: c - consumption
    @param: i - investment
    @param: g - government expenditure
    @param: nx - net exports
    */
   expenditureApproach(consumption:number, investment:number, governmentExpenditure:number, netExports:number) {
    const gdp = consumption + investment + governmentExpenditure + netExports;
    return gdp.toFixed(2);
   }
    //income approach
    /*
    @param: tni - total national income
    @param: st - sales taxes
    @param: d - depreciation
    @param: nffi - net foreign factor income
    */
   incomeApproach(totalNationalIncome:number, salesTaxes:number, depreciation:number, netForeignFactorIncome:number) {
    const gdp = totalNationalIncome + salesTaxes + depreciation + netForeignFactorIncome;
    return gdp.toFixed(2);
   }
    //net exports
    /*
    @param: e - value of exports
    @param: i - value of imports
    */
   netExports(valueOfExports:number, valueOfImports:number) {
    const nx = valueOfExports - valueOfImports;
    return nx.toFixed(2);
   }
    //real gdp
    /*
    @param: n - nominal gdp
    @param: d - deflator
    */
   realGDP(nominalGDP:number, deflator:number) {
    const gdp = nominalGDP/deflator;
    return gdp.toFixed(2);
   }
}

module.exports = GDP;