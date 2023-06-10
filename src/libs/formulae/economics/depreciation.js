/*
 * @Author: Lwandle Babekizulu Dlamini
 * @Desc: A library of economics depreciation formulae
 * @Date: 2022/02/07
 */

class depreciation {
  //straight-line depreciation formula
  straightLine(cost, salvageValue, lifespan) {
    const c = parseFloat(cost);
    const sv = parseFloat(salvageValue);
    const l = parseFloat(lifespan);
    const d = (c - sv) / l;
    return d.toFixed(2);
  }
  //double-declining balance depreciation formula
  doubleDecliningBalance(lifespan, startingBookValue, salvageValue) {
    const l = parseFloat(lifespan);
    const sbv = parseFloat(startingBookValue);
    const sv = parseFloat(salvageValue);
    //solve for ddb rate
    const ddbRate = 1 / (l * 2);
    ddbRate.toFixed(2);
    //solve for current year depreciation
    const cyd = sbv * ddbRate;
    cyd.toFixed(2);
    //solve for end book value
    const ebv = sbv - cyd;
    ebv.toFixed(2);
    //solve for final year depreciation
    const fyd = ebv - sv;
    //return fyd
    return fyd.toFixed(2);
  }
  //units of production depreciation formula
  unitsOfProduction(
    costBasisOfAsset,
    salvageValue,
    estimatedTotalUnitsToBeProducedOverLifespan,
    actualUnitsProduced,
  ) {
    const cba = parseFloat(costBasisOfAsset);
    const sv = parseFloat(salvageValue);
    const est = parseFloat(estimatedTotalUnitsToBeProducedOverLifespan);
    const aup = parseFloat(actualUnitsProduced);
    //solve for units of production rate
    const upRate = (cba - sv) / est;
    upRate.toFixed(2);
    const d = upRate * aup;
    return d.toFixed(2);
  }
  //sum of years digits depreciation formula
  sumOfYearsDigits(lifespan = 0, cost = 0, salvageValue = 0) {
    const l = parseFloat(lifespan);
    const c = parseFloat(cost);
    const sv = parseFloat(salvageValue);
    //solve for some of years
    // - Add the number of each year of the lifespan
    // e.g 5 years = 5 + 4 + 3 + 2 + 1, which equals 15
    let sumOfYears = 0;
    for (let i = 0; i < l; i++) {
      sumOfYears += l - i;
    }
    //solve for depreciable amount
    const depreciableAmount = c - sv;
    //solve for sum of years digits depreciation
    const syd = (l / sumOfYears) * depreciableAmount;
    return syd.toFixed(2);
  }
}
export default depreciation;
