/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of ratio formulae
@Date: 2023/01/22
*/
class ratios {
  //current account to gdp ratio
  /*
    @param: ca - current account
    @param: gdp - gross domestic product
    */
  currentAccountToGDP(currentAccount, grossDomesticProduct) {
    const ca = parseFloat(currentAccount);
    const gdp = parseFloat(grossDomesticProduct);
    const ratio = parseFloat((ca / gdp) * 100);
    return ratio.toFixed(2);
  }
  //government debt to gdp ratio
  /*
    @param: gd - government debt
    @param: gdp - gross domestic product
    */
  governmentDebtToGDP(governmentDebt, grossDomesticProduct) {
    const gd = parseFloat(governmentDebt);
    const gdp = parseFloat(grossDomesticProduct);
    const ratio = parseFloat((gd / gdp) * 100);
    return ratio.toFixed(2);
  }
}

export default ratios;
