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
   currentAccountToGDP(currentAccount:number, grossDomesticProduct:number) {
    const ratio = (currentAccount/grossDomesticProduct) * 100;
    return ratio.toFixed(2);
   }
    //government debt to gdp ratio
    /*
    @param: gd - government debt
    @param: gdp - gross domestic product
    */
   governmentDebtToGDP(governmentDebt:number, grossDomesticProduct:number) {
    const ratio = (governmentDebt/grossDomesticProduct) * 100;
    return ratio.toFixed(2);
   }
}

module.exports = Ratios;