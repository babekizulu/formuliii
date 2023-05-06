/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of ratio formulae
@Date: 2023/01/22
*/
class Ratios {
    //current account to gdp ratio
    /*
    @param: ca - current account
    @param: gdp - gross domestic product
    */
   currentAccountToGDP(ca:number, gdp:number) {
    const ratio = (ca/gdp) * 100;
    return ratio.toFixed(2);
   }
    //government debt to gdp ratio
    /*
    @param: gd - government debt
    @param: gdp - gross domestic product
    */
   governmentDebtToGDP(gd:number, gdp:number) {
    const ratio = (gd/gdp) * 100;
    return ratio.toFixed(2);
   }
}

module.exports = Ratios;