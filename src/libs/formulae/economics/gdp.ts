/*
@Author: Lwandle Babekizulu Dlamini (https://github.com/babekizulu)
@Desc: A library of GDP formulae
@Date: 2023/01/22
*/
class GDP {
    //deflator
    /*
    @param: n - nominal gdp
    @param: r - real gdp
    */
   deflator(n:number, r:number) {
    const d = (n/r) * 100;
    return d.toFixed(2);
   }
    //expenditure approach
    /*
    @param: c - consumption
    @param: i - investment
    @param: g - government expenditure
    @param: nx - net exports
    */
   expenditureApproach(c:number, i:number, g:number, nx:number) {
    const gdp = c + i + g + nx;
    return gdp.toFixed(2);
   }
    //income approach
    /*
    @param: tni - total national income
    @param: st - sales taxes
    @param: d - depreciation
    @param: nffi - net foreign factor income
    */
   incomeApproach(tni:number, st:number, d:number, nffi:number) {
    const gdp = tni + st + d + nffi;
    return gdp.toFixed(2);
   }
    //net exports
    /*
    @param: e - value of exports
    @param: i - value of imports
    */
   netExports(e:number, i:number) {
    const nx = e - i;
    return nx.toFixed(2);
   }
    //real gdp
    /*
    @param: n - nominal gdp
    @param: d - deflator
    */
   realGDP(n:number, d:number) {
    const gdp = n/d;
    return gdp.toFixed(2);
   }
}

module.exports = GDP;